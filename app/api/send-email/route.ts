import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fetch from "node-fetch";

export const runtime = "nodejs";

type PageKind = "support" | "sales";

interface Payload {
  name?: string;
  email?: string;
  message?: string;
  pageKind?: PageKind;
  address?: string;
  addressStreet?: string;
  addressUnit?: string;
  addressCity?: string;
  addressState?: string;
  addressPostalCode?: string;
  accountNumber?: string;
  hcaptchaToken?: string;
  hpWebsite?: string;
  formStartedAt?: number;
}

function resolveRecipient(pageKind: PageKind | undefined): string {
  if (pageKind === "support") {
    return process.env.SUPPORT_EMAIL || "support@sunvalleybroadband";
  }
  return process.env.SALES_EMAIL || "sales@sunvalleybroadband.com";
}

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      message,
      pageKind,
      address,
      addressStreet,
      addressUnit,
      addressCity,
      addressState,
      addressPostalCode,
      accountNumber,
      hcaptchaToken,
      hpWebsite,
      formStartedAt,
    }: Payload = await req.json();
    console.log("[email] POST /api/send-email - received payload", {
      pageKind,
      namePresent: Boolean(name),
      emailPresent: Boolean(email),
      messageLength: message?.length ?? 0,
      addressPresent: Boolean(address),
      hasStructuredAddress: Boolean(
        addressStreet || addressCity || addressState || addressPostalCode
      ),
      hasAccountNumber: Boolean(accountNumber),
    });

    // Basic required fields
    if (!name || !email || !message) {
      console.warn("[email] missing required fields", {
        namePresent: Boolean(name),
        emailPresent: Boolean(email),
        messagePresent: Boolean(message),
      });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Timing check (require at least 3s between render and submit, max 30m)
    const nowMs = Date.now();
    const startedMs = typeof formStartedAt === "number" ? formStartedAt : 0;
    if (!startedMs || nowMs - startedMs < 3000 || nowMs - startedMs > 30 * 60 * 1000) {
      console.warn("[email] suspicious timing", { nowMs, startedMs, delta: nowMs - startedMs });
      return NextResponse.json({ error: "Suspicious submission timing" }, { status: 400 });
    }

    // hCaptcha verification (server-side)
    const hcaptchaSecret = process.env.HCAPTCHA_SECRET;
    if (!hcaptchaSecret) {
      console.error("[email] HCAPTCHA_SECRET not set");
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }
    if (!hcaptchaToken) {
      return NextResponse.json({ error: "Captcha is required" }, { status: 400 });
    }
    const clientIp = getClientIp(req);
    const hcBody = new URLSearchParams({
      secret: hcaptchaSecret,
      response: hcaptchaToken,
      remoteip: clientIp,
    });
    const hcRes = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: hcBody.toString(),
    });
    const hcJson = (await hcRes.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!hcJson?.success) {
      console.warn("[email] hcaptcha failed", { errors: hcJson?.["error-codes"] });
      return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
    }

    // Honeypot note (do not block if captcha succeeded; log for visibility)
    if (hpWebsite && hpWebsite.trim().length > 0) {
      console.warn("[email] honeypot filled but captcha succeeded; allowing", { clientIp, hpWebsiteLen: hpWebsite.length });
    }

    // Rate limit by IP
    if (!allowRequestForIp(clientIp)) {
      console.warn("[email] rate limited", { clientIp });
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    // Require address for sales inquiries
    if ((pageKind ?? "sales") === "sales") {
      const hasSingleAddress = Boolean(address && address.trim().length > 0);
      const hasStructured = Boolean(
        (addressStreet && addressStreet.trim()) &&
        (addressCity && addressCity.trim()) &&
        (addressState && addressState.trim()) &&
        (addressPostalCode && addressPostalCode.trim())
      );
      if (!hasSingleAddress && !hasStructured) {
        console.warn("[email] sales requires address (single or structured)", {
          hasSingleAddress,
          hasStructured,
        });
        return NextResponse.json(
          { error: "Address is required for sales inquiries" },
          { status: 400 }
        );
      }
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpSecure = Boolean(process.env.SMTP_SECURE === "true");
    const smtpUser = process.env.SMTP_USER;
    const hasSmtpPass = Boolean(process.env.SMTP_PASS);
    const obfuscate = (v?: string) => (v ? v.replace(/.(?=.{3})/g, "*") : v);

    console.log("[email] SMTP config", {
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      user: obfuscate(smtpUser),
      hasPass: hasSmtpPass,
    });

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = resolveRecipient(pageKind);
    const from = process.env.EMAIL_FROM || "support@sunvalleybroadband.com";
    const subject = `[SVB ${pageKind === "support" ? "Support" : "Sales"}] Message from ${name}`;

    if (!to || !to.includes("@")) {
      console.warn("[email] resolved recipient looks invalid", { to });
    }

    console.log("[email] sending", {
      to,
      from,
      replyTo: email,
      subject,
      pageKind,
    });

    const info = await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text: buildEmailText({
        name: name!,
        email: email!,
        message: message!,
        pageKind: pageKind ?? "sales",
        address,
        addressStreet,
        addressUnit,
        addressCity,
        addressState,
        addressPostalCode,
        accountNumber,
      }),
    });

    console.log("[email] sent", {
      messageId: (info as any)?.messageId,
      accepted: (info as any)?.accepted,
      rejected: (info as any)?.rejected,
      response: (info as any)?.response,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[email] send failed", {
      message: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
    });
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

function buildEmailText(payload: Required<Pick<Payload, "name" | "email" | "message">> & {
  pageKind: PageKind;
  address?: string;
  addressStreet?: string;
  addressUnit?: string;
  addressCity?: string;
  addressState?: string;
  addressPostalCode?: string;
  accountNumber?: string;
}): string {
  const isSales = payload.pageKind === "sales";
  const lines: string[] = [];
  const header = `Sun Valley Broadband - ${isSales ? "Sales" : "Support"} Inquiry`;
  lines.push(header);
  lines.push("=".repeat(header.length));
  lines.push(`From: ${payload.name} <${payload.email}>`);
  if (payload.accountNumber && payload.accountNumber.trim()) {
    lines.push(`Account #: ${payload.accountNumber.trim()}`);
  }
  if (isSales) {
    const hasStructured = Boolean(
      (payload.addressStreet && payload.addressStreet.trim()) ||
        (payload.addressCity && payload.addressCity.trim()) ||
        (payload.addressState && payload.addressState.trim()) ||
        (payload.addressPostalCode && payload.addressPostalCode.trim())
    );
    if (hasStructured) {
      const line1 = payload.addressStreet ? payload.addressStreet.trim() : "";
      const line1WithUnit = [line1, payload.addressUnit?.trim()].filter(Boolean).join(" ");
      const line2Parts = [payload.addressCity?.trim(), payload.addressState?.trim(), payload.addressPostalCode?.trim()].filter(Boolean);
      const line2 = line2Parts.length ? `${line2Parts[0]}${line2Parts[1] ? ", " + line2Parts[1] : ""}${line2Parts[2] ? " " + line2Parts[2] : ""}` : "";
      lines.push("Address:");
      if (line1WithUnit) lines.push(`  ${line1WithUnit}`);
      if (line2) lines.push(`  ${line2}`);
    } else if (payload.address && payload.address.trim()) {
      lines.push(`Address: ${payload.address.trim()}`);
    }
  }
  lines.push("");
  lines.push("Message:");
  lines.push("----");
  lines.push(payload.message);
  lines.push("----");
  return lines.join("\n");
}

// Simple in-memory rate limiter per IP
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_MAX_REQUESTS = 8; // max per window
const ipToRate: Map<string, { count: number; windowStart: number }> = new Map();

function allowRequestForIp(ip: string): boolean {
  const now = Date.now();
  const record = ipToRate.get(ip);
  if (!record) {
    ipToRate.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (now - record.windowStart > RATE_WINDOW_MS) {
    ipToRate.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (record.count >= RATE_MAX_REQUESTS) {
    return false;
  }
  record.count += 1;
  return true;
}

function getClientIp(req: NextRequest): string {
  const xfwd = req.headers.get("x-forwarded-for");
  if (xfwd) {
    const first = xfwd.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  const cfIp = req.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp;
  return "unknown";
}



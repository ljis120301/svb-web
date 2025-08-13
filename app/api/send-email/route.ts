import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type PageKind = "support" | "sales";

interface Payload {
  name?: string;
  email?: string;
  message?: string;
  pageKind?: PageKind;
  address?: string;
}

function resolveRecipient(pageKind: PageKind | undefined): string {
  if (pageKind === "support") {
    return process.env.SUPPORT_EMAIL || "support@sunvalleybroadband";
  }
  return process.env.SALES_EMAIL || "sales@sunvalleybroadband.com";
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, pageKind, address }: Payload = await req.json();
    console.log("[email] POST /api/send-email - received payload", {
      pageKind,
      namePresent: Boolean(name),
      emailPresent: Boolean(email),
      messageLength: message?.length ?? 0,
      addressPresent: Boolean(address),
    });

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

    // Require address for sales inquiries
    if ((pageKind ?? "sales") === "sales" && !address) {
      console.warn("[email] sales requires address", {
        pageKind,
        addressPresent: Boolean(address),
      });
      return NextResponse.json(
        { error: "Address is required for sales inquiries" },
        { status: 400 }
      );
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
      text: buildEmailText({ name: name!, email: email!, message: message!, pageKind: pageKind ?? "sales", address }),
      html: buildEmailHtml({ name: name!, email: email!, message: message!, pageKind: pageKind ?? "sales", address }),
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

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailText(payload: Required<Pick<Payload, "name" | "email" | "message">> & { pageKind: PageKind; address?: string }): string {
  const lines: string[] = [];
  lines.push(`Type: ${payload.pageKind === "support" ? "Support" : "Sales"}`);
  lines.push(`From: ${payload.name} <${payload.email}>`);
  if (payload.pageKind === "sales" && payload.address) {
    lines.push(`Address: ${payload.address}`);
  }
  lines.push("");
  lines.push("Message:");
  lines.push(payload.message);
  return lines.join("\n");
}

function buildEmailHtml(payload: Required<Pick<Payload, "name" | "email" | "message">> & { pageKind: PageKind; address?: string }): string {
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br/>");
  const safeAddress = payload.address ? escapeHtml(payload.address) : undefined;

  const rows: string[] = [];
  rows.push(
    `<tr><td style="padding:8px 12px;font-weight:600;width:140px;background:#f6f7f9;border-bottom:1px solid #e5e7eb;">Type</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${payload.pageKind === "support" ? "Support" : "Sales"}</td></tr>`
  );
  rows.push(
    `<tr><td style="padding:8px 12px;font-weight:600;width:140px;background:#f6f7f9;border-bottom:1px solid #e5e7eb;">From</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${safeName} &lt;${safeEmail}&gt;</td></tr>`
  );
  if (payload.pageKind === "sales" && safeAddress) {
    rows.push(
      `<tr><td style="padding:8px 12px;font-weight:600;width:140px;background:#f6f7f9;border-bottom:1px solid #e5e7eb;">Address</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${safeAddress}</td></tr>`
    );
  }

  return `
  <div style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#111827;">
    <div style="padding:16px 0;">
      <h2 style="margin:0 0 4px 0;font-size:18px;">Sun Valley Broadband</h2>
      <p style="margin:0;color:#6b7280;">New ${payload.pageKind === "support" ? "Support" : "Sales"} Message</p>
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <tbody>
        ${rows.join("")}
        <tr>
          <td style="padding:12px 12px 0 12px;font-weight:600;width:140px;background:#f6f7f9;vertical-align:top;">Message</td>
          <td style="padding:12px 12px 12px 12px;white-space:pre-wrap;">${safeMessage}</td>
        </tr>
      </tbody>
    </table>
  </div>`;
}



import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type PageKind = "support" | "sales";

interface Payload {
  name?: string;
  email?: string;
  message?: string;
  pageKind?: PageKind;
}

function resolveRecipient(pageKind: PageKind | undefined): string {
  if (pageKind === "support") {
    return process.env.SUPPORT_EMAIL || "support@sunvalleybroadband";
  }
  return process.env.SALES_EMAIL || "sales@sunvalleybroadband.com";
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, pageKind }: Payload = await req.json();
    console.log("[email] POST /api/send-email - received payload", {
      pageKind,
      namePresent: Boolean(name),
      emailPresent: Boolean(email),
      messageLength: message?.length ?? 0,
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
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Page:</strong> ${pageKind}</p><p>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
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



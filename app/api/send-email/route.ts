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

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE === "true"),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = resolveRecipient(pageKind);
    const from = process.env.EMAIL_FROM || "no-reply@sunvalleybroadband.com";

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[SVB ${pageKind === "support" ? "Support" : "Sales"}] Message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Page:</strong> ${pageKind}</p><p>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}



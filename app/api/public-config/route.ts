import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export const runtime = "nodejs";

export async function GET() {
  // Only expose whitelisted public values
  return NextResponse.json({
    hcaptchaSiteKey: env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || null,
  });
}



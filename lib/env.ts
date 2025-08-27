// Centralized environment loader with Docker Swarm secrets fallback.
// It reads process.env first, and if missing, attempts to read from
// /run/secrets/<VAR_NAME> which is where Docker Swarm mounts secrets by default.

import fs from "fs";

function readSecretFile(secretName: string): string | undefined {
  try {
    const path = `/run/secrets/${secretName}`;
    if (fs.existsSync(path)) {
      const raw = fs.readFileSync(path, "utf8");
      return raw.trim();
    }
  } catch {
    // ignore
  }
  return undefined;
}

function getEnv(name: string): string | undefined {
  const fromEnv = process.env[name];
  if (fromEnv !== undefined && fromEnv !== "") return fromEnv;
  const fromSecret = readSecretFile(name);
  return fromSecret;
}

export const env = {
  SMTP_HOST: getEnv("SMTP_HOST"),
  SMTP_PORT: getEnv("SMTP_PORT"),
  SMTP_SECURE: getEnv("SMTP_SECURE"),
  SMTP_USER: getEnv("SMTP_USER"),
  SMTP_PASS: getEnv("SMTP_PASS"),
  EMAIL_FROM: getEnv("EMAIL_FROM"),
  SUPPORT_EMAIL: getEnv("SUPPORT_EMAIL"),
  SALES_EMAIL: getEnv("SALES_EMAIL"),
  HCAPTCHA_SECRET: getEnv("HCAPTCHA_SECRET"),
  // Public key should still be provided at runtime via env or secret
  NEXT_PUBLIC_HCAPTCHA_SITEKEY: getEnv("NEXT_PUBLIC_HCAPTCHA_SITEKEY"),
};

export function requireEnv(name: keyof typeof env): string {
  const value = env[name];
  if (!value) {
    throw new Error(`Environment variable ${String(name)} is required`);
  }
  return value;
}



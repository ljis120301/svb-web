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
  if (fromSecret !== undefined && fromSecret !== "") return fromSecret;
  const fromBundled = readBundledEnvSecret(name);
  return fromBundled;
}

// Support a single bundled secret file at /run/secrets/env that contains
// dotenv-style KEY=VALUE lines. This matches a common Swarm pattern where
// the entire .env is stored as one secret named "env".
let bundledEnvCache: Record<string, string> | null = null;
function readBundledEnvSecret(key: string): string | undefined {
  try {
    if (bundledEnvCache === null) {
      const path = "/run/secrets/env";
      if (!fs.existsSync(path)) {
        bundledEnvCache = {};
      } else {
        const raw = fs.readFileSync(path, "utf8");
        bundledEnvCache = parseDotenv(raw);
      }
    }
    const val = bundledEnvCache[key];
    return val === undefined || val === "" ? undefined : val;
  } catch {
    return undefined;
  }
}

function parseDotenv(input: string): Record<string, string> {
  const result: Record<string, string> = {};
  const lines = input.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const k = trimmed.slice(0, eq).trim();
    let v = trimmed.slice(eq + 1).trim();
    if (
      (v.startsWith("\"") && v.endsWith("\"")) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    result[k] = v;
  }
  return result;
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



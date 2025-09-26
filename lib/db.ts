import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Normalize SQLite file path to an absolute path if a relative file: URL is used.
// This avoids issues where the working directory differs between dev/prod runtimes.
(() => {
  const url = process.env.DATABASE_URL;
  if (url && url.startsWith("file:")) {
    const rawPath = url.slice("file:".length);
    const isRelative = rawPath.startsWith("./") || rawPath.startsWith("../");
    if (isRelative) {
      const absolutePath = path.resolve(process.cwd(), rawPath);
      try {
        fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
      } catch {
        // ignore
      }
      process.env.DATABASE_URL = `file:${absolutePath}`;
    } else if (!rawPath.startsWith("/")) {
      // Handle odd cases like file:dev.db (no ./)
      const absolutePath = path.resolve(process.cwd(), rawPath);
      try {
        fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
      } catch {
        // ignore
      }
      process.env.DATABASE_URL = `file:${absolutePath}`;
    }
  }
})();

export const prisma: PrismaClient = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}



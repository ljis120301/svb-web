import { NextRequest, NextResponse } from "next/server";
import { createWriteStream } from "node:fs";
import { mkdir, stat } from "node:fs/promises";
import { extname, join } from "node:path";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json({ error: "Expected multipart/form-data" }, { status: 400 });
  }
  const formData = await req.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const uploadsDir = join(process.cwd(), "public", "uploads");
  try {
    await stat(uploadsDir);
  } catch {
    await mkdir(uploadsDir, { recursive: true });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const stamp = Date.now();
  const ext = extname(safeName) || ".bin";
  const filename = `${stamp}-${safeName}`;
  const filePath = join(uploadsDir, filename);

  await new Promise<void>((resolve, reject) => {
    const stream = createWriteStream(filePath);
    stream.on("error", reject);
    stream.on("finish", () => resolve());
    stream.end(buffer);
  });

  const url = `/uploads/${filename}`;
  return NextResponse.json({ url });
}



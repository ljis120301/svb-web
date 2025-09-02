import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({ where: { slug } });
  if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ article });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const body = await req.json();
  const { title, excerpt, contentJson, html, tags = [], published } = body ?? {};
  try {
    const updated = await prisma.article.update({
      where: { slug },
      data: {
        title,
        excerpt,
        contentJson,
        html,
        tagsJson: JSON.stringify(tags),
        published,
      },
    });
    return NextResponse.json({ article: updated });
  } catch (e: any) {
    return NextResponse.json({ error: e.message ?? "Failed to update" }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    await prisma.article.delete({ where: { slug } });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message ?? "Failed to delete" }, { status: 400 });
  }
}



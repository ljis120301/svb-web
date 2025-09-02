import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const take = Number(searchParams.get("take") ?? 50);
  const skip = Number(searchParams.get("skip") ?? 0);
  const q = searchParams.get("q") ?? "";
  const where = q
    ? { OR: [{ title: { contains: q } }, { excerpt: { contains: q } }] }
    : {};
  const articles = await prisma.article.findMany({
    where,
    orderBy: { updatedAt: "desc" },
    take,
    skip,
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      tagsJson: true,
      updatedAt: true,
      published: true,
    },
  });
  return NextResponse.json({ articles });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { slug, title, excerpt, contentJson, html, tags = [], published = true } = body ?? {};
  if (!slug || !title || !excerpt || !contentJson || !html) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  try {
    const created = await prisma.article.create({
      data: {
        slug,
        title,
        excerpt,
        contentJson,
        html,
        tagsJson: JSON.stringify(tags),
        published,
      },
    });
    return NextResponse.json({ article: created });
  } catch (e: any) {
    return NextResponse.json({ error: e.message ?? "Failed to create" }, { status: 400 });
  }
}


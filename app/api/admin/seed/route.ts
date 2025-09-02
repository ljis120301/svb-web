import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { supportArticles } from "@/lib/supportArticles";
// Note: Avoid importing react-dom/server in route handlers per Next guidance.

export const runtime = "nodejs";

export async function POST(_req: NextRequest) {
  let created = 0;
  for (const a of supportArticles) {
    try {
      // Store metadata; let the page fallback render static content if HTML is empty
      const html = "";
      await prisma.article.upsert({
        where: { slug: a.slug },
        update: {
          title: a.title,
          excerpt: a.excerpt,
          html,
          contentJson: "{}",
          tagsJson: JSON.stringify(a.tags || []),
          published: true,
        },
        create: {
          slug: a.slug,
          title: a.title,
          excerpt: a.excerpt,
          html,
          contentJson: "{}",
          tagsJson: JSON.stringify(a.tags || []),
          published: true,
        },
      });
      created++;
    } catch {
      // ignore
    }
  }
  return NextResponse.json({ ok: true, count: created });
}



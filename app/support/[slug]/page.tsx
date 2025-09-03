import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSupportArticles, getSupportArticleBySlug } from "@/lib/supportArticles";
import { prisma } from "@/lib/db";
import { TipTapViewer } from "@/components/site/TipTapViewer";
import { PageLayout } from "@/components/layout/PageLayout";

export async function generateStaticParams() {
  // Pre-render known static articles; DB pages will be on-demand ISR
  return getAllSupportArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const staticArticle = getSupportArticleBySlug(slug);
  const dbArticle = await prisma.article.findUnique({ where: { slug } }).catch(() => null);
  const title = dbArticle?.title || staticArticle?.title || "Support Article";
  const description = dbArticle?.excerpt || staticArticle?.excerpt || undefined;
  const s = dbArticle?.slug || staticArticle?.slug || slug;
  return {
    title: `${title} | Support`,
    description,
    alternates: { canonical: `/support/${s}` },
  };
}

export default async function SupportArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const staticArticle = getSupportArticleBySlug(slug);
  const dbArticle = await prisma.article.findUnique({ where: { slug } }).catch(() => null);
  const article = dbArticle || staticArticle;
  if (!article) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Support", href: "/support" },
    { label: article.title }
  ];

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sunvalleybroadband.com/" },
      { "@type": "ListItem", position: 2, name: "Support", item: "https://sunvalleybroadband.com/support" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://sunvalleybroadband.com/support/${article.slug}` }
    ]
  };

  return (
    <PageLayout breadcrumbs={breadcrumbs} jsonLdBreadcrumbs={jsonLdBreadcrumbs} contentMaxWidth="3xl">
      <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">{article.title}</h1>
      {"updatedAt" in article && article.updatedAt && (
        <p className="mt-1 text-xs text-neutral-500">Updated {new Date(article.updatedAt as any).toLocaleDateString()}</p>
      )}
      <div className="mt-6">
        {"content" in article ? (
          article.content
        ) : ("html" in article && (article as any).html ? (
          <TipTapViewer html={(article as any).html} />
        ) : (
          // Fallback to static article content if DB record exists without stored html
          getSupportArticleBySlug(slug)?.content ?? null
        ))}
      </div>
      <div className="mt-10">
        <Link href="/support/contact" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:opacity-90">Need more help? Contact support</Link>
      </div>
    </PageLayout>
  );
}



import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { getAllSupportArticles, getSupportArticleBySlug } from "@/lib/supportArticles";

export async function generateStaticParams() {
  return getAllSupportArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getSupportArticleBySlug(slug);
  if (!article) return { title: "Support Article" };
  return {
    title: `${article.title} | Support`,
    description: article.excerpt,
    alternates: { canonical: `/support/${article.slug}` },
  };
}

export default async function SupportArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getSupportArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://sunvalleybroadband.com/" },
              { "@type": "ListItem", position: 2, name: "Support", item: "https://sunvalleybroadband.com/support" },
              { "@type": "ListItem", position: 3, name: article.title, item: `https://sunvalleybroadband.com/support/${article.slug}` }
            ]
          })
        }}
      />
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/support">Support</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{article.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold">{article.title}</h1>
      {article.updatedAt && (
        <p className="mt-1 text-xs text-neutral-500">Updated {new Date(article.updatedAt).toLocaleDateString()}</p>
      )}
      <div className="mt-6">
        {article.content}
      </div>
      <div className="mt-10">
        <Link href="/support/contact" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:opacity-90">Need more help? Contact support</Link>
      </div>
    </div>
  );
}



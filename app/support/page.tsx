import Link from "next/link";
import { prisma } from "@/lib/db";
import { FAQ } from "@/components/site/FAQ";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata = {
  title: "Support Center | Sun Valley Broadband",
  description:
    "Browse helpful articles or contact our local support team in Yuma, AZ.",
  alternates: { canonical: "/support" },
};

export default async function SupportPage() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { updatedAt: "desc" },
    select: { slug: true, title: true, excerpt: true, updatedAt: true },
  });

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Support" }
  ];

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sunvalleybroadband.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Support",
        item: "https://sunvalleybroadband.com/support"
      }
    ]
  };

  return (
    <PageLayout breadcrumbs={breadcrumbs} jsonLdBreadcrumbs={jsonLdBreadcrumbs} contentMaxWidth="5xl">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Support Center</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Find step‑by‑step guides and fixes. If you still need help, you can
        <Link href="/support/contact" className="text-primary underline underline-offset-4 ml-1">contact support</Link>.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a: any) => (
          <Link
            key={a.slug}
            href={`/support/${a.slug}`}
            className="block rounded-lg border border-border p-4 hover:bg-accent/10"
          >
            <h2 className="text-2xl md:text-3xl font-semibold">{a.title}</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{a.excerpt}</p>
            {a.updatedAt && (
              <p className="mt-3 text-xs text-neutral-500">Updated {new Date(a.updatedAt).toLocaleDateString()}</p>
            )}
          </Link>
        ))}
      </div>

      <FAQ />

      <div className="mt-10">
        <Link href="/support/contact" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:opacity-90">
          Contact support
        </Link>
      </div>
    </PageLayout>
  );
}



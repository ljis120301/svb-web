import Link from "next/link";
import { prisma } from "@/lib/db";
import { FAQ } from "@/components/site/FAQ";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export const metadata = {
  title: "Support Center | Sun Valley Broadband",
  description:
    "Browse helpful articles or contact our local support team in Yuma, AZ.",
  alternates: { canonical: "/support" },
};

export default async function SupportPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const pageParam = typeof resolvedSearchParams?.page === "string" ? resolvedSearchParams?.page : Array.isArray(resolvedSearchParams?.page) ? resolvedSearchParams?.page[0] : undefined;
  const pageSize = 9;
  const totalCount = await prisma.article.count({ where: { published: true } });
  const rawPage = Number(pageParam || 1);
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const currentPage = Number.isFinite(rawPage) && rawPage > 0 ? Math.min(rawPage, totalPages) : 1;
  const skip = (currentPage - 1) * pageSize;

  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { updatedAt: "desc" },
    select: { slug: true, title: true, excerpt: true, updatedAt: true },
    skip,
    take: pageSize,
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
      <h1 className="page-title">Support Center</h1>
      <p className="mt-2 lead">
        Find step‑by‑step guides and fixes. If you still need help, you can
        <Link href="/support/contact" className="text-primary underline underline-offset-4 ml-1">contact support</Link>.
      </p>

      <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-8">
            No articles found.
          </div>
        )}
        {articles.map((a: any) => (
          <Link
            key={a.slug}
            href={`/support/${a.slug}`}
            className="block rounded-lg border border-border p-4 hover:bg-accent/10"
          >
            <h2 className="section-title">{a.title}</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{a.excerpt}</p>
            {a.updatedAt && (
              <p className="mt-3 text-xs text-neutral-500">Updated {new Date(a.updatedAt).toLocaleDateString()}</p>
            )}
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 sm:mt-8">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious href={`/support?page=${currentPage - 1}`} />
                </PaginationItem>
              )}

              {(() => {
                const items: React.ReactNode[] = [];
                const pushPage = (p: number) => {
                  items.push(
                    <PaginationItem key={p}>
                      <PaginationLink href={`/support?page=${p}`} isActive={p === currentPage}>
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  );
                };
                const showFirst = 1;
                const showLast = totalPages;
                const start = Math.max(showFirst + 1, currentPage - 1);
                const end = Math.min(showLast - 1, currentPage + 1);

                // First page
                pushPage(showFirst);

                // Left ellipsis
                if (start > showFirst + 1) {
                  items.push(
                    <PaginationItem key="ellipsis-start">
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }

                // Middle window
                for (let p = start; p <= end; p++) {
                  if (p !== showFirst && p !== showLast) pushPage(p);
                }

                // Right ellipsis
                if (end < showLast - 1) {
                  items.push(
                    <PaginationItem key="ellipsis-end">
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }

                // Last page (only if more than one page)
                if (showLast > showFirst) pushPage(showLast);

                return items;
              })()}

              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext href={`/support?page=${currentPage + 1}`} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}

      <FAQ />

      <div className="mt-8 sm:mt-10">
        <Link href="/support/contact" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:opacity-90">
          Contact support
        </Link>
      </div>
    </PageLayout>
  );
}



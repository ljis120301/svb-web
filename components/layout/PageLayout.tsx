import React, { ReactNode } from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  jsonLdBreadcrumbs?: any; // JSON-LD structured data for breadcrumbs
  contentMaxWidth?: "3xl" | "5xl" | "6xl"; // For content area only
  className?: string;
}

export function PageLayout({ 
  children, 
  breadcrumbs, 
  jsonLdBreadcrumbs,
  contentMaxWidth = "6xl",
  className = ""
}: PageLayoutProps) {
  const breadcrumbContainerClass = `mx-auto max-w-6xl px-4 sm:px-6 lg:px-8`; // Always 6xl for consistent breadcrumb positioning
  // Map to explicit Tailwind classes to prevent purging of dynamic class names
  const maxWidthClass =
    contentMaxWidth === "3xl"
      ? "max-w-3xl"
      : contentMaxWidth === "5xl"
      ? "max-w-5xl"
      : "max-w-6xl";
  const contentContainerBase = `mx-auto ${maxWidthClass} px-4 sm:px-6 lg:px-8`;
  const contentPaddingTopClass = breadcrumbs && breadcrumbs.length > 0 ? "pt-2 sm:pt-3" : "pt-8 sm:pt-12";
  const contentContainerClass = `${contentContainerBase} ${contentPaddingTopClass}`;
  
  return (
    <div className="w-full overflow-x-hidden">
      {jsonLdBreadcrumbs && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
        />
      )}
      
      {/* Fixed breadcrumb positioning - always in the same spot with consistent 6xl width */}
      <div className={`${breadcrumbContainerClass} pt-4`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={item.href || "/"}>{item.label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
      </div>

      {/* Main content with flexible width but consistent horizontal alignment */}
      <div className={`${contentContainerClass} pb-12 sm:pb-16 ${className} overflow-x-hidden`}>
        {children}
      </div>
    </div>
  );
}

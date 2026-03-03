/**
 * Breadcrumbs
 * - Visible breadcrumbs for UX and internal linking.
 * - Injects BreadcrumbList JSON-LD for SEO.
 */
import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ChevronRight, Home as HomeIcon } from "lucide-react";
import { SITE } from "@/data/mockData";

function absoluteUrl(path) {
  const base = (SITE.baseUrl || "").replace(/\/$/, "");
  if (!base) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function Breadcrumbs({ items = [] }) {
  const location = useLocation();

  const jsonLd = useMemo(() => {
    const crumbs = [{ label: "Home", href: createPageUrl("Home") }, ...items];

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, idx) => {
        const href = c.href || (idx === crumbs.length - 1 ? location.pathname : undefined);
        return {
          "@type": "ListItem",
          position: idx + 1,
          name: c.label,
          item: absoluteUrl(href || "/"),
        };
      }),
    };
  }, [items, location.pathname]);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      {/* JSON-LD (safe inside body) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ol className="flex items-center gap-1.5 text-sm text-gray-400 flex-wrap">
        <li>
          <Link to={createPageUrl("Home")} className="hover:text-indigo-400 flex items-center gap-1">
            <HomeIcon className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            {item.href ? (
              <Link to={item.href} className="hover:text-indigo-400">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

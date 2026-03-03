/**
 * CategoryDetail - Individual category page showing all tools in that category
 * SEO: Category cluster page with filtered tools and internal links.
 * Route (SEO): /categories/:slug
 * Legacy route still supported: /CategoryDetail?slug=...
 */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { createPageUrl } from "@/utils";
import { Link, useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolCard from "@/components/ToolCard";
import FAQ from "@/components/FAQ";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import SEO from "@/components/SEO";

export default function CategoryDetail() {
  const { slug: slugParam } = useParams();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const slug = slugParam || urlParams.get("slug") || "";

  const { data: categories = [] } = useQuery({
    queryKey: ["category", slug],
    queryFn: () => base44.entities.Category.filter({ slug }),
    enabled: !!slug,
  });
  const category = categories[0];

  const { data: tools = [] } = useQuery({
    queryKey: ["category-tools", slug],
    queryFn: () => base44.entities.Tool.filter({ category_slug: slug }, "sort_order", 50),
    enabled: !!slug,
  });

  if (!category) {
    return <div className="text-center py-20 text-gray-400">Loading category...</div>;
  }

  return (
    <div>
      <SEO
        title={`${category.name} for Mobile Detailers`}
        description={category.description}
        canonical={`/categories/${category.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: category.name,
          description: category.description,
          url: `/categories/${category.slug}`,
        }}
        jsonLdId="jsonld-category"
      />

      <Breadcrumbs
        items={[
          { label: "Categories", href: createPageUrl("Categories") },
          { label: category.name },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{category.name}</h1>
        <p className="text-gray-400 text-lg max-w-3xl">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {tools.length === 0 && (
        <div className="text-center py-16 text-gray-400">No tools found in this category yet.</div>
      )}

      <FAQ
        items={[
          {
            question: `What's the best ${category.name?.toLowerCase()} for mobile detailers?`,
            answer:
              "The best choice depends on your workflow, budget, and whether you prioritize simplicity or automation. Browse the reviews above to pick the best fit.",
          },
          {
            question: `How much does ${category.name?.toLowerCase()} cost?`,
            answer:
              "Pricing varies widely. Some tools offer free tiers, while others can cost $100+/month. Check individual tool reviews for pricing notes and tradeoffs.",
          },
        ]}
      />

      <InternalLinkBlock
        links={[
          { label: "Compare All Tools", page: "Compare" },
          { label: "Read Our Guides", page: "Guides" },
          { label: "Best Scheduling Software", page: "BestForDetail", params: "feature=scheduling" },
          { label: "Jobber vs Housecall Pro", page: "VSDetail", params: "slugs=jobber-vs-housecall-pro" },
        ]}
      />

      {/* Small helper link for UX */}
      <div className="mt-10 text-sm text-gray-500">
        Want to browse everything?{" "}
        <Link to={createPageUrl("Compare")} className="text-indigo-400 hover:underline">
          See all tools
        </Link>
        .
      </div>
    </div>
  );
}

/**
 * BestForDetail - Programmatic "Best for X" page
 * SEO: Long-tail keyword capture for "best [feature] for mobile detailers"
 * Route (SEO): /best-for/:feature
 * Legacy: /BestForDetail?feature=...
 */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { createPageUrl } from "@/utils";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolCard from "@/components/ToolCard";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import InternalLinkBlock from "@/components/InternalLinkBlock";
import TrustSection from "@/components/TrustSection";
import SEO from "@/components/SEO";

const featureMeta = {
  scheduling: {
    title: "Best Scheduling Software for Mobile Detailers",
    intro:
      "Great scheduling software helps you manage appointments, reduce no-shows, and keep your days efficient — especially when you're driving between jobs.",
  },
  crm: {
    title: "Best CRM for Mobile Car Detailing Businesses",
    intro:
      "A CRM helps you track client history, vehicle notes, and follow-ups so you can generate repeat business and referrals.",
  },
  invoicing: {
    title: "Best Invoicing Software for Detailing Businesses",
    intro:
      "Professional invoicing builds trust and helps you get paid faster. Look for mobile invoicing, online payments, and automated reminders.",
  },
  payment: {
    title: "Best Payment Systems for Mobile Detailers",
    intro:
      "On-site payments are critical for mobile detailing. These tools let you accept cards, send invoices, and manage cash flow from anywhere.",
  },
  marketing: {
    title: "Best Marketing Tools for Auto Detailing Businesses",
    intro:
      "The right marketing stack helps you attract new clients and retain existing ones — especially with automation and consistent follow-up.",
  },
  automation: {
    title: "Best Automation Tools for Detailing Businesses",
    intro:
      "Automation saves hours each week by handling reminders, follow-ups, and repetitive admin tasks.",
  },
  equipment: {
    title: "Best Equipment & Supplies for Mobile Detailing",
    intro:
      "Professional results require professional equipment. These are popular brands and suppliers trusted by detailers.",
  },
  email: {
    title: "Best Email Marketing for Mobile Detailers",
    intro:
      "Email marketing is one of the highest-ROI channels. Use it for review requests, reminders, seasonal promos, and win-back campaigns.",
  },
  "detailing-specific": {
    title: "Best Detailing-Specific Software",
    intro:
      "Detailing-specific software supports packages, inspections, and vehicle workflows that generic tools don't handle as well.",
  },
};

export default function BestForDetail() {
  const { feature: featureParam } = useParams();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const feature = featureParam || urlParams.get("feature") || "scheduling";
  const meta = featureMeta[feature] || { title: `Best ${feature} Tools`, intro: "" };

  const { data: allTools = [] } = useQuery({
    queryKey: ["all-tools-best"],
    queryFn: () => base44.entities.Tool.list("sort_order", 50),
  });

  const filtered = allTools.filter((t) => (t.feature_tags || []).includes(feature));

  const faqs = [
    {
      question: `What's the best ${feature.replace(/-/g, " ")} tool for mobile detailers?`,
      answer:
        "The best choice depends on your workflow and budget. Use the comparison table and reviews above to pick the best fit for your operation.",
    },
    {
      question: `How much does ${feature.replace(/-/g, " ")} software cost?`,
      answer:
        "Pricing ranges from free tiers to several hundred dollars per month depending on team size and automation features. Many tools offer trials.",
    },
    {
      question: `Do I need dedicated ${feature.replace(/-/g, " ")} software?`,
      answer:
        "If this feature is central to your business, dedicated software usually saves time and improves professionalism. Many detailers start simple and upgrade as demand grows.",
    },
  ];

  return (
    <div>
      <SEO
        title={`${meta.title} (2026)`}
        description={meta.intro || `Top ${feature} tools for mobile car detailing in 2026. Compare features, pricing, and alternatives.`}
        canonical={`/best-for/${feature}`}
      />

      <Breadcrumbs
        items={[
          { label: "Best For", href: createPageUrl("BestFor") },
          { label: meta.title },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{meta.title}</h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">{meta.intro}</p>
      </div>

      {/* Comparison Table (if 2+ tools) */}
      {filtered.length >= 2 && (
        <div className="bg-[#181b23] border border-[#2a2e3b] rounded-2xl p-6 mb-8 overflow-hidden">
          <h2 className="text-xl font-bold text-white mb-4">Quick Comparison</h2>
          <ComparisonTable tools={filtered.slice(0, 4)} />
        </div>
      )}

      {/* Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filtered.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} showAffiliate />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">No tools found for this feature. Check back soon.</div>
      )}

      <TrustSection />
      <FAQ items={faqs} />

      <InternalLinkBlock
        links={[
          { label: "Compare All Tools", page: "Compare" },
          { label: "All Best-For Categories", page: "BestFor" },
          { label: "Start a Detailing Business", page: "GuideDetail", params: "slug=how-to-start-mobile-detailing-business" },
          { label: "All VS Comparisons", page: "VSIndex" },
        ]}
      />
    </div>
  );
}

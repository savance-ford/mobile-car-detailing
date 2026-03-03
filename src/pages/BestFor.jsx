/**
 * BestFor - Hub page for "Best For" feature categories
 * SEO: Links to all programmatic "best for X" pages.
 */
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Calendar, Users, Receipt, CreditCard, Megaphone, Zap, Wrench, Search, Cpu } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const featurePages = [
  { feature: "scheduling", label: "Best Scheduling Software", desc: "Tools to manage appointments and optimize your daily route.", icon: Calendar },
  { feature: "crm", label: "Best CRM for Mobile Detailers", desc: "Client management systems built for service businesses.", icon: Users },
  { feature: "invoicing", label: "Best Invoicing Tools", desc: "Professional invoicing and billing solutions.", icon: Receipt },
  { feature: "payment", label: "Best Payment Systems", desc: "Accept payments on-site and online seamlessly.", icon: CreditCard },
  { feature: "marketing", label: "Best Marketing Tools", desc: "Grow your client base with digital marketing.", icon: Megaphone },
  { feature: "automation", label: "Best Automation Tools", desc: "Automate repetitive tasks and workflows.", icon: Zap },
  { feature: "equipment", label: "Best Equipment & Supplies", desc: "Professional-grade detailing products and tools.", icon: Wrench },
  { feature: "email", label: "Best Email Marketing", desc: "Build client relationships with email campaigns.", icon: Search },
  { feature: "detailing-specific", label: "Best Detailing-Specific Software", desc: "Tools built exclusively for the detailing industry.", icon: Cpu },
];

export default function BestFor() {
  return (
    <div>
      <SEO
        title="Best Tools by Feature"
        description="Find the best tools by feature for mobile car detailing in 2026: scheduling, CRM, invoicing, payments, marketing, automation, and more."
        canonical="/best-for"
      />

      <Breadcrumbs items={[{ label: "Best For" }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Best Tools by Feature</h1>
      <p className="text-gray-400 text-lg mb-8 max-w-3xl">
        Find the best tool for your specific need. We've curated the top options in each category
        specifically for mobile car detailing businesses.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featurePages.map((fp) => (
          <Link
            key={fp.feature}
            to={createPageUrl(`BestForDetail?feature=${fp.feature}`)}
            className="group bg-[#181b23] border border-[#2a2e3b] rounded-2xl p-6 hover:border-indigo-500/30 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
              <fp.icon className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors mb-2">{fp.label}</h3>
            <p className="text-sm text-gray-400 mb-3">{fp.desc}</p>
            <span className="text-xs text-indigo-400 flex items-center gap-1">
              View top picks <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

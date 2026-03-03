/**
 * Terms - Terms of Service page
 */
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <div className="max-w-3xl">
      <SEO
        title="Terms of Service"
        description="DetailerStack terms of service: content disclaimer, affiliate link disclosure, and limitations of liability."
        canonical="/terms"
      />

      <Breadcrumbs items={[{ label: "Terms of Service" }]} />
      <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
      <div className="text-gray-400 leading-relaxed space-y-4">
        <p>Last updated: March 2026</p>
        <p>
          Welcome to DetailerStack. By accessing and using this website, you agree to be bound by these Terms of Service.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Content & Reviews</h2>
        <p>
          All reviews and comparisons are based on our research. We strive for accuracy but cannot guarantee that all
          information is current. Software features and pricing change frequently; always verify details with the provider
          before purchasing.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Affiliate Links</h2>
        <p>This site contains affiliate links. See our Affiliate Disclosure for details.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Disclaimer</h2>
        <p>
          The information on this website is provided "as is" without warranty of any kind. We are not responsible for any
          decisions you make based on our content.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Changes</h2>
        <p>
          We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.
        </p>
      </div>
    </div>
  );
}

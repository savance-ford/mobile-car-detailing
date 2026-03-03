/**
 * Privacy - Privacy Policy page
 */
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <div className="max-w-3xl">
      <SEO
        title="Privacy Policy"
        description="DetailerStack privacy policy: what data we collect, how we use cookies, and how affiliate links may set cookies."
        canonical="/privacy"
      />

      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
      <div className="text-gray-400 leading-relaxed space-y-4">
        <p>Last updated: March 2026</p>
        <p>
          DetailerStack ("we," "us," or "our") operates the DetailerStack website. This Privacy Policy explains how we collect,
          use, and protect information when you visit our site.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Information We Collect</h2>
        <p>
          We collect standard web analytics data including pages visited, time on site, browser type, and referring URLs.
          We do not collect personally identifiable information unless you voluntarily provide it (e.g., through a contact
          form or newsletter signup).
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Cookies</h2>
        <p>
          We may use cookies and similar technologies for analytics and to improve your experience. Third-party affiliate
          programs may also set cookies when you click affiliate links.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Third-Party Links</h2>
        <p>
          Our site contains links to third-party websites. We are not responsible for the privacy practices of these external
          sites.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
        <p>For privacy-related questions, please contact us through our website.</p>
      </div>
    </div>
  );
}

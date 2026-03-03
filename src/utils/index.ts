/**
 * createPageUrl()
 *
 * Converts legacy Base44-style page keys + query strings into SEO-friendly routes.
 *
 * Examples:
 * - "Compare" -> "/tools"
 * - "ToolDetail?slug=jobber" -> "/tools/jobber"
 * - "CategoryDetail?slug=software-business-tools" -> "/categories/software-business-tools"
 * - "GuideDetail?slug=how-to-start-mobile-detailing-business" -> "/guides/how-to-start-mobile-detailing-business"
 * - "VSDetail?slugs=jobber-vs-housecall-pro" -> "/vs/jobber-vs-housecall-pro"
 * - "BestForDetail?feature=scheduling" -> "/best-for/scheduling"
 *
 * Legacy routes are still supported in App.jsx for backwards compatibility.
 */

export function createPageUrl(pageName: string) {
  const raw = String(pageName || "").trim();
  if (!raw) return "/";

  // Allow passing a real path directly.
  if (raw.startsWith("/")) return raw;

  const [page, queryString] = raw.split("?");
  const params = new URLSearchParams(queryString || "");
  const key = page.replace(/\s+/g, "");

  switch (key) {
    case "Home":
      return "/";

    // Tools
    case "Compare":
      return "/tools";
    case "ToolDetail": {
      const slug = params.get("slug");
      return slug ? `/tools/${encodeURIComponent(slug)}` : "/tools";
    }

    // Categories
    case "Categories":
      return "/categories";
    case "CategoryDetail": {
      const slug = params.get("slug");
      return slug ? `/categories/${encodeURIComponent(slug)}` : "/categories";
    }

    // Guides
    case "Guides":
      return "/guides";
    case "GuideDetail": {
      const slug = params.get("slug");
      return slug ? `/guides/${encodeURIComponent(slug)}` : "/guides";
    }

    // Best-for
    case "BestFor":
      return "/best-for";
    case "BestForDetail": {
      const feature = params.get("feature");
      return feature ? `/best-for/${encodeURIComponent(feature)}` : "/best-for";
    }

    // VS comparisons
    case "VSIndex":
      return "/vs";
    case "VSDetail": {
      const slugs = params.get("slugs");
      return slugs ? `/vs/${encodeURIComponent(slugs)}` : "/vs";
    }

    // Legal
    case "AffiliateDisclosure":
      return "/affiliate-disclosure";
    case "Privacy":
      return "/privacy";
    case "Terms":
      return "/terms";

    // If a legacy page key is passed, keep it reachable.
    default:
      return `/${raw.replace(/ /g, "-")}`;
  }
}

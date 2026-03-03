import { useEffect } from "react";
import { SITE } from "@/data/mockData";

function ensureMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => {
    if (v !== undefined && v !== null && String(v) !== "") el.setAttribute(k, String(v));
  });
}

function ensureLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  if (href) el.setAttribute("href", href);
}

function resolveUrl(urlOrPath) {
  const base = (SITE.baseUrl || "").replace(/\/$/, "");
  if (!urlOrPath) return base || undefined;
  if (/^https?:\/\//i.test(urlOrPath)) return urlOrPath;
  const path = urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`;
  return base ? `${base}${path}` : path;
}

function setJsonLd(id, payload) {
  if (!payload) return;
  const scriptId = id || "seo-jsonld";
  const existing = document.getElementById(scriptId);
  const script = existing || document.createElement("script");
  script.id = scriptId;
  script.type = "application/ld+json";
  script.text = JSON.stringify(payload);
  if (!existing) document.head.appendChild(script);
}

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  image,
  jsonLd,
  jsonLdId,
}) {
  useEffect(() => {
    const finalTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} (2026)`;
    const finalDescription =
      description ||
      "Compare software, tools, and equipment for mobile car detailing businesses. Reviews, pros/cons, pricing, and alternatives.";

    document.title = finalTitle;

    ensureMeta('meta[name="description"]', { name: "description", content: finalDescription });
    ensureMeta('meta[name="robots"]', { name: "robots", content: "index,follow" });

    const canonicalUrl = resolveUrl(canonical || window.location.pathname);
    ensureLink("canonical", canonicalUrl);

    // OpenGraph
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: finalTitle });
    ensureMeta('meta[property="og:description"]', { property: "og:description", content: finalDescription });
    ensureMeta('meta[property="og:type"]', { property: "og:type", content: type });
    ensureMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });

    const ogImage = resolveUrl(image || SITE.defaultOgImage);
    if (ogImage) ensureMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });

    // Twitter
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: finalTitle });
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: finalDescription });
    if (ogImage) ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });

    // Optional JSON-LD
    if (jsonLd) setJsonLd(jsonLdId, jsonLd);
  }, [title, description, canonical, type, image, jsonLd, jsonLdId]);

  return null;
}

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { Toaster } from "@/components/ui/toaster";

import Layout from "@/Layout.jsx";
import PageNotFound from "@/lib/PageNotFound";

// Pages
import Home from "@/pages/Home";
import Compare from "@/pages/Compare";
import Categories from "@/pages/Categories";
import CategoryDetail from "@/pages/CategoryDetail";
import ToolDetail from "@/pages/ToolDetail";
import VSIndex from "@/pages/VSIndex";
import VSDetail from "@/pages/VSDetail";
import BestFor from "@/pages/BestFor";
import BestForDetail from "@/pages/BestForDetail";
import Guides from "@/pages/Guides";
import GuideDetail from "@/pages/GuideDetail";
import AffiliateDisclosure from "@/pages/AffiliateDisclosure";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function getCurrentPageName(pathname) {
  // Canonical SEO routes
  if (pathname === "/") return "Home";
  if (pathname.startsWith("/tools")) return "Compare";
  if (pathname.startsWith("/categories")) return "Categories";
  if (pathname.startsWith("/guides")) return "Guides";
  if (pathname.startsWith("/best-for")) return "BestFor";
  if (pathname.startsWith("/vs")) return "VSIndex";

  // Legacy Base44 routes
  if (pathname.startsWith("/Compare")) return "Compare";
  if (pathname.startsWith("/Categories") || pathname.startsWith("/CategoryDetail")) return "Categories";
  if (pathname.startsWith("/Guides") || pathname.startsWith("/GuideDetail")) return "Guides";
  if (pathname.startsWith("/BestFor") || pathname.startsWith("/BestForDetail")) return "BestFor";
  if (pathname.startsWith("/VSIndex") || pathname.startsWith("/VSDetail")) return "VSIndex";
  if (pathname.startsWith("/ToolDetail")) return "Compare";

  return "Home";
}

function LayoutShell({ children }) {
  const { pathname } = useLocation();
  const currentPageName = getCurrentPageName(pathname);
  return <Layout currentPageName={currentPageName}>{children}</Layout>;
}

// --- Legacy redirect helpers ---
function LegacyRedirect({ toBase, paramKey }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const value = params.get(paramKey);
  const to = value ? `${toBase}/${encodeURIComponent(value)}` : toBase;
  return <Navigate to={to} replace />;
}

function LegacyVSRedirect() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const slugs = params.get("slugs") || "";
  return <Navigate to={slugs ? `/vs/${encodeURIComponent(slugs)}` : "/vs"} replace />;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Canonical SEO routes */}
          <Route path="/" element={<LayoutShell><Home /></LayoutShell>} />

          <Route path="/tools" element={<LayoutShell><Compare /></LayoutShell>} />
          <Route path="/tools/:slug" element={<LayoutShell><ToolDetail /></LayoutShell>} />

          <Route path="/categories" element={<LayoutShell><Categories /></LayoutShell>} />
          <Route path="/categories/:slug" element={<LayoutShell><CategoryDetail /></LayoutShell>} />

          <Route path="/guides" element={<LayoutShell><Guides /></LayoutShell>} />
          <Route path="/guides/:slug" element={<LayoutShell><GuideDetail /></LayoutShell>} />

          <Route path="/best-for" element={<LayoutShell><BestFor /></LayoutShell>} />
          <Route path="/best-for/:feature" element={<LayoutShell><BestForDetail /></LayoutShell>} />

          <Route path="/vs" element={<LayoutShell><VSIndex /></LayoutShell>} />
          <Route path="/vs/:slugs" element={<LayoutShell><VSDetail /></LayoutShell>} />

          <Route path="/affiliate-disclosure" element={<LayoutShell><AffiliateDisclosure /></LayoutShell>} />
          <Route path="/privacy" element={<LayoutShell><Privacy /></LayoutShell>} />
          <Route path="/terms" element={<LayoutShell><Terms /></LayoutShell>} />

          {/* Legacy Base44 routes -> redirect to canonical */}
          <Route path="/Home" element={<Navigate to="/" replace />} />
          <Route path="/Compare" element={<Navigate to="/tools" replace />} />
          <Route path="/Categories" element={<Navigate to="/categories" replace />} />
          <Route path="/Guides" element={<Navigate to="/guides" replace />} />
          <Route path="/BestFor" element={<Navigate to="/best-for" replace />} />
          <Route path="/VSIndex" element={<Navigate to="/vs" replace />} />

          <Route path="/ToolDetail" element={<LegacyRedirect toBase="/tools" paramKey="slug" />} />
          <Route path="/CategoryDetail" element={<LegacyRedirect toBase="/categories" paramKey="slug" />} />
          <Route path="/GuideDetail" element={<LegacyRedirect toBase="/guides" paramKey="slug" />} />
          <Route path="/BestForDetail" element={<LegacyRedirect toBase="/best-for" paramKey="feature" />} />
          <Route path="/VSDetail" element={<LegacyVSRedirect />} />

          <Route path="/AffiliateDisclosure" element={<Navigate to="/affiliate-disclosure" replace />} />
          <Route path="/Privacy" element={<Navigate to="/privacy" replace />} />
          <Route path="/Terms" element={<Navigate to="/terms" replace />} />

          {/* 404 */}
          <Route path="*" element={<LayoutShell><PageNotFound /></LayoutShell>} />
        </Routes>

        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

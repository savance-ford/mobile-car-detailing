import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="max-w-lg w-full bg-[#181b23] border border-[#2a2e3b] rounded-2xl p-8 text-center">
        <div className="text-6xl font-extrabold text-white/20 mb-3">404</div>
        <h1 className="text-2xl font-bold text-white mb-2">Page not found</h1>
        <p className="text-gray-400 mb-6">
          We couldn't find <span className="text-gray-200 font-medium">{location.pathname}</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-xl bg-indigo-500/15 text-indigo-200 border border-indigo-500/25 hover:bg-indigo-500/20 transition"
          >
            Go home
          </Link>
          <Link
            to="/tools"
            className="px-5 py-2.5 rounded-xl bg-[#1f2330] text-gray-200 border border-[#2a2e3b] hover:border-indigo-500/30 transition"
          >
            Browse tools
          </Link>
        </div>
      </div>
    </div>
  );
}

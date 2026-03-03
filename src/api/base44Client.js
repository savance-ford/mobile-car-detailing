/**
 * base44Client.js (local mode)
 *
 * This project originally used the Base44 SDK.
 * For an affiliate/SEO site, a remote auth-gated backend breaks crawling and navigation.
 *
 * So we provide a tiny *compatible* client that serves data from src/data/mockData.js.
 * Pages keep calling base44.entities.*.list/filter, but everything runs locally.
 */

import { categories, tools, guides } from "@/data/mockData";

const clone = (x) => JSON.parse(JSON.stringify(x));

function sortByField(items, sortField) {
  if (!sortField) return items;
  const arr = [...items];
  arr.sort((a, b) => {
    const av = a?.[sortField];
    const bv = b?.[sortField];
    if (av === undefined && bv === undefined) return 0;
    if (av === undefined) return 1;
    if (bv === undefined) return -1;
    if (typeof av === "number" && typeof bv === "number") return av - bv;
    return String(av).localeCompare(String(bv));
  });
  return arr;
}

function matches(item, filters = {}) {
  return Object.entries(filters).every(([key, value]) => {
    if (value === undefined || value === null || value === "") return true;
    return item?.[key] === value;
  });
}

async function listFactory(source, sortField, limit) {
  const sorted = sortByField(source, sortField);
  const sliced = typeof limit === "number" ? sorted.slice(0, limit) : sorted;
  return clone(sliced);
}

async function filterFactory(source, filters, sortField, limit) {
  const filtered = source.filter((i) => matches(i, filters));
  const sorted = sortByField(filtered, sortField);
  const sliced = typeof limit === "number" ? sorted.slice(0, limit) : sorted;
  return clone(sliced);
}

export const base44 = {
  entities: {
    Category: {
      list: (sortField, limit) => listFactory(categories, sortField, limit),
      filter: (filters, sortField, limit) => filterFactory(categories, filters, sortField, limit),
    },
    Tool: {
      list: (sortField, limit) => listFactory(tools, sortField, limit),
      filter: (filters, sortField, limit) => filterFactory(tools, filters, sortField, limit),
    },
    Guide: {
      list: (sortField, limit) => listFactory(guides, sortField, limit),
      filter: (filters, sortField, limit) => filterFactory(guides, filters, sortField, limit),
    },
  },

  // Minimal auth stub (not used by the app now).
  auth: {
    async me() {
      throw new Error("Auth is disabled in local SEO mode.");
    },
    logout() {
      // no-op
    },
    redirectToLogin() {
      // no-op
    },
  },
};

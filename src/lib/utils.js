import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn() is used across shadcn/ui components.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Used in a couple places for Base44 iframe behavior.
// Safe default for a standalone web app.
export const isIframe = typeof window !== "undefined" && window.self !== window.top;

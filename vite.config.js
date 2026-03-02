import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// NOTE: This project was originally generated with Base44.
// This Vite config removes the Base44 plugin and uses a standard alias setup.

import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});

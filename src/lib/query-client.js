import { QueryClient } from "@tanstack/react-query";

// Central React Query client.
// - refetchOnWindowFocus=false keeps the UX stable.
// - retry=1 prevents spammy retries while still allowing a brief hiccup.
export const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

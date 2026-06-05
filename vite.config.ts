// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Force-enable Nitro so deployments outside Lovable (Vercel, etc.) get the
// nitro deploy plugin. When running on Vercel, use the "vercel" preset so
// Nitro emits the `.vercel/output` directory Vercel expects.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  nitro: isVercel ? { preset: "vercel" } : true,
  tanstackStart: {
    server: { entry: "server" },
  },
});

// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Force-enable Nitro for deployments outside Lovable (e.g. Vercel).
// When deploying to Vercel, set preset to "vercel" so Nitro emits the
// `.vercel/output` directory Vercel expects.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    ...(isVercel
      ? { nitro: { preset: "vercel" } }
      : { nitro: true }),
  },
});

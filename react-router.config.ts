import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode: static client-side rendering
  // SSR disabled — GSAP Flip/ScrollTrigger are browser-only and crash in Node.js
  ssr: false,
} satisfies Config;

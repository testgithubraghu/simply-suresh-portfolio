import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Only the bundled public/images library is optimized — no remote hosts.
    localPatterns: [{ pathname: "/images/**" }],
    /**
     * Image Optimization at runtime uses `sharp` (installed as a dependency).
     * On machines where the sharp native binary cannot be installed, start the
     * app with IMAGE_OPTIMIZATION=off to serve the original files instead:
     *   IMAGE_OPTIMIZATION=off npm run start
     */
    unoptimized: process.env.IMAGE_OPTIMIZATION === "off",
  },
};

export default nextConfig;

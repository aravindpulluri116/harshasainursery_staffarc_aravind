const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  reactStrictMode: true,
  poweredByHeader: false,
  // Assets are pre-optimised webp in /public. The custom loader only adds the basePath.
  images: { loader: "custom", loaderFile: "./src/lib/image-loader.js" },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Assets are pre-optimised webp in /public, so skip the image optimiser.
  images: { unoptimized: true },
};

export default nextConfig;

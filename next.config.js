/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Ensure SSR mode is supported
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  images: {
    unoptimized: true, // Required for AWS Amplify
  },
  headers: async () => [
    {
      source: "/manifest.json",
      headers: [
        { key: "Content-Type", value: "application/json" },
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/_next/static/*",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    },
  ],
};

export default nextConfig;
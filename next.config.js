/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Remove trailingSlash
  poweredByHeader: false,
  // Add standalone output
  output: 'standalone',
  // Add experimental features for better SSR performance
  experimental: {
    serverActions: true,
  }
};

module.exports = nextConfig;
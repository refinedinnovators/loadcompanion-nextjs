/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Remove experimental features
  poweredByHeader: false,
};

module.exports = nextConfig;
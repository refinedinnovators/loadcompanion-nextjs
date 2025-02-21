/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Change to static export
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
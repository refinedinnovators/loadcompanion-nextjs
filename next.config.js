/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static exports
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
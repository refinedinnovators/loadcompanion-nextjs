/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['*'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  }
};

// Try to import user config if it exists
let userConfig;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // ignore error
}

// Merge user config if it exists
if (userConfig?.default) {
  Object.keys(userConfig.default).forEach((key) => {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig.default[key],
      };
    } else {
      nextConfig[key] = userConfig.default[key];
    }
  });
}

export default nextConfig;

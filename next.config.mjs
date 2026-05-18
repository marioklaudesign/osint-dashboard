/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Prevents ESLint errors from breaking production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Prevents TypeScript syntax strict checks from breaking production builds
    ignoreBuildErrors: true,
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  server: {
    port: 3545,
  },
  experimental: {
    suppressHydrationWarning: true,
  },
}

export default nextConfig

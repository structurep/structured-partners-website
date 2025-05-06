import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Add this line for static export
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.emsifa.com/api-wilayah-indonesia/:path*',
      },
    ]
  },
}

module.exports = nextConfig

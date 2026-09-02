/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://www.emsifa.com/api-wilayah-indonesia/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

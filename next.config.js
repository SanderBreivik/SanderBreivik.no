/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

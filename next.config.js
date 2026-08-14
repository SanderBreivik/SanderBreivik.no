/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    unoptimized: true,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        // Advertise discovery resources to agents/crawlers hitting the homepage.
        source: "/",
        headers: [
          {
            key: "Link",
            value: [
              '</sitemap.xml>; rel="sitemap"; type="application/xml"',
              '<https://www.sanderbreivik.no/>; rel="canonical"',
            ].join(", "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

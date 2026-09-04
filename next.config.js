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
  async rewrites() {
    return [
      {
        // Next.js routing is case-sensitive; allow the lowercase URL to
        // resolve to the /LotharHS page as well.
        source: "/lotharhs",
        destination: "/LotharHS",
      },
    ];
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
              // Same URL also serves a markdown representation via
              // Accept: text/markdown content negotiation (see proxy.ts).
              '</>; rel="alternate"; type="text/markdown"',
            ].join(", "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

/**
 * Generates public/sitemap.xml from the Next.js `pages/` directory so the
 * sitemap always reflects the site's real routes on every build.
 *
 * Excludes: _app, _document, _error, 404, api/*, and dynamic routes
 * (e.g. [name].tsx) since they don't represent stable canonical URLs.
 */
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.sanderbreivik.no";
const PAGES_DIR = path.join(__dirname, "..", "pages");
const OUTPUT_FILE = path.join(__dirname, "..", "public", "sitemap.xml");

const EXCLUDED_BASENAMES = new Set(["_app", "_document", "_error", "404", "500"]);

function isPageFile(fileName) {
  return /\.(tsx|ts|jsx|js)$/.test(fileName);
}

function toRoute(filePath) {
  const relative = path
    .relative(PAGES_DIR, filePath)
    .replace(/\\/g, "/")
    .replace(/\.(tsx|ts|jsx|js)$/, "");

  const segments = relative.split("/");
  const basename = segments[segments.length - 1];

  // Skip Next.js special files, API routes, and dynamic routes ([param]).
  if (EXCLUDED_BASENAMES.has(basename)) return null;
  if (segments[0] === "api") return null;
  if (segments.some((segment) => segment.startsWith("["))) return null;

  const route = basename === "index" ? segments.slice(0, -1).join("/") : relative;
  return "/" + route;
}

function collectPageFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(collectPageFiles(fullPath));
    } else if (isPageFile(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function generateSitemap() {
  const pageFiles = collectPageFiles(PAGES_DIR);
  const routes = Array.from(
    new Set(
      pageFiles
        .map(toRoute)
        .filter((route) => route !== null)
    )
  ).sort();

  const lastmod = new Date().toISOString().split("T")[0];

  const urlEntries = routes
    .map((route) => {
      const loc = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, xml, "utf8");
  console.log(`Generated ${path.relative(process.cwd(), OUTPUT_FILE)} with ${routes.length} URL(s).`);
}

generateSitemap();

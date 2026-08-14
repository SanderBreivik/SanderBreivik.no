import { NextRequest, NextResponse } from "next/server";
import { MARKDOWN_PAGES, estimateTokenCount } from "./content/markdown";

/**
 * Markdown content negotiation: agents/crawlers that send
 * `Accept: text/markdown` receive a markdown representation of supported
 * pages instead of the rendered HTML. Browsers and any request without that
 * Accept header keep getting the normal HTML response.
 */
export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  const markdown = MARKDOWN_PAGES[request.nextUrl.pathname];

  if (markdown && wantsMarkdown(accept)) {
    return new NextResponse(markdown, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "x-markdown-tokens": String(estimateTokenCount(markdown)),
        Vary: "Accept",
      },
    });
  }

  return NextResponse.next();
}

/** True when `text/markdown` is present and not explicitly de-prioritized (q=0). */
function wantsMarkdown(acceptHeader: string): boolean {
  return acceptHeader
    .split(",")
    .map((part) => part.trim().toLowerCase())
    .some((part) => {
      if (!part.startsWith("text/markdown")) return false;
      const qMatch = part.match(/q=([\d.]+)/);
      return !qMatch || parseFloat(qMatch[1]) > 0;
    });
}

export const config = {
  matcher: ["/", "/CV-en", "/CV-no"],
};

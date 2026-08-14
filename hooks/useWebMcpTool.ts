import { useEffect } from "react";

/**
 * WebMCP tool definition, mirroring the shape expected by
 * `navigator.modelContext.registerTool()`.
 * See https://webmachinelearning.github.io/webmcp/
 */
export interface WebMcpTool {
  name: string;
  description: string;
  inputSchema?: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown> | unknown;
  annotations?: {
    readOnlyHint?: boolean;
    untrustedContentHint?: boolean;
  };
}

interface NavigatorWithModelContext extends Navigator {
  modelContext?: {
    registerTool: (
      tool: WebMcpTool,
      options?: { signal?: AbortSignal },
    ) => Promise<void>;
  };
}

/**
 * Registers a WebMCP tool exposing a real page action to AI agents/browser
 * agents via `navigator.modelContext.registerTool()`. No-ops gracefully in
 * browsers that don't support the (experimental) WebMCP API yet.
 */
export function useWebMcpTool(tool: WebMcpTool) {
  useEffect(() => {
    const nav = navigator as NavigatorWithModelContext;
    if (!nav.modelContext?.registerTool) return;

    const controller = new AbortController();
    nav.modelContext
      .registerTool(tool, { signal: controller.signal })
      .catch(() => {
        // Ignore registration failures (e.g. duplicate name during
        // fast-refresh in development).
      });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tool.name]);
}

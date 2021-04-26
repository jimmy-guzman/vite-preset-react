import { Plugin } from "vite";

export interface reactDevtoolsPluginOptions {
  removeInProd?: boolean;
}
export function reactDevtoolsPlugin({
  removeInProd = false,
}: reactDevtoolsPluginOptions = {}): Plugin {
  const plugin: Plugin = {
    name: "react:devtools",

    // Ensure that we resolve before everything else
    enforce: "pre",

    // Run only on build
    apply: "build",

    transformIndexHtml(code) {
      if (removeInProd) {
        code += `<script>window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};</script>`;
      }
      return code;
    },
  };

  return plugin;
}

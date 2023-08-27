import { defineConfig } from 'astro/config';
import rehypePrettyCode from "rehype-pretty-code";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Applied to .md and .mdx files
    syntaxHighlight: false,
    // Disable syntax built-in syntax hightlighting from astro
    rehypePlugins: [[rehypePrettyCode, {
      theme: "dracula"
    }]]
  },
  integrations: [react()]
});
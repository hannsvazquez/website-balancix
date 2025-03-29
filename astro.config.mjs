// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "synthwave-84",
      themes: {
        light: 'synthwave-84',
        dark: 'synthwave-84',
      },
      wrap: true,
      transformers: [],
    },
    remarkPlugins: [remarkReadingTime],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es','en'],
    routing: {
      prefixDefaultLocale: true,
    },

  }
});
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './remark-reading-time.mjs';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://balancix.site',
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          en: 'en',
          es: 'es'
        }
      }
    })
  ],
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
import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Ract Docs',
  lang: 'zh',
  icon: '/doc-static/icon.png',
  logo: {
    light: '/doc-static/icon.png',
    dark: '/doc-static/icon.png',
  },
  themeConfig: {
  },
});

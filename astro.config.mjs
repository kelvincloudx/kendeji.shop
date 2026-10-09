import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function customSitemap() {
  return {
    name: 'kendeji-custom-sitemap',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const urls = [
          'https://kendeji.shop/'
        ];

        const today = new Date().toISOString().split('T')[0];
        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`).join('\n')}
</urlset>`;

        const distDir = fileURLToPath(dir);
        const sitemapPath = path.join(distDir, 'sitemap-index.xml');
        fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
        console.log('[sitemap] Successfully generated sitemap-index.xml at ' + sitemapPath);
      }
    }
  };
}

export default defineConfig({
  site: 'https://kendeji.shop',
  integrations: [customSitemap()]
});

import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function customSitemap() {
  return {
    name: 'kendeji-custom-sitemap',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const site = 'https://kendeji.shop';
        const urls = [
          'https://kendeji.shop/',
          'https://kendeji.shop/articles/kendeji-pricing-structure-analysis/',
          'https://kendeji.shop/articles/vless-reality-anytls-protocol-architecture/',
          'https://kendeji.shop/articles/cross-platform-subscription-parser-guide/',
          'https://kendeji.shop/articles/souffle-plan-traffic-quota-investigation/',
          'https://kendeji.shop/articles/three-operator-routing-cn2-9929-cmin2/',
          'https://kendeji.shop/articles/sing-box-tun-mode-windows-mac-linux/',
          'https://kendeji.shop/articles/commercial-disclosure-and-authenticity-faq/'
        ];

        const today = new Date().toISOString().split('T')[0];
        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === 'https://kendeji.shop/' ? '1.0' : '0.8'}</priority>
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

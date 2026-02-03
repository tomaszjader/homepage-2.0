const fs = require('fs');
const path = require('path');

const blogServicePath = path.join(__dirname, 'src/app/services/blog.service.ts');
const sitemapPath = path.join(__dirname, 'src/sitemap.xml');
const baseUrl = 'https://tomaszjader.com';

try {
    const blogServiceContent = fs.readFileSync(blogServicePath, 'utf8');
    const slugRegex = /slug:\s*'([^']+)'/g;
    let match;
    const slugs = [];

    while ((match = slugRegex.exec(blogServiceContent)) !== null) {
        slugs.push(match[1]);
    }

    const currentDate = new Date().toISOString().split('T')[0];

    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>`;

    slugs.forEach(slug => {
        sitemapContent += `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.6</priority>
  </url>`;
    });

    sitemapContent += `
</urlset>`;

    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log(`Sitemap generated successfully with ${slugs.length} posts.`);

} catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
}

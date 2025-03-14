/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourdomain.com', // あなたの実際のドメインに変更してください
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  outDir: 'public',
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://yourdomain.com/sitemap.xml', // あなたの実際のドメインに変更してください
    ],
  },
} 
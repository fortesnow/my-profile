/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.stellarium.jp', // 実際の運用サイトのドメインに変更しました
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  outDir: 'public',
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.stellarium.jp/sitemap.xml', // 実際の運用サイトのドメインに変更しました
    ],
  },
} 
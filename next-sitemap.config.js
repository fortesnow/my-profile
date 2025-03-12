/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://stellarium-marketing.com', // あなたのサイトのURLに変更してください
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://stellarium-marketing.com/server-sitemap.xml',
    ],
  },
} 
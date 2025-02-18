import { MetadataRoute } from 'next'

async function getArticles() {
  // ここでブログ記事の一覧を取得
  return [
    { slug: 'lp-development', lastModified: new Date() },
    // 他の記事...
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles()
  
  const blogPages = articles.map(article => ({
    url: `https://www.stellarium.jp/blog/${article.slug}`,
    lastModified: article.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://www.stellarium.jp',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.stellarium.jp/lp-service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.stellarium.jp/coding-service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.stellarium.jp/ads-service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.stellarium.jp/sns-service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.stellarium.jp/seo-service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.stellarium.jp/writing-service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.stellarium.jp/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogPages,
  ]
} 
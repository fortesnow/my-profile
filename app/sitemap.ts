import { MetadataRoute } from 'next'

// ブログ記事の型定義
type Article = {
  slug: string
  lastModified: Date
  title: string
  category: string
}

// サービスページの定義
const services = [
  {
    url: '/lp-service',
    title: 'LP制作サービス',
    priority: 0.8,
  },
  {
    url: '/development-service',
    title: '受託開発サービス',
    priority: 0.8,
  },
  {
    url: '/seo-service',
    title: 'SEO対策サービス',
    priority: 0.8,
  },
  {
    url: '/writing-service',
    title: 'セールスライティングサービス',
    priority: 0.8,
  },
  // ... 他のサービス
] as const

async function getArticles(): Promise<Article[]> {
  // ここで実際のブログ記事データを取得
  // 例: DBやCMSからの取得
  return [
    {
      slug: 'lp-development',
      lastModified: new Date('2024-02-16'),
      title: 'LPはただ作るだけではダメ！作ってからがスタートラインその理由とは？',
      category: 'LP制作'
    },
    // ... 他の記事
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles()
  const baseUrl = 'https://www.stellarium.jp'
  
  // メインページ
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // サービスページ
  const servicePages = services.map(service => ({
    url: `${baseUrl}${service.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: service.priority,
  }))

  // ブログ記事ページ
  const blogPages = articles.map(article => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // カテゴリーページ
  const categories = [...new Set(articles.map(article => article.category))]
  const categoryPages = categories.map(category => ({
    url: `${baseUrl}/blog/category/${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    ...mainPages,
    ...servicePages,
    ...blogPages,
    ...categoryPages,
  ]
} 
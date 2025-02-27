import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com'
  
  // ブログ記事の一覧
  const blogPosts = [
    {
      url: `${baseUrl}/blog/homepage-success`,
      lastModified: new Date('2025-02-22'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/lp-development`,
      lastModified: new Date('2025-02-16'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/notion-api-usage`,
      lastModified: new Date('2025-02-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]
  
  // 固定ページの設定
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lp-service`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ai-service`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]
  
  return [...routes, ...blogPosts]
} 
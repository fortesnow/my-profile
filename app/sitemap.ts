import { MetadataRoute } from 'next'
import { glob } from 'glob'
import { readFile } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

// ページの型定義
type PageInfo = {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.stellarium.jp'

  // 1. 静的なページの定義
  const staticPages: PageInfo[] = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/writing-service`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/writing-service/press-release`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    }
    // 他の静的ページも同様に追加
  ]

  // 2. 動的なページ（ブログ記事など）の取得
  const blogFiles = await glob('app/blog/**/page.tsx')
  const blogPages = await Promise.all(
    blogFiles.map(async (file) => {
      const content = await readFile(file, 'utf-8')
      const { data } = matter(content)
      const slug = path.dirname(file).split('/').pop()

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: data.date ? new Date(data.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7
      }
    })
  )

  // 3. サービスページの動的取得
  const serviceFiles = await glob('app/*-service/page.tsx')
  const servicePages = serviceFiles.map(file => {
    const slug = path.dirname(file).split('/').pop()
    return {
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }
  })

  // 4. すべてのページを結合
  const allPages = [
    ...staticPages,
    ...blogPages,
    ...servicePages
  ]

  // 5. サイトマップ形式に変換
  return allPages.map(page => ({
    url: page.url,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
} 
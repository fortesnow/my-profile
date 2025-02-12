import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/lp-service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 他のページも同様に
  ]
} 
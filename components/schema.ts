// AI/LLM最適化のための包括的な構造化データ
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'Stellarium（ステラリウム）',
  alternateName: 'Web制作 あおい',
  description: 'フロントエンド開発、LP制作、Web開発、SEO対策、広告運用を提供するフリーランスエンジニア。React、Next.js、TypeScriptを使用した高品質な開発サービス。',
  url: 'https://www.stellarium.jp',
  logo: 'https://www.stellarium.jp/images/aoko-pic.jpg',
  image: 'https://www.stellarium.jp/images/og-image.jpg',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'あおい',
    jobTitle: 'フリーランスエンジニア',
    description: '実業や経営面で培った思考を活かし、Web制作からマーケティングまで幅広く対応',
  },
  sameAs: [
    'https://note.com/hareharesky',
    'https://www.instagram.com/stellariumix/',
    'https://github.com/stellarium'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Japanese'],
    url: 'https://www.stellarium.jp/contact'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressRegion: '日本'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Japan'
  },
  // 提供サービスを明示（AI/LLMが理解しやすい）
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '提供サービス',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'フロントエンド開発',
          description: 'React, Next.js, TypeScriptを使用した高品質なフロントエンド開発'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'LP制作',
          description: '目的達成に特化したランディングページ制作'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '広告運用',
          description: 'Google・Meta・X・TikTokなど各種広告プラットフォームの運用代行'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO対策',
          description: '検索エンジン最適化とコンテンツ戦略'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SNS運用',
          description: 'X（Twitter）・Instagram・TikTokのSNS運用代行'
        }
      }
    ]
  },
  // 使用技術を明示（技術系AIの理解向上）
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'SEO',
    'Web Development',
    'Frontend Development',
    'Digital Marketing',
    'Advertisement',
    'SNS Marketing'
  ]
})

// ブログ記事用の構造化データ（AI検索エンジン最適化）
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  category?: string;
  keywords?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  url: article.url,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    '@type': 'Person',
    name: 'あおい',
    url: 'https://www.stellarium.jp',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Stellarium',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.stellarium.jp/images/aoko-pic.jpg'
    }
  },
  image: article.image || 'https://www.stellarium.jp/images/og-image.jpg',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url
  },
  articleSection: article.category || 'Web制作',
  keywords: article.keywords?.join(', ') || '',
  // AI/LLMが記事内容を理解しやすくする
  inLanguage: 'ja-JP',
  about: {
    '@type': 'Thing',
    name: article.category || 'Web制作'
  }
})

// パンくずリスト（AI/LLMがサイト構造を理解）
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

// FAQ構造化データ（AI検索で直接回答可能に）
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})

// サービスページ用の構造化データ（AI/LLM最適化）
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  category: string;
  features?: string[];
  url?: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  url: service.url || 'https://www.stellarium.jp',
  image: service.image || 'https://www.stellarium.jp/images/og-image.jpg',
  provider: {
    '@type': 'Organization',
    name: 'Stellarium',
    url: 'https://www.stellarium.jp',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.stellarium.jp/images/aoko-pic.jpg'
    }
  },
  areaServed: {
    '@type': 'Country',
    name: 'Japan'
  },
  serviceType: service.category,
  // サービス特徴を明示的に記述（AI/LLMが理解しやすく）
  additionalProperty: service.features?.map(feature => ({
    '@type': 'PropertyValue',
    name: '特徴',
    value: feature
  })) || [],
  // サービス提供地域を明示
  areaServed: '日本全国',
  // サービス価格情報（オプション）
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'JPY',
    description: 'お見積もりベースでお客様のニーズに合わせて調整'
  }
})

// WebSite構造化データ（サイト内検索を有効化）
export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Stellarium',
  alternateName: 'Web制作 あおい',
  url: 'https://www.stellarium.jp',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.stellarium.jp/blog?search={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}) 
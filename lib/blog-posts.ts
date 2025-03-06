// 記事データを一元管理するファイル
export interface BlogPost {
  id: number | string;  // 数値とスラッグ文字列の両方をサポート
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  thumbnail: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [
  // 記事を日付順に並べ替えて追加
  {
    id: "restaurant-seo-strategy",
    title: "飲食店のSEO対策完全ガイド｜集客数を2倍にする実践テクニック",
    date: "2025-03-06",
    excerpt: "飲食店のためのSEO対策を徹底解説。Googleで上位表示させるためのウェブサイト改善策や、地域検索で見つけてもらうための具体的な施策を紹介。集客アップにつながる実践的なノウハウを公開します。",
    category: "SEO対策",
    slug: "restaurant-seo-strategy",
    thumbnail: "/blog/eye-catch/restaurant-seo-strategy.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: "lp-production-flow",
    title: "LP制作の流れを徹底解説｜成功するランディングページの作り方",
    date: "2025-03-05",
    excerpt: "LP制作の正しい流れをステップバイステップで解説。初心者でもわかるランディングページ制作のノウハウを公開します。",
    category: "LP制作",
    slug: "lp-production-flow",
    thumbnail: "/blog/eye-catch/lp-production-flow.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: "tiktok-business-benefits",
    title: '法人がTikTokをやるべき7つの理由|ビジネス成長を加速させる戦略的活用法',
    date: '2025-03-05',
    excerpt: '法人企業がTikTokを活用すべき具体的な理由と戦略を解説。若年層へのリーチ拡大、低コスト高効果なマーケティング手法など、今すぐビジネスを成長させるTikTok活用法を学びましょう。',
    category: 'SNS運用',
    slug: 'tiktok-business-benefits',
    thumbnail: '/blog/eye-catch/tiktok-business-benefits.webp',
    author: 'Stellarium マーケティング'
  },
  {
    id: "ad-operation-mistakes",
    title: "広告運用の失敗から学ぶ！回避すべき7つのミスと実践的な改善策",
    excerpt: "広告運用でよくある失敗事例と、それを回避するための実践的な対策を徹底解説。投資対効果を高め、ブランドイメージを守るための具体的なノウハウを紹介します。",
    date: "2025-03-04",
    category: "広告運用",
    slug: "ad-operation-mistakes",
    thumbnail: "/blog/eye-catch/ad-operation-mistakes.webp",
    author: "Stellarium マーケティング"
  },
  {
    id: "lp-self-study-roadmap",
    title: "LP制作を独学で成功させる完全ロードマップ｜初心者が陥りがちな失敗と対策",
    excerpt: "LP制作を独学で成功させるための具体的なロードマップを解説。初心者が陥りがちな失敗事例とその対策を詳しく紹介します。",
    date: "2025-03-04",
    category: "LP制作",
    slug: "lp-self-study-roadmap",
    thumbnail: "/blog/eye-catch/lp-self-study-roadmap.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: "sns-operation-difficulties",
    title: "SNS運用が難しいと感じる5つの理由と、実は向いている人の特徴",
    excerpt: "SNS運用の難しさを感じる理由と、SNS運用に向いている人の特徴を紹介。継続するためのコツや効率的な運用方法も解説します。",
    date: "2025-03-03",
    category: "SNS運用",
    slug: "sns-operation-difficulties",
    thumbnail: "/blog/eye-catch/sns-operation.jpg",
    author: "あおい"
  },
  {
    id: "tiktok-recruitment-strategy",
    title: "【2025年最新】TikTok運用で人材採用を成功させる求人活用術 | 事例と実践テクニック",
    excerpt: "TikTokを活用した効果的な求人・採用戦略を徹底解説。Z世代へのリーチ方法や企業文化の発信テクニック、成功事例まで網羅的に紹介します。採用担当者必見の実践的ガイド。",
    date: "2025-03-03",
    category: "SNS運用",
    slug: "tiktok-recruitment-strategy",
    thumbnail: "/blog/eye-catch/tiktok-recruitment.webp",
    author: "Stellarium マーケティング"
  },
  {
    id: 4,
    title: "【2025年最新】Webサイト保守のストック型ビジネスモデル完全ガイド | 内容と相場",
    excerpt: "Webサイト保守をストック型ビジネスとして展開する方法を徹底解説。具体的なサービス内容や料金相場、クライアントへの提案方法まで、Web制作会社の収益安定化に役立つ情報をご紹介します。",
    date: "2025-03-02",
    category: "Web制作",
    slug: "website-maintenance-stock-business",
    thumbnail: "/blog/eye-catch/for-website-maintenance.jpg"
  },
  {
    id: "studio-seo-optimization",
    slug: "studio-seo-optimization",
    title: "StudioのSEO対策完全ガイド〜レンダリング方式から理解する根本的弱点と克服法〜",
    date: "2025-03-02",
    category: "SEO対策",
    excerpt: "UniverseのStudio SEOが弱い本質的理由をSSR/CSRの技術的観点から徹底解説。内部構造を理解し、効果的に検索順位を向上させるための具体的な実装方法を紹介します。",
    thumbnail: "/blog/eye-catch/for-studio.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: 1,
    title: "【2025年最新】ECサイト・ネットショップのMeta広告運用完全ガイド｜費用対効果2倍のテクニック",
    excerpt: "ECサイト・ネットショップ向けMeta広告の戦略的運用方法を徹底解説。広告予算の最適化から高CVR施策まで具体的なノウハウを公開します。",
    date: "2025-03-01",
    category: "広告運用",
    slug: "ec-site-meta-ads-strategy",
    thumbnail: "/blog/eye-catch/for-meta-ec.webp"
  },
  {
    id: 2,
    title: '【2025年最新】飲食店のMeta広告運用完全ガイド | 集客率2倍の実践テクニック',
    excerpt: '飲食店向けMeta広告(旧Facebook広告)の運用方法を徹底解説。効果的なターゲティング、予算設定から実際の成功事例まで、集客アップにつながる広告運用テクニックをご紹介します。',
    date: '2025-03-01',
    category: '広告運用',
    slug: 'meta-ads-for-restaurant',
    thumbnail: '/blog/eye-catch/meta-ads-restaurant.jpg'
  },
  {
    id: 3,
    title: "【2025年最新】エステサロンのMeta広告運用完全ガイド",
    excerpt: "エステサロン向けMeta広告の運用方法を徹底解説。効果的なターゲティング、予算設定から実際の成功事例まで。",
    date: "2025-02-28",
    category: "広告運用",
    slug: "meta-ads-for-esthetic-salon",
    thumbnail: "/blog/eye-catch/meta-ads-esthetic.jpg"
  },
  {
    id: 5,
    title: "Notion API でできること - ビジネスを自動化する11の活用例",
    excerpt: "Notion APIを活用したビジネス自動化の可能性を探ります。データベース操作からワークフロー自動化まで、実践的な11の活用例を解説します。",
    date: "2025-02-27",
    category: "API活用",
    slug: "notion-api-usage",
    thumbnail: "/blog/eye-catch/for-notion.jpeg"
  },
  {
    id: 6,
    title: "結果の出るホームページの作り方～プロが教える7つの成功戦略と実践事例",
    excerpt: "ホームページの成果を最大化するための実践的な戦略と具体的な改善手法を解説。",
    date: "2025-02-22",
    category: "Web制作",
    slug: "homepage-success",
    thumbnail: "/blog/eye-catch/homepage-success.jpg"
  },
  {
    id: 7,
    title: "【事業者向け】LPはただ作るだけではダメ！作ってからがスタートラインその理由とは？",
    excerpt: "LPの本質的な目的と、制作後の運用の重要性について解説します。",
    date: "2025-02-16",
    category: "LP制作",
    slug: "lp-development",
    thumbnail: "/blog/eye-catch/for-LPO.webp"
  },
  {
    id: 'local-ad-management-strategy',
    title: '地方・田舎での広告運用成功術 | 都市部とは異なる戦略とアプローチ',
    date: '2025-03-06',
    excerpt: '都市部の広告戦略をそのまま地方や田舎に適用しても思うような成果は得られません。地域特性を理解し最適化された広告運用が成功への鍵です。本記事では地方・田舎での広告運用に特化した戦略とアプローチを解説します。',
    category: '広告運用',
    slug: 'local-ad-management-strategy',
    thumbnail: '/blog/eye-catch/local-ad-management.jpg',
    author: 'Stellarium マーケティング'
  },
  {
    id: "tiktok-marketing-strategy",
    title: "【2025年最新】TikTokマーケティング完全攻略｜集客効果を2倍にする実践戦略",
    excerpt: "TikTokを活用したマーケティング戦略を徹底解説。アルゴリズムの仕組みからバズらせるコンテンツ制作法、効果測定まで専門家が実践的なノウハウを公開。短期間で認知拡大と集客につなげる具体的な手法を学べます。",
    date: "2025-03-06",
    category: "SNS運用",
    slug: "tiktok-marketing-strategy",
    thumbnail: "/blog/eye-catch/tiktok-marketing-strategy.jpg",
    author: "Stellarium マーケティング"
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 日付順に並べ替え

// 記事を日付順にソートする関数
export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => {
    // 日付の形式を統一して比較（'.' と '-' の両方に対応）
    const dateA = new Date(a.date.replace(/\./g, '-'));
    const dateB = new Date(b.date.replace(/\./g, '-'));
    return dateB.getTime() - dateA.getTime(); // 降順（最新が先頭）
  });
}

// 最新の記事を取得するヘルパー関数
export function getLatestPosts(count: number = 3): BlogPost[] {
  return getSortedPosts().slice(0, count);
}

// 既存のインポート文
export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  categories: string[];
  thumbnail: string;
};

// 記事一覧配列
export const posts: Post[] = [
  // 最新の記事を上に追加
  {
    id: "tiktok-marketing-strategy",
    title: "【2025年最新】TikTokマーケティング完全攻略｜集客効果を2倍にする実践戦略",
    excerpt: "TikTokを活用したマーケティング戦略を徹底解説。アルゴリズムの仕組みからバズらせるコンテンツ制作法、効果測定まで専門家が実践的なノウハウを公開。短期間で認知拡大と集客につなげる具体的な手法を学べます。",
    date: "2025-03-06",
    author: "Stellarium マーケティング",
    categories: ["SNS運用"],
    thumbnail: "/blog/eye-catch/tiktok-marketing-strategy.jpg",
  },
  // 既存の記事...
  
  // 新しい飲食店SEO対策の記事を追加
  {
    id: "restaurant-seo-strategy",
    title: "飲食店のSEO対策完全ガイド｜集客数を2倍にする実践テクニック",
    excerpt: "飲食店のためのSEO対策を徹底解説。Googleで上位表示させるためのウェブサイト改善策や、地域検索で見つけてもらうための具体的な施策を紹介。集客アップにつながる実践的なノウハウを公開します。",
    date: "2025-03-06",
    author: "Stellarium マーケティング",
    categories: ["SEO対策", "Webマーケティング"],
    thumbnail: "/blog/eye-catch/restaurant-seo-strategy.jpg",
  },
  
  // StudioのSEO対策記事を追加
  {
    id: "studio-seo-optimization",
    title: "StudioのSEO対策完全ガイド〜レンダリング方式から理解する根本的弱点と克服法〜",
    excerpt: "UniverseのStudio SEOが弱い本質的理由をSSR/CSRの技術的観点から徹底解説。内部構造を理解し、効果的に検索順位を向上させるための具体的な実装方法を紹介します。",
    date: "2025-03-02",
    author: "Stellarium マーケティング",
    categories: ["SEO対策"],
    thumbnail: "/blog/eye-catch/for-studio.jpg",
  },
  
  // SNS運用の記事
  {
    id: "sns-operation-difficulties",
    title: "SNS運用が難しいと感じる5つの理由と、実は向いている人の特徴",
    excerpt: "SNS運用の難しさを感じる理由と、SNS運用に向いている人の特徴を紹介。継続するためのコツや効率的な運用方法も解説します。",
    date: "2025-03-03",
    author: "あおい",
    categories: ["SNS運用", "マーケティング"],
    thumbnail: "/blog/eye-catch/sns-operation.jpg",
  },
  
  // 他の記事...
  
  // 新しいTikTok採用の記事を追加
  {
    id: "tiktok-recruitment-strategy",
    title: "【2025年最新】TikTok運用で人材採用を成功させる求人活用術 | 事例と実践テクニック",
    excerpt: "TikTokを活用した効果的な求人・採用戦略を徹底解説。Z世代へのリーチ方法や企業文化の発信テクニック、成功事例まで紹介します。",
    date: "2025-03-03",
    author: "Stellarium マーケティング",
    categories: ["SNS運用"],
    thumbnail: "/blog/eye-catch/tiktok-recruitment.webp",
  },
  
  // 新しい広告運用の失敗の記事を追加
  {
    id: "ad-operation-mistakes",
    title: "広告運用の失敗から学ぶ！回避すべき7つのミスと実践的な改善策",
    excerpt: "広告運用でよくある失敗事例と、それを回避するための実践的な対策を徹底解説。投資対効果を高め、ブランドイメージを守るための具体的なノウハウを紹介します。",
    date: "2025-03-04",
    author: "Stellarium マーケティング",
    categories: ["広告運用"],
    thumbnail: "/blog/eye-catch/ad-operation-mistakes.webp",
  },
  
  // 地方・田舎での広告運用成功術の記事を追加
  {
    id: "local-ad-management-strategy",
    title: "地方・田舎での広告運用成功術 | 都市部とは異なる戦略とアプローチ",
    excerpt: "都市部の広告戦略をそのまま地方や田舎に適用しても思うような成果は得られません。地域特性を理解し最適化された広告運用が成功への鍵です。",
    date: "2025-03-06",
    author: "Stellarium マーケティング",
    categories: ["広告運用"],
    thumbnail: "/blog/eye-catch/local-ad-management.jpg",
  },
]

// 以下の関数は既存のまま
export function getPostById(id: string): Post | undefined {
  return posts.find(post => post.id === id);
}

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentPosts(count: number = 3): Post[] {
  return getAllPosts().slice(0, count);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(post => post.categories.includes(category));
}

// getPostBySlug関数を追加
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// PC表示用のページネーション関数（1ページあたり9記事）
export function getPaginatedPosts(page: number = 1, perPage: number = 9): {
  posts: BlogPost[],
  totalPages: number,
  currentPage: number
} {
  const sortedPosts = getSortedPosts();
  const totalPages = Math.ceil(sortedPosts.length / perPage);
  const normalizedPage = page < 1 ? 1 : page > totalPages ? totalPages : page;
  const startIndex = (normalizedPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  
  return {
    posts: sortedPosts.slice(startIndex, endIndex),
    totalPages,
    currentPage: normalizedPage
  };
}
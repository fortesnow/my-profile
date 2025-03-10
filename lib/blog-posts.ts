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
    id: "mvp-personal-development",
    title: "【個人開発者必見】MVP開発で挫折しない5つの秘訣｜アイデアを最速で形にする方法",
    date: "2025-03-15",
    excerpt: "個人開発でよくある「完成しない」問題を解決するMVP開発の重要性と実践方法を解説。リソースが限られた個人開発者が効率的にアイデアを形にするための5つの具体的な秘訣と成功事例を紹介します。",
    category: "開発",
    slug: "mvp-personal-development",
    thumbnail: "/blog/eye-catch/mvp-personal-development.jpg",
    author: "Stellarium エンジニア"
  },
  {
    id: "web-production-failures",
    title: "WEB制作で失敗しないための7つのポイント｜経験者が語る回避策と対処法",
    date: "2025-03-11",
    excerpt: "WEB制作プロジェクトで頻繁に発生する失敗パターンとその対策を徹底解説。予算超過、スケジュール遅延、デザインのミスマッチ、コミュニケーション不足など、実際の事例に基づく具体的な回避策と対処法をご紹介します。",
    category: "Web制作",
    slug: "web-production-failures",
    thumbnail: "/blog/eye-catch/web-production-failures.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: "restaurant-instagram-marketing",
    title: "飲食店のInstagramマーケティング｜フォロワー3倍増の実践テクニック",
    date: "2025-02-20",
    excerpt: "飲食店の集客にInstagramを活用するための実践的なノウハウを解説。フォロワー数を3か月で3倍に増やした実例をもとに、投稿内容や頻度、ハッシュタグ戦略、UGC活用法まで、今すぐ使えるテクニックを紹介します。",
    category: "SNSマーケティング",
    slug: "restaurant-instagram-marketing",
    thumbnail: "/blog/eye-catch/for-instagram.png"
  },
  {
    id: "website-maintenance-stock-business",
    title: "ストックビジネスとしてのWeb保守｜安定収益の構築法",
    date: "2025-02-05",
    excerpt: "Webサイト保守をストックビジネスとして構築する方法を解説。一度の営業で継続的な収益を生み出す仕組み作りから、効率的な保守運用のための自動化ツール、顧客満足度を高めるレポーティングテクニックまで、実践的なノウハウを紹介します。",
    category: "Web制作",
    slug: "website-maintenance-stock-business",
    thumbnail: "/blog/eye-catch/for-website-maintenance.jpg"
  },
  {
    id: "ec-site-meta-ads-strategy",
    title: "ECサイトのMeta広告戦略｜ROAS200%を実現した出稿テクニック",
    date: "2025-01-25",
    excerpt: "ECサイトにおけるMeta広告（旧Facebook広告）の効果的な運用方法を解説。実際にROAS200%以上を達成したキャンペーン事例をもとに、ターゲティング設定、クリエイティブ制作のコツ、入札戦略まで、成果を上げるための具体的なテクニックを紹介します。",
    category: "広告運用",
    slug: "ec-site-meta-ads-strategy",
    thumbnail: "/blog/eye-catch/for-meta-ec.webp"
  },
  {
    id: "meta-ads-for-restaurant",
    title: "飲食店のMeta広告攻略｜来店客数1.5倍を実現した実践手法",
    date: "2025-01-10",
    excerpt: "飲食店がMeta広告（旧Facebook広告・Instagram広告）で集客を増やすための実践的な手法を解説。実際の広告運用で来店客数を1.5倍に増やした事例をもとに、ターゲティング、広告クリエイティブ、出稿スケジュールの最適化ポイントを紹介します。",
    category: '広告運用',
    slug: 'meta-ads-for-restaurant',
    thumbnail: '/blog/eye-catch/meta-ads-restaurant.jpg'
  },
  {
    id: "meta-ads-for-esthetic-salon",
    title: "エステサロンのMeta広告完全ガイド｜新規顧客獲得率を2倍にした戦略",
    date: "2024-12-15",
    excerpt: "エステサロン経営者向けのMeta広告（旧Facebook・Instagram広告）活用法を解説。新規顧客獲得率を2倍に向上させた実例をもとに、費用対効果の高い広告設計、ターゲティング、クリエイティブ制作のポイントを詳しく紹介します。",
    category: "広告運用",
    slug: "meta-ads-for-esthetic-salon",
    thumbnail: "/blog/eye-catch/meta-ads-esthetic.jpg"
  },
  {
    id: "notion-api-usage",
    title: "NotionAPIの実践的活用法｜業務効率化の具体例とコード実装",
    date: "2024-12-05",
    excerpt: "Notion APIを使ったビジネス業務の効率化方法を解説。実際の開発事例をもとに、データベース連携、自動タスク管理、Webサイトとの連携など、具体的な実装方法とサンプルコードを紹介します。",
    category: "API活用",
    slug: "notion-api-usage",
    thumbnail: "/blog/eye-catch/for-notion.jpeg"
  },
  {
    id: "homepage-success",
    title: "成功するホームページ制作の5つの鉄則｜失敗しない発注の秘訣",
    date: "2024-11-20",
    excerpt: "ビジネス成果につながるホームページ制作の鉄則を解説。数百サイトの制作経験から導き出した、目的設定からデザイン、コンテンツ作成、SEO対策、保守運用まで、失敗しないホームページ制作の発注方法を紹介します。",
    category: "Web制作",
    slug: "homepage-success",
    thumbnail: "/blog/eye-catch/homepage-success.jpg"
  },
  {
    id: "lp-development",
    title: "LP制作の費用対効果を最大化する7つの施策｜CVR3%向上の実例",
    date: "2024-11-05",
    excerpt: "ランディングページ（LP）の費用対効果を高めるための具体的な施策を解説。実際にコンバージョン率を3%向上させた事例をもとに、ユーザー心理に基づいたデザイン改善、コピーライティングのテクニック、ABテスト実施法までを紹介します。",
    category: "LP制作",
    slug: "lp-development",
    thumbnail: "/blog/eye-catch/for-LPO.webp"
  },
  {
    id: "medical-seo",
    title: "医療サイトのSEO対策完全ガイド｜専門性と信頼性を高める7つの施策",
    date: "2025-03-01",
    excerpt: "医療サイトに特化したSEO戦略を徹底解説。Googleの医療系コンテンツに対する評価基準「E-A-T」を満たすためのコンテンツ設計から、医療キーワードの選定方法、信頼性を高めるWebサイト構造まで、成果につながる具体的な施策をご紹介します。",
    category: "SEO",
    slug: "medical-seo",
    thumbnail: "/blog/eye-catch/medical-seo.jpg",
    author: "Stellarium SEOコンサルタント"
  }
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
    id: "medical-site-seo",
    title: "医療サイトのSEO対策完全ガイド｜患者集客数を2倍にする実践テクニック",
    excerpt: "医療機関のためのSEO対策を徹底解説。Googleで上位表示させるための具体的な施策から、医療特化型のコンテンツ戦略まで。E-E-A-Tを意識した患者集客に直結するSEO実践ノウハウを公開します。",
    date: "2025-03-08",
    author: "Stellarium マーケティング",
    categories: ["SEO対策"],
    thumbnail: "/blog/eye-catch/medical-site-seo.jpg",
  },
  {
    id: "farm-sns-marketing",
    title: "【2025年版】農家のSNS集客術｜売上を2倍にする実践的活用法",
    excerpt: "農家がSNSを活用して効果的に集客・販売促進する方法を徹底解説。Instagram、Facebook、TikTokなど各プラットフォームの特性を活かした投稿術から、直販・ファンづくりのコツまで。実例を交えた農家向けSNS活用ガイド。",
    date: "2025-03-08",
    author: "Stellarium マーケティング",
    categories: ["SNS運用"],
    thumbnail: "/blog/eye-catch/farm-sns-marketing.jpg",
  },
  {
    id: "luxury-sushi-marketing",
    title: "高級鮨店のマーケティング戦略｜客単価と集客率を高める実践テクニック",
    excerpt: "高級鮨店のマーケティング手法を徹底解説。顧客心理を理解した集客方法から、リピーター獲得のための施策、デジタルマーケティングの活用法まで、売上向上につながる具体的な戦略をプロが解説します。",
    date: "2025-03-07",
    author: "Stellarium マーケティング",
    categories: ["マーケティング"],
    thumbnail: "/blog/eye-catch/luxury-sushi-marketing.jpg",
  },
  {
    id: "luxury-sushi-branding",
    title: "高級鮨店のブランディング戦略｜差別化と顧客体験向上で成功する秘訣",
    excerpt: "高級鮨店のブランディング戦略を徹底解説。伝統と革新を融合させたコンセプト設計から、顧客体験の向上、SNS活用まで、他店と差別化するための具体的なアプローチを紹介します。ブランド価値を高め、固定客を増やすための実践的ノウハウを公開。",
    date: "2025-03-07",
    author: "Stellarium マーケティング",
    categories: ["マーケティング"],
    thumbnail: "/blog/eye-catch/luxury-sushi-branding.jpg",
  },
  {
    id: "tiktok-marketing-strategy",
    title: "TikTokマーケティング完全攻略｜集客効果を2倍にする実践戦略",
    excerpt: "TikTokを活用したマーケティング戦略を徹底解説。アルゴリズムの仕組みからバズらせるコンテンツ制作法、効果測定まで専門家が実践的なノウハウを公開。短期間で認知拡大と集客につなげる具体的な手法を学べます。",
    date: "2025-03-06",
    author: "Stellarium マーケティング",
    categories: ["SNS運用"],
    thumbnail: "/blog/eye-catch/tiktok-marketing-strategy.jpg",
  },
  {
    id: "tiktok-recruitment-strategy",
    title: "TikTok運用で人材採用を成功させる求人活用術 | 事例と実践テクニック",
    excerpt: "TikTokを活用した効果的な求人・採用戦略を徹底解説。Z世代へのリーチ方法や企業文化の発信テクニック、成功事例まで紹介します。",
    date: "2025-03-03",
    author: "Stellarium マーケティング",
    categories: ["SNS運用"],
    thumbnail: "/blog/eye-catch/tiktok-recruitment.webp",
  },
  {
    id: "ad-operation-mistakes",
    title: "広告運用の失敗から学ぶ！回避すべき7つのミスと実践的な改善策",
    excerpt: "広告運用でよくある失敗事例と、それを回避するための実践的な対策を徹底解説。投資対効果を高め、ブランドイメージを守るための具体的なノウハウを紹介します。",
    date: "2025-03-04",
    author: "Stellarium マーケティング",
    categories: ["広告運用"],
    thumbnail: "/blog/eye-catch/ad-operation-mistakes.webp",
  },
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
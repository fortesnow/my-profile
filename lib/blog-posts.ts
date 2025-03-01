// 記事データを一元管理するファイル
export interface BlogPost {
  id: number | string;  // 数値とスラッグ文字列の両方をサポート
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  thumbnail: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "【2025年最新】ECサイト・ネットショップのMeta広告運用完全ガイド｜費用対効果2倍のテクニック",
    excerpt: "ECサイト・ネットショップ向けMeta広告の戦略的運用方法を徹底解説。広告予算の最適化から高CVR施策まで具体的なノウハウを公開します。",
    date: "2025.03.01",
    category: "広告運用",
    slug: "ec-site-meta-ads-strategy",
    thumbnail: "/blog/eye-catch/for-meta-ec.webp"
  },
  {
    id: 2,
    title: '【2025年最新】飲食店のMeta広告運用完全ガイド | 集客率2倍の実践テクニック',
    excerpt: '飲食店向けMeta広告(旧Facebook広告)の運用方法を徹底解説。効果的なターゲティング、予算設定から実際の成功事例まで、集客アップにつながる広告運用テクニックをご紹介します。',
    date: '2025.03.01',
    category: '広告運用',
    slug: 'meta-ads-for-restaurant',
    thumbnail: '/blog/eye-catch/meta-ads-restaurant.jpg'
  },
  {
    id: 3,
    title: "【2025年最新】エステサロンのMeta広告運用完全ガイド",
    excerpt: "エステサロン向けMeta広告の運用方法を徹底解説。効果的なターゲティング、予算設定から実際の成功事例まで。",
    date: "2025.02.28",
    category: "広告運用",
    slug: "meta-ads-for-esthetic-salon",
    thumbnail: "/blog/eye-catch/meta-ads-esthetic.jpg"
  },
  {
    id: 4,
    title: "【2025年最新】Webサイト保守のストック型ビジネスモデル完全ガイド | 内容と相場",
    excerpt: "Webサイト保守をストック型ビジネスとして展開する方法を徹底解説。具体的なサービス内容や料金相場、クライアントへの提案方法まで、Web制作会社の収益安定化に役立つ情報をご紹介します。",
    date: "2025.03.02",
    category: "Web制作",
    slug: "website-maintenance-stock-business",
    thumbnail: "/blog/eye-catch/for-website-maintenance.jpg"
  },
  {
    id: 5,
    title: "Notion API でできること - ビジネスを自動化する11の活用例",
    excerpt: "Notion APIを活用したビジネス自動化の可能性を探ります。データベース操作からワークフロー自動化まで、実践的な11の活用例を解説します。",
    date: "2025.02.27",
    category: "API活用",
    slug: "notion-api-usage",
    thumbnail: "/blog/eye-catch/for-notion.jpeg"
  },
  {
    id: 6,
    title: "結果の出るホームページの作り方～プロが教える7つの成功戦略と実践事例",
    excerpt: "ホームページの成果を最大化するための実践的な戦略と具体的な改善手法を解説。",
    date: "2025.02.22",
    category: "Web制作",
    slug: "homepage-success",
    thumbnail: "/blog/eye-catch/homepage-success.jpg"
  },
  {
    id: 7,
    title: "【事業者向け】LPはただ作るだけではダメ！作ってからがスタートラインその理由とは？",
    excerpt: "LPの本質的な目的と、制作後の運用の重要性について解説します。",
    date: "2025.02.16",
    category: "LP制作",
    slug: "lp-development",
    thumbnail: "/blog/eye-catch/for-LPO.webp"
  }
];

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
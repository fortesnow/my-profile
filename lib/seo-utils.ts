import { BlogPost } from "./blog-posts";

// カテゴリー毎のSEO用メタ情報
export const categoryMetaInfo = {
  "広告運用": {
    title: "広告運用・集客効果を最大化するノウハウ | Web制作あおい",
    description: "Meta広告、Google広告などの広告運用テクニックやコスト効率の良い集客方法を解説。成功事例や具体的な運用方法を詳しく紹介します。",
    keywords: "広告運用, Meta広告, Google広告, 集客, ROI最大化, 広告効果測定, リターゲティング"
  },
  "Web制作": {
    title: "成果の出るWeb制作・ホームページ制作ノウハウ | Web制作あおい",
    description: "集客できるホームページ制作のポイントやSEO対策、ユーザー体験を高めるデザイン手法などを解説。成功事例と共に効果的なWeb制作を紹介します。",
    keywords: "Web制作, ホームページ制作, SEO対策, UX設計, レスポンシブデザイン, コンバージョン最適化"
  },
  "LP制作": {
    title: "成果を出すランディングページ制作のコツ | Web制作あおい",
    description: "コンバージョン率を高めるLP制作のポイントや改善方法、A/Bテスト手法などを解説。実際の成功事例を基に、効果的なLPの作り方を紹介します。",
    keywords: "LP制作, ランディングページ, コンバージョン率改善, A/Bテスト, セールスライティング, CVR最適化"
  },
  "API活用": {
    title: "業務効率化・自動化を実現するAPI活用術 | Web制作あおい",
    description: "NotionやGoogle、各種SaaSのAPIを活用したビジネス自動化や業務効率化の方法を解説。プログラミング初心者でも実践できるAPI連携術を紹介します。",
    keywords: "API活用, ビジネス自動化, Notion API, Google API, 業務効率化, ノーコード, 連携ツール"
  }
};

// ブログ記事からJSON-LDを生成する関数
export function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": "あおい"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Web制作 あおい",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.stellarium.jp/images/logo.png"
      }
    },
    "datePublished": post.date.replace(/\./g, '-'),
    "dateModified": post.date.replace(/\./g, '-'),
    "image": `https://www.stellarium.jp${post.thumbnail}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.stellarium.jp/blog/${post.slug}`
    },
    "keywords": [post.category, "マーケティング", "集客", "Web制作"],
    "articleSection": post.category
  };
} 
// サービスデータを一元管理するファイル
export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  icon: string;
  features: string[];
  price: string;
  slug: string;
  category: string;
  customContent?: {
    casestudy: { title: string; result: string; image: string }[];
    process: string[];
  };
}

export const services: Service[] = [
  {
    id: "development-service",
    title: "受託開発",
    description: "お客様のビジネス要件に合わせたカスタムWebアプリケーションを開発します。企画から設計、開発、運用までワンストップで対応可能です。",
    shortDescription: "ビジネスに最適化されたWebアプリケーション開発",
    thumbnail: "/services/development.jpg",
    icon: "code",
    features: [
      "要件定義・技術設計",
      "フロントエンド/バックエンド開発",
      "API開発・連携",
      "保守・運用サポート"
    ],
    price: "お問い合わせください",
    slug: "development-service",
    category: "開発"
  },
  {
    id: "lp-service",
    title: "LP制作",
    description: "コンバージョン率を最大化するランディングページを制作します。マーケティング戦略に基づいたデザインと、説得力のあるコピーライティングで成果を上げます。",
    shortDescription: "高CVRを実現するLPデザイン＆コピーライティング",
    thumbnail: "/services/lp.jpg",
    icon: "layout",
    features: [
      "ターゲット分析",
      "コンバージョン重視のデザイン",
      "SEO対策",
      "A/Bテスト設計"
    ],
    price: "15万円〜",
    slug: "lp-service",
    category: "デザイン",
    customContent: {
      casestudy: [
        {
          title: "美容クリニックのLP制作",
          result: "問い合わせ数が前月比180%増加",
          image: "/services/case-beauty.jpg"
        },
        // 他の事例...
      ],
      process: [
        "ヒアリング・目標設定",
        "ワイヤーフレーム作成",
        "デザイン制作",
        "コーディング",
        "公開・効果測定"
      ],
    }
  },
  {
    id: "coding-service",
    title: "コーディング",
    description: "デザインデータをHTML/CSS/JavaScriptを使って忠実に再現します。レスポンシブ対応、クロスブラウザ対応、アクセシビリティにも配慮したコーディングを提供します。",
    shortDescription: "高品質・高速表示のフロントエンド実装",
    thumbnail: "/services/coding.jpg",
    icon: "code-2",
    features: [
      "レスポンシブデザイン",
      "SEO最適化",
      "Webパフォーマンス改善",
      "アニメーション実装"
    ],
    price: "5万円〜",
    slug: "coding-service",
    category: "開発"
  },
  {
    id: "ads-service",
    title: "広告運用",
    description: "Google広告やMeta広告を活用した効果的な広告運用で、集客とコンバージョンを最大化します。データ分析に基づいた広告戦略で費用対効果を向上させます。",
    shortDescription: "ROI重視の広告戦略と継続的な改善",
    thumbnail: "/services/ads.jpg",
    icon: "line-chart",
    features: [
      "広告アカウント設計",
      "ターゲティング最適化",
      "クリエイティブ制作",
      "パフォーマンスレポート"
    ],
    price: "10万円〜/月",
    slug: "ads-service",
    category: "マーケティング"
  },
  {
    id: "seo-service",
    title: "SEO対策",
    description: "検索エンジンからの自然流入を増やすためのSEO対策を提供します。キーワード戦略、コンテンツ最適化、サイト構造の改善などを総合的に行います。",
    shortDescription: "検索順位向上と安定的なオーガニック流入獲得",
    thumbnail: "/services/seo.jpg",
    icon: "search",
    features: [
      "キーワード調査",
      "サイト内SEO",
      "コンテンツマーケティング",
      "被リンク獲得戦略"
    ],
    price: "8万円〜/月",
    slug: "seo-service",
    category: "マーケティング"
  },
  {
    id: "writing-service",
    title: "セールスライティング",
    description: "読者の心を動かし、行動を促すセールスコピーを制作します。お客様の商品・サービスの価値を最大限に伝え、成約率を高めるテキストを提供します。",
    shortDescription: "購買意欲を高める心理学ベースのコピー制作",
    thumbnail: "/services/writing.jpg",
    icon: "pen-line",
    features: [
      "ターゲット心理分析",
      "USP策定",
      "セールスストーリー構築",
      "CTA最適化"
    ],
    price: "7万円〜",
    slug: "writing-service",
    category: "コンテンツ"
  },
  {
    id: "ai-service",
    title: "AI開発",
    description: "ビジネスプロセスの効率化や新しい顧客体験を創出するAIソリューションを開発します。自然言語処理、画像認識、予測分析などの技術を活用したカスタムAI開発が可能です。",
    shortDescription: "業務効率化・顧客体験向上のためのAI実装",
    thumbnail: "/services/ai.jpg",
    icon: "brain-circuit",
    features: [
      "業務プロセス分析",
      "AIモデル開発・調整",
      "システム連携",
      "運用・保守"
    ],
    price: "要相談",
    slug: "ai-service",
    category: "開発"
  }
];

// カテゴリー別にサービスを取得
export function getServicesByCategory(category: string): Service[] {
  return services.filter(service => service.category === category);
}

// 全てのカテゴリーを取得
export function getAllCategories(): string[] {
  const categories = new Set(services.map(service => service.category));
  return Array.from(categories);
}

// サービスをスラッグで検索
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
} 
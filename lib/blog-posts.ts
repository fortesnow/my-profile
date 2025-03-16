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
    id: "clinic-seo-strategy",
    title: "【2025年最新】クリニックのSEO対策完全ガイド｜患者数を増やす実践テクニック",
    date: "2025-03-16",
    excerpt: "クリニック・医療機関専門のSEO対策を徹底解説。地域検索で上位表示させるためのローカルSEO施策から、医療コンテンツの作り方まで。実績に基づいた患者集客数アップの具体的手法を公開します。",
    category: "SEO対策",
    slug: "clinic-seo-strategy",
    thumbnail: "/blog/eye-catch/clinic-seo-strategy.png",
    author: "Stellarium マーケティング"
  },
  {
    id: "crm-marketing-customer-acquisition",
    title: "CRMマーケティングで売上増加！集客で無視出来ない実践テクニック",
    date: "2025-03-15",
    excerpt: "CRMマーケティングを活用して売上を増加させる実践的テクニックを解説。顧客データの戦略的活用から効率的な集客施策まで、ビジネス成長に必須の方法論をご紹介します。",
    category: "マーケティング",
    slug: "crm-marketing-customer-acquisition",
    thumbnail: "/blog/eye-catch/crm-marketing-customer-acquisition.png",
    author: "Stellarium マーケティング"
  },
  {
    id: "business-account-website-requirement",
    title: "法人口座の開設や融資申請でホームページは必要？実務家が解説する真実",
    date: "2025-03-15",
    excerpt: "法人口座の開設や事業融資の申請時にホームページは必要なのか、実務家の視点から徹底解説。審査に与える影響や、ホームページがない場合の対応策、効果的なホームページの作り方まで網羅。",
    category: "Webサイト活用",
    slug: "business-account-website-requirement",
    thumbnail: "/blog/eye-catch/business-account-website-requirement.png",
    author: "Stellarium マーケティング"
  },
  {
    id: "chiropractic-seo-strategy",
    title: "【実績公開】整骨院・整体院のSEO対策完全ガイド｜集客数を2倍にする戦略",
    date: "2025-03-14",
    excerpt: "整骨院・整体院のためのSEO対策を徹底解説。Googleで上位表示させるための具体的な施策から、業界特化型のコンテンツ戦略まで。地域密着型ビジネスの集客力を高める実践的なSEOノウハウを公開します。",
    category: "SEO対策",
    slug: "chiropractic-seo-strategy",
    thumbnail: "/blog/eye-catch/chiropractic-seo-strategy.png",
    author: "Stellarium マーケティング"
  },
  {
    id: "restaurant-marketing-strategy",
    title: "飲食店マーケティング戦略の最前線｜集客からリピーター獲得まで徹底解説",
    date: "2025-03-14",
    excerpt: "飲食店経営者必見のマーケティング戦略を徹底解説。地域密着型の集客施策からデジタルマーケティング、顧客体験設計まで、現場で即実践できる効果的な手法を具体例とともに紹介します。",
    category: "マーケティング",
    slug: "restaurant-marketing-strategy",
    thumbnail: "/blog/eye-catch/restaurant-marketing-strategy.jpeg",
    author: "Stellarium マーケティング"
  },
  {
    id: "local-seo-rural-areas",
    title: "地方でのローカルSEO対策完全ガイド｜都市部と差をつける効果的な戦略",
    date: "2025-03-14",
    excerpt: "地方・田舎でのローカルSEO対策を徹底解説。都市部とは異なる地域特性を活かし、Googleマップ上位表示やMEO対策など、地域密着型ビジネスの集客力を高める具体的な施策を紹介します。",
    category: "SEO対策",
    slug: "local-seo-rural-areas",
    thumbnail: "/blog/eye-catch/local-seo-rural-areas.png",
    author: "Stellarium マーケティング"
  },
  {
    id: "old-website-renewal-guide",
    title: "【2025年最新】古いホームページをリニューアルすべき5つの理由と成功事例",
    date: "2025-03-13",
    excerpt: "10年選手の古いホームページが抱える問題点と、最新のUI/UXを取り入れたリニューアル方法を解説。デザイン、SEO、モバイル対応などの視点から、ビジネスに貢献するサイトへの変革事例を紹介します。",
    category: "Web制作",
    slug: "old-website-renewal-guide",
    thumbnail: "/blog/eye-catch/old-website-renewal-guide.png",
    author: "Stellarium マーケティング"
  },
  {
    id: "ramen-instagram-strategy",
    title: "【集客率アップ】ラーメン店のインスタ運用方法｜フォロワー10倍の実践テクニック",
    date: "2025-03-12",
    excerpt: "ラーメン店オーナー向けにInstagramでの効果的な運用方法を解説。写真の撮り方からハッシュタグ戦略、投稿頻度まで、実店舗の集客につながる具体的なノウハウを紹介。フォロワー増加と来店促進のための実践的なガイドです。",
    category: "SNS運用",
    slug: "ramen-instagram-strategy",
    thumbnail: "/blog/eye-catch/ramen-instagram-strategy.webp",
    author: "Stellarium マーケティング"
  },
  {
    id: "meta-ads-beginners-guide",
    title: "【初心者必見】Meta広告が難しいと感じる3つの理由と解決策｜わかりやすく解説",
    date: "2025-03-11",
    excerpt: "Meta広告（旧Facebook広告）を始めたい初心者向けに、なぜ難しく感じるのか、その3つの原因と克服法を解説。実践的なステップとコツで、広告運用の壁を乗り越え、効果的なキャンペーンを実現するガイドです。",
    category: "広告運用",
    slug: "meta-ads-beginners-guide",
    thumbnail: "/blog/eye-catch/meta-ads-beginners-guide.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: "mvp-personal-development",
    title: "【個人開発者必見】MVP開発で挫折しない5つの秘訣｜アイデアを最速で形にする方法",
    date: "2025-03-11",
    excerpt: "個人開発でよくある「完成しない」問題を解決するMVP開発の重要性と実践方法を解説。リソースが限られた個人開発者が効率的にアイデアを形にするための5つの具体的な秘訣と成功事例を紹介します。",
    category: "開発",
    slug: "mvp-personal-development",
    thumbnail: "/blog/eye-catch/mvp-personal-development.jpg",
    author: "Stellarium エンジニア"
  },
  {
    id: "restaurant-instagram-marketing",
    title: "飲食店のインスタグラム活用ガイド｜集客率2倍を実現した実践テクニック",
    date: "2025-03-10",
    excerpt: "飲食店がインスタグラムを効果的に活用するための実践的なガイド。フォロワー獲得から売上アップまで、具体的な投稿内容や写真撮影のコツ、分析方法まで徹底解説。事例を交えながら成功するためのノウハウを紹介します。",
    category: "SNS運用",
    slug: "restaurant-instagram-marketing",
    thumbnail: "/blog/eye-catch/restaurant-instagram-marketing.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: "lp-freelance-cost",
    title: "フリーランスのLP制作費用の相場と選び方｜失敗しない依頼のコツ",
    date: "2025-03-10",
    excerpt: "フリーランスに依頼するLP制作の費用相場と選び方を徹底解説。予算別のメリット・デメリットや依頼時の注意点、相場を決める5つの要因まで。失敗しない依頼方法と成功事例から学ぶ実践的なガイドです。",
    category: "LP制作",
    slug: "lp-freelance-cost",
    thumbnail: "/blog/eye-catch/lp-freelance-cost.jpeg",
    author: "Stellarium マーケティング"
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
    id: "medical-site-seo",
    title: "医療サイトのSEO対策完全ガイド｜患者集客数を2倍にする実践テクニック",
    date: "2025-03-08",
    excerpt: "医療機関のためのSEO対策を徹底解説。Googleで上位表示させるための具体的な施策から、医療特化型のコンテンツ戦略まで。E-E-A-Tを意識した患者集客に直結するSEO実践ノウハウを公開します。",
    category: "SEO対策",
    slug: "medical-site-seo",
    thumbnail: "/blog/eye-catch/medical-site-seo.jpg",
    author: "Stellarium マーケティング"
  },
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
    title: "TikTok運用で人材採用を成功させる求人活用術 | 事例と実践テクニック",
    excerpt: "TikTokを活用した効果的な求人・採用戦略を徹底解説。Z世代へのリーチ方法や企業文化の発信テクニック、成功事例まで紹介します。採用担当者必見の実践的ガイド。",
    date: "2025-03-03",
    category: "SNS運用",
    slug: "tiktok-recruitment-strategy",
    thumbnail: "/blog/eye-catch/tiktok-recruitment.webp",
    author: "Stellarium マーケティング"
  },
  {
    id: 4,
    title: "Webサイト保守のストック型ビジネスモデル完全ガイド | 内容と相場",
    excerpt: "Webサイト保守をストック型ビジネスとして展開する方法を徹底解説。具体的なサービス内容や料金相場、クライアントへの提案方法まで、Web制作会社の収益安定化に役立つ情報をご紹介します。",
    date: "2025-03-02",
    category: "Web制作",
    slug: "website-maintenance-stock-business",
    thumbnail: "/blog/eye-catch/for-website-maintenance.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: "studio-seo-optimization",
    slug: "studio-seo-optimization",
    title: "StudioのSEO対策完全ガイド｜レンダリング方式から理解する根本的弱点と克服法",
    date: "2025-03-01",
    category: "SEO対策",
    excerpt: "UniverseのStudio SEOが弱い本質的理由をSSR/CSRの技術的観点から徹底解説。内部構造を理解し、効果的に検索順位を向上させるための具体的な実装方法を紹介します。",
    thumbnail: "/blog/eye-catch/for-studio.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: 1,
    title: "ECサイト・ネットショップのMeta広告運用完全ガイド｜費用対効果2倍のテクニック",
    excerpt: "ECサイト・ネットショップ向けMeta広告の戦略的運用方法を徹底解説。広告予算の最適化から高CVR施策まで具体的なノウハウを公開します。",
    date: "2025-03-01",
    category: "広告運用",
    slug: "ec-site-meta-ads-strategy",
    thumbnail: "/blog/eye-catch/for-meta-ec.webp",
    author: "Stellarium マーケティング"
  },
  {
    id: 2,
    title: '飲食店のMeta広告運用完全ガイド | 集客率2倍の実践テクニック',
    excerpt: '飲食店向けMeta広告(旧Facebook広告)の運用方法を徹底解説。効果的なターゲティング、予算設定から実際の成功事例まで、集客アップにつながる広告運用テクニックをご紹介します。',
    date: '2025-03-01',
    category: '広告運用',
    slug: 'meta-ads-for-restaurant',
    thumbnail: '/blog/eye-catch/meta-ads-restaurant.jpg',
    author: "Stellarium マーケティング"
  },
  {
    id: 3,
    title: "エステサロンのMeta広告運用完全ガイド",
    excerpt: "エステサロン向けMeta広告の運用方法を徹底解説。効果的なターゲティング、予算設定から実際の成功事例まで。",
    date: "2025-02-28",
    category: "広告運用",
    slug: "meta-ads-for-esthetic-salon",
    thumbnail: "/blog/eye-catch/meta-ads-esthetic.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: 5,
    title: "Notion API でできること - ビジネスを自動化する11の活用例",
    excerpt: "Notion APIを活用したビジネス自動化の可能性を探ります。データベース操作からワークフロー自動化まで、実践的な11の活用例を解説します。",
    date: "2025-02-27",
    category: "API活用",
    slug: "notion-api-usage",
    thumbnail: "/blog/eye-catch/for-notion.jpeg",
    author: "Stellarium マーケティング"
  },
  {
    id: 6,
    title: "結果の出るホームページの作り方～プロが教える7つの成功戦略と実践事例",
    excerpt: "ホームページの成果を最大化するための実践的な戦略と具体的な改善手法を解説。",
    date: "2025-02-22",
    category: "Web制作",
    slug: "homepage-success",
    thumbnail: "/blog/eye-catch/homepage-success.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: 7,
    title: "【事業者向け】LPはただ作るだけではダメ！作ってからがスタートラインその理由とは？",
    excerpt: "LPの本質的な目的と、制作後の運用の重要性について解説します。",
    date: "2025-02-16",
    category: "LP制作",
    slug: "lp-development",
    thumbnail: "/blog/eye-catch/for-LPO.webp",
    author: "Stellarium マーケティング"
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
    title: "TikTokマーケティング完全攻略｜集客効果を2倍にする実践戦略",
    excerpt: "TikTokを活用したマーケティング戦略を徹底解説。アルゴリズムの仕組みからバズらせるコンテンツ制作法、効果測定まで専門家が実践的なノウハウを公開。短期間で認知拡大と集客につなげる具体的な手法を学べます。",
    date: "2025-03-06",
    category: "SNS運用",
    slug: "tiktok-marketing-strategy",
    thumbnail: "/blog/eye-catch/tiktok-marketing-strategy.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: "farm-sns-marketing",
    title: "【2025年版】農家のSNS集客術｜売上を2倍にする実践的活用法",
    date: "2025-03-08",
    excerpt: "農家がSNSを活用して効果的に集客・販売促進する方法を徹底解説。Instagram、Facebook、TikTokなど各プラットフォームの特性を活かした投稿術から、直販・ファンづくりのコツまで。実例を交えた農家向けSNS活用ガイド。",
    category: "SNS運用",
    slug: "farm-sns-marketing",
    thumbnail: "/blog/eye-catch/farm-sns-marketing.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: "luxury-sushi-marketing",
    title: "高級鮨店のマーケティング戦略｜客単価と集客率を高める実践テクニック",
    date: "2025-03-07",
    excerpt: "高級鮨店のマーケティング手法を徹底解説。顧客心理を理解した集客方法から、リピーター獲得のための施策、デジタルマーケティングの活用法まで、売上向上につながる具体的な戦略をプロが解説します。",
    category: "マーケティング",
    slug: "luxury-sushi-marketing",
    thumbnail: "/blog/eye-catch/luxury-sushi-marketing.jpg",
    author: "Stellarium マーケティング"
  },
  {
    id: "luxury-sushi-branding",
    title: "高級鮨店のブランディング戦略｜差別化と顧客体験向上で成功する秘訣",
    date: "2025-03-07",
    excerpt: "高級鮨店のブランディング戦略を徹底解説。伝統と革新を融合させたコンセプト設計から、顧客体験の向上、SNS活用まで、他店と差別化するための具体的なアプローチを紹介します。ブランド価値を高め、固定客を増やすための実践的ノウハウを公開。",
    category: "マーケティング",
    slug: "luxury-sushi-branding",
    thumbnail: "/blog/eye-catch/luxury-sushi-branding.jpg",
    author: "Stellarium マーケティング"
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

// 別の記事フォーマット用の型定義
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
    id: "crm-marketing-customer-acquisition",
    title: "CRMマーケティングで売上増加！集客で無視出来ない実践テクニック",
    excerpt: "CRMマーケティングを活用して売上を増加させる実践的テクニックを解説。顧客データの戦略的活用から効率的な集客施策まで、ビジネス成長に必須の方法論をご紹介します。",
    date: "2025-03-15",
    author: "Stellarium マーケティング",
    categories: ["マーケティング", "CRM"],
    thumbnail: "/blog/eye-catch/crm-marketing-customer-acquisition.png",
  },
  {
    id: "chiropractic-seo-strategy",
    title: "【実績公開】整骨院・整体院のSEO対策完全ガイド｜集客数を2倍にする戦略",
    excerpt: "整骨院・整体院のためのSEO対策を徹底解説。Googleで上位表示させるための具体的な施策から、業界特化型のコンテンツ戦略まで。地域密着型ビジネスの集客力を高める実践的なSEOノウハウを公開します。",
    date: "2025-03-14",
    author: "Stellarium マーケティング",
    categories: ["SEO対策"],
    thumbnail: "/blog/eye-catch/chiropractic-seo-strategy.png",
  },
  {
    id: "restaurant-marketing-strategy",
    title: "飲食店マーケティング戦略の最前線｜集客からリピーター獲得まで徹底解説",
    excerpt: "飲食店経営者必見のマーケティング戦略を徹底解説。地域密着型の集客施策からデジタルマーケティング、顧客体験設計まで、現場で即実践できる効果的な手法を具体例とともに紹介します。",
    date: "2025-03-14",
    author: "Stellarium マーケティング",
    categories: ["マーケティング"],
    thumbnail: "/blog/eye-catch/restaurant-marketing-strategy.jpeg",
  },
  {
    id: "local-seo-rural-areas",
    title: "地方でのローカルSEO対策完全ガイド｜都市部と差をつける効果的な戦略",
    excerpt: "地方・田舎でのローカルSEO対策を徹底解説。都市部とは異なる地域特性を活かし、Googleマップ上位表示やMEO対策など、地域密着型ビジネスの集客力を高める具体的な施策を紹介します。",
    date: "2025-03-14",
    author: "Stellarium マーケティング",
    categories: ["SEO対策"],
    thumbnail: "/blog/eye-catch/local-seo-rural-areas.png",
  },
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
  }
];

// 投稿IDから記事を取得する関数
export function getPostById(id: string): Post | undefined {
  return posts.find(post => post.id === id);
}

// すべての記事を取得する関数
export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 最近の記事を取得する関数
export function getRecentPosts(count: number = 3): Post[] {
  return getAllPosts().slice(0, count);
}

// カテゴリーで記事をフィルタリングする関数
export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(post => post.categories.includes(category));
}

// スラッグから記事を取得する関数
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// ページネーション用の関数（1ページあたり9記事）
export function getPaginatedPosts(page: number = 1, perPage: number = 9): {
  posts: BlogPost[],
  totalPages: number,
  currentPage: number
} {
  const sortedPosts = getSortedPosts();
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / perPage);
  
  // ページ番号の検証と調整
  const validatedPage = page < 1 ? 1 : page > totalPages ? totalPages : page;
  
  // 表示する記事の範囲を計算
  const startIndex = (validatedPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalPosts);
  
  return {
    posts: sortedPosts.slice(startIndex, endIndex),
    totalPages,
    currentPage: validatedPage
  };
}
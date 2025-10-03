# AI/LLM最適化ガイド（AIO・LLMO）

このドキュメントは、Stellariumサイトに実装されているAI/LLM最適化（AIO・LLMO）について説明します。

## 📋 目次

1. [概要](#概要)
2. [実装済みの最適化](#実装済みの最適化)
3. [ファイル構成](#ファイル構成)
4. [動作確認方法](#動作確認方法)
5. [メンテナンス](#メンテナンス)

---

## 概要

AI/LLM最適化（AIO: AI Optimization、LLMO: Large Language Model Optimization）は、ChatGPT、Perplexity、Geminiなどの**AI検索エンジン**や**LLM**が、あなたのウェブサイトを正しく理解し、引用・推薦できるようにするための最適化手法です。

### なぜAI/LLM最適化が重要なのか？

- 📈 **AI検索での可視性向上**: ChatGPT Search、Perplexity、Geminiなどでの検索結果に表示
- 🎯 **正確な情報提供**: AIがあなたのサービスを正確に理解・説明できる
- 🔮 **将来対応**: AI検索時代に備えた基盤構築
- 💡 **ブランド認知向上**: AIによる引用・推薦の機会増加

---

## 実装済みの最適化

### 1. 構造化データ（JSON-LD）

#### Organization + ProfessionalService スキーマ
```typescript
// components/schema.ts
- 組織情報（名称、説明、ロゴ）
- 提供サービス一覧（hasOfferCatalog）
- 使用技術スタック（knowsAbout）
- 連絡先情報（contactPoint）
- SNSアカウント（sameAs）
```

**場所**: `app/layout.tsx` の `<head>` タグ内

**効果**:
- AI検索エンジンがサービス内容を正確に把握
- Googleリッチリザルトに表示
- ナレッジグラフへの表示可能性

#### Website スキーマ
サイト全体の情報とサイト内検索機能の定義。

#### Article スキーマ（ブログ用）
ブログ記事の構造化データ。記事がAI検索結果に表示されやすくなる。

#### その他のスキーマ
- **BreadcrumbList**: サイト構造の明確化
- **FAQPage**: Q&Aコンテンツの構造化
- **WebSite**: サイト検索の定義

### 2. llms.txt

**場所**: `public/llms.txt`

**仕様**: [llmstxt.org](https://llmstxt.org/)

**内容**:
- サイトの包括的な説明（5,000文字以上）
- 全サービスの詳細説明
- 技術スタック
- 対応業種・業界
- 主要ページリスト
- ブログコンテンツ
- よくある質問（FAQ）
- 運営者情報

**対応AI/LLM**:
- Claude（Anthropicが提唱）
- ChatGPT
- Perplexity
- Gemini
- その他のLLM

### 3. ai.txt

**場所**: `public/ai.txt`

**内容**:
- サイト概要（簡潔版）
- 提供サービス一覧
- 使用技術
- 対応業種
- 連絡先
- AIへの利用許諾

**特徴**:
- 簡潔で読みやすい形式
- llms.txt の補完的な役割

### 4. robots.txt の拡張

**場所**: `app/robots.ts`、`public/robots.txt`

**AI/LLMクローラーの明示的許可**:
```
GPTBot          # ChatGPT
ChatGPT-User    # ChatGPT Browse
Google-Extended # Google Bard/Gemini
anthropic-ai    # Claude
ClaudeBot       # Claude Web Crawler
PerplexityBot   # Perplexity AI
FacebookBot     # Meta AI
```

**AI/LLMリソースへの参照**:
```
llms.txt: https://www.stellarium.jp/llms.txt
ai.txt: https://www.stellarium.jp/ai.txt
```

### 5. メタデータの強化

**場所**: `app/layout.tsx`、`app/page.tsx`

**拡張項目**:
- より詳細で具体的なタイトル・説明文
- 技術スタックの明記（React、Next.js、TypeScript）
- AI向けカスタムメタタグ（`ai:friendly`、`ai:content_type`など）
- llms.txt、ai.txt へのlinkタグ

### 6. HTMLヘッダーへのリンク追加

```html
<link rel="llms-txt" href="/llms.txt" type="text/plain" />
<link rel="ai-txt" href="/ai.txt" type="text/plain" />
```

AIクローラーがファイルを簡単に発見できるようにHTMLヘッダーに追加。

---

## ファイル構成

```
my-profile/
├── app/
│   ├── layout.tsx          # 構造化データ、llms.txt/ai.txt リンク
│   ├── page.tsx            # AI向けメタデータ
│   ├── robots.ts           # AIクローラー許可設定
│   └── sitemap.ts          # サイトマップ
├── components/
│   └── schema.ts           # 構造化データ生成関数
├── public/
│   ├── llms.txt           # LLM向けサイト情報
│   ├── ai.txt             # AI向けサイト情報
│   └── robots.txt         # robots.txt（バックアップ）
└── docs/
    └── AI-OPTIMIZATION.md  # このドキュメント
```

---

## 動作確認方法

### 1. 構造化データの検証

#### Google Rich Results Test
```
https://search.google.com/test/rich-results
```
URLを入力して、構造化データが正しく認識されているか確認。

#### Schema.org Validator
```
https://validator.schema.org/
```
JSON-LDの構文が正しいか確認。

### 2. llms.txt / ai.txt の確認

ブラウザで直接アクセス:
```
https://www.stellarium.jp/llms.txt
https://www.stellarium.jp/ai.txt
```

### 3. robots.txt の確認

```
https://www.stellarium.jp/robots.txt
```

AIクローラーへの許可とllms.txt/ai.txtへの参照が記載されているか確認。

### 4. HTMLヘッダーの確認

ブラウザの開発者ツールで`<head>`タグ内を確認:
```html
<link rel="llms-txt" href="/llms.txt" type="text/plain" />
<link rel="ai-txt" href="/ai.txt" type="text/plain" />
<script type="application/ld+json">...</script>
```

### 5. AI検索での確認（デプロイ後）

**ChatGPT**:
```
「React Next.js フリーランス 日本」で検索
「Stellarium Web制作」で検索
```

**Perplexity**:
```
「Next.js 開発 フリーランス おすすめ」で検索
```

**Google Gemini**:
```
「TypeScript React 開発者 日本」で検索
```

---

## メンテナンス

### 定期的な更新（推奨）

#### llms.txt（月1回）
- [ ] 新しいサービスの追加
- [ ] 最新のブログ記事3件を更新
- [ ] 実績・事例の追加
- [ ] 技術スタックの更新

#### 構造化データ（サービス変更時）
- [ ] 新サービス追加時に`hasOfferCatalog`を更新
- [ ] 使用技術変更時に`knowsAbout`を更新
- [ ] SNSアカウント追加時に`sameAs`を更新

#### ai.txt（3ヶ月に1回）
- [ ] サービス内容の簡潔な更新
- [ ] 連絡先情報の確認

### ブログ記事投稿時

各ブログ記事に構造化データを追加:

```typescript
// app/blog/[slug]/page.tsx
import { generateArticleSchema } from '@/components/schema';

export async function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  
  return {
    // ... メタデータ
  };
}

export default function BlogPost({ params }) {
  const article = getArticle(params.slug);
  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.description,
    url: `https://www.stellarium.jp/blog/${params.slug}`,
    datePublished: article.date,
    image: article.thumbnail,
    category: article.category,
    keywords: article.tags,
  });
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      {/* 記事コンテンツ */}
    </>
  );
}
```

### 新サービス追加時

1. `components/schema.ts` の `hasOfferCatalog` に追加
2. `public/llms.txt` のサービス一覧に追加
3. `public/ai.txt` のサービス一覧に追加

---

## トラブルシューティング

### 構造化データがGoogleで認識されない

**原因**:
- JSON-LDの構文エラー
- 必須プロパティの欠落

**解決方法**:
1. [Schema.org Validator](https://validator.schema.org/) でバリデーション
2. [Google Rich Results Test](https://search.google.com/test/rich-results) で確認
3. エラーメッセージに従って修正

### AIクローラーがサイトをクロールしていない

**原因**:
- robots.txt で拒否されている
- サイトがまだインデックスされていない

**解決方法**:
1. `robots.txt` で該当クローラーが許可されているか確認
2. 1-2週間待つ（初回クロールには時間がかかる）
3. Google Search Console でサイトマップを送信

### llms.txt が404エラー

**原因**:
- ファイルが `public/` ディレクトリに配置されていない
- デプロイ時にファイルが含まれていない

**解決方法**:
1. `public/llms.txt` の存在を確認
2. ビルドログで除外されていないか確認
3. 再デプロイ

---

## 参考リンク

### 仕様・ドキュメント
- [llmstxt.org](https://llmstxt.org/) - llms.txt の公式仕様
- [Schema.org](https://schema.org/) - 構造化データの標準
- [Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) - Google公式ガイド

### 検証ツール
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

### AI/LLMクローラー情報
- [OpenAI GPTBot](https://platform.openai.com/docs/gptbot)
- [Google Extended](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers)
- [Anthropic Claude](https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)

---

## 更新履歴

- **2025-10-03**: 初版作成（llms.txt、ai.txt、構造化データ、robots.txt拡張）

---

*このドキュメントは、Stellariumサイトの開発者とメンテナーのために作成されました。*


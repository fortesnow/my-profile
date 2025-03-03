import { Suspense } from 'react';
import Loading from './loading';
import BlogHeader from '../components/BlogHeader';
import BlogContent from '../components/BlogContent';
import RelatedPosts from '../components/RelatedPosts';

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div>
      {/* ヘッダー部分は即時表示 */}
      <BlogHeader slug={params.slug} />
      
      {/* コンテンツ部分は別途ローディング */}
      <Suspense fallback={<Loading />}>
        <BlogContent slug={params.slug} />
      </Suspense>
      
      {/* 関連記事も別途ローディング */}
      <Suspense fallback={<p>関連記事を読み込み中...</p>}>
        <RelatedPosts currentSlug={params.slug} />
      </Suspense>
    </div>
  );
}

// 再検証（再生成）の時間を設定
export const revalidate = 3600; // 1時間ごとに再検証

// または動的レンダリングと静的レンダリングを使い分ける
export const dynamic = 'auto';
export const dynamicParams = true; 
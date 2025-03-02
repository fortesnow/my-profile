import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'セールスライティングサービス | Web制作 あおい',
  description: '社団法人のプレスリリース作成や大手メディアへの出稿支援...',
  // 残りのメタデータ...
};

export default function WritingServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
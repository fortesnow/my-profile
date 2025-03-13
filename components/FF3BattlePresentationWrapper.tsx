'use client';

import React, { useEffect, useState } from 'react';
import { FF3BattlePresentation } from "@/components/FF3BattlePresentation";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import ProfileClient from '@/components/profile';
import { getLatestPosts, BlogPost } from '@/lib/blog-posts';
import { ProfileData } from '@/components/types';

// プレゼンテーションデータの型定義
interface PresentationData {
  creator: string;
  audience: string;
  theme: string;
  brand: {
    name: string;
    colorPalette: string;
    font: string;
  };
  presentationType: string;
  slides: {
    title: string;
    subtitle: string;
    content: string;
    dialog: string;
  }[];
}

interface FF3BattlePresentationWrapperProps {
  presentationData: PresentationData;
  profileData?: ProfileData; // プロフィールデータ用のプロップ
}

export const FF3BattlePresentationWrapper: React.FC<FF3BattlePresentationWrapperProps> = ({ 
  presentationData,
  profileData 
}) => {
  // 最新の投稿を取得
  const latestPosts = getLatestPosts(3);
  // レスポンシブ対応のための状態管理
  const [isMobile, setIsMobile] = useState(false);

  // 画面サイズの変更を検知して状態を更新
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // 初期チェック
    checkIfMobile();
    
    // リサイズイベントでチェック
    window.addEventListener('resize', checkIfMobile);
    
    // クリーンアップ
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="ff3-battle-content">
      {/* FF3バトルプレゼンテーション */}
      <div 
        className="ff3-presentation-wrapper" 
        style={{ 
          marginTop: isMobile ? '80px' : '60px', // モバイル表示時はより大きなマージンを設定
          overflowX: 'hidden' // 横スクロールを防止
        }}
      >
        <FF3BattlePresentation presentationData={presentationData} />
      </div>

      {/* プロフィールセクション */}
      {profileData && <ProfileClient data={profileData} />}

      {/* ブログセクション */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0d1631] to-[#0f172a]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-16 text-center">
            ブログ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post: BlogPost) => (
              <article key={post.id} className="bg-[#0d1631]/70 rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-cyan-900/20 transition-all group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-4 z-10">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <time className="text-gray-500 text-sm">{post.date}</time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-teal-500 transition-all">
              ブログ一覧を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}; 
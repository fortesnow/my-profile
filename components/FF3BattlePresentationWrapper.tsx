'use client';

import React, { useEffect, useState } from 'react';
import { FF3BattlePresentation } from "@/components/FF3BattlePresentation";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import ProfileClient from '@/components/profile';
import { getLatestPosts, BlogPost } from '@/lib/blog-posts';
import { ProfileData } from '@/components/types';
import { Logos3 } from '@/components/ui/logos3';
import { Banner } from '@/components/ui/banner';

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
          marginTop: isMobile ? '80px' : '100px', // PCの場合は100pxに変更（元は60px）
          overflowX: 'hidden' // 横スクロールを防止
        }}
      >
        <FF3BattlePresentation presentationData={presentationData} />
      </div>

      {/* 新デザインのバナーセクション */}
      <section className="relative py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
        {/* Figma背景マーク */}
        <div className="absolute inset-0 flex items-center justify-center opacity-3 pointer-events-none">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/figma-logo.png"
              alt=""
              fill
              className="object-contain"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
        {/* 追加の装飾的なマーク（オプション） */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-2 sm:opacity-3 pointer-events-none">
          <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16">
            <Image
              src="/figma-logo.png"
              alt=""
              width={64}
              height={64}
              className="w-full h-full opacity-15 sm:opacity-20"
            />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 opacity-2 sm:opacity-3 pointer-events-none">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12">
            <Image
              src="/figma-logo.png"
              alt=""
              width={48}
              height={48}
              className="w-full h-full opacity-10 sm:opacity-15"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-full max-w-full">
            <div className="text-sm sm:text-base md:text-lg px-2 sm:px-4 py-3 sm:py-4 bg-slate-50/10 backdrop-blur-sm border border-slate-200/20 rounded-lg shadow-lg">
              <p className="font-semibold text-slate-900 dark:text-slate-100 break-words leading-tight mb-3">
                実際のサイトをベンチマークにFigmaでLPO工程を公開中！
              </p>
              <Link
                href="https://www.figma.com/design/BAWB2oFJTl49jzpbVWXovH/Stellarium%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88%E6%94%B9%E5%96%84?node-id=0-1&t=1sk6lHbif0FFNQGJ-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              >
                <div className="flex items-center mr-2">
                  <Image
                    src="/figma-logo.png"
                    alt="Figma"
                    width={14}
                    height={14}
                    className="mr-1 flex-shrink-0"
                  />
                  <span className="whitespace-nowrap">Check!</span>
                </div>
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* プロフィールセクション */}
      {profileData && <ProfileClient data={profileData} />}

      {/* ロゴセクション */}
      <Logos3 />

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
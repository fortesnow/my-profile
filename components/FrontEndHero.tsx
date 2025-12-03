'use client';

import React from 'react';
import Image from 'next/image';

// Figmaデザインを忠実に再現したFront-endセクション
// 元のデザイン: https://www.figma.com/design/fnbQoe9jOc6xKgcMPnHWFZ/Pokemon-Cards--Community-?node-id=2021-117

export default function FrontEndHero() {
  return (
    <section 
      className="frontend-section relative w-full overflow-hidden"
      style={{ 
        backgroundColor: '#78878e',
        aspectRatio: '1980 / 1024',
        minHeight: '400px',
      }}
    >
      {/* 背景ベクター素材（Figmaからエクスポート） */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: '-1%',
          top: '-1%',
          width: '62%',
          height: '102%',
        }}
      >
        {/* インラインSVGで背景波形を描画 */}
        <svg 
          viewBox="0 0 1185 1012" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M282.36 973.292C98.8601 931.792 164.9 1012.61 -34 1011.49L-28.3161 -0.187141L1184.36 -0.187133C977.327 -1.35029 1145.36 237.792 998.86 290.792C852.36 343.792 802.36 480.292 831.86 560.792C861.36 641.292 834.154 774.951 627.86 773.792C421.567 772.633 511.588 1025.13 282.36 973.292Z" 
            fill="#4F6C6E"
          />
        </svg>
      </div>

      {/* 右側の装飾的な楕円（Figmaからエクスポート） */}
      <div 
        className="absolute pointer-events-none"
        style={{
          right: '-10%',
          top: '40%',
          width: '55%',
          height: '85%',
        }}
      >
        <svg 
          viewBox="0 0 542 419" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ transform: 'rotate(-25deg)' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <circle 
            cx="390.093" 
            cy="390.093" 
            r="389.5" 
            transform="rotate(-25.014 390.093 390.093)" 
            fill="#BDBDBD" 
            stroke="black"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* マウスホールド（透明背景、左上） */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: '24%',
          top: '6.6%',
          width: '23%',
          height: '21.5%',
          opacity: 0.16,
        }}
      >
        <Image
          src="/images/frontend-section/maushold-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* タイトル: Front-end */}
      <div 
        className="absolute flex items-center justify-center z-10"
        style={{
          left: '5%',
          top: '23%',
          padding: '10px',
        }}
      >
        <h2 
          className="text-white font-bold leading-normal"
          style={{
            fontFamily: "'Bungee', sans-serif",
            fontSize: 'clamp(32px, 5vw, 96px)',
            textShadow: '0px 4px 8px rgba(63, 64, 68, 0.5)',
          }}
        >
          Front-end
        </h2>
      </div>

      {/* 説明テキスト */}
      <div 
        className="absolute flex items-center justify-center z-10"
        style={{
          left: '5.3%',
          top: '35%',
          padding: '10px',
        }}
      >
        <p 
          className="text-white leading-relaxed"
          style={{
            fontFamily: "'DotGothic16', sans-serif",
            fontSize: 'clamp(12px, 1.6vw, 32px)',
          }}
        >
          設計単位で適切なパフォーマンス構築。<br />
          バックエンドと自主開発仕込みの馬力と自力で<br />
          設計思想まで拘りながら高速開発を実現します
        </p>
      </div>

      {/* ミニカード4枚（左下） */}
      <div 
        className="absolute flex gap-[1%] z-10"
        style={{
          left: '5.3%',
          top: '55%',
        }}
      >
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="relative cursor-pointer transition-transform hover:scale-105"
            style={{
              width: 'clamp(40px, 5.5vw, 106px)',
              aspectRatio: '106 / 148',
              boxShadow: '0px 26px 4px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            <Image
              src="/images/frontend-section/nextjs-card.png"
              alt={`Mini card ${index}`}
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 768px) 15vw, 106px"
            />
          </div>
        ))}
      </div>

      {/* アンダーラインバー */}
      <div 
        className="absolute z-10"
        style={{
          left: '5.6%',
          top: '71%',
          width: '6%',
          height: '4px',
          background: 'linear-gradient(90deg, #ffd700, #ffaa00)',
          borderRadius: '2px',
        }}
      />

      {/* マウスホールド（メイン、中央下） - 透過画像で自然に */}
      <div 
        className="absolute z-10"
        style={{
          left: '32.7%',
          top: '56.3%',
          width: '37.8%',
        }}
      >
        <div 
          className="relative w-full"
          style={{
            aspectRatio: '728 / 351',
          }}
        >
          <Image
            src="/images/frontend-section/maushold-main.png"
            alt="Maushold illustration"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80vw, 40vw"
          />
        </div>
      </div>

      {/* Next.jsカード（右上、回転） */}
      <div 
        className="absolute flex items-center justify-center z-10"
        style={{
          right: '5%',
          top: '12%',
          width: '32.6%',
          height: '71.3%',
        }}
      >
        <div 
          className="relative transition-transform hover:scale-105"
          style={{
            transform: 'rotate(-25deg)',
            width: '66.5%',
            aspectRatio: '428.837 / 605.579',
            boxShadow: '13px 50px 48px 0px #364d4e',
          }}
        >
          <Image
            src="/images/frontend-section/nextjs-card.png"
            alt="Next.js Pokemon Card"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 50vw, 25vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

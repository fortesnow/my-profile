'use client';

import React, { useEffect, useState } from 'react';
import { FF3BattlePresentation } from "@/components/FF3BattlePresentation";
import ProfileClient from '@/components/profile';
import { ProfileData } from '@/components/types';
import { Logos3 } from '@/components/ui/logos3';

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

      {/* プロフィールセクション */}
      {profileData && <ProfileClient data={profileData} />}

      {/* ロゴセクション */}
      <Logos3 />

    </div>
  );
}; 
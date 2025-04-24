'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

/**
 * モバイル最適化されたヒーローセクション
 * 情報密度を抑え、核となる価値提案に集中したデザイン
 * パフォーマンスとアクセシビリティを強化
 */
export default function MobileHero() {
  const [isVisible, setIsVisible] = useState(false)
  
  // 遅延させてアニメーションを開始（パフォーマンス向上のため）
  useEffect(() => {
    // ページロード後に少し遅延させてアニメーションを開始
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // アニメーション定義
  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: (delay = 0) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0] // イージングカーブの最適化
      }
    })
  }

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 pb-16 pt-24 text-center touch-manipulation">
      {/* グラデーションバックグラウンド - レイヤー数を減らしパフォーマンス向上 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 z-[-1]" />
      
      {/* 背景エフェクト - 少ない要素で効果的な表現 */}
      <div className="absolute inset-0 z-[-1] opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-purple-400 rounded-full filter blur-[80px]" />
      </div>
      
      <div className="w-full max-w-md mx-auto">
        {/* ロゴ/アイコン */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0}
          className="mb-6"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">S</span>
          </div>
        </motion.div>
        
        {/* メインタイトル */}
        <motion.h1 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0.1}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Web制作で<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">未来を創る</span>
        </motion.h1>
        
        {/* サブタイトル（価値提案） */}
        <motion.p 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0.2}
          className="text-lg text-gray-300 mb-8"
        >
          高品質なウェブサイト制作と成果を出すLP設計で<br />
          あなたのビジネスを加速させます
        </motion.p>
        
        {/* CTAボタン - タッチ最適化 */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0.3}
          className="mb-16"
        >
          <Link 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300 touch-manipulation mobile-touch-target w-full sm:w-auto text-center"
          >
            お問い合わせ
          </Link>
        </motion.div>
        
        {/* スクロールインジケーター - 簡素化 */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center"
        >
          <span className="text-gray-400 text-xs mb-1">詳しく見る</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-4 h-4 border-b-2 border-r-2 border-gray-400 transform rotate-45"
          />
        </motion.div>
      </div>
    </section>
  )
} 
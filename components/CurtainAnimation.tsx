'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * カーテンアニメーションコンポーネント
 * ページ読み込み時に縦線が上から下に出現し、その後カーテンが中央から左右へ開くエフェクト
 * yui540.comのようなカーテンアニメーションを実装
 */
export function CurtainAnimation() {
  const [isVisible, setIsVisible] = useState(true)
  const [linePhase, setLinePhase] = useState<'appearing' | 'disappearing' | 'hidden'>('appearing')
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // 縦線出現(0.4秒) → 縦線消失(0.2秒) → カーテン開く(0.8秒) = 合計1.4秒後に非表示
    const lineDisappearTimer = setTimeout(() => {
      setLinePhase('disappearing')
    }, 400) // 縦線出現完了後、消失開始

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 1400) // 全てのアニメーション完了後

    return () => {
      clearTimeout(lineDisappearTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  // アニメーション無効化設定がある場合は表示しない
  if (shouldReduceMotion) {
    return null
  }

  // アニメーション完了後は表示しない
  if (!isVisible) {
    return null
  }

  // 縦線の色（ベージュ系の明るい華やかな色）
  const lineColor = '#FAF8F3'
  // カーテンの色（背景と同じ暗い色）
  const curtainColor = '#eedcb3'

  return (
    <>
      {/* 縦線 - 上から下に出現し、その後消失 */}
      {linePhase !== 'hidden' && (
        <motion.div
          className="fixed top-0 left-1/2 w-1 h-screen z-[10000] pointer-events-none"
          style={{
            backgroundColor: lineColor,
            transform: 'translateX(-50%)',
            transformOrigin: 'top',
            willChange: 'transform',
          }}
          initial={{ scaleY: 0 }}
          animate={linePhase === 'appearing' ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{
            duration: linePhase === 'appearing' ? 0.4 : 0.2,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          onAnimationComplete={() => {
            if (linePhase === 'disappearing') {
              setLinePhase('hidden')
            }
          }}
        />
      )}
      {/* 左カーテン */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-screen z-[9999] pointer-events-none"
        style={{
          backgroundColor: curtainColor,
          willChange: 'transform',
        }}
        initial={{ 
          x: 0,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
        animate={{ 
          x: '-100%',
          borderTopRightRadius: '2rem',
          borderBottomRightRadius: '2rem',
        }}
        exit={{ x: '-100%' }}
        transition={{
          duration: 0.8,
          delay: 0.6, // 縦線出現(0.4秒) + 縦線消失(0.2秒)後に開始
          ease: [0.25, 0.1, 0.25, 1.0], // 既存パターンと統一
        }}
      />
      {/* 右カーテン */}
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-screen z-[9999] pointer-events-none"
        style={{
          backgroundColor: curtainColor,
          willChange: 'transform',
        }}
        initial={{ 
          x: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        animate={{ 
          x: '100%',
          borderTopLeftRadius: '2rem',
          borderBottomLeftRadius: '2rem',
        }}
        exit={{ x: '100%' }}
        transition={{
          duration: 0.8,
          delay: 0.6, // 縦線出現(0.4秒) + 縦線消失(0.2秒)後に開始
          ease: [0.25, 0.1, 0.25, 1.0], // 既存パターンと統一
        }}
      />
    </>
  )
}


'use client'

import { Analytics } from '@vercel/analytics/react'
import { Component, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

/**
 * Vercel Analyticsを安全に読み込むコンポーネント
 * 広告ブロックなどでエラーが発生してもサイトの動作を継続
 */
export class SafeAnalytics extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    // エラーが発生した場合はAnalyticsを無効化
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 開発環境でのみエラーをログ出力
    if (process.env.NODE_ENV === 'development') {
      console.warn('Vercel Analyticsの読み込みに失敗しました:', error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      // エラーが発生した場合は何も表示しない
      return null
    }

    try {
      return <Analytics />
    } catch (error) {
      // レンダリング時のエラーもキャッチ
      if (process.env.NODE_ENV === 'development') {
        console.warn('Analyticsレンダリングエラー:', error)
      }
      return null
    }
  }
}


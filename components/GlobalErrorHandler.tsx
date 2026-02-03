'use client'

import { useEffect } from 'react'

/**
 * グローバルエラーハンドラーコンポーネント
 * 広告ブロックなどで発生する未処理エラーをキャッチし、サイトの動作を継続
 */
export function GlobalErrorHandler() {
  useEffect(() => {
    // 未処理のエラーをキャッチ
    const handleError = (event: ErrorEvent) => {
      // 広告ブロック関連のエラーは無視
      const errorMessage = event.message?.toLowerCase() || ''
      const errorSource = event.filename?.toLowerCase() || ''
      
      const isAdBlockError = 
        errorMessage.includes('googletagmanager') ||
        errorMessage.includes('gtm') ||
        errorMessage.includes('analytics') ||
        errorMessage.includes('ad') ||
        errorSource.includes('googletagmanager') ||
        errorSource.includes('analytics') ||
        errorSource.includes('gtm')

      if (isAdBlockError) {
        // 広告ブロック関連のエラーは無視してサイトの動作を継続
        event.preventDefault()
        if (process.env.NODE_ENV === 'development') {
          console.warn('広告ブロック関連のエラーを無視しました:', event.message)
        }
        return false
      }

      // その他のエラーは開発環境でのみログ出力
      if (process.env.NODE_ENV === 'development') {
        console.error('未処理のエラー:', event.error)
      }
    }

    // Promise rejectionをキャッチ
    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason?.toString()?.toLowerCase() || ''
      
      const isAdBlockRejection =
        reason.includes('googletagmanager') ||
        reason.includes('gtm') ||
        reason.includes('analytics') ||
        reason.includes('ad')

      if (isAdBlockRejection) {
        // 広告ブロック関連のPromise rejectionは無視
        event.preventDefault()
        if (process.env.NODE_ENV === 'development') {
          console.warn('広告ブロック関連のPromise rejectionを無視しました:', reason)
        }
        return false
      }

      // その他のrejectionは開発環境でのみログ出力
      if (process.env.NODE_ENV === 'development') {
        console.error('未処理のPromise rejection:', event.reason)
      }
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleRejection)
    }
  }, [])

  return null
}


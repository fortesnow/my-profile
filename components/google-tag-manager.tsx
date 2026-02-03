'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const GTM_ID = 'GTM-5G3WZRZK'

export function GoogleTagManager() {
  useEffect(() => {
    // dataLayerが存在しない場合は初期化（広告ブロック対策）
    if (typeof window !== 'undefined' && !window.dataLayer) {
      window.dataLayer = window.dataLayer || []
    }
  }, [])

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        onError={(e) => {
          // エラーを無視してサイトの動作を継続
          console.warn('Google Tag Managerの読み込みに失敗しました（広告ブロックの可能性があります）')
        }}
        onLoad={() => {
          // 読み込み成功時のログ（開発時のみ）
          if (process.env.NODE_ENV === 'development') {
            console.log('Google Tag Managerが正常に読み込まれました')
          }
        }}
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              try {
                w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                j.onerror=function(){/* エラーを無視 */};
                if(f && f.parentNode){
                  f.parentNode.insertBefore(j,f);
                }
              } catch(e) {
                // 広告ブロックなどでエラーが発生してもサイトの動作を継続
                console.warn('GTM初期化エラー:', e);
              }
            })(window,document,'script','dataLayer','${GTM_ID}');
          `
        }}
      />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
} 
import React from "react";
import { metadata } from "./metadata";
import Image from "next/image";

export { metadata };

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* ヘッダーセクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ご質問・ご相談など、お気軽にお問い合わせください。
            <br />丁寧かつ迅速にご対応いたします。
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-20">
          {/* 問い合わせカード: LINE */}
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-[1.01] border border-gray-700/50">
            <div className="relative h-40 bg-gradient-to-r from-green-500/20 to-green-400/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/images/contact.png" 
                  alt="LINE" 
                  width={80} 
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">LINEでのお問い合わせ</h2>
              <p className="text-gray-300 mb-6">
                LINEでのお問い合わせが最も迅速です。営業時間内であれば通常できるだけ早くご返信いたします。
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>即時対応が可能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>写真や資料の共有が簡単</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>いつでもメッセージを送れる</span>
                </li>
              </ul>
              <a 
                href="https://page.line.me/nag6553k?oat_content=url&openQrModal=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-[#06C755] hover:bg-[#05B74B] text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                LINE公式アカウントを友だち追加
              </a>
              <p className="text-xs text-gray-400 mt-4 text-center">
                QRコードからも追加できます
              </p>
              <div className="flex justify-center mt-2">
                <div className="w-32 h-32 bg-white p-2 rounded-lg">
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400 text-xs">QRコード</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* メールお問い合わせセクション */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl overflow-hidden shadow-xl border border-blue-700/30 p-10 text-center relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                メールでのお問い合わせ
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
                メールでのお問い合わせは下記のGoogleフォームからお願いいたします。
                <br />ご質問・ご相談内容をご記入いただければ、順次ご返信いたします。
              </p>
              
              <a 
                href="https://forms.gle/qXBE65hXf2EJzsJ97" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-8 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 mb-8"
              >
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Googleフォームでお問い合わせ
                </div>
              </a>
              
              <div className="flex justify-center space-x-2 mb-6">
                <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
                <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
              </div>
              
              <div className="bg-blue-900/30 py-4 px-6 rounded-lg inline-block">
                <p className="text-gray-300">
                  LINEでのお問い合わせも引き続き受け付けております
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* コミットメントセクション */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
            お問い合わせに対する私のコミットメント
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">迅速な対応</h3>
              <p className="text-gray-300">
                お問い合わせはすべて24時間以内に初回返信。お急ぎの場合はLINEが最適です。
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">個人情報の保護</h3>
              <p className="text-gray-300">
                頂いた情報は厳重に管理し、お問い合わせ対応以外の目的では使用いたしません。
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">明確な提案</h3>
              <p className="text-gray-300">
                ご相談内容に応じて、お客様に最適なソリューションをご提案いたします。
              </p>
            </div>
          </div>
        </div>
        
        {/* よくある質問 */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
            よくあるご質問
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2 text-white">お問い合わせから契約までの流れを教えてください</h3>
              <p className="text-gray-300">
                お問い合わせ → 初回ヒアリング(無料) → お見積り・提案 → ご契約という流れが一般的です。お客様のご希望に合わせて柔軟に対応いたします。
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2 text-white">料金の目安を知りたいです</h3>
              <p className="text-gray-300">
                サービスや規模によって異なりますが、まずはお気軽にご相談ください。ご予算に合わせたプランのご提案も可能です。
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2 text-white">対応エリアはどこまでですか？</h3>
              <p className="text-gray-300">
                オンラインでのサポートは全国対応しております。対面でのミーティングは東京都内および近郊エリアが中心ですが、オンラインミーティングも積極的に活用しております。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
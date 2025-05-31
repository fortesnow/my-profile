import React from 'react';
import { MapPin, Star, Users, TrendingUp, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function MEOServicePage() {
  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      title: "Googleマップ最適化",
      description: "Googleビジネスプロフィールの完全最適化で、地域検索での上位表示を実現"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: "口コミ管理",
      description: "レビュー獲得戦略と適切な返信で、店舗の信頼性と評価を向上"
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "来店促進",
      description: "魅力的な投稿とイベント情報で、実際の来店につながる施策を実施"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: "効果測定・改善",
      description: "詳細なレポートと継続的な改善で、MEO効果を最大化"
    }
  ];

  const plans = [
    {
      name: "ベーシックプラン",
      price: "¥30,000",
      period: "/月",
      features: [
        "Googleビジネスプロフィール最適化",
        "基本的な投稿作成（週2回）",
        "口コミ返信代行",
        "月次レポート"
      ]
    },
    {
      name: "スタンダードプラン",
      price: "¥50,000",
      period: "/月",
      popular: true,
      features: [
        "投稿作成",
        "Googleビジネスプロフィール最適化",
        "写真投稿",
        "競合分析",
        "キーワード戦略立案",
        "詳細レポート"
      ]
    },
    {
      name: "プレミアムプラン",
      price: "¥80,000",
      period: "/月",
      features: [
        "スタンダードプランの全機能",
        "毎日投稿",
        "イベント・キャンペーン企画",
        "複数店舗対応",
        "専任担当者",
        "電話サポート"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      {/* ヘッダーセクション */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MapPin className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            MEO対策サービス
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Googleマップで上位表示を実現し、地域のお客様に確実に見つけてもらえる店舗づくりをサポートします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              無料相談を申し込む
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#plans"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              料金プランを見る
            </Link>
          </div>
        </div>

        {/* 特徴セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            サービスの特徴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MEOとは */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">MEO対策とは？</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-blue-200 mb-4">
                  MEO（Map Engine Optimization）とは、Googleマップでの検索結果において、店舗情報を上位に表示させるための最適化施策です。
                </p>
                <p className="text-blue-200 mb-4">
                  「地域名 + 業種」で検索した際に、あなたの店舗が上位3位以内に表示されることで、来店数の大幅な増加が期待できます。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-200">来店数の増加</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-200">認知度の向上</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-200">売上の向上</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">こんな業種におすすめ</h3>
                <ul className="space-y-2 text-blue-200">
                  <li>• 飲食店・カフェ</li>
                  <li>• 美容院・エステサロン</li>
                  <li>• 歯科・クリニック</li>
                  <li>• 整体・マッサージ</li>
                  <li>• 不動産・士業</li>
                  <li>• 小売店・専門店</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 料金プラン */}
        <div id="plans" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            料金プラン
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      人気プラン
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-blue-400">
                      {plan.price}
                    </span>
                    <span className="text-blue-200 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors text-center block ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  このプランを選ぶ
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* お問い合わせセクション */}
        <div id="contact" className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            無料相談・お問い合わせ
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                まずは無料相談から
              </h3>
              <p className="text-blue-200 mb-6">
                現在の店舗の状況をお聞かせください。MEO対策の効果や具体的な施策について、無料でご相談いただけます。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-white">03-1234-5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-white">info@example.com</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-white mb-2">お名前</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">メールアドレス</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">店舗名・会社名</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60"
                    placeholder="株式会社サンプル"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">お問い合わせ内容</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60"
                    placeholder="MEO対策についてご相談したいことをお書きください"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  無料相談を申し込む
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
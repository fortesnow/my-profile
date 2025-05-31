import React from 'react';
import { MapPin, Star, Users, TrendingUp, CheckCircle, ArrowRight, Target, BarChart, Shield, Zap } from 'lucide-react';
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

  const advantages = [
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: "競合が弱い今がチャンス",
      description: "多くの店舗がMEOの重要性に気づいていない、または中途半端な対策しかしていないため、専門的な取り組みで地域で頭一つ抜け出せます。"
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      title: "資産性の高い施策",
      description: "広告が「消費」であるのに対し、MEOは積み上げるほど価値が増す「資産」。一度構築すれば継続的な集客効果を生み出します。"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "包括的なMEO戦略",
      description: "ビジネスプロフィールだけでなく、サイテーション、SEO、SNS戦略を組み合わせた包括的なアプローチで確実な結果を実現。"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "広告費ゼロで継続集客",
      description: "広告のように「止めると効果ゼロ」ではなく、適切な運用で広告費をかけずとも継続的な集客効果が期待できます。"
    }
  ];

  const plans = [
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
        "電話サポート",
        "サイテーション最適化",
        "SEO連携戦略",
        "SNS統合戦略"
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
            ダサいことする前に結果の出るMEO対策で差別化しましょう。
          </h1>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto mb-8">
            実店舗の集客において、今すぐ何よりも優先して取り組むべきなのがMEO対策です。<br />
            競合が手薄な今だからこそ、専門的なMEO戦略で地域で頭一つ抜け出せる大きなチャンスがあります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://lin.ee/ATZ4bog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              無料相談を申し込む
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="#plans"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              料金プランを見る
            </Link>
          </div>
        </div>

        {/* なぜ広告よりMEOが先なのか */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">なぜ広告よりMEOが先なのか？</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">広告の限界</h3>
                <p className="text-blue-200 mb-4">
                  広告運用はランニングコストとしてお金を払い続けないと効果が止まってしまいます。止めた途端にパタッと反応がなくなる自転車操業のようなもので、精神的にもコスト的にもしんどいものです。
                </p>
                <p className="text-blue-200 mb-4">
                  特に小規模事業者や個人経営の店舗では、広告運用に対するリテラシーがないため丁半博打になりがちです。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">MEOの可能性</h3>
                <p className="text-blue-200 mb-4">
                  MEOの最大の魅力は、一度適切に設定・運用すれば、広告費をかけずとも継続的な集客効果が期待できる点です。
                </p>
                <p className="text-blue-200 mb-4">
                  「近くのカフェ」「〇〇駅 ラーメン」こんな風に、今まさに「行きたい！」と思っている人が検索した時に、あなたのお店がGoogleマップの上位に表示されることの価値は計り知れません。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MEOの優位性 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            MEOが絶好のチャンスである4つの理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {advantage.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-blue-200">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 包括的なMEO戦略 */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">真のMEO対策は包括的なアプローチが必要</h2>
            <p className="text-blue-200 mb-6">
              MEO対策というとGoogleビジネスプロフィールの管理ばかりに目が行きがちですが、本当に効果を出すためには以下の要素を組み合わせた戦略が必要です：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">サイテーション最適化</h4>
                <p className="text-sm text-blue-200">
                  外部サイトでのNAP情報（店名・住所・電話番号）の統一と、自然な言及を増やす戦略的アプローチ
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">SEO連携戦略</h4>
                <p className="text-sm text-blue-200">
                  ウェブサイトのSEO対策とMEOを連動させることで、検索エンジン全体での露出を最大化
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">SNS統合戦略</h4>
                <p className="text-sm text-blue-200">
                  InstagramやTikTokでの戦略的情報発信で、ユーザーからの自然な言及とエンゲージメントを促進
                </p>
              </div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <a
                  href="https://lin.ee/ATZ4bog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors text-center block ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  このプランを選ぶ
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 資産性の強調セクション */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">MEOは「資産性の高い財産」</h2>
            <p className="text-blue-200 mb-6 text-center max-w-4xl mx-auto">
              広告が「消費」であるのに対し、MEOは積み上げれば積み上げるほど価値が増す「資産」のようなもの。一度しっかり構築すれば、少ない労力で安定した集客効果を生み出し続けてくれる可能性を秘めています。
            </p>
            <p className="text-cyan-300 text-center font-semibold">
              競合が弱い、薄い、甘いのトリプルパンチの状態で、まだ本気を出していない今だからこそ少しの努力で大きなアドバンテージを得られます。
            </p>
          </div>
        </div>

        {/* お問い合わせセクション */}
        <div className="container mx-auto px-6 pb-20">
          <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-md rounded-lg p-12 max-w-4xl mx-auto text-center border border-cyan-500/20">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              競合が弱い今こそ、<br className="md:hidden" />MEO対策で差別化しませんか？
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              私たちのMEO対策サービスは、ただのビジネスプロフィール管理ではなく、<br className="hidden md:block" />
              資産性の高い包括的なマーケティング戦略です。
            </p>
            <a
              href="https://lin.ee/ATZ4bog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <span>無料相談を予約する</span>
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <p className="mt-6 text-gray-400 text-sm">
              LINEでお気軽にご相談ください。通常24時間以内に返信いたします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
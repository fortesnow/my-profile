'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './FF3BattlePresentation.module.css';
import { BattleEffects, EffectType } from './BattleEffects';
import { SlideTransition, TransitionType } from './SlideTransition';
import { SettingsPanel, FF3Settings } from './SettingsPanel';
import { Settings } from 'lucide-react';
import { PixelCharacter } from './PixelCharacter';

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

interface FF3BattlePresentationProps {
  presentationData: PresentationData;
}

// デフォルト設定
const defaultSettings: FF3Settings = {
  theme: 'classic',
  backgroundStyle: 'pixel',
  monsterDisplay: true,
  effectsLevel: 'standard',
  textSpeed: 50,
  autoAdvance: false,
  autoAdvanceDelay: 5
};

// ダメージエフェクト用の型を追加
type MBattleEffect = 'fire' | 'ice' | 'thunder' | 'heal' | 'defend' | 'attack' | 'victory' | 'damage';

export const FF3BattlePresentation: React.FC<FF3BattlePresentationProps> = ({ presentationData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const [selectedCommand, setSelectedCommand] = useState(-1);
  const [dialogText, setDialogText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [showMagicMenu, setShowMagicMenu] = useState(false);
  const [battleState, setBattleState] = useState<'command' | 'action' | 'victory'>('command');
  const [showDamage, setShowDamage] = useState(false);
  const [damageValue, setDamageValue] = useState(0);
  const [monsterType, setMonsterType] = useState<string>('dragon');
  const [isMonsterAttacked, setIsMonsterAttacked] = useState(false);
  
  // エフェクト表示用の状態
  const [activeEffect, setActiveEffect] = useState<EffectType | null>(null);
  const [effectTarget, setEffectTarget] = useState<{ x: number, y: number } | null>(null);
  
  // モンスターエフェクト用の状態
  const [monsterEffect, setMonsterEffect] = useState<MBattleEffect | null>(null);
  
  // モンスターコンテナの参照を追加
  const monsterContainerRef = useRef<HTMLDivElement>(null);

  // キャラクターデータ
  const characters = [
    { name: "戦士", hp: 999, mp: 50, type: "fighter" },
    { name: "モンク", hp: 800, mp: 30, type: "monk" },
    { name: "白魔道士", hp: 600, mp: 150, type: "whitemage" },
    { name: "黒魔道士", hp: 550, mp: 200, type: "blackmage" }
  ];

  // コマンド
  const commands = ["たたかう", "まほう", "ぼうぎょ", "にげる"];
  
  // 魔法
  const magics = ["ファイア", "ブリザド", "サンダー", "ケアル"];

  // スライド遷移用の状態
  const [isSlideTransitioning, setIsSlideTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState<TransitionType>('fade');

  // 設定パネル用の状態
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<FF3Settings>(defaultSettings);

  // 次のスライドへ（トランジション付き）
  const goToNextSlide = useCallback(() => {
    if (currentSlide < presentationData.slides.length - 1 && !isSlideTransitioning) {
      // ランダムな遷移効果を選択
      const transitions: TransitionType[] = ['wipe-left', 'flash', 'battle-transition', 'fade'];
      const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
      setTransitionType(randomTransition);
      
      // トランジション開始
      setIsSlideTransitioning(true);
      
      // トランジション後にスライドを変更
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        
        // トランジション完了を少し遅らせてスライド変更を見せる
        setTimeout(() => {
          setIsSlideTransitioning(false);
        }, 100);
      }, 500);
    }
  }, [currentSlide, isSlideTransitioning, presentationData.slides.length]);

  // 前のスライドへ（トランジション付き）
  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0 && !isSlideTransitioning) {
      // ランダムな遷移効果を選択（前に戻る場合は右からのワイプを含める）
      const transitions: TransitionType[] = ['wipe-right', 'fade', 'flash'];
      const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
      setTransitionType(randomTransition);
      
      // トランジション開始
      setIsSlideTransitioning(true);
      
      // トランジション後にスライドを変更
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        
        // トランジション完了を少し遅らせてスライド変更を見せる
        setTimeout(() => {
          setIsSlideTransitioning(false);
        }, 100);
      }, 500);
    }
  }, [currentSlide, isSlideTransitioning]);

  // スライド変更時の処理
  useEffect(() => {
    // スライド変更時の処理をここに記述
  }, [currentSlide]);

  // 自動進行の処理
  useEffect(() => {
    if (settings.autoAdvance && !isSlideTransitioning && !showMagicMenu && battleState === 'command') {
      const timer = setTimeout(() => {
        goToNextSlide();
      }, settings.autoAdvanceDelay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentSlide, settings.autoAdvance, settings.autoAdvanceDelay, isSlideTransitioning, showMagicMenu, battleState, goToNextSlide]);

  // テキスト速度の適用
  useEffect(() => {
    if (textIndex < dialogText.length) {
      // 速度を 10ms（高速）〜 100ms（低速）の範囲でマッピング
      const typingSpeed = 100 - (settings.textSpeed * 0.9);
      const timer = setTimeout(() => setTextIndex(prev => prev + 1), typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [dialogText, textIndex, settings.textSpeed]);

  // タイプライターエフェクト
  useEffect(() => {
    const currentSlideDialog = presentationData.slides[currentSlide]?.dialog || '';
    setDialogText(currentSlideDialog);
    setTextIndex(0);
  }, [currentSlide, presentationData.slides]);

  // モンスターコンポーネント - ボス画像を表示
  const Monster = () => {
    const monsterRef = useRef<HTMLDivElement>(null);
    const [damage, setDamage] = useState<number | null>(null);
    
    useEffect(() => {
      if (monsterEffect === 'damage' && monsterRef.current) {
        // ダメージエフェクト
        setDamage(Math.floor(Math.random() * 9999) + 1);
        setTimeout(() => setDamage(null), 1500);
        
        // 被ダメージアニメーション
        monsterRef.current.animate([
          { filter: 'brightness(1)', transform: 'translateX(0)' },
          { filter: 'brightness(2)', transform: 'translateX(-10px)' },
          { filter: 'brightness(2)', transform: 'translateX(10px)' },
          { filter: 'brightness(1)', transform: 'translateX(0)' }
        ], {
          duration: 300,
          iterations: 1
        });
      }
    }, []);

    return (
      <>
        <div ref={monsterRef} className={styles.monster}></div>
        {damage && (
          <div className={styles.damageNumber}>
            {damage}
          </div>
        )}
      </>
    );
  };

  // エフェクト完了時の処理
  const handleEffectComplete = () => {
    setActiveEffect(null);
    setMonsterEffect(null);
  };

  // マジック実行時などにモンスターエフェクトを設定
  const applyMonsterEffect = (effect: MBattleEffect) => {
    setMonsterEffect(effect);
    // 一定時間後にエフェクトをクリア
    setTimeout(() => setMonsterEffect(null), 1500);
  };

  // 設定パネルの表示/非表示を切り替え
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  // 設定の更新
  const handleSettingsChange = (newSettings: FF3Settings) => {
    setSettings(newSettings);
  };

  // 現在の背景スタイルを取得
  const getBackgroundStyle = () => {
    return {
      backgroundImage: settings.backgroundStyle === 'pixel' 
        ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3"><circle cx="1.5" cy="1.5" r="0.5" fill="white" opacity="0.5"/></svg>'), linear-gradient(to bottom, transparent 50%, rgba(0, 10, 30, 0.5) 100%)`
        : settings.backgroundStyle === 'stars'
          ? `radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 2px), linear-gradient(to bottom, transparent 50%, rgba(0, 10, 30, 0.5) 100%)`
          : settings.backgroundStyle === 'mountains'
            ? `linear-gradient(rgba(6, 17, 60, 0.7) 20px, transparent 100px), linear-gradient(to bottom, transparent 90%, rgba(0, 13, 60, 0.8) 100%)`
            : 'linear-gradient(to bottom, #000428, #004e92)',
      backgroundSize: settings.backgroundStyle === 'pixel' 
        ? '50px 50px, 100% 100%' 
        : settings.backgroundStyle === 'stars'
          ? '50px 50px, 100% 100%'
          : '100% 100%'
    };
  };

  // コマンド実行処理
  const executeCommand = (commandIndex: number) => {
    if (battleState !== 'command') return;
    
    setSelectedCommand(commandIndex);
    
    // コマンド別の処理
    if (commandIndex === 0) { // たたかう
      setBattleState('action');
      
      // モンスターの位置を取得してエフェクトターゲットを設定
      if (monsterContainerRef.current) {
        const rect = monsterContainerRef.current.getBoundingClientRect();
        setEffectTarget({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }
      
      // 攻撃エフェクトを表示
      setActiveEffect('attack');
      
      // モンスターエフェクトを設定
      setMonsterEffect('damage');
      
      setTimeout(() => {
        setActiveEffect(null);
        setMonsterEffect(null);
        goToNextSlide();
        setBattleState('command');
        setSelectedCommand(-1);
      }, 1500);
    } 
    else if (commandIndex === 1) { // まほう
      setShowMagicMenu(true);
    } 
    else if (commandIndex === 2) { // ぼうぎょ
      setBattleState('action');
      
      // 防御エフェクトを表示
      if (monsterContainerRef.current) {
        const rect = monsterContainerRef.current.getBoundingClientRect();
        setEffectTarget({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
        setActiveEffect('defend');
      }
      
      setTimeout(() => {
        setActiveEffect(null);
        setBattleState('command');
        setSelectedCommand(-1);
      }, 1000);
    } 
    else if (commandIndex === 3) { // にげる
      setCurrentSlide(0);
      setSelectedCommand(-1);
    }
  };

  // 魔法実行処理
  const executeMagic = (magicIndex: number) => {
    setShowMagicMenu(false);
    setBattleState('action');
    
    // モンスターの位置を取得してエフェクトターゲットを設定
    if (monsterContainerRef.current) {
      const rect = monsterContainerRef.current.getBoundingClientRect();
      setEffectTarget({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
    
    // 魔法タイプに応じたエフェクトを表示
    let effectType: EffectType = 'attack';
    switch (magicIndex) {
      case 0: // ファイア
        effectType = 'fire';
        break;
      case 1: // ブリザド
        effectType = 'ice';
        break;
      case 2: // サンダー
        effectType = 'thunder';
        break;
      case 3: // ケアル
        effectType = 'heal';
        break;
    }
    setActiveEffect(effectType);
    
    // モンスターエフェクトを設定（ケアル以外の場合）
    if (magicIndex !== 3) {
      setMonsterEffect('damage');
    }
    
    setTimeout(() => {
      setActiveEffect(null);
      setMonsterEffect(null);
      goToNextSlide();
      setBattleState('command');
      setSelectedCommand(-1);
    }, 1800);
  };

  return (
    <div className={`${styles.battleContainer} ${styles[`theme-${settings.theme}`]}`}>
      {/* バトルフィールド（上部50%） */}
      <div className={styles.battleField}>
        {/* パララックス背景 */}
        <div className={styles.parallaxBackground} style={getBackgroundStyle()}></div>
        
        {/* 光の粒子エフェクト */}
        <div className={styles.lightParticles}></div>
        
        {/* バトルエフェクト */}
        {settings.effectsLevel !== 'none' && (
          <BattleEffects
            type={activeEffect || 'attack'}
            targetPosition={effectTarget}
            isActive={activeEffect !== null && settings.effectsLevel !== 'minimal'}
            onComplete={handleEffectComplete}
          />
        )}
        
        {/* モンスター */}
        {settings.monsterDisplay && (
          <div className={styles.monsterContainer} ref={monsterContainerRef}>
            <Monster />
          </div>
        )}
        
        {/* キャラクター */}
        <div className={styles.characterContainer}>
          {characters.map((char, index) => (
            <div 
              key={index}
              className={`${styles.character} ${selectedCharacter === index ? styles.selected : ''}`}
              onClick={() => setSelectedCharacter(index)}
            >
              <PixelCharacter type={char.type} selected={selectedCharacter === index} />
            </div>
          ))}
        </div>
        
        {/* スライド情報 */}
        <div className={styles.slideInfo}>
          {/* スライド遷移エフェクト */}
          <SlideTransition
            isActive={!isSlideTransitioning}
            type={transitionType}
            duration={500}
          >
            <h2 className={styles.slideTitle}>{presentationData.slides[currentSlide]?.title}</h2>
            <h3 className={styles.slideSubtitle}>{presentationData.slides[currentSlide]?.subtitle}</h3>
            <div className={styles.slideContent}>
              {presentationData.slides[currentSlide]?.content.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </SlideTransition>
        </div>
      </div>
      
      {/* コマンドエリア（中部40%） */}
      <div className={styles.commandArea}>
        {/* コマンドウィンドウ（左20%） */}
        <div className={styles.commandWindow}>
          {!showMagicMenu ? (
            <>
              <h4 className={styles.windowTitle}>コマンド</h4>
              <ul className={styles.commandList}>
                {commands.map((cmd, index) => (
                  <li 
                    key={index} 
                    className={`${styles.commandItem} ${selectedCommand === index ? styles.selected : ''}`}
                    onClick={() => executeCommand(index)}
                  >
                    {cmd}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h4 className={styles.windowTitle}>まほう</h4>
              <ul className={styles.commandList}>
                {magics.map((magic, index) => (
                  <li 
                    key={index} 
                    className={styles.commandItem}
                    onClick={() => executeMagic(index)}
                  >
                    {magic}
                  </li>
                ))}
                <li 
                  className={styles.commandItem}
                  onClick={() => setShowMagicMenu(false)}
                >
                  もどる
                </li>
              </ul>
            </>
          )}
        </div>
        
        {/* 情報ウィンドウ（中央20%） */}
        <div className={styles.infoWindow}>
          <h4 className={styles.windowTitle}>情報</h4>
          <div className={styles.infoContent}>
            <p>クリエイター: {presentationData.creator}</p>
            <p>テーマ: {presentationData.theme}</p>
            <p>スライド: {currentSlide + 1}/{presentationData.slides.length}</p>
          </div>
        </div>
        
        {/* ステータスウィンドウ（右60%） */}
        <div className={styles.statusWindow}>
          <h4 className={styles.windowTitle}>パーティーステータス</h4>
          <div className={styles.statusList}>
            {characters.map((char, index) => (
              <div key={index} className={styles.statusItem}>
                <div className={styles.charIcon}>
                  <PixelCharacter type={char.type} selected={false} small />
                </div>
                <div className={styles.charInfo}>
                  <div className={styles.charName}>{char.name}</div>
                  <div className={styles.statusBars}>
                    <div className={styles.hpContainer}>
                      <span className={styles.statLabel}>HP</span>
                      <div className={styles.hpBarBg}>
                        <div 
                          className={styles.hpBar} 
                          style={{ width: `${(char.hp / 999) * 100}%` }}
                        ></div>
                      </div>
                      <span className={styles.statValue}>{char.hp}/999</span>
                    </div>
                    <div className={styles.mpContainer}>
                      <span className={styles.statLabel}>MP</span>
                      <div className={styles.mpBarBg}>
                        <div 
                          className={styles.mpBar} 
                          style={{ width: `${(char.mp / 200) * 100}%` }}
                        ></div>
                      </div>
                      <span className={styles.statValue}>{char.mp}/200</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* ダイアログウィンドウ（下部10%） */}
      <div className={styles.dialogWindow}>
        <div className={styles.charIcon}>
          <PixelCharacter type={characters[selectedCharacter].type} selected={false} small />
        </div>
        <div className={styles.dialogText}>
          {dialogText.substring(0, textIndex)}
          {textIndex < dialogText.length && (
            <span className={styles.cursor}>|</span>
          )}
          {textIndex >= dialogText.length && (
            <span className={styles.continuePrompt}>▼</span>
          )}
        </div>
      </div>
      
      {/* ナビゲーションボタン */}
      <div className={styles.navigation}>
        <button 
          className={styles.navButton}
          onClick={goToPrevSlide}
          disabled={currentSlide === 0 || isSlideTransitioning}
        >
          ◀ 前へ
        </button>
        <button 
          className={styles.navButton}
          onClick={goToNextSlide}
          disabled={currentSlide === presentationData.slides.length - 1 || isSlideTransitioning}
        >
          次へ ▶
        </button>
      </div>
      
      {/* 設定ボタン */}
      <button className={styles.settingsButton} onClick={toggleSettings}>
        <Settings size={16} />
      </button>
      
      {/* 設定パネル */}
      {showSettings && (
        <SettingsPanel
          settings={settings}
          onSettingsChange={handleSettingsChange}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}; 
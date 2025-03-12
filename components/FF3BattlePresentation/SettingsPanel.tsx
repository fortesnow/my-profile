'use client';

import React, { useState } from 'react';
import styles from './SettingsPanel.module.css';

// 設定タイプの定義
export interface FF3Settings {
  theme: 'classic' | 'modern' | 'dark' | 'light';
  backgroundStyle: 'pixel' | 'gradient' | 'stars' | 'mountains';
  monsterDisplay: boolean;
  effectsLevel: 'none' | 'minimal' | 'standard' | 'maximum';
  textSpeed: number; // 0-100
  autoAdvance: boolean;
  autoAdvanceDelay: number; // seconds
}

interface SettingsPanelProps {
  settings: FF3Settings;
  onSettingsChange: (newSettings: FF3Settings) => void;
  onClose: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  settings,
  onSettingsChange,
  onClose
}) => {
  const [localSettings, setLocalSettings] = useState<FF3Settings>(settings);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'advanced'>('general');

  // 設定変更ハンドラー
  const handleSettingChange = <K extends keyof FF3Settings>(key: K, value: FF3Settings[K]) => {
    const updatedSettings = { ...localSettings, [key]: value };
    setLocalSettings(updatedSettings);
  };

  // 設定を適用して閉じる
  const applySettings = () => {
    onSettingsChange(localSettings);
    onClose();
  };

  // 設定をキャンセル
  const cancelSettings = () => {
    setLocalSettings(settings);
    onClose();
  };

  return (
    <div className={styles.settingsPanelOverlay}>
      <div className={styles.settingsPanel}>
        <div className={styles.settingsHeader}>
          <h2>FF3バトルプレゼンテーション設定</h2>
          <button className={styles.closeButton} onClick={cancelSettings}>×</button>
        </div>
        
        <div className={styles.settingsTabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'general' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('general')}
          >
            一般
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'visual' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('visual')}
          >
            ビジュアル
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'advanced' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('advanced')}
          >
            詳細設定
          </button>
        </div>
        
        <div className={styles.settingsContent}>
          {/* 一般設定 */}
          {activeTab === 'general' && (
            <div className={styles.settingsGroup}>
              <div className={styles.settingItem}>
                <label htmlFor="theme">テーマ</label>
                <select 
                  id="theme"
                  value={localSettings.theme}
                  onChange={e => handleSettingChange('theme', e.target.value as FF3Settings['theme'])}
                >
                  <option value="classic">クラシック FF3</option>
                  <option value="modern">モダン</option>
                  <option value="dark">ダークモード</option>
                  <option value="light">ライトモード</option>
                </select>
              </div>
              
              <div className={styles.settingItem}>
                <label htmlFor="textSpeed">テキスト速度</label>
                <div className={styles.sliderContainer}>
                  <input 
                    type="range"
                    id="textSpeed"
                    min="0"
                    max="100"
                    value={localSettings.textSpeed}
                    onChange={e => handleSettingChange('textSpeed', parseInt(e.target.value))}
                  />
                  <span>{localSettings.textSpeed}%</span>
                </div>
              </div>
              
              <div className={styles.settingItem}>
                <label htmlFor="autoAdvance">自動進行</label>
                <div className={styles.checkboxContainer}>
                  <input 
                    type="checkbox"
                    id="autoAdvance"
                    checked={localSettings.autoAdvance}
                    onChange={e => handleSettingChange('autoAdvance', e.target.checked)}
                  />
                </div>
              </div>
              
              {localSettings.autoAdvance && (
                <div className={styles.settingItem}>
                  <label htmlFor="autoAdvanceDelay">自動進行の遅延（秒）</label>
                  <input 
                    type="number"
                    id="autoAdvanceDelay"
                    min="1"
                    max="30"
                    value={localSettings.autoAdvanceDelay}
                    onChange={e => handleSettingChange('autoAdvanceDelay', parseInt(e.target.value))}
                  />
                </div>
              )}
            </div>
          )}
          
          {/* ビジュアル設定 */}
          {activeTab === 'visual' && (
            <div className={styles.settingsGroup}>
              <div className={styles.settingItem}>
                <label htmlFor="backgroundStyle">背景スタイル</label>
                <select 
                  id="backgroundStyle"
                  value={localSettings.backgroundStyle}
                  onChange={e => handleSettingChange('backgroundStyle', e.target.value as FF3Settings['backgroundStyle'])}
                >
                  <option value="pixel">ピクセルパターン</option>
                  <option value="gradient">グラデーション</option>
                  <option value="stars">星空</option>
                  <option value="mountains">山並み</option>
                </select>
              </div>
              
              <div className={styles.settingItem}>
                <label htmlFor="monsterDisplay">モンスター表示</label>
                <div className={styles.checkboxContainer}>
                  <input 
                    type="checkbox"
                    id="monsterDisplay"
                    checked={localSettings.monsterDisplay}
                    onChange={e => handleSettingChange('monsterDisplay', e.target.checked)}
                  />
                </div>
              </div>
              
              <div className={styles.settingItem}>
                <label htmlFor="effectsLevel">エフェクトレベル</label>
                <select 
                  id="effectsLevel"
                  value={localSettings.effectsLevel}
                  onChange={e => handleSettingChange('effectsLevel', e.target.value as FF3Settings['effectsLevel'])}
                >
                  <option value="none">なし</option>
                  <option value="minimal">最小限</option>
                  <option value="standard">標準</option>
                  <option value="maximum">最大</option>
                </select>
              </div>
              
              <div className={styles.backgroundPreview}>
                <h4>背景プレビュー</h4>
                <div className={`${styles.previewBox} ${styles[`preview-${localSettings.backgroundStyle}`]}`}></div>
              </div>
            </div>
          )}
          
          {/* 詳細設定 */}
          {activeTab === 'advanced' && (
            <div className={styles.settingsGroup}>
              <p className={styles.settingsInfo}>
                詳細設定では、プレゼンテーションの高度なオプションを設定できます。
                これらの設定は一部のユーザーにのみ表示されます。
              </p>
              
              <div className={styles.settingItem}>
                <label>今後の機能：</label>
                <ul className={styles.comingSoonList}>
                  <li>カスタムキャラクター</li>
                  <li>カスタムフォント</li>
                  <li>コマンドのカスタマイズ</li>
                  <li>シンプルモード</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div className={styles.settingsActions}>
          <button 
            className={styles.cancelButton}
            onClick={cancelSettings}
          >
            キャンセル
          </button>
          <button 
            className={styles.applyButton}
            onClick={applySettings}
          >
            適用
          </button>
        </div>
      </div>
    </div>
  );
}; 
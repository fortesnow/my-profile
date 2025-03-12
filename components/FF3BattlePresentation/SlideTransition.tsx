'use client';

import React, { useState, useEffect } from 'react';
import styles from './SlideTransition.module.css';

export type TransitionType = 'fade' | 'wipe-left' | 'wipe-right' | 'flash' | 'battle-transition' | 'none';

interface SlideTransitionProps {
  children: React.ReactNode;
  isActive: boolean;
  type: TransitionType;
  duration?: number;
  onComplete?: () => void;
}

export const SlideTransition: React.FC<SlideTransitionProps> = ({
  children,
  isActive,
  type = 'fade',
  duration = 1000,
  onComplete
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(isActive);
  const [transitionClass, setTransitionClass] = useState('');

  // トランジション開始時の処理
  useEffect(() => {
    if (type === 'none') {
      setShowContent(isActive);
      return;
    }

    if (isActive) {
      // トランジションイン
      setIsTransitioning(true);
      setShowContent(true);
      setTransitionClass(`${styles[`${type}-in`]} ${styles.transitioning}`);
      
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setTransitionClass('');
        if (onComplete) onComplete();
      }, duration);
      
      return () => clearTimeout(timer);
    } else {
      // トランジションアウト
      setIsTransitioning(true);
      setTransitionClass(`${styles[`${type}-out`]} ${styles.transitioning}`);
      
      const timer = setTimeout(() => {
        setShowContent(false);
        setIsTransitioning(false);
        setTransitionClass('');
        if (onComplete) onComplete();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, type, duration, onComplete]);

  // バトルトランジション用のフラッシュエフェクト
  const renderBattleFlash = () => {
    if (type !== 'battle-transition' || !isTransitioning) return null;
    
    return (
      <div className={styles.battleFlashContainer}>
        <div className={`${styles.battleFlash} ${isActive ? styles.battleFlashIn : styles.battleFlashOut}`} />
        <div className={styles.battleLines}>
          {Array.from({ length: 12 }).map((_, index) => (
            <div 
              key={index} 
              className={styles.battleLine} 
              style={{ 
                animationDelay: `${index * 50}ms`,
                transform: `rotate(${index * 30}deg)`
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  if (!showContent && !isTransitioning) return null;

  return (
    <div 
      className={`${styles.transitionContainer} ${transitionClass}`}
      style={{ animationDuration: `${duration}ms` }}
    >
      {renderBattleFlash()}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}; 
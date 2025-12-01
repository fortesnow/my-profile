'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './BattleEffects.module.css';

export type EffectType = 'fire' | 'ice' | 'thunder' | 'heal' | 'defend' | 'attack' | 'victory';

interface BattleEffectsProps {
  type: EffectType;
  targetPosition: { x: number, y: number } | null;
  isActive: boolean;
  onComplete?: () => void;
}

export const BattleEffects: React.FC<BattleEffectsProps> = ({
  type,
  targetPosition,
  isActive,
  onComplete
}) => {
  const onCompleteRef = useRef(onComplete);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    angle: number;
    color: string;
    opacity: number;
  }>>([]);

  // onCompleteの参照を更新
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // エフェクト発動時にパーティクルを生成
  useEffect(() => {
    if (!isActive || !targetPosition) return;

    const newParticles: typeof particles = [];
    const { x, y } = targetPosition;

    // エフェクトタイプごとのパーティクル設定
    switch (type) {
      case 'fire':
        for (let i = 0; i < 30; i++) {
          newParticles.push({
            id: i,
            x: x + (Math.random() * 100 - 50),
            y: y + (Math.random() * 100 - 50),
            size: Math.random() * 8 + 4,
            speed: Math.random() * 2 + 1,
            angle: Math.random() * 360,
            color: `hsl(${Math.floor(Math.random() * 30)}, 100%, ${50 + Math.random() * 30}%)`,
            opacity: 0.8
          });
        }
        break;

      case 'ice':
        for (let i = 0; i < 25; i++) {
          newParticles.push({
            id: i,
            x: x + (Math.random() * 100 - 50),
            y: y + (Math.random() * 100 - 50),
            size: Math.random() * 6 + 2,
            speed: Math.random() * 1.5 + 0.5,
            angle: Math.random() * 360,
            color: `hsl(${190 + Math.floor(Math.random() * 30)}, ${80 + Math.random() * 20}%, ${70 + Math.random() * 30}%)`,
            opacity: 0.7
          });
        }
        break;

      case 'thunder':
        for (let i = 0; i < 15; i++) {
          newParticles.push({
            id: i,
            x: x,
            y: y - 300 + i * 20,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 3 + 8,
            angle: 90,
            color: `hsl(${50 + Math.floor(Math.random() * 10)}, 100%, ${70 + Math.random() * 30}%)`,
            opacity: 0.9
          });
        }
        break;

      case 'heal':
        for (let i = 0; i < 20; i++) {
          newParticles.push({
            id: i,
            x: x + (Math.random() * 80 - 40),
            y: y + (Math.random() * 80 - 40),
            size: Math.random() * 6 + 3,
            speed: Math.random() * 2 + 0.5,
            angle: -90 + (Math.random() * 20 - 10),
            color: `hsl(${120 + Math.floor(Math.random() * 40)}, ${80 + Math.random() * 20}%, ${60 + Math.random() * 20}%)`,
            opacity: 0.7
          });
        }
        break;

      case 'defend':
        for (let i = 0; i < 20; i++) {
          newParticles.push({
            id: i,
            x: x + (Math.random() * 60 - 30),
            y: y + (Math.random() * 60 - 30),
            size: Math.random() * 5 + 2,
            speed: Math.random() * 1 + 0.5,
            angle: Math.random() * 360,
            color: `hsl(${210 + Math.floor(Math.random() * 30)}, ${60 + Math.random() * 20}%, ${60 + Math.random() * 20}%)`,
            opacity: 0.6
          });
        }
        break;

      case 'attack':
        for (let i = 0; i < 15; i++) {
          newParticles.push({
            id: i,
            x: x + (Math.random() * 60 - 30),
            y: y + (Math.random() * 60 - 30),
            size: Math.random() * 7 + 3,
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360,
            color: `hsl(${0 + Math.floor(Math.random() * 30)}, ${80 + Math.random() * 20}%, ${60 + Math.random() * 20}%)`,
            opacity: 0.8
          });
        }
        break;

      case 'victory':
        for (let i = 0; i < 50; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20,
            size: Math.random() * 8 + 3,
            speed: Math.random() * 4 + 2,
            angle: -90 + (Math.random() * 20 - 10),
            color: `hsl(${Math.random() * 360}, ${80 + Math.random() * 20}%, ${60 + Math.random() * 30}%)`,
            opacity: 0.7
          });
        }
        break;
    }

    setParticles(newParticles);

    // エフェクト完了のタイマーを設定
    const timer = setTimeout(() => {
      setParticles([]);
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [isActive, targetPosition, type]);

  // パーティクルの更新ロジック
  useEffect(() => {
    if (particles.length === 0) return;

    let animationId: number | null = null;
    let isRunning = true;

    const updateParticles = () => {
      if (!isRunning) return;
      
      setParticles(currentParticles => {
        if (currentParticles.length === 0) {
          isRunning = false;
          return currentParticles;
        }
        
        const updated = currentParticles.map(particle => {
          const radians = particle.angle * (Math.PI / 180);
          return {
            ...particle,
            x: particle.x + Math.cos(radians) * particle.speed,
            y: particle.y + Math.sin(radians) * particle.speed,
            opacity: particle.opacity - 0.01
          };
        }).filter(particle => particle.opacity > 0);
        
        if (updated.length > 0 && isRunning) {
          animationId = requestAnimationFrame(updateParticles);
        } else {
          isRunning = false;
        }
        
        return updated;
      });
    };

    animationId = requestAnimationFrame(updateParticles);
    
    return () => {
      isRunning = false;
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [particles.length]);

  // 特殊なエフェクト：雷のジグザグ効果
  const renderThunderEffect = () => {
    if (type !== 'thunder' || !isActive || !targetPosition) return null;

    return (
      <svg className={styles.thunderSvg} width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <path
          d={`M ${targetPosition.x} 0 
              L ${targetPosition.x - 20} ${targetPosition.y * 0.3} 
              L ${targetPosition.x + 30} ${targetPosition.y * 0.5} 
              L ${targetPosition.x - 10} ${targetPosition.y * 0.7} 
              L ${targetPosition.x + 5} ${targetPosition.y}`}
          stroke="yellow"
          strokeWidth="5"
          fill="none"
          opacity="0.8"
          strokeLinecap="round"
          strokeDasharray="15,5"
          className={styles.thunderPath}
        />
      </svg>
    );
  };

  return (
    <div className={styles.effectsContainer}>
      {renderThunderEffect()}
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`${styles.particle} ${styles[type]}`}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity
          }}
        />
      ))}
    </div>
  );
}; 
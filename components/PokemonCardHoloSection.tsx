'use client';

import React, { useRef, useEffect } from 'react';
import styles from './PokemonCardHoloSection.module.css';

// カードデータの型定義
interface PokemonCard {
  id: string;
  name: string;
  className: string;
  color1: string;
  color2: string;
  frontImage: string;
  color3?: string;
  color4?: string;
  color5?: string;
}

// カードデータ
const pokemonCards: PokemonCard[] = [
  {
    id: 'charizard',
    name: 'Charizard',
    className: 'charizard',
    color1: '#fac',
    color2: '#ddccaa',
    frontImage: 'https://assets.codepen.io/13471/charizard-gx.webp',
  },
  {
    id: 'pika',
    name: 'Pikachu',
    className: 'pika',
    color1: '#54a29e',
    color2: '#a79d66',
    frontImage: 'https://assets.codepen.io/13471/pikachu-gx.webp',
  },
  {
    id: 'eevee',
    name: 'Eevee',
    className: 'eevee',
    color1: '#ec9bb6',
    color2: '#ccac6f',
    color3: '#69e4a5',
    color4: '#8ec5d6',
    color5: '#b98cce',
    frontImage: 'https://assets.codepen.io/13471/eevee-gx.webp',
  },
  {
    id: 'mewtwo',
    name: 'Mewtwo',
    className: 'mewtwo',
    color1: '#efb2fb',
    color2: '#acc6f8',
    frontImage: 'https://assets.codepen.io/13471/mewtwo-gx.webp',
  },
];

export default function PokemonCardHoloSection() {
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 動的スタイル用のstyle要素を作成
    if (typeof document !== 'undefined' && !styleRef.current) {
      const style = document.createElement('style');
      style.className = 'pokemon-card-hover';
      document.head.appendChild(style);
      styleRef.current = style;
    }

    return () => {
      // クリーンアップ
      if (styleRef.current && styleRef.current.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: PokemonCard) => {
    const cardElement = e.currentTarget.querySelector(`.${styles.card}`) as HTMLElement;
    if (!cardElement || !styleRef.current) return;

    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const h = rect.height;
    const w = rect.width;

    // マウス位置の計算
    const px = Math.abs(Math.floor(100 / w * x) - 100);
    const py = Math.abs(Math.floor(100 / h * y) - 100);
    const pa = (50 - px) + (50 - py);

    // グラデーション/背景位置の計算
    const lp = (50 + (px - 50) / 1.5);
    const tp = (50 + (py - 50) / 1.5);
    const px_spark = (50 + (px - 50) / 7);
    const py_spark = (50 + (py - 50) / 7);
    const p_opc = 20 + (Math.abs(pa) * 1.5);
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5) * 0.5;

    // CSS適用
    const grad_pos = `background-position: ${lp}% ${tp}%;`;
    const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
    const opc = `opacity: ${p_opc / 100};`;
    const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;

    // カードに直接スタイルを適用
    cardElement.style.transform = tf;
    cardElement.classList.remove(styles.animated);

    // 疑似要素用のスタイルを動的に追加
    const cardClass = styles[card.className as keyof typeof styles] || card.className;
    const styleContent = `
      .${styles.card}.${cardClass}:hover::before { ${grad_pos} }
      .${styles.card}.${cardClass}:hover::after { ${sprk_pos} ${opc} }
    `;
    styleRef.current.innerHTML = styleContent;
  };

  const handleMouseOut = (card: PokemonCard) => {
    const cardClass = styles[card.className as keyof typeof styles] || card.className;
    const cardElement = document.querySelector(`.${styles.card}.${cardClass}`) as HTMLElement;
    if (!cardElement || !styleRef.current) return;

    styleRef.current.innerHTML = '';
    cardElement.style.transform = '';

    // アニメーションを再開
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      cardElement.classList.add(styles.animated);
    }, 2500);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>, card: PokemonCard) => {
    const touch = e.touches[0];
    const cardElement = e.currentTarget.querySelector(`.${styles.card}`) as HTMLElement;
    if (!cardElement || !styleRef.current) return;

    const rect = cardElement.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const h = rect.height;
    const w = rect.width;

    const px = Math.abs(Math.floor(100 / w * x) - 100);
    const py = Math.abs(Math.floor(100 / h * y) - 100);
    const pa = (50 - px) + (50 - py);

    const lp = (50 + (px - 50) / 1.5);
    const tp = (50 + (py - 50) / 1.5);
    const px_spark = (50 + (px - 50) / 7);
    const py_spark = (50 + (py - 50) / 7);
    const p_opc = 20 + (Math.abs(pa) * 1.5);
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5) * 0.5;

    const grad_pos = `background-position: ${lp}% ${tp}%;`;
    const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
    const opc = `opacity: ${p_opc / 100};`;
    const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;

    cardElement.style.transform = tf;
    cardElement.classList.remove(styles.animated);

    const cardClass = styles[card.className as keyof typeof styles] || card.className;
    const styleContent = `
      .${styles.card}.${cardClass}:hover::before { ${grad_pos} }
      .${styles.card}.${cardClass}:hover::after { ${sprk_pos} ${opc} }
    `;
    styleRef.current.innerHTML = styleContent;
  };

  const handleTouchEnd = (card: PokemonCard) => {
    handleMouseOut(card);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          ポケモンカードコレクション
        </h2>
        <p className={styles.subtitle}>
          ホログラム効果を体験してください
        </p>
        <div className={styles.cards}>
          {pokemonCards.map((card, index) => (
            <div
              key={card.id}
              className={styles.threeDWrapper}
              onMouseMove={(e) => handleMouseMove(e, card)}
              onMouseOut={() => handleMouseOut(card)}
              onTouchMove={(e) => handleTouchMove(e, card)}
              onTouchEnd={() => handleTouchEnd(card)}
              onTouchCancel={() => handleTouchEnd(card)}
            >
              <div
                className={`${styles.card} ${styles[card.className as keyof typeof styles] || card.className} ${styles.animated}`}
                style={{
                  ['--color1' as string]: card.color1,
                  ['--color2' as string]: card.color2,
                  ['--front' as string]: `url(${card.frontImage})`,
                  ...(card.color3 && { ['--color3' as string]: card.color3 }),
                  ...(card.color4 && { ['--color4' as string]: card.color4 }),
                  ...(card.color5 && { ['--color5' as string]: card.color5 }),
                  animationDelay: `${index * 0.25}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


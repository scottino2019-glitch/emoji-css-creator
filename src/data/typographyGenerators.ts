import { CardTextConfig, AnimationSettings } from '../types';

// Palette multicolore vivace (10 colori calibrati)
export const MULTICOLOR_PALETTE = [
  {
    name: 'Blu Zaffiro',
    color: '#0d6efd',
    grad: 'linear-gradient(170deg, #60a5fa 0%, #2563eb 45%, #1d4ed8 100%)',
    shadowStandard: '0 1px 0 #3b8bfd, 0 2px 0 #257afd, 0 3px 0 #0d65e9, 0 4px 0 #084ebd, 0 5px 0 #053b94, 0 6px 10px rgba(5,59,148,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    shadowMega: '0 1px 0 #93c5fd, 0 2px 0 #60a5fa, 0 3px 0 #3b82f6, 0 4px 0 #2563eb, 0 5px 0 #1d4ed8, 0 6px 0 #1e40af, 0 7px 0 #172554, 0 8px 16px rgba(2,6,23,0.6)',
  },
  {
    name: 'Rosso Ciliegia',
    color: '#dc2626',
    grad: 'linear-gradient(170deg, #fca5a5 0%, #ef4444 40%, #b91c1c 100%)',
    shadowStandard: '0 1px 0 #f87171, 0 2px 0 #ef4444, 0 3px 0 #dc2626, 0 4px 0 #b91c1c, 0 5px 0 #991b1b, 0 6px 10px rgba(153,27,27,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    shadowMega: '0 1px 0 #fecaca, 0 2px 0 #f87171, 0 3px 0 #ef4444, 0 4px 0 #dc2626, 0 5px 0 #b91c1c, 0 6px 0 #991b1b, 0 7px 0 #450a0a, 0 8px 16px rgba(0,0,0,0.6)',
  },
  {
    name: 'Arancio Mandarino',
    color: '#ea580c',
    grad: 'linear-gradient(170deg, #fdba74 0%, #f97316 45%, #c2410c 100%)',
    shadowStandard: '0 1px 0 #fb923c, 0 2px 0 #f97316, 0 3px 0 #ea580c, 0 4px 0 #c2410c, 0 5px 0 #9a3412, 0 6px 10px rgba(154,52,18,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    shadowMega: '0 1px 0 #fed7aa, 0 2px 0 #fb923c, 0 3px 0 #f97316, 0 4px 0 #ea580c, 0 5px 0 #c2410c, 0 6px 0 #9a3412, 0 7px 0 #431407, 0 8px 16px rgba(0,0,0,0.6)',
  },
  {
    name: 'Oro Zafferano',
    color: '#eab308',
    grad: 'linear-gradient(170deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)',
    shadowStandard: '0 1px 0 #fde047, 0 2px 0 #facc15, 0 3px 0 #eab308, 0 4px 0 #ca8a04, 0 5px 0 #a16207, 0 6px 10px rgba(161,98,7,0.45), 2px 8px 14px rgba(0,0,0,0.25)',
    shadowMega: '0 1px 0 #fef9c3, 0 2px 0 #fde047, 0 3px 0 #facc15, 0 4px 0 #eab308, 0 5px 0 #ca8a04, 0 6px 0 #a16207, 0 7px 0 #422006, 0 8px 16px rgba(0,0,0,0.55)',
  },
  {
    name: 'Verde Smeraldo',
    color: '#16a34a',
    grad: 'linear-gradient(170deg, #86efac 0%, #22c55e 45%, #15803d 100%)',
    shadowStandard: '0 1px 0 #4ade80, 0 2px 0 #22c55e, 0 3px 0 #16a34a, 0 4px 0 #15803d, 0 5px 0 #166534, 0 6px 10px rgba(22,101,52,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    shadowMega: '0 1px 0 #bbf7d0, 0 2px 0 #4ade80, 0 3px 0 #22c55e, 0 4px 0 #16a34a, 0 5px 0 #15803d, 0 6px 0 #166534, 0 7px 0 #052e16, 0 8px 16px rgba(0,0,0,0.6)',
  },
  {
    name: 'Verde Lime Vivace',
    color: '#65a30d',
    grad: 'linear-gradient(170deg, #bef264 0%, #84cc16 45%, #4d7c0f 100%)',
    shadowStandard: '0 1px 0 #a3e635, 0 2px 0 #84cc16, 0 3px 0 #65a30d, 0 4px 0 #4d7c0f, 0 5px 0 #365314, 0 6px 10px rgba(54,83,20,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    shadowMega: '0 1px 0 #d9f99d, 0 2px 0 #a3e635, 0 3px 0 #84cc16, 0 4px 0 #65a30d, 0 5px 0 #4d7c0f, 0 6px 0 #365314, 0 7px 0 #14532d, 0 8px 16px rgba(0,0,0,0.6)',
  },
  {
    name: 'Azzurro Cielo',
    color: '#0284c7',
    grad: 'linear-gradient(170deg, #7dd3fc 0%, #0ea5e9 45%, #0369a1 100%)',
    shadowStandard: '0 1px 0 #38bdf8, 0 2px 0 #0ea5e9, 0 3px 0 #0284c7, 0 4px 0 #0369a1, 0 5px 0 #075985, 0 6px 10px rgba(7,89,133,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    shadowMega: '0 1px 0 #bae6fd, 0 2px 0 #38bdf8, 0 3px 0 #0ea5e9, 0 4px 0 #0284c7, 0 5px 0 #0369a1, 0 6px 0 #075985, 0 7px 0 #082f49, 0 8px 16px rgba(0,0,0,0.6)',
  },
  {
    name: 'Viola Magenta',
    color: '#9333ea',
    grad: 'linear-gradient(170deg, #e9d5ff 0%, #a855f7 45%, #7e22ce 100%)',
    shadowStandard: '0 1px 0 #c084fc, 0 2px 0 #a855f7, 0 3px 0 #9333ea, 0 4px 0 #7e22ce, 0 5px 0 #6b21a8, 0 6px 10px rgba(107,33,168,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    shadowMega: '0 1px 0 #f3e8ff, 0 2px 0 #c084fc, 0 3px 0 #a855f7, 0 4px 0 #9333ea, 0 5px 0 #7e22ce, 0 6px 0 #6b21a8, 0 7px 0 #3b0764, 0 8px 16px rgba(0,0,0,0.6)',
  },
  {
    name: 'Turchese Giada',
    color: '#059669',
    grad: 'linear-gradient(170deg, #6ee7b7 0%, #10b981 45%, #047857 100%)',
    shadowStandard: '0 1px 0 #34d399, 0 2px 0 #10b981, 0 3px 0 #059669, 0 4px 0 #047857, 0 5px 0 #065f46, 0 6px 10px rgba(6,95,70,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    shadowMega: '0 1px 0 #a7f3d0, 0 2px 0 #34d399, 0 3px 0 #10b981, 0 4px 0 #059669, 0 5px 0 #047857, 0 6px 0 #065f46, 0 7px 0 #022c22, 0 8px 16px rgba(0,0,0,0.6)',
  },
  {
    name: 'Rosa Corallo',
    color: '#e11d48',
    grad: 'linear-gradient(170deg, #fecdd3 0%, #f43f5e 45%, #be123c 100%)',
    shadowStandard: '0 1px 0 #fb7185, 0 2px 0 #f43f5e, 0 3px 0 #e11d48, 0 4px 0 #be123c, 0 5px 0 #9f1239, 0 6px 10px rgba(159,18,57,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    shadowMega: '0 1px 0 #ffe4e6, 0 2px 0 #fb7185, 0 3px 0 #f43f5e, 0 4px 0 #e11d48, 0 5px 0 #be123c, 0 6px 0 #9f1239, 0 7px 0 #4c0519, 0 8px 16px rgba(0,0,0,0.6)',
  },
];

// Funzione helper per ottenere colore e ombra per una lettera a seconda del tema
export function getLetterColorConfig(index: number, theme: CardTextConfig['titleTheme'] = 'multicolor', depth: CardTextConfig['titleDepth'] = 'standard') {
  if (theme === 'liquidGold') {
    const isOdd = index % 2 === 1;
    return {
      color: '#d97706',
      grad: isOdd
        ? 'linear-gradient(170deg, #fef08a 0%, #f59e0b 45%, #b45309 100%)'
        : 'linear-gradient(170deg, #fffbeb 0%, #fbbf24 45%, #d97706 100%)',
      shadow: depth === 'flat' ? 'none'
        : depth === 'light' ? '0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(180,83,9,0.35)'
        : depth === 'mega' ? '0 1px 0 #fef9c3, 0 2px 0 #fde047, 0 3px 0 #f59e0b, 0 4px 0 #d97706, 0 5px 0 #b45309, 0 6px 0 #92400e, 0 7px 0 #451a03, 0 8px 16px rgba(0,0,0,0.6)'
        : '0 1px 0 #fef08a, 0 2px 0 #f59e0b, 0 3px 0 #d97706, 0 4px 0 #b45309, 0 5px 0 #78350f, 0 6px 10px rgba(120,53,15,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    };
  }

  if (theme === 'candyPink') {
    const isOdd = index % 2 === 1;
    return {
      color: '#e11d48',
      grad: isOdd
        ? 'linear-gradient(170deg, #fbcfe8 0%, #f43f5e 45%, #be123c 100%)'
        : 'linear-gradient(170deg, #fce7f3 0%, #fb7185 45%, #e11d48 100%)',
      shadow: depth === 'flat' ? 'none'
        : depth === 'light' ? '0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(190,18,60,0.35)'
        : depth === 'mega' ? '0 1px 0 #ffe4e6, 0 2px 0 #fda4af, 0 3px 0 #fb7185, 0 4px 0 #f43f5e, 0 5px 0 #e11d48, 0 6px 0 #be123c, 0 7px 0 #4c0519, 0 8px 16px rgba(0,0,0,0.6)'
        : '0 1px 0 #fecdd3, 0 2px 0 #fb7185, 0 3px 0 #f43f5e, 0 4px 0 #e11d48, 0 5px 0 #be123c, 0 6px 10px rgba(190,18,60,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    };
  }

  if (theme === 'cyberNeon') {
    const isOdd = index % 2 === 1;
    return {
      color: '#06b6d4',
      grad: isOdd
        ? 'linear-gradient(170deg, #a5f3fc 0%, #06b6d4 45%, #0e7490 100%)'
        : 'linear-gradient(170deg, #bbf7d0 0%, #10b981 45%, #047857 100%)',
      shadow: depth === 'flat' ? 'none'
        : depth === 'light' ? '0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(14,116,144,0.4)'
        : depth === 'mega' ? '0 1px 0 #cffafe, 0 2px 0 #67e8f9, 0 3px 0 #22d3ee, 0 4px 0 #06b6d4, 0 5px 0 #0891b2, 0 6px 0 #0e7490, 0 7px 0 #164e63, 0 8px 16px rgba(0,0,0,0.6)'
        : '0 1px 0 #67e8f9, 0 2px 0 #22d3ee, 0 3px 0 #06b6d4, 0 4px 0 #0891b2, 0 5px 0 #0e7490, 0 6px 10px rgba(14,116,144,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    };
  }

  if (theme === 'oceanBreeze') {
    const isOdd = index % 2 === 1;
    return {
      color: '#2563eb',
      grad: isOdd
        ? 'linear-gradient(170deg, #bfdbfe 0%, #3b82f6 45%, #1d4ed8 100%)'
        : 'linear-gradient(170deg, #bae6fd 0%, #0ea5e9 45%, #0369a1 100%)',
      shadow: depth === 'flat' ? 'none'
        : depth === 'light' ? '0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(29,78,216,0.35)'
        : depth === 'mega' ? '0 1px 0 #dbeafe, 0 2px 0 #93c5fd, 0 3px 0 #60a5fa, 0 4px 0 #3b82f6, 0 5px 0 #2563eb, 0 6px 0 #1d4ed8, 0 7px 0 #0f172a, 0 8px 16px rgba(0,0,0,0.6)'
        : '0 1px 0 #93c5fd, 0 2px 0 #60a5fa, 0 3px 0 #2563eb, 0 4px 0 #1d4ed8, 0 5px 0 #1e40af, 0 6px 10px rgba(30,64,175,0.5), 2px 8px 14px rgba(0,0,0,0.3)',
    };
  }

  // multicolor di default
  const item = MULTICOLOR_PALETTE[index % MULTICOLOR_PALETTE.length];
  return {
    color: item.color,
    grad: item.grad,
    shadow: depth === 'flat' ? 'none'
      : depth === 'light' ? '0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.35)'
      : depth === 'mega' ? item.shadowMega
      : item.shadowStandard,
  };
}

// 1. GENERAZIONE HTML PER IL TITOLO 3D DINAMICO (BUONGIORNO O QUALSIASI TESTO)
export function generateTitleHtml(texts: CardTextConfig): string {
  const word = (texts.buongiorno || 'BUONGIORNO').trim();
  const chars = word.split('');
  const dotType = texts.titleDot ?? 'heart';

  const lettersHtml = chars.map((char, index) => {
    if (char === ' ') {
      return `    <span class="live-letter-space" style="display:inline-block; width: 14px;"></span>`;
    }

    const upperChar = char.toUpperCase();

    // Se la lettera è una 'I' e abbiamo il cuoricino o la stellina
    if (upperChar === 'I' && dotType === 'heart') {
      return `    <!-- Lettera ${upperChar} con Cuore 3D pulsante -->
    <div class="live-let-i-container let-dyn-${index}">
      <div class="live-heart-on-i"></div>
      <span class="live-let-i-stem">${char}</span>
    </div>`;
    }

    if (upperChar === 'I' && dotType === 'star') {
      return `    <!-- Lettera ${upperChar} con Stellina brillante -->
    <div class="live-let-i-container let-dyn-${index}">
      <div class="live-star-on-i">✦</div>
      <span class="live-let-i-stem">${char}</span>
    </div>`;
    }

    // Lettera standard 3D con attributo data-letter per riflesso speculare
    return `    <span class="live-letter-3d let-dyn-${index}" data-letter="${char}">${char}</span>`;
  }).join('\n');

  return `  <!-- 2. TITOLO 3D DINAMICO: "${word}" -->
  <div class="live-buongiorno-wrapper">
    <div class="live-heart-3d h-top-l"><div class="live-heart-specular"></div></div>
${lettersHtml}
    <div class="live-heart-3d h-top-r"><div class="live-heart-specular"></div></div>
  </div>`;
}

// 2. GENERAZIONE HTML SOTTOTITOLO ARCOBALENO
export function generateSubtitleHtml(texts: CardTextConfig): string {
  const text = texts.subGreeting || 'BUON SABATO';
  return `  <!-- 3. SOTTOTITOLO SFUMATO: "${text}" -->
  <div class="live-subtitle-wrapper">
    <div class="live-sparkle s-sm sp-ml1"></div>
    <h2 class="live-sabato-text">${text}</h2>
    <div class="live-sparkle s-sm sp-bc"></div>
  </div>`;
}

// 3. GENERAZIONE HTML DATA SCOLPITA
export function generateDateHtml(texts: CardTextConfig): string {
  const dateStr = texts.date || '12 SETTEMBRE';
  const hasStars = texts.dateStars !== false;

  return `  <!-- 1. DATA PERSONALIZZATA: "${dateStr}" -->
  <div class="live-date-row">
    ${hasStars ? '<div class="live-sparkle s-md sp-tl1"></div>\n    <div class="live-sparkle s-sm sp-tl2"></div>' : ''}
    <span class="live-date-text">${dateStr}</span>
    ${hasStars ? '<div class="live-sparkle s-md sp-tr1"></div>\n    <div class="live-sparkle s-sm sp-tr2"></div>' : ''}
  </div>`;
}

// 4. GENERAZIONE HTML FIRMA CORSIVA
export function generateSignatureHtml(texts: CardTextConfig): string {
  const sig = texts.signature || 'My angel';
  return `  <!-- 5. FIRMA CORSIVA: "${sig}" -->
  <div class="live-footer-row">
    <div class="live-sparkle s-md sp-bl"></div>
    <span class="live-my-angel">${sig}</span>
  </div>`;
}

// Helper per CSS della Data
export function generateDateCss(texts: CardTextConfig): string {
  const dateSt = texts.dateStyle ?? 'stone';
  let dateColor = '#e2e8f0';
  let dateShadow = '0 1px 0 #ffffff, 0 -1px 0 rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.5)';
  if (dateSt === 'gold') {
    dateColor = '#fbbf24';
    dateShadow = '0 1px 0 #fef08a, 0 2px 4px rgba(180,83,9,0.7)';
  } else if (dateSt === 'minimal') {
    dateColor = '#94a3b8';
    dateShadow = 'none';
  } else if (dateSt === 'rosegold') {
    dateColor = '#fda4af';
    dateShadow = '0 1px 0 #fff, 0 2px 4px rgba(190,18,60,0.6)';
  }

  return `    /* 1. DATA SUPERIORE */
    .live-date-row {
      position: relative;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 2px;
    }

    .live-date-text {
      font-family: 'Cinzel', serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.28em;
      color: ${dateColor};
      text-transform: uppercase;
      text-shadow: ${dateShadow};
    }`;
}

// Helper per CSS del Titolo 3D
export function generateTitleCss(texts: CardTextConfig, anim?: AnimationSettings): string {
  const word = (texts.buongiorno || 'BUONGIORNO').trim();
  const chars = word.split('');
  const theme = texts.titleTheme ?? 'multicolor';
  const depth = texts.titleDepth ?? 'standard';
  const specular = texts.titleSpecular !== false;
  const animType = texts.titleAnim ?? 'bounce';

  let letterAnimProp = 'animation: liveLetterBounce calc(3.6s * var(--speed-factor)) ease-in-out infinite var(--play-state);';
  if (animType === 'float') {
    letterAnimProp = 'animation: liveFloatGentle calc(3.0s * var(--speed-factor)) ease-in-out infinite var(--play-state);';
  } else if (animType === 'none') {
    letterAnimProp = 'animation: none;';
  }

  const letterRules = chars.map((char, index) => {
    if (char === ' ') return '';
    const cfg = getLetterColorConfig(index, theme, depth);
    const delay = (index * 0.15).toFixed(2);

    return `    /* Lettera [${index}]: "${char}" */
    .let-dyn-${index} {
      color: ${cfg.color};
      text-shadow: ${cfg.shadow};
      animation-delay: ${delay}s !important;
    }
    .let-dyn-${index}::before {
      background-image: ${cfg.grad};
    }
    .let-dyn-${index} .live-let-i-stem {
      color: ${cfg.color};
      text-shadow: ${cfg.shadow};
      background-image: ${cfg.grad};
    }`;
  }).filter(Boolean).join('\n\n');

  return `    /* 2. TITOLO 3D "${word}" */
    .live-buongiorno-wrapper {
      position: relative;
      z-index: 8;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5px;
      margin-bottom: 4px;
      width: 100%;
      padding: 4px 0;
      flex-wrap: wrap;
    }

    .live-letter-3d {
      position: relative;
      display: inline-block;
      font-family: 'Lilita One', 'Fredoka', cursive, sans-serif;
      font-size: 56px;
      font-weight: 900;
      line-height: 1;
      text-align: center;
      transform-style: preserve-3d;
      ${letterAnimProp}
      cursor: default;
      transition: transform 0.2s ease;
    }

    .live-letter-3d:hover {
      transform: translateY(-6px) scale(1.1) rotate(2deg);
    }

    .live-letter-3d::before {
      content: attr(data-letter);
      position: absolute;
      inset: 0;
      z-index: 1;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ${specular ? `/* Patina speculare lucida superiore */
    .live-letter-3d::after {
      content: attr(data-letter);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.35) 25%, transparent 55%);
      pointer-events: none;
    }` : '/* Riflesso speculare disattivato */\n    .live-letter-3d::after { display: none; }'}

    /* PUNTINO DELLA 'I' VETTORIALE */
    .live-let-i-container {
      position: relative;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 22px;
      height: 60px;
      ${letterAnimProp}
    }

    .live-let-i-stem {
      font-family: 'Lilita One', 'Fredoka', cursive, sans-serif;
      font-size: 56px;
      font-weight: 900;
      line-height: 1;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .live-heart-on-i {
      position: absolute;
      top: -2px;
      width: 16px;
      height: 16px;
      background: radial-gradient(circle at 35% 35%, #ffffff 0%, #ff3b5c 30%, #e60026 60%, #990014 100%);
      transform: rotate(-45deg);
      border-radius: 2px;
      box-shadow: 0 2px 6px rgba(180, 0, 20, 0.5);
      z-index: 10;
      animation: liveHeartPulse calc(1.8s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }
    .live-heart-on-i::before, .live-heart-on-i::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background: inherit;
      border-radius: 50%;
      box-shadow: inherit;
    }
    .live-heart-on-i::before { top: -8px; left: 0; }
    .live-heart-on-i::after { top: 0; right: -8px; }

    .live-star-on-i {
      position: absolute;
      top: -4px;
      font-size: 20px;
      color: #fef08a;
      text-shadow: 0 0 8px #f59e0b, 0 0 16px #fbbf24;
      animation: liveSparkleSpin calc(2.4s * var(--speed-factor)) ease-in-out infinite var(--play-state);
      z-index: 10;
    }

${letterRules}`;
}

// Helper per CSS del Sottotitolo
export function generateSubtitleCss(texts: CardTextConfig, anim?: AnimationSettings): string {
  const subGrad = texts.subtitleGradient ?? 'rainbow';
  const subFx = texts.subtitleEffect ?? 'glow-white';
  const subAnim = texts.subtitleAnim !== false;

  let subBgGrad = 'linear-gradient(90deg, #ff1493, #ff4500, #ff8c00, #ffd700, #00ff7f, #00bfff, #9932cc, #ff1493)';
  if (subGrad === 'sunset') {
    subBgGrad = 'linear-gradient(90deg, #ff512f, #dd2476, #ff7e5f, #feb47b, #ff512f)';
  } else if (subGrad === 'pink') {
    subBgGrad = 'linear-gradient(90deg, #ec4899, #f43f5e, #fb7185, #f472b6, #ec4899)';
  } else if (subGrad === 'aurora') {
    subBgGrad = 'linear-gradient(90deg, #10b981, #06b6d4, #6366f1, #a855f7, #10b981)';
  } else if (subGrad === 'gold') {
    subBgGrad = 'linear-gradient(90deg, #f59e0b, #fbbf24, #fef08a, #d97706, #f59e0b)';
  }

  let subFilter = 'drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff) drop-shadow(0 2px 4px rgba(0,0,0,0.5))';
  if (subFx === 'neon-border') {
    subFilter = 'drop-shadow(0 0 3px #00ffff) drop-shadow(0 0 6px #00bfff) drop-shadow(0 2px 4px rgba(0,0,0,0.7))';
  } else if (subFx === 'dark-outline') {
    subFilter = 'drop-shadow(1px 1px 0 #000) drop-shadow(-1px -1px 0 #000) drop-shadow(0 3px 6px rgba(0,0,0,0.8))';
  } else if (subFx === 'soft-shadow') {
    subFilter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))';
  }

  return `    /* 3. SOTTOTITOLO "${texts.subGreeting || 'BUON SABATO'}" */
    .live-subtitle-wrapper {
      position: relative;
      z-index: 6;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .live-sabato-text {
      font-family: 'Lilita One', 'Fredoka', cursive, sans-serif;
      font-size: 32px;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background-image: ${subBgGrad};
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: ${subFilter};
      ${subAnim ? 'animation: liveRainbowShift calc(6s * var(--speed-factor)) linear infinite var(--play-state);' : '/* Animazione arcobaleno disattivata */'}
    }`;
}

// Helper per CSS della Firma
export function generateSignatureCss(texts: CardTextConfig): string {
  const sigF = texts.sigFont ?? 'greatvibes';
  const sigC = texts.sigColor ?? 'night';
  const sigEmb = texts.sigEmboss !== false;

  let sigFontFamily = "'Great Vibes', cursive, sans-serif";
  if (sigF === 'pacifico') sigFontFamily = "'Pacifico', cursive, sans-serif";
  if (sigF === 'sacramento') sigFontFamily = "'Sacramento', cursive, sans-serif";
  if (sigF === 'dancingscript') sigFontFamily = "'Dancing Script', cursive, sans-serif";

  let sigTextColor = '#1e293b';
  if (sigC === 'ruby') sigTextColor = '#991b1b';
  if (sigC === 'gold') sigTextColor = '#b45309';
  if (sigC === 'choco') sigTextColor = '#451a03';

  const sigShadow = sigEmb ? '0 1px 0 rgba(255, 255, 255, 0.8), 1px 2px 3px rgba(0, 0, 0, 0.2)' : 'none';

  return `    /* 4. FIRMA CORSIVA "${texts.signature || 'My angel'}" */
    .live-footer-row, .live-signature-box {
      position: relative;
      z-index: 15;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 20px;
      margin-top: 2px;
      gap: 8px;
    }

    .live-signature-text, .live-my-angel {
      font-family: ${sigFontFamily};
      font-size: 40px;
      font-weight: 700;
      color: ${sigTextColor};
      text-shadow: ${sigShadow};
      display: inline-block;
      user-select: none;
    }`;
}

// 5. GENERAZIONE COMPLETA DEL CSS PER LE SCRITTE (RIGOROSO E CONDIVISO AL 100%)
export function generateTypographyCss(texts: CardTextConfig, anim?: AnimationSettings): string {
  const word = (texts.buongiorno || 'BUONGIORNO').trim();
  const theme = texts.titleTheme ?? 'multicolor';
  const depth = texts.titleDepth ?? 'standard';
  const dot = texts.titleDot ?? 'heart';

  const dateCss = generateDateCss(texts);
  const titleCss = generateTitleCss(texts, anim);
  const subtitleCss = generateSubtitleCss(texts, anim);
  const signatureCss = generateSignatureCss(texts);

  return `    /* ==========================================================================
       SESSIONE SCRITTE E TIPOGRAFIA 3D (GENERATA PER: "${word}")
       Tema: ${theme} | Estrusione 3D: ${depth} | Puntino 'I': ${dot}
       ========================================================================== */

${dateCss}

${titleCss}

${subtitleCss}

${signatureCss}

    /* Mappature di retrocompatibilità per classi statiche */
    .let-b { color: #0d6efd; animation-delay: 0s !important; }
    .let-b::before { background-image: linear-gradient(170deg, #60a5fa 0%, #2563eb 45%, #1d4ed8 100%); }
    .let-u { color: #dc2626; animation-delay: 0.15s !important; }
    .let-u::before { background-image: linear-gradient(170deg, #fca5a5 0%, #ef4444 40%, #b91c1c 100%); }
    .let-o1 { color: #ea580c; animation-delay: 0.3s !important; }
    .let-o1::before { background-image: linear-gradient(170deg, #fdba74 0%, #f97316 45%, #c2410c 100%); }
    .let-n1 { color: #eab308; animation-delay: 0.45s !important; }
    .let-n1::before { background-image: linear-gradient(170deg, #fef08a 0%, #eab308 50%, #ca8a04 100%); }
    .let-g { color: #16a34a; animation-delay: 0.6s !important; }
    .let-g::before { background-image: linear-gradient(170deg, #86efac 0%, #22c55e 45%, #15803d 100%); }
    .let-o2 { color: #65a30d; animation-delay: 0.9s !important; }
    .let-o2::before { background-image: linear-gradient(170deg, #bef264 0%, #84cc16 45%, #4d7c0f 100%); }
    .let-r { color: #0284c7; animation-delay: 1.05s !important; }
    .let-r::before { background-image: linear-gradient(170deg, #7dd3fc 0%, #0ea5e9 45%, #0369a1 100%); }
    .let-n2 { color: #9333ea; animation-delay: 1.2s !important; }
    .let-n2::before { background-image: linear-gradient(170deg, #e9d5ff 0%, #a855f7 45%, #7e22ce 100%); }
    .let-o3 { color: #059669; animation-delay: 1.35s !important; }
    .let-o3::before { background-image: linear-gradient(170deg, #6ee7b7 0%, #10b981 45%, #047857 100%); }`;
}

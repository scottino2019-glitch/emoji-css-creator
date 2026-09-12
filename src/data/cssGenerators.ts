import { CardVariantConfig, AnimationSettings, CardTextConfig } from '../types';
import { generateTypographyCss } from './typographyGenerators';

export function generateCardCss(
  anim: AnimationSettings = { isPlaying: true, speed: 1 },
  _variants?: CardVariantConfig,
  texts?: CardTextConfig
): string {
  const speedFactor = (1 / anim.speed).toFixed(2);
  const playState = anim.isPlaying ? 'running' : 'paused';

  const defaultTexts: CardTextConfig = {
    date: '12 SETTEMBRE',
    buongiorno: 'BUONGIORNO',
    subGreeting: 'BUON SABATO',
    signature: 'My angel',
  };
  const activeTexts = texts ?? defaultTexts;
  const typographyCss = generateTypographyCss(activeTexts, anim);

  return `
    /* ==========================================================================
       STILI CARTELLINA, AMBIENTE E VARIABILI CSS
       ========================================================================== */
    .live-card, .card-canvas {
      --speed-factor: ${speedFactor};
      --play-state: ${playState};
      position: relative;
      width: 520px;
      min-height: 740px;
      background: radial-gradient(ellipse at 50% 35%, #ffffff 0%, #fffdf8 45%, #f7f1e5 85%, #ede3d1 100%);
      border-radius: 28px;
      box-shadow: 
        0 25px 60px -15px rgba(0, 0, 0, 0.45),
        0 10px 25px -5px rgba(0, 0, 0, 0.2),
        inset 0 0 0 1px rgba(255, 255, 255, 0.9),
        inset 0 2px 6px rgba(255, 255, 255, 0.8);
      overflow: hidden;
      padding: 28px 24px 20px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
      user-select: none;
    }

    .live-card::before, .card-canvas::before {
      content: '';
      position: absolute;
      inset: 10px;
      border: 1px solid rgba(212, 175, 55, 0.25);
      border-radius: 20px;
      pointer-events: none;
      z-index: 1;
    }

    .live-card-glow, .card-ambient-glow {
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translateX(-50%);
      width: 440px;
      height: 380px;
      background: radial-gradient(circle, rgba(255, 250, 230, 0.75) 0%, rgba(255, 255, 255, 0) 70%);
      filter: blur(20px);
      pointer-events: none;
      z-index: 0;
    }

    ${typographyCss}

    /* 4. PALCO DEI PERSONAGGI */
    .live-stage-characters {
      position: relative;
      width: 100%;
      height: 380px;
      margin-top: 6px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .live-floor-reflection {
      position: absolute;
      bottom: 10px;
      left: 20px;
      right: 20px;
      height: 25px;
      background: radial-gradient(ellipse at 50% 50%, rgba(180, 150, 120, 0.25) 0%, transparent 75%);
      filter: blur(8px);
      pointer-events: none;
      z-index: 1;
    }

    /* 5. STRUTTURA BASE EMOJI */
    .live-emoji-figure {
      position: absolute;
      left: 10px;
      bottom: 0px;
      width: 250px;
      height: 370px;
      z-index: 10;
      animation: liveEmojiBreathe calc(4s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }

    .live-emoji-shadow {
      position: absolute;
      bottom: 2px;
      left: 30px;
      width: 170px;
      height: 24px;
      background: radial-gradient(ellipse at 50% 50%, rgba(60, 30, 0, 0.4) 0%, rgba(60, 30, 0, 0.1) 60%, transparent 80%);
      border-radius: 50%;
      filter: blur(5px);
      z-index: 2;
      animation: liveShadowPulse calc(4s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }

    .live-emoji-foot {
      position: absolute;
      bottom: 10px;
      width: 48px;
      height: 34px;
      background: radial-gradient(circle at 35% 25%, #fff176 0%, #fbc02d 40%, #f57f17 75%, #b25800 100%);
      border-radius: 50% 50% 45% 45% / 60% 60% 40% 40%;
      box-shadow: 
        inset -2px -3px 6px rgba(120, 50, 0, 0.45),
        inset 2px 3px 5px rgba(255, 255, 255, 0.7),
        0 6px 12px rgba(80, 40, 0, 0.35);
      z-index: 5;
    }
    .foot-l { left: 45px; transform: rotate(-10deg); }
    .foot-r { left: 108px; transform: rotate(12deg); }

    .live-emoji-leg {
      position: absolute;
      bottom: 30px;
      width: 22px;
      height: 30px;
      background: linear-gradient(180deg, #fbc02d 0%, #f57f17 100%);
      border-radius: 10px;
      z-index: 4;
    }
    .leg-l { left: 58px; transform: rotate(-5deg); }
    .leg-r { left: 120px; transform: rotate(5deg); }

    .live-emoji-arm-l {
      position: absolute;
      top: 195px;
      left: 8px;
      width: 44px;
      height: 48px;
      background: radial-gradient(circle at 40% 30%, #fff176 0%, #fbc02d 45%, #e65100 95%);
      border-radius: 50%;
      box-shadow: inset -2px -3px 5px rgba(100, 40, 0, 0.4), 0 6px 10px rgba(0, 0, 0, 0.2);
      z-index: 7;
      transform: rotate(-25deg);
    }

    .live-emoji-head {
      position: absolute;
      top: 35px;
      left: 20px;
      width: 192px;
      height: 192px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 28%, #fffde7 0%, #fff59d 15%, #fdd835 45%, #f57f17 75%, #d84315 95%, #8c2700 100%);
      box-shadow: 
        inset -10px -12px 25px rgba(140, 39, 0, 0.55),
        inset 8px 10px 18px rgba(255, 255, 255, 0.9),
        0 18px 35px rgba(120, 50, 0, 0.35);
      z-index: 8;
    }

    .live-emoji-specular {
      position: absolute;
      top: 15px;
      left: 30px;
      width: 65px;
      height: 40px;
      background: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.5) 45%, transparent 75%);
      border-radius: 50%;
      transform: rotate(-35deg);
      filter: blur(1.5px);
      pointer-events: none;
    }

    .live-eyebrow {
      position: absolute;
      height: 5px;
      background: #4a2200;
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
    }
    .eb-l { top: 48px; left: 50px; width: 32px; transform: rotate(-14deg); }
    .eb-r { top: 40px; left: 116px; width: 38px; transform: rotate(12deg); }

    .live-blush {
      position: absolute;
      width: 44px;
      height: 28px;
      background: radial-gradient(ellipse at 50% 50%, rgba(255, 50, 75, 0.48) 0%, rgba(255, 80, 100, 0.2) 50%, transparent 75%);
      border-radius: 50%;
      filter: blur(2px);
      z-index: 9;
    }
    .b-l { top: 96px; left: 35px; }
    .b-r { top: 88px; left: 135px; }

    /* ==========================================================================
       VARIANTI OCCHI (6 OPZIONI)
       ========================================================================== */
    
    /* 1. Wink (Classico) */
    .live-wink-container {
      position: absolute;
      top: 75px;
      left: 45px;
      width: 44px;
      height: 30px;
      z-index: 10;
    }
    .live-wink-arc {
      position: absolute;
      top: 8px;
      left: 4px;
      width: 34px;
      height: 18px;
      border-bottom: 5.5px solid #2d1400;
      border-radius: 0 0 50% 50% / 0 0 100% 100%;
      transform: rotate(-6deg);
    }
    .live-wink-lash { position: absolute; width: 3px; background: #2d1400; border-radius: 2px; }
    .w-l1 { top: 12px; left: 2px; height: 10px; transform: rotate(-60deg); }
    .w-l2 { top: 18px; left: 8px; height: 11px; transform: rotate(-45deg); }
    .w-l3 { top: 21px; left: 18px; height: 11px; transform: rotate(-25deg); }
    .w-l4 { top: 20px; left: 28px; height: 10px; transform: rotate(-5deg); }

    .live-eye-open {
      position: absolute;
      top: 55px;
      left: 115px;
      width: 42px;
      height: 52px;
      z-index: 10;
    }
    .live-sclera {
      position: relative;
      width: 42px;
      height: 52px;
      background: radial-gradient(circle at 45% 45%, #ffffff 0%, #f0f0f5 75%, #d8d8e2 100%);
      border-radius: 50%;
      box-shadow: inset 0 3px 5px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.2);
      overflow: hidden;
    }
    .live-pupil {
      position: absolute;
      top: 10px;
      left: 6px;
      width: 30px;
      height: 35px;
      background: radial-gradient(circle at 40% 40%, #5d2800 0%, #301400 65%, #150800 100%);
      border-radius: 50%;
    }
    .live-shine-lg {
      position: absolute;
      top: 5px;
      left: 6px;
      width: 12px;
      height: 12px;
      background: #ffffff;
      border-radius: 50%;
      box-shadow: 0 0 3px #ffffff;
    }
    .live-shine-sm {
      position: absolute;
      bottom: 6px;
      right: 6px;
      width: 5px;
      height: 5px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
    }
    .live-open-lash { position: absolute; width: 3px; background: #2d1400; border-radius: 2px; }
    .o-l1 { top: -2px; left: 10px; height: 9px; transform: rotate(-25deg); }
    .o-l2 { top: -4px; left: 22px; height: 10px; transform: rotate(5deg); }
    .o-l3 { top: -1px; left: 34px; height: 9px; transform: rotate(35deg); }

    /* 2. HeartEyes (Innamorato) */
    .live-heart-eyes-box {
      position: absolute;
      top: 60px;
      left: 45px;
      right: 45px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }
    .live-heart-eye {
      position: relative;
      width: 34px;
      height: 34px;
      background: radial-gradient(circle at 35% 35%, #ff4d6d 0%, #e60026 55%, #8b0014 100%);
      transform: rotate(-45deg);
      border-radius: 4px;
      box-shadow: 0 3px 8px rgba(180, 0, 20, 0.45);
      animation: liveHeartPulse calc(1.8s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }
    .live-heart-eye::before, .live-heart-eye::after {
      content: '';
      position: absolute;
      width: 34px;
      height: 34px;
      background: inherit;
      border-radius: 50%;
      box-shadow: inherit;
    }
    .live-heart-eye::before { top: -50%; left: 0; }
    .live-heart-eye::after { top: 0; right: -50%; }
    .live-heart-eye-shine {
      position: absolute;
      top: -20%;
      left: 10%;
      width: 14px;
      height: 14px;
      background: rgba(255, 255, 255, 0.85);
      border-radius: 50%;
      z-index: 5;
    }

    /* 3. HappyCurved (^ ^) */
    .live-happy-eyes-box {
      position: absolute;
      top: 68px;
      left: 48px;
      right: 48px;
      height: 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }
    .live-happy-eye-unit {
      position: relative;
      width: 40px;
      height: 24px;
    }
    .live-happy-eye-arc {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 36px;
      height: 20px;
      border-top: 5.5px solid #2d1400;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    }
    .live-happy-eye-lash-l {
      position: absolute;
      bottom: 2px;
      left: 0px;
      width: 3px;
      height: 8px;
      background: #2d1400;
      border-radius: 2px;
      transform: rotate(35deg);
    }
    .live-happy-eye-lash-r {
      position: absolute;
      bottom: 2px;
      right: 0px;
      width: 3px;
      height: 8px;
      background: #2d1400;
      border-radius: 2px;
      transform: rotate(-35deg);
    }

    /* 4. Sunglasses (Cool) */
    .live-sunglasses-unit {
      position: absolute;
      top: 52px;
      left: 36px;
      width: 120px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 12;
      filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.35));
    }
    .live-sunglass-lens {
      position: relative;
      width: 50px;
      height: 38px;
      background: linear-gradient(150deg, #2b2c3a 0%, #15161e 60%, #0a0a0f 100%);
      border-radius: 6px 6px 20px 20px;
      border: 3.5px solid #111116;
      box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.3);
      overflow: hidden;
    }
    .live-sunglass-glare {
      position: absolute;
      top: -15px;
      left: -10px;
      width: 25px;
      height: 70px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
      transform: rotate(30deg);
      pointer-events: none;
    }
    .live-sunglass-bridge {
      width: 16px;
      height: 5px;
      background: linear-gradient(180deg, #ffd700 0%, #b45309 100%);
      border-radius: 3px;
      margin: 0 -2px;
      z-index: 2;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    /* 5. Starry (Anime Stars) */
    .live-starry-eyes-box {
      position: absolute;
      top: 58px;
      left: 45px;
      right: 45px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }
    .live-star-eye-unit {
      position: relative;
      width: 44px;
      height: 44px;
    }
    .live-star-eye-pupil {
      position: absolute;
      top: 4px;
      left: 4px;
      width: 36px;
      height: 36px;
      background: radial-gradient(circle, #ffffff 15%, #ffd700 45%, #ff8f00 85%);
      clip-path: polygon(50% 0%, 63% 37%, 100% 50%, 63% 63%, 50% 100%, 37% 63%, 0% 50%, 37% 37%);
      filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.85));
      animation: liveStarRotate calc(6s * var(--speed-factor)) linear infinite var(--play-state);
    }
    .live-star-eye-shine {
      position: absolute;
      top: 2px;
      left: 6px;
      width: 10px;
      height: 10px;
      background: #ffffff;
      border-radius: 50%;
      box-shadow: 0 0 4px #ffffff;
      z-index: 5;
    }

    /* 6. SleepyCute (Sonnecchioso) */
    .live-sleepy-eyes-box {
      position: absolute;
      top: 72px;
      left: 50px;
      right: 50px;
      height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }
    .live-sleepy-eye-l, .live-sleepy-eye-r {
      position: relative;
      width: 36px;
      height: 18px;
      border-bottom: 5.5px solid #2d1400;
      border-radius: 0 0 50% 50%;
    }
    .live-sleepy-eye-l { transform: rotate(4deg); }
    .live-sleepy-eye-r { transform: rotate(-4deg); }
    .live-sleepy-lash {
      position: absolute;
      bottom: -4px;
      width: 3px;
      height: 7px;
      background: #2d1400;
      border-radius: 2px;
    }
    .sl-1 { left: 8px; transform: rotate(-20deg); }
    .sl-2 { right: 8px; transform: rotate(20deg); }


    /* ==========================================================================
       VARIANTI BOCCA (5 OPZIONI)
       ========================================================================== */

    /* 1. KissLips (Originale con Cuoricino) */
    .live-kiss-mouth {
      position: absolute;
      top: 114px;
      right: 18px;
      width: 38px;
      height: 38px;
      z-index: 10;
      transform: rotate(-8deg);
      filter: drop-shadow(2px 4px 6px rgba(160, 0, 30, 0.4));
    }
    .live-lip-top {
      position: absolute;
      top: 4px;
      left: 6px;
      width: 24px;
      height: 16px;
      background: radial-gradient(circle at 45% 35%, #ff4d6d 0%, #e60026 60%, #990014 100%);
      border-radius: 50% 50% 30% 30% / 70% 70% 30% 30%;
      box-shadow: inset 1px 2px 3px rgba(255, 255, 255, 0.7);
    }
    .live-lip-bottom {
      position: absolute;
      bottom: 4px;
      left: 4px;
      width: 26px;
      height: 18px;
      background: radial-gradient(circle at 45% 65%, #ff4d6d 0%, #e60026 60%, #800010 100%);
      border-radius: 30% 30% 50% 50% / 30% 30% 70% 70%;
      box-shadow: inset 1px -2px 3px rgba(255, 255, 255, 0.6);
    }
    .live-lip-center {
      position: absolute;
      top: 15px;
      left: 13px;
      width: 10px;
      height: 8px;
      background: #4a0008;
      border-radius: 50%;
    }

    .live-kiss-hand {
      position: absolute;
      top: 138px;
      right: 2px;
      width: 58px;
      height: 48px;
      z-index: 15;
      transform: rotate(-18deg);
      filter: drop-shadow(0 4px 8px rgba(90, 30, 0, 0.35));
      animation: liveHandWaveKiss calc(3s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }
    .live-hand-palm {
      position: absolute;
      bottom: 2px;
      left: 10px;
      width: 32px;
      height: 28px;
      background: radial-gradient(circle at 40% 35%, #fff176 0%, #fbc02d 55%, #e65100 100%);
      border-radius: 40% 40% 50% 50%;
      box-shadow: inset 1px 2px 3px rgba(255, 255, 255, 0.7);
    }
    .live-finger {
      position: absolute;
      background: radial-gradient(circle at 40% 30%, #fff176 0%, #fbc02d 55%, #e65100 100%);
      border-radius: 10px;
      box-shadow: inset 1px 2px 2px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.15);
    }
    .f-1 { top: 6px; left: 8px; width: 14px; height: 22px; transform: rotate(-25deg); }
    .f-2 { top: 2px; left: 19px; width: 14px; height: 25px; transform: rotate(-5deg); }
    .f-3 { top: 5px; left: 30px; width: 13px; height: 23px; transform: rotate(15deg); }
    .f-th { top: 16px; left: 2px; width: 14px; height: 18px; transform: rotate(-55deg); }

    .live-kiss-heart-unit {
      position: absolute;
      top: 110px;
      left: 205px;
      z-index: 20;
      animation: liveKissHeartFloat calc(3s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }

    /* 2. OpenSmile (Sorrisone con denti) */
    .live-open-smile-box {
      position: absolute;
      top: 112px;
      left: 70px;
      width: 58px;
      height: 38px;
      background: #350c04;
      border-radius: 4px 4px 50% 50% / 4px 4px 100% 100%;
      border: 3px solid #4a1500;
      overflow: hidden;
      z-index: 10;
      box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.6);
    }
    .live-smile-teeth {
      position: absolute;
      top: 0;
      left: 4px;
      right: 4px;
      height: 12px;
      background: #ffffff;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    }
    .live-smile-tongue {
      position: absolute;
      bottom: -4px;
      left: 10px;
      right: 10px;
      height: 18px;
      background: radial-gradient(circle at 50% 30%, #ff6b8b 0%, #e60039 80%);
      border-radius: 50%;
    }

    /* 3. PlayfulTongue (Linguaccia Birichina) */
    .live-playful-tongue-box {
      position: absolute;
      top: 114px;
      left: 72px;
      width: 54px;
      height: 28px;
      z-index: 10;
    }
    .live-playful-lip {
      position: absolute;
      top: 0;
      left: 0;
      width: 54px;
      height: 16px;
      border-bottom: 5px solid #2d1400;
      border-radius: 0 0 50% 50%;
    }
    .live-playful-tongue-flap {
      position: absolute;
      top: 8px;
      left: 18px;
      width: 22px;
      height: 26px;
      background: radial-gradient(circle at 50% 35%, #ff708f 0%, #e60033 75%, #990022 100%);
      border-radius: 0 0 12px 12px;
      box-shadow: 0 3px 6px rgba(100, 0, 20, 0.35);
      transform: rotate(12deg);
      overflow: hidden;
    }
    .live-playful-tongue-line {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 14px;
      background: rgba(140, 0, 30, 0.4);
    }

    /* 4. CatNeko (:3) */
    .live-cat-neko-box {
      position: absolute;
      top: 116px;
      left: 70px;
      width: 56px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }
    .live-cat-half-l, .live-cat-half-r {
      width: 20px;
      height: 15px;
      border-bottom: 5px solid #2d1400;
      border-radius: 0 0 50% 50%;
    }
    .live-cat-half-l { border-right: 4.5px solid #2d1400; margin-right: -2px; }
    .live-cat-half-r { border-left: 4.5px solid #2d1400; margin-left: -2px; }

    /* 5. BlushingO (Boccina a 'o') */
    .live-blushing-o-box {
      position: absolute;
      top: 116px;
      left: 88px;
      width: 22px;
      height: 24px;
      background: radial-gradient(circle at 45% 45%, #2a0800 0%, #441100 65%, #772200 100%);
      border-radius: 50%;
      border: 3px solid #5a1d00;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
      z-index: 10;
    }


    /* ==========================================================================
       VARIANTI ACCESSORI TESTA (7 OPZIONI)
       ========================================================================== */

    /* 1. FlowerPin (Fiorellino Arcobaleno) */
    .live-flower-pin {
      position: absolute;
      top: 12px;
      left: 24px;
      width: 48px;
      height: 48px;
      z-index: 12;
      filter: drop-shadow(0 4px 6px rgba(100, 30, 0, 0.4));
      transform: rotate(-15deg);
    }
    .live-petal {
      position: absolute;
      width: 18px;
      height: 24px;
      top: 12px;
      left: 15px;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      transform-origin: center bottom;
      box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .pet-1 { transform: rotate(0deg) translateY(-14px); background: linear-gradient(180deg, #ff4081, #d81b60); }
    .pet-2 { transform: rotate(60deg) translateY(-14px); background: linear-gradient(180deg, #40c4ff, #0288d1); }
    .pet-3 { transform: rotate(120deg) translateY(-14px); background: linear-gradient(180deg, #69f0ae, #00c853); }
    .pet-4 { transform: rotate(180deg) translateY(-14px); background: linear-gradient(180deg, #ffd740, #ffab00); }
    .pet-5 { transform: rotate(240deg) translateY(-14px); background: linear-gradient(180deg, #ff6e40, #e64a19); }
    .pet-6 { transform: rotate(300deg) translateY(-14px); background: linear-gradient(180deg, #e040fb, #aa00ff); }
    .live-flower-pistil {
      position: absolute;
      top: 17px;
      left: 17px;
      width: 14px;
      height: 14px;
      background: radial-gradient(circle at 35% 35%, #ffffff 0%, #ffeb3b 40%, #ff8f00 90%);
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      z-index: 2;
    }

    /* 2. RoyalCrown (Coroncina Reale) */
    .live-royal-crown-box {
      position: absolute;
      top: -24px;
      left: 65px;
      width: 65px;
      height: 46px;
      z-index: 12;
      filter: drop-shadow(0 6px 8px rgba(180, 83, 9, 0.45));
      transform: rotate(5deg);
    }
    .live-royal-crown-shape {
      width: 65px;
      height: 42px;
      background: linear-gradient(180deg, #ffea79 0%, #ffd700 35%, #f59e0b 70%, #b45309 100%);
      clip-path: polygon(0% 100%, 0% 30%, 25% 65%, 50% 10%, 75% 65%, 100% 30%, 100% 100%);
      border-radius: 2px;
    }
    .live-crown-ruby {
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 12px;
      height: 12px;
      background: radial-gradient(circle at 35% 35%, #ff4d6d 0%, #e11d48 60%, #881337 100%);
      box-shadow: 0 0 6px rgba(225, 29, 72, 0.8);
      border-radius: 2px;
    }
    .live-crown-pearl {
      position: absolute;
      width: 7px;
      height: 7px;
      background: radial-gradient(circle at 35% 35%, #ffffff 0%, #e2e8f0 70%, #94a3b8 100%);
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
    .cp-1 { top: 9px; left: -1px; }
    .cp-2 { top: 1px; left: 29px; }
    .cp-3 { top: 9px; right: -1px; }

    /* 3. PartyHat (Cappellino da Festa) */
    .live-party-hat-box {
      position: absolute;
      top: -34px;
      left: 70px;
      width: 50px;
      height: 65px;
      z-index: 12;
      transform: rotate(15deg);
      filter: drop-shadow(0 4px 8px rgba(80, 20, 0, 0.35));
    }
    .live-party-cone {
      position: absolute;
      bottom: 0;
      left: 5px;
      width: 42px;
      height: 54px;
      background: repeating-linear-gradient(
        45deg,
        #ff007f 0px,
        #ff007f 7px,
        #00e5ff 7px,
        #00e5ff 14px,
        #ffd700 14px,
        #ffd700 21px
      );
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    .live-party-pompon {
      position: absolute;
      top: 2px;
      left: 20px;
      width: 14px;
      height: 14px;
      background: radial-gradient(circle at 35% 35%, #ffffff 0%, #ffd700 50%, #f59e0b 100%);
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(255, 215, 0, 0.8);
    }

    /* 4. Headset (Cuffie Stereo) */
    .live-headset-box {
      position: absolute;
      top: -6px;
      left: 10px;
      width: 172px;
      height: 120px;
      z-index: 12;
      pointer-events: none;
    }
    .live-headset-band {
      position: absolute;
      top: 6px;
      left: 18px;
      width: 136px;
      height: 80px;
      border: 8px solid #0284c7;
      border-bottom: none;
      border-radius: 70px 70px 0 0;
      box-shadow: 0 4px 8px rgba(2, 132, 199, 0.3);
    }
    .live-headset-ear-l, .live-headset-ear-r {
      position: absolute;
      top: 65px;
      width: 22px;
      height: 38px;
      background: linear-gradient(135deg, #38bdf8 0%, #0284c7 60%, #0369a1 100%);
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.35);
    }
    .live-headset-ear-l { left: 8px; }
    .live-headset-ear-r { right: 8px; }

    /* 5. RedRibbon (Fiocco Elegante) */
    .live-ribbon-box {
      position: absolute;
      top: 6px;
      left: 25px;
      width: 48px;
      height: 42px;
      z-index: 12;
      transform: rotate(-20deg);
      filter: drop-shadow(0 4px 6px rgba(120, 10, 30, 0.45));
    }
    .live-ribbon-center {
      position: absolute;
      top: 12px;
      left: 16px;
      width: 16px;
      height: 16px;
      background: radial-gradient(circle at 35% 35%, #ff4d6d 0%, #dc2626 65%, #7f1d1d 100%);
      border-radius: 50%;
      z-index: 3;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
    .live-ribbon-loop-l, .live-ribbon-loop-r {
      position: absolute;
      top: 7px;
      width: 22px;
      height: 24px;
      background: radial-gradient(circle at 35% 35%, #ff4d6d 0%, #dc2626 65%, #991b1b 100%);
      border-radius: 50% 50% 15% 50%;
    }
    .live-ribbon-loop-l { left: 0px; transform: rotate(-15deg); }
    .live-ribbon-loop-r { right: 0px; transform: scaleX(-1) rotate(-15deg); }

    /* 6. AngelHalo (Aureola Angelica) */
    .live-angel-halo-box {
      position: absolute;
      top: -30px;
      left: 56px;
      width: 80px;
      height: 26px;
      z-index: 12;
      animation: liveHaloFloat calc(3s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }
    .live-angel-halo {
      width: 80px;
      height: 24px;
      border: 5px solid #ffd700;
      border-radius: 50%;
      box-shadow: 
        0 0 12px rgba(255, 215, 0, 0.85),
        inset 0 0 8px rgba(255, 215, 0, 0.6);
      filter: drop-shadow(0 2px 4px rgba(180, 100, 0, 0.4));
    }


    /* ==========================================================================
       VARIANTI OGGETTO COMPAGNO (5 OPZIONI)
       ========================================================================== */

    /* 1. TAZZINA KAWAII (Originale) */
    .live-coffee-wrapper {
      position: absolute;
      right: 12px;
      bottom: 0px;
      width: 240px;
      height: 330px;
      z-index: 10;
    }

    .live-saucer-shadow {
      position: absolute;
      bottom: 2px;
      left: 10px;
      width: 220px;
      height: 28px;
      background: radial-gradient(ellipse at 50% 50%, rgba(50, 40, 30, 0.38) 0%, rgba(50, 40, 30, 0.1) 60%, transparent 80%);
      border-radius: 50%;
      filter: blur(5px);
      z-index: 2;
    }

    .live-saucer-plate {
      position: absolute;
      bottom: 12px;
      left: 8px;
      width: 224px;
      height: 60px;
      background: radial-gradient(ellipse at 50% 40%, #ffffff 0%, #f6f7fa 55%, #e2e6ed 80%, #cbd2df 100%);
      border-radius: 50%;
      box-shadow: 
        inset 0 3px 6px rgba(255, 255, 255, 0.95),
        inset 0 -4px 8px rgba(160, 175, 195, 0.5),
        0 8px 18px rgba(70, 60, 50, 0.25);
      z-index: 3;
    }

    .live-saucer-ring {
      position: absolute;
      top: 10px;
      left: 22px;
      width: 180px;
      height: 40px;
      background: radial-gradient(ellipse at 50% 50%, #eaedf3 0%, #f9fafc 60%, #ffffff 100%);
      border-radius: 50%;
      box-shadow: inset 0 2px 4px rgba(150, 165, 185, 0.35);
    }

    .live-cup-body {
      position: absolute;
      bottom: 35px;
      left: 45px;
      width: 154px;
      height: 160px;
      background: linear-gradient(135deg, #ffffff 0%, #f9fafc 25%, #f0f3f8 65%, #dce3ed 100%);
      border-radius: 12px 12px 65px 65px / 12px 12px 90px 90px;
      box-shadow: 
        inset -8px 0 15px rgba(180, 195, 215, 0.4),
        inset 8px 0 12px rgba(255, 255, 255, 0.9),
        0 12px 24px rgba(60, 50, 40, 0.25);
      z-index: 6;
    }

    .live-cup-shine {
      position: absolute;
      top: 15px;
      left: 12px;
      width: 18px;
      height: 125px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.2) 75%, transparent 100%);
      border-radius: 10px;
      filter: blur(1.5px);
      pointer-events: none;
    }

    .live-cup-handle {
      position: absolute;
      top: 35px;
      right: -24px;
      width: 48px;
      height: 84px;
      border: 14px solid #eef2f7;
      border-left-color: transparent;
      border-radius: 0 50px 50px 0;
      box-shadow: 
        inset -2px 0 4px rgba(255, 255, 255, 0.8),
        3px 4px 10px rgba(70, 60, 50, 0.2);
      z-index: 5;
    }

    .live-cup-rim {
      position: absolute;
      top: -12px;
      left: 0;
      width: 154px;
      height: 48px;
      background: #fbfbfd;
      border-radius: 50%;
      border: 4px solid #ffffff;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      z-index: 8;
    }

    .live-espresso {
      position: absolute;
      inset: 4px 6px;
      background: radial-gradient(ellipse at 45% 45%, #5a2810 0%, #3d1a08 50%, #200d04 85%, #100602 100%);
      border-radius: 50%;
      box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.7);
    }

    .live-crema {
      position: absolute;
      top: 6px;
      left: 20px;
      width: 70px;
      height: 22px;
      background: radial-gradient(ellipse at 50% 50%, rgba(220, 150, 80, 0.75) 0%, rgba(180, 100, 40, 0.4) 60%, transparent 80%);
      border-radius: 50%;
      transform: rotate(-10deg);
      filter: blur(1px);
    }

    .live-coffee-shine {
      position: absolute;
      top: 4px;
      right: 25px;
      width: 28px;
      height: 10px;
      background: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.6) 0%, transparent 80%);
      border-radius: 50%;
      transform: rotate(15deg);
    }

    .live-cup-face {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      height: 90px;
      z-index: 10;
    }

    .live-cup-eye { position: absolute; width: 24px; height: 16px; }
    .c-eye-l { top: 12px; left: 24px; }
    .c-eye-r { top: 12px; right: 28px; }

    .live-cup-arc {
      position: absolute;
      width: 22px;
      height: 14px;
      border-top: 4.5px solid #2a1a12;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    }

    .live-cup-lash { position: absolute; width: 2.5px; background: #2a1a12; border-radius: 2px; }
    .c-lash-l { top: 0px; left: 0px; height: 7px; transform: rotate(-35deg); }
    .c-lash-r { top: 0px; right: 0px; height: 7px; transform: rotate(35deg); }

    .live-cup-cheeks {
      position: absolute;
      width: 26px;
      height: 18px;
      background: radial-gradient(ellipse at 50% 50%, #ff6b8b 0%, rgba(255, 107, 139, 0.4) 60%, transparent 80%);
      border-radius: 50%;
      filter: blur(1px);
    }
    .ch-l { top: 22px; left: 16px; }
    .ch-r { top: 22px; right: 20px; }

    .live-cup-mouth {
      position: absolute;
      top: 24px;
      left: 50%;
      transform: translateX(-50%);
      width: 24px;
      height: 18px;
      background: #2a140a;
      border-radius: 3px 3px 20px 20px / 3px 3px 25px 25px;
      overflow: hidden;
    }

    .live-cup-tongue {
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 18px;
      height: 11px;
      background: #ff5277;
      border-radius: 50%;
    }

    .live-cup-heart {
      position: absolute;
      bottom: 6px;
      left: 50%;
      margin-left: -9px;
      width: 18px;
      height: 18px;
      background: radial-gradient(circle at 35% 35%, #ff4d6d 0%, #d80027 60%, #800010 100%);
      transform: rotate(-45deg);
      border-radius: 2px;
      box-shadow: 0 2px 6px rgba(180, 0, 20, 0.4);
      animation: liveHeartPulse calc(2.2s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }
    .live-cup-heart::before, .live-cup-heart::after {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      background: inherit;
      border-radius: 50%;
      box-shadow: inherit;
    }
    .live-cup-heart::before { top: -9px; left: 0; }
    .live-cup-heart::after { top: 0; right: -9px; }

    .live-steam-box {
      position: absolute;
      top: -85px;
      left: 20px;
      width: 130px;
      height: 120px;
      pointer-events: none;
      z-index: 15;
    }

    .live-steam-heart {
      position: absolute;
      top: 10px;
      left: 25px;
      width: 75px;
      height: 75px;
      border: 6px solid rgba(255, 255, 255, 0.65);
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
      filter: blur(4px) drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
      animation: liveSteamHeartDrift calc(3.5s * var(--speed-factor)) ease-out infinite var(--play-state);
    }
    .live-steam-heart::before, .live-steam-heart::after {
      content: '';
      position: absolute;
      width: 75px;
      height: 75px;
      border: 6px solid rgba(255, 255, 255, 0.65);
      border-radius: 50%;
      filter: blur(1px);
    }
    .live-steam-heart::before { top: -38px; left: -6px; border-bottom: none; border-right: none; }
    .live-steam-heart::after { top: -6px; left: -38px; border-bottom: none; border-right: none; }

    .live-wisp {
      position: absolute;
      bottom: 5px;
      width: 6px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%);
      border-radius: 10px;
      filter: blur(2.5px);
    }
    .wisp-a { left: 45px; height: 40px; animation: liveSteamWispRise calc(2.5s * var(--speed-factor)) ease-out infinite var(--play-state); }
    .wisp-b { left: 65px; height: 55px; animation: liveSteamWispRise calc(2.8s * var(--speed-factor)) ease-out infinite calc(0.6s * var(--speed-factor)) var(--play-state); }
    .wisp-c { left: 85px; height: 45px; animation: liveSteamWispRise calc(2.2s * var(--speed-factor)) ease-out infinite calc(1.2s * var(--speed-factor)) var(--play-state); }


    /* 2. CORNETTO DORATO SFOGLIATO */
    .live-croissant-wrapper {
      position: absolute;
      right: 15px;
      bottom: 0px;
      width: 235px;
      height: 310px;
      z-index: 10;
    }
    .live-croissant-body {
      position: absolute;
      bottom: 45px;
      left: 15px;
      width: 200px;
      height: 125px;
      background: radial-gradient(ellipse at 45% 35%, #ffedd5 0%, #fb923c 40%, #c2410c 75%, #7c2d12 100%);
      border-radius: 45% 45% 50% 50% / 65% 65% 35% 35%;
      box-shadow: 
        inset -6px -10px 18px rgba(100, 30, 0, 0.55),
        inset 6px 8px 15px rgba(255, 255, 255, 0.75),
        0 14px 28px rgba(80, 40, 0, 0.35);
      z-index: 6;
      overflow: hidden;
    }
    .live-croissant-stripe {
      position: absolute;
      border: 4px solid rgba(124, 45, 18, 0.4);
      border-radius: 50%;
    }
    .cs-1 { top: -20px; left: 40px; width: 60px; height: 160px; transform: rotate(-25deg); }
    .cs-2 { top: -30px; left: 90px; width: 60px; height: 170px; transform: rotate(5deg); }
    .cs-3 { top: -20px; left: 135px; width: 50px; height: 150px; transform: rotate(30deg); }

    .live-croissant-glaze {
      position: absolute;
      top: 15px;
      left: 35px;
      width: 120px;
      height: 25px;
      background: radial-gradient(ellipse, rgba(255, 255, 255, 0.75) 0%, transparent 70%);
      transform: rotate(-5deg);
      filter: blur(2px);
    }
    .live-croissant-face {
      position: absolute;
      top: 48px;
      left: 55px;
      width: 90px;
      height: 45px;
      z-index: 8;
    }
    .live-croissant-eye-l, .live-croissant-eye-r {
      position: absolute;
      width: 14px;
      height: 10px;
      border-top: 3.5px solid #3d1400;
      border-radius: 50% 50% 0 0;
    }
    .live-croissant-eye-l { left: 18px; top: 8px; }
    .live-croissant-eye-r { right: 18px; top: 8px; }
    .live-croissant-cheeks {
      position: absolute;
      width: 16px;
      height: 10px;
      background: rgba(255, 80, 100, 0.5);
      border-radius: 50%;
      filter: blur(1px);
    }
    .cr-ch-l { left: 10px; top: 16px; }
    .cr-ch-r { right: 10px; top: 16px; }
    .live-croissant-mouth {
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);
      width: 16px;
      height: 10px;
      background: #3d1400;
      border-radius: 0 0 10px 10px;
    }


    /* 3. CUPCAKE FESTOSO CON CANDELINA */
    .live-cupcake-wrapper {
      position: absolute;
      right: 18px;
      bottom: 0px;
      width: 230px;
      height: 330px;
      z-index: 10;
    }
    .live-cupcake-cup {
      position: absolute;
      bottom: 30px;
      left: 45px;
      width: 140px;
      height: 90px;
      background: repeating-linear-gradient(90deg, #f59e0b 0px, #f59e0b 14px, #d97706 14px, #d97706 28px);
      clip-path: polygon(10% 100%, 90% 100%, 100% 0%, 0% 0%);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
      z-index: 4;
    }
    .live-cupcake-frosting {
      position: absolute;
      bottom: 95px;
      left: 30px;
      width: 170px;
      height: 110px;
      background: radial-gradient(circle at 40% 30%, #fdf2f8 0%, #f472b6 50%, #db2777 90%, #9d174d 100%);
      border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
      box-shadow: 
        inset 0 4px 8px rgba(255, 255, 255, 0.8),
        inset 0 -6px 12px rgba(157, 23, 77, 0.6),
        0 12px 24px rgba(190, 24, 93, 0.35);
      z-index: 6;
      overflow: hidden;
    }
    .live-sprinkle {
      position: absolute;
      width: 10px;
      height: 4px;
      border-radius: 3px;
    }
    .spk-1 { top: 25px; left: 40px; background: #38bdf8; transform: rotate(25deg); }
    .spk-2 { top: 35px; left: 80px; background: #facc15; transform: rotate(-15deg); }
    .spk-3 { top: 28px; left: 120px; background: #4ade80; transform: rotate(45deg); }
    .spk-4 { top: 60px; left: 35px; background: #ffffff; transform: rotate(-35deg); }
    .spk-5 { top: 65px; left: 130px; background: #c084fc; transform: rotate(10deg); }

    .live-candle {
      position: absolute;
      bottom: 195px;
      left: 105px;
      width: 16px;
      height: 50px;
      background: repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 6px, #0ea5e9 6px, #0ea5e9 12px);
      border-radius: 4px 4px 2px 2px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      z-index: 8;
    }
    .live-candle-wick {
      position: absolute;
      top: -8px;
      left: 7px;
      width: 2.5px;
      height: 9px;
      background: #1e293b;
    }
    .live-candle-flame {
      position: absolute;
      top: -30px;
      left: 0px;
      width: 16px;
      height: 24px;
      background: radial-gradient(ellipse at 50% 80%, #ffffff 0%, #fef08a 35%, #f97316 70%, transparent 100%);
      border-radius: 50% 50% 20% 20% / 70% 70% 30% 30%;
      filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.9));
      animation: liveFlameFlicker calc(1.2s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }


    /* 4. BOUQUET DI FIORI & ROSE */
    .live-bouquet-wrapper {
      position: absolute;
      right: 15px;
      bottom: 0px;
      width: 235px;
      height: 330px;
      z-index: 10;
    }
    .live-bouquet-cone {
      position: absolute;
      bottom: 25px;
      left: 45px;
      width: 145px;
      height: 170px;
      background: linear-gradient(135deg, #e4cca2 0%, #c4a470 50%, #997843 100%);
      clip-path: polygon(5% 0%, 95% 0%, 65% 100%, 35% 100%);
      box-shadow: 0 10px 20px rgba(70, 50, 20, 0.35);
      z-index: 5;
    }
    .live-bouquet-ribbon {
      position: absolute;
      bottom: 75px;
      left: 80px;
      width: 75px;
      height: 24px;
      background: #f43f5e;
      border-radius: 12px;
      z-index: 7;
      box-shadow: 0 3px 6px rgba(0,0,0,0.3);
    }
    .live-bouquet-top {
      position: absolute;
      bottom: 150px;
      left: 20px;
      width: 195px;
      height: 120px;
      z-index: 8;
    }
    .live-rose-bud {
      position: absolute;
      border-radius: 50%;
      box-shadow: inset -2px -3px 6px rgba(100, 0, 20, 0.6), 0 4px 8px rgba(0, 0, 0, 0.25);
    }
    .rb-1 {
      top: 15px;
      left: 30px;
      width: 48px;
      height: 48px;
      background: radial-gradient(circle at 35% 35%, #ff4d6d 0%, #e11d48 55%, #881337 100%);
    }
    .rb-2 {
      top: 0px;
      left: 75px;
      width: 54px;
      height: 54px;
      background: radial-gradient(circle at 35% 35%, #fb7185 0%, #f43f5e 55%, #9f1239 100%);
    }
    .rb-3 {
      top: 20px;
      right: 30px;
      width: 46px;
      height: 46px;
      background: radial-gradient(circle at 35% 35%, #fda4af 0%, #fb7185 55%, #be123c 100%);
    }
    .live-leaf {
      position: absolute;
      width: 28px;
      height: 16px;
      background: linear-gradient(135deg, #4ade80 0%, #16a34a 100%);
      border-radius: 14px 0 14px 0;
      z-index: 7;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .lf-1 { top: 55px; left: 15px; transform: rotate(-35deg); }
    .lf-2 { top: 40px; right: 15px; transform: rotate(45deg); }


    /* 5. TAZZA DI TÈ AL LIMONE */
    .live-teamug-wrapper {
      position: absolute;
      right: 15px;
      bottom: 0px;
      width: 235px;
      height: 330px;
      z-index: 10;
    }
    .live-teamug-glass {
      position: absolute;
      bottom: 35px;
      left: 45px;
      width: 150px;
      height: 155px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.3) 100%);
      border: 3.5px solid rgba(255, 255, 255, 0.85);
      border-radius: 8px 8px 50px 50px;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.5);
      overflow: hidden;
      z-index: 6;
    }
    .live-tea-liquid {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 120px;
      background: linear-gradient(180deg, rgba(245, 158, 11, 0.75) 0%, rgba(180, 83, 9, 0.9) 100%);
      border-radius: 0 0 45px 45px;
    }
    .live-lemon-slice {
      position: absolute;
      top: 15px;
      left: 20px;
      width: 58px;
      height: 58px;
      background: radial-gradient(circle at 45% 45%, #fef08a 0%, #eab308 65%, #ca8a04 100%);
      border: 3.5px solid #fef9c3;
      border-radius: 50%;
      box-shadow: 0 4px 8px rgba(161, 98, 7, 0.4);
      z-index: 9;
      transform: rotate(-25deg);
    }
    .live-mint-leaf {
      position: absolute;
      top: 25px;
      right: 45px;
      width: 32px;
      height: 18px;
      background: linear-gradient(135deg, #86efac 0%, #22c55e 60%, #15803d 100%);
      border-radius: 16px 0 16px 0;
      transform: rotate(20deg);
      z-index: 9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    }
    .live-teabag-tag {
      position: absolute;
      top: 70px;
      right: 15px;
      width: 18px;
      height: 18px;
      background: #ef4444;
      transform: rotate(-45deg);
      border-radius: 3px;
      z-index: 11;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
    .live-teabag-tag::before, .live-teabag-tag::after {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      background: inherit;
      border-radius: 50%;
    }
    .live-teabag-tag::before { top: -9px; left: 0; }
    .live-teabag-tag::after { top: 0; right: -9px; }


    /* ==========================================================================
       7. CUORI 3D & STELLINE SPARKLES
       ========================================================================== */
    .live-heart-3d {
      position: relative;
      background: radial-gradient(circle at 35% 35%, #ff5277 0%, #e60026 55%, #8b0014 100%);
      transform: rotate(-45deg);
      border-radius: 3px;
      box-shadow: 
        inset 1px 1px 3px rgba(255, 255, 255, 0.7),
        inset -1px -2px 3px rgba(80, 0, 10, 0.4),
        0 4px 10px rgba(180, 0, 20, 0.35);
      animation: liveFloatGentle calc(3s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }
    .live-heart-3d::before, .live-heart-3d::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: 50%;
      box-shadow: inherit;
    }
    .live-heart-3d::before { top: -50%; left: 0; }
    .live-heart-3d::after { top: 0; right: -50%; }

    .live-heart-specular {
      position: absolute;
      top: -25%;
      left: 10%;
      width: 35%;
      height: 45%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.85) 0%, transparent 80%);
      border-radius: 50%;
      transform: rotate(25deg);
      z-index: 2;
    }

    .h-top-l { width: 24px; height: 24px; animation-delay: 0.2s; }
    .h-top-r { width: 26px; height: 26px; animation-delay: 0.7s; }
    .h-mid-l { position: absolute; top: 295px; left: 20px; width: 28px; height: 28px; z-index: 15; animation-delay: 0.4s; }
    .h-mid-c { position: absolute; top: 315px; left: 275px; width: 20px; height: 20px; z-index: 15; animation-delay: 1.1s; }
    .h-mid-r { position: absolute; top: 360px; right: 18px; width: 26px; height: 26px; z-index: 15; animation-delay: 0.9s; }

    .live-sparkle {
      position: relative;
      display: inline-block;
      animation: liveStarTwinkle calc(2.4s * var(--speed-factor)) ease-in-out infinite var(--play-state);
    }
    .live-sparkle::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, #ffffff 15%, #ffd700 45%, #ff9900 70%, transparent 80%);
      clip-path: polygon(50% 0%, 63% 37%, 100% 50%, 63% 63%, 50% 100%, 37% 63%, 0% 50%, 37% 37%);
      filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.85));
    }
    .live-sparkle::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      height: 60%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: radial-gradient(circle, #ffffff 30%, #ffeaa7 70%, transparent 85%);
      clip-path: polygon(50% 0%, 63% 37%, 100% 50%, 63% 63%, 50% 100%, 37% 63%, 0% 50%, 37% 37%);
    }

    .s-lg { width: 26px; height: 26px; }
    .s-md { width: 20px; height: 20px; }
    .s-sm { width: 15px; height: 15px; }

    .sp-tl1 { position: absolute; top: 18px; left: 32px; animation-delay: 0.2s; }
    .sp-tl2 { position: absolute; top: 48px; left: 56px; animation-delay: 0.9s; }
    .sp-tr1 { position: absolute; top: 18px; right: 38px; animation-delay: 0.5s; }
    .sp-tr2 { position: absolute; top: 48px; right: 54px; animation-delay: 1.2s; }
    .sp-ml1 { position: absolute; top: 175px; left: 16px; animation-delay: 0.3s; }
    .sp-bl { position: absolute; top: 375px; left: 14px; animation-delay: 0.7s; }
    .sp-bc { position: absolute; top: 285px; left: 250px; animation-delay: 1.4s; }
    .sp-br { position: absolute; top: 380px; right: 48px; animation-delay: 0.1s; }

    /* 9. MY ANGEL */
    .live-footer-row {
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

    /* KEYFRAMES */
    @keyframes liveLetterBounce {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-4px) rotate(1deg); }
    }
    @keyframes liveRainbowShift {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }
    @keyframes liveEmojiBreathe {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-5px) rotate(-1deg); }
    }
    @keyframes liveShadowPulse {
      0%, 100% { transform: scale(1); opacity: 0.9; }
      50% { transform: scale(0.92); opacity: 0.7; }
    }
    @keyframes liveHandWaveKiss {
      0%, 100% { transform: rotate(-18deg) scale(1); }
      50% { transform: rotate(-12deg) scale(1.04); }
    }
    @keyframes liveKissHeartFloat {
      0% { transform: translate(0, 0) scale(0.7) rotate(-45deg); opacity: 0; }
      20% { opacity: 1; transform: translate(10px, -10px) scale(1.05) rotate(-35deg); }
      50% { transform: translate(25px, -22px) scale(1.15) rotate(-45deg); }
      80% { transform: translate(45px, -35px) scale(1) rotate(-55deg); opacity: 0.85; }
      100% { transform: translate(65px, -45px) scale(0.85) rotate(-40deg); opacity: 0; }
    }
    @keyframes liveSteamHeartDrift {
      0% { transform: translateY(15px) scale(0.8) rotate(45deg); opacity: 0; }
      30% { opacity: 0.8; }
      70% { opacity: 0.6; }
      100% { transform: translateY(-25px) scale(1.15) rotate(48deg); opacity: 0; }
    }
    @keyframes liveSteamWispRise {
      0% { transform: translateY(0) scaleX(1); opacity: 0; }
      30% { opacity: 0.7; }
      100% { transform: translateY(-40px) scaleX(1.8); opacity: 0; }
    }
    @keyframes liveFloatGentle {
      0%, 100% { transform: rotate(-45deg) translateY(0); }
      50% { transform: rotate(-45deg) translateY(-6px); }
    }
    @keyframes liveHeartPulse {
      0%, 100% { transform: rotate(-45deg) scale(1); }
      50% { transform: rotate(-45deg) scale(1.14); }
    }
    @keyframes liveStarTwinkle {
      0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
      50% { transform: scale(1.25) rotate(15deg); opacity: 1; }
    }
    @keyframes liveStarRotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes liveHaloFloat {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-4px) scale(1.03); }
    }
    @keyframes liveFlameFlicker {
      0%, 100% { transform: scale(1) rotate(-2deg); }
      25% { transform: scale(1.1, 0.95) rotate(3deg); }
      50% { transform: scale(0.95, 1.1) rotate(-1deg); }
      75% { transform: scale(1.05, 1.05) rotate(2deg); }
    }
  `;
}

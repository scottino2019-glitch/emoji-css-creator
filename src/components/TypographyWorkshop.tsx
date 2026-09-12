import React, { useState } from 'react';
import {
  CardTextConfig,
  AnimationSettings,
} from '../types';
import {
  Type,
  Sparkles,
  Copy,
  Check,
  Code2,
  Layers,
  FileCode,
  Palette,
  Heart,
  Sliders,
  ChevronDown,
  ChevronUp,
  Info,
  CheckCircle2,
  Zap,
  RotateCcw,
  LayoutGrid
} from 'lucide-react';

interface TypographyWorkshopProps {
  texts: CardTextConfig;
  onTextsChange: (newTexts: CardTextConfig) => void;
  anim: AnimationSettings;
  onReturnToCard: () => void;
  onOpenInspector: () => void;
}

type TypographySection = 'buongiorno' | 'sabato' | 'data' | 'firma' | 'all';

// Preset temi colore per il titolo BUONGIORNO
type BuongiornoColorTheme = 'multicolor' | 'liquidGold' | 'candyPink' | 'cyberNeon' | 'oceanBreeze';

// Profondità 3D
type Depth3D = 'flat' | 'light' | 'standard' | 'mega';

// Puntino sulla 'I'
type DotStyle = 'heart' | 'star' | 'circle' | 'crown';

// Animazione lettere
type LetterAnimation = 'bounce' | 'float' | 'none';

// Preset gradiente BUON SABATO
type SabatoGradient = 'rainbow' | 'sunset' | 'glitzPink' | 'aurora' | 'goldSolar';

// Effetto contorno BUON SABATO
type SabatoOutline = 'crispWhite' | 'neonGlow' | 'dark3D' | 'subtleShadow';

// Stile data
type DateStyle = 'carved' | 'goldFoil' | 'slateModern' | 'roseGold';

// Font firma
type SignatureFont = 'Great Vibes' | 'Pacifico' | 'Sacramento' | 'Dancing Script';

export const TypographyWorkshop: React.FC<TypographyWorkshopProps> = ({
  texts,
  onTextsChange,
  anim,
  onReturnToCard,
  onOpenInspector,
}) => {
  const [activeSection, setActiveSection] = useState<TypographySection>('buongiorno');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [codeTab, setCodeTab] = useState<'css' | 'html' | 'full'>('css');
  const [isExplainerOpen, setIsExplainerOpen] = useState(true);

  // --- STATI SELETTORI PER "BUONGIORNO" ---
  const [bgTheme, setBgTheme] = useState<BuongiornoColorTheme>('multicolor');
  const [bgDepth, setBgDepth] = useState<Depth3D>('standard');
  const [bgSpecular, setBgSpecular] = useState<boolean>(true);
  const [bgDot, setBgDot] = useState<DotStyle>('heart');
  const [bgAnim, setBgAnim] = useState<LetterAnimation>('bounce');
  const [customBgText, setCustomBgText] = useState<string>(texts.buongiorno);

  // --- STATI SELETTORI PER "BUON SABATO" ---
  const [sabatoGrad, setSabatoGrad] = useState<SabatoGradient>('rainbow');
  const [sabatoOut, setSabatoOut] = useState<SabatoOutline>('crispWhite');
  const [sabatoAnim, setSabatoAnim] = useState<boolean>(true);
  const [customSabatoText, setCustomSabatoText] = useState<string>(texts.subGreeting);

  // --- STATI SELETTORI PER DATA ---
  const [dateSty, setDateSty] = useState<DateStyle>('carved');
  const [dateSpacing, setDateSpacing] = useState<'normal' | 'wide' | 'ultra'>('wide');
  const [dateSparkles, setDateSparkles] = useState<boolean>(true);
  const [customDateText, setCustomDateText] = useState<string>(texts.date);

  // --- STATI SELETTORI PER FIRMA ---
  const [sigFont, setSigFont] = useState<SignatureFont>('Great Vibes');
  const [sigColor, setSigColor] = useState<'navy' | 'ruby' | 'amberGold' | 'choco'>('navy');
  const [sigRelief, setSigRelief] = useState<boolean>(true);
  const [customSigText, setCustomSigText] = useState<string>(texts.signature);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const handleApplyToCard = () => {
    onTextsChange({
      date: customDateText,
      buongiorno: customBgText,
      subGreeting: customSabatoText,
      signature: customSigText,
    });
    setCopiedKey('applied');
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // --- GENERAZIONE CODICE CSS DINAMICO PER BUONGIORNO ---
  const getBuongiornoShadow = () => {
    if (bgDepth === 'flat') return 'none';
    if (bgDepth === 'light') {
      return '0 1px 0 rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.25)';
    }
    if (bgDepth === 'mega') {
      return '0 1px 0 #fff, 0 2px 0 currentColor, 0 3px 0 currentColor, 0 4px 0 rgba(0,0,0,0.5), 0 5px 0 rgba(0,0,0,0.6), 0 6px 0 rgba(0,0,0,0.7), 0 7px 0 rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.6)';
    }
    // standard 6 layers
    return '0 1px 0 #ffffff, 0 2px 0 rgba(0,0,0,0.15), 0 3px 0 currentColor, 0 4px 0 rgba(0,0,0,0.4), 0 5px 0 rgba(0,0,0,0.5), 0 6px 10px rgba(0,0,0,0.45), 2px 8px 14px rgba(0,0,0,0.25)';
  };

  const getThemeColorClass = (index: number) => {
    if (bgTheme === 'liquidGold') {
      return 'from-amber-200 via-amber-400 to-amber-600 text-amber-500';
    }
    if (bgTheme === 'candyPink') {
      return 'from-pink-200 via-rose-400 to-rose-600 text-rose-500';
    }
    if (bgTheme === 'cyberNeon') {
      return 'from-cyan-300 via-emerald-400 to-teal-500 text-cyan-400';
    }
    if (bgTheme === 'oceanBreeze') {
      return 'from-sky-200 via-blue-400 to-indigo-600 text-blue-500';
    }
    // multicolor
    const colors = [
      'text-[#0d6efd]', // B
      'text-[#dc2626]', // U
      'text-[#ea580c]', // O
      'text-[#eab308]', // N
      'text-[#16a34a]', // G
      'text-[#eab308]', // I
      'text-[#65a30d]', // O
      'text-[#0284c7]', // R
      'text-[#9333ea]', // N
      'text-[#059669]', // O
    ];
    return colors[index % colors.length];
  };

  // Codice CSS per BUONGIORNO
  const buongiornoCssCode = `/* ==========================================================================
   TECNICA ESTRUSIONE 3D + SPECULARITÀ PER IL TITOLO "BUONGIORNO"
   Spiegazione: Ogni lettera ha un'estrusione a ${bgDepth === 'flat' ? '0 (piatta)' : bgDepth === 'light' ? '2 strati' : bgDepth === 'standard' ? '6 strati' : '8 strati'}
   e uno strato speculare superiore per simulare la riflessione della luce.
   ========================================================================== */

/* Contenitore riga del titolo */
.live-buongiorno-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5px;
  transform-style: preserve-3d;
}

/* Lettera singola 3D con font display corposo */
.live-letter-3d {
  position: relative;
  display: inline-block;
  font-family: 'Lilita One', 'Fredoka', cursive, sans-serif;
  font-size: 56px;
  font-weight: 900;
  line-height: 1;
  text-align: center;
  ${bgAnim === 'bounce' ? 'animation: liveLetterBounce 3.6s ease-in-out infinite;' : bgAnim === 'float' ? 'animation: liveFloatGentle 3s ease-in-out infinite;' : '/* Animazione disattivata */'}
  /* Estrusione 3D tramite strati multipli sovrapposti di text-shadow */
  text-shadow: ${getBuongiornoShadow()};
  transition: transform 0.2s ease;
}

.live-letter-3d:hover {
  transform: translateY(-6px) scale(1.08);
}

${bgSpecular ? `/* Patina speculare lucida sulla metà superiore della lettera */
.live-letter-3d::after {
  content: attr(data-letter);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.3) 30%, transparent 60%);
  pointer-events: none;
}` : '/* Patina speculare disattivata */'}

${bgDot === 'heart' ? `/* IL PUNTINO SULLA 'I' TRASFORMATO IN CUORICINO 3D */
.live-let-i-container {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 22px;
  height: 60px;
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
  animation: liveHeartPulse 1.8s ease-in-out infinite;
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
.live-heart-on-i::after { top: 0; right: -8px; }` : `/* Puntino sulla I configurato come: ${bgDot} */`}

@keyframes liveLetterBounce {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-4px) rotate(1deg); }
}
@keyframes liveHeartPulse {
  0%, 100% { transform: rotate(-45deg) scale(1); }
  50% { transform: rotate(-45deg) scale(1.22); }
}`;

  const buongiornoHtmlCode = `<!-- STRUTTURA HTML DEL TITOLO 3D CON ATTRIBUTO data-letter PER IL RIFLESSO -->
<div class="live-buongiorno-wrapper">
  <!-- Cuori decorativi 3D ai lati -->
  <div class="live-heart-3d h-top-l"><div class="live-heart-specular"></div></div>

  <!-- Lettere singole con data-letter -->
  <span class="live-letter-3d let-b" data-letter="B">B</span>
  <span class="live-letter-3d let-u" data-letter="U">U</span>
  <span class="live-letter-3d let-o1" data-letter="O">O</span>
  <span class="live-letter-3d let-n1" data-letter="N">N</span>
  <span class="live-letter-3d let-g" data-letter="G">G</span>
  
  <!-- Lettera I con cuoricino sopra l'asta -->
  <div class="live-let-i-container">
    <div class="live-heart-on-i"></div>
    <span class="live-let-i-stem">I</span>
  </div>
  
  <span class="live-letter-3d let-o2" data-letter="O">O</span>
  <span class="live-letter-3d let-r" data-letter="R">R</span>
  <span class="live-letter-3d let-n2" data-letter="N">N</span>
  <span class="live-letter-3d let-o3" data-letter="O">O</span>

  <div class="live-heart-3d h-top-r"><div class="live-heart-specular"></div></div>
</div>`;

  // --- GENERAZIONE CODICE CSS PER BUON SABATO ---
  const getSabatoGradientCss = () => {
    if (sabatoGrad === 'sunset') {
      return 'linear-gradient(90deg, #f97316 0%, #facc15 30%, #ec4899 70%, #f97316 100%)';
    }
    if (sabatoGrad === 'glitzPink') {
      return 'linear-gradient(90deg, #f472b6 0%, #ec4899 35%, #c084fc 70%, #f472b6 100%)';
    }
    if (sabatoGrad === 'aurora') {
      return 'linear-gradient(90deg, #34d399 0%, #38bdf8 40%, #818cf8 75%, #34d399 100%)';
    }
    if (sabatoGrad === 'goldSolar') {
      return 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 35%, #fef08a 70%, #fbbf24 100%)';
    }
    // rainbow
    return 'linear-gradient(90deg, #ff1744 0%, #ff6d00 18%, #ffd600 36%, #00e676 54%, #00b0ff 72%, #d500f9 90%, #ff1744 100%)';
  };

  const getSabatoFilterCss = () => {
    if (sabatoOut === 'neonGlow') {
      return 'drop-shadow(0 0 4px #ff3b5c) drop-shadow(0 0 10px #f59e0b) drop-shadow(0 2px 4px rgba(0,0,0,0.6))';
    }
    if (sabatoOut === 'dark3D') {
      return 'drop-shadow(0 2px 0 #152542) drop-shadow(0 3px 0 #0f1c32) drop-shadow(0 5px 8px rgba(0, 0, 0, 0.45))';
    }
    if (sabatoOut === 'subtleShadow') {
      return 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.35))';
    }
    // crispWhite + dark
    return 'drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 2px #ffffff) drop-shadow(0 2px 0 #152542) drop-shadow(0 3px 0 #0f1c32) drop-shadow(0 5px 8px rgba(0, 0, 0, 0.35))';
  };

  const sabatoCssCode = `/* ==========================================================================
   TECNICA GRADIENTE ARCOBALENO ANIMATO + MULTI DROP-SHADOW
   Spiegazione: background-clip: text ritaglia il gradiente continuo;
   background-size: 200% permette al keyframe di farlo scorrere all'infinito;
   il filter con drop-shadow multipli crea il bordo bianco e l'ombra 3D.
   ========================================================================== */

.live-sabato-text {
  font-family: 'Lilita One', 'Fredoka', cursive, sans-serif;
  font-size: 42px;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  
  /* 1. Gradiente a 7 fermate ritagliato sul testo */
  background: ${getSabatoGradientCss()};
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* 2. Animazione dello scorrimento del colore */
  ${sabatoAnim ? 'animation: liveRainbowShift 8s linear infinite;' : '/* Animazione in pausa */'}
  
  /* 3. Bordo netto protettivo e profondità 3D con filtri sovrapposti */
  filter: 
    ${getSabatoFilterCss().split(') ').join(')\n    ')};
}

@keyframes liveRainbowShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}`;

  const sabatoHtmlCode = `<!-- SOTTOTITOLO CON GRADIENTE DINAMICO E STELLINE -->
<div class="live-subtitle-wrapper">
  <div class="live-sparkle s-sm sp-ml1"></div>
  <h2 class="live-sabato-text">${customSabatoText}</h2>
  <div class="live-sparkle s-sm sp-bc"></div>
</div>`;

  // --- GENERAZIONE CODICE CSS PER DATA ---
  const getDateShadowCss = () => {
    if (dateSty === 'goldFoil') {
      return '0 1px 0 #fef08a, 0 2px 0 #ca8a04, 0 3px 6px rgba(161, 98, 7, 0.4)';
    }
    if (dateSty === 'slateModern') {
      return '0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)';
    }
    if (dateSty === 'roseGold') {
      return '0 1px 0 #ffe4e6, 0 2px 0 #f43f5e, 0 3px 6px rgba(225, 29, 72, 0.3)';
    }
    // carved
    return '0 1px 0 #ffffff, 0 -1px 0 rgba(0, 0, 0, 0.2), 1px 2px 3px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(26, 37, 54, 0.15)';
  };

  const dateCssCode = `/* ==========================================================================
   TECNICA BASSORILIEVO SCOLPITO PER LA DATA
   Spiegazione: Doppia ombra contrapposta (luce in alto con bianco solido,
   ombra in basso con nero semitrasparente) per simulare l'incisione lapidea.
   ========================================================================== */

.live-date-text {
  font-family: 'Cinzel', 'Playfair Display', serif;
  font-size: 34px;
  font-weight: 900;
  letter-spacing: ${dateSpacing === 'normal' ? '0.04em' : dateSpacing === 'wide' ? '0.08em' : '0.16em'};
  color: ${dateSty === 'goldFoil' ? '#b45309' : dateSty === 'roseGold' ? '#9f1239' : '#1a2536'};
  text-transform: uppercase;
  
  /* Doppio riflesso: bordo superiore chiaro + ombra sottostante scura */
  text-shadow: 
    ${getDateShadowCss().split(', ').join(',\n    ')};
}`;

  const dateHtmlCode = `<!-- RIGA DATA CON STELLINE VETTORIALI COORDINATE -->
<div class="live-date-row">
  ${dateSparkles ? `<div class="live-sparkle s-md sp-tl1"></div>
  <div class="live-sparkle s-sm sp-tl2"></div>` : ''}
  <span class="live-date-text">${customDateText}</span>
  ${dateSparkles ? `<div class="live-sparkle s-md sp-tr1"></div>
  <div class="live-sparkle s-sm sp-tr2"></div>` : ''}
</div>`;

  // --- GENERAZIONE CODICE CSS PER FIRMA ---
  const signatureCssCode = `/* ==========================================================================
   TECNICA CORSIVO CALLIGRAFICO MORBIDO 3D
   Spiegazione: Font elegante con accento di luce per dare un tocco
   manuale intimo alla cartolina.
   ========================================================================== */

.live-my-angel {
  font-family: '${sigFont}', cursive;
  font-size: 40px;
  font-weight: 700;
  color: ${sigColor === 'ruby' ? '#991b1b' : sigColor === 'amberGold' ? '#b45309' : sigColor === 'choco' ? '#3d1400' : '#1a2536'};
  ${sigRelief ? `text-shadow: 0 1px 0 #ffffff, 1px 2px 3px rgba(0, 0, 0, 0.2);` : 'text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);'}
}`;

  const signatureHtmlCode = `<!-- FIRMA CALLIGRAFICA 3D IN BASSO A SINISTRA -->
<div class="live-footer-row">
  <div class="live-sparkle s-md sp-bl"></div>
  <span class="live-my-angel">${customSigText}</span>
</div>`;

  // Seleziona il codice da mostrare in base alla sezione
  let currentCssSnippet = buongiornoCssCode;
  let currentHtmlSnippet = buongiornoHtmlCode;
  if (activeSection === 'sabato') {
    currentCssSnippet = sabatoCssCode;
    currentHtmlSnippet = sabatoHtmlCode;
  } else if (activeSection === 'data') {
    currentCssSnippet = dateCssCode;
    currentHtmlSnippet = dateHtmlCode;
  } else if (activeSection === 'firma') {
    currentCssSnippet = signatureCssCode;
    currentHtmlSnippet = signatureHtmlCode;
  } else if (activeSection === 'all') {
    currentCssSnippet = `/* TUTTI GLI STILI TIPOGRAFICI DELLA CARTOLINA */\n\n${dateCssCode}\n\n${buongiornoCssCode}\n\n${sabatoCssCode}\n\n${signatureCssCode}`;
    currentHtmlSnippet = `<!-- STRUTTURA TIPOGRAFICA COMPLETA -->\n${dateHtmlCode}\n\n${buongiornoHtmlCode}\n\n${sabatoHtmlCode}\n\n${signatureHtmlCode}`;
  }

  const activeSnippet = codeTab === 'css' 
    ? currentCssSnippet 
    : codeTab === 'html' 
    ? currentHtmlSnippet 
    : `<style>\n${currentCssSnippet}\n</style>\n\n${currentHtmlSnippet}`;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      
      {/* HEADER SESSIONE SCRITTE */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
              <Type className="w-3.5 h-3.5" />
              Sessione Dedicata Scritte & Tipografia 3D
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              Come si Fanno le Scritte in Puro HTML + CSS
              <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                Codice Sempre Visibile
              </span>
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Scopri passo per passo i segreti tipografici: estrusioni multi-ombra 3D, riflessi lucidi con pseudo-elementi, gradienti arcobaleno animati e cuoricini vettoriali sulle lettere.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleApplyToCard}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                copiedKey === 'applied'
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-amber-500/20 active:scale-95'
              }`}
            >
              {copiedKey === 'applied' ? <Check className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
              <span>{copiedKey === 'applied' ? 'Applicato alla Card!' : 'Applica alla Cartolina'}</span>
            </button>

            <button
              onClick={onReturnToCard}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              &larr; Torna alla Card
            </button>
          </div>
        </div>

        {/* SELEZIONE DELLE 4 SCRITTE DA STUDIARE */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-800/80">
          <button
            onClick={() => setActiveSection('buongiorno')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeSection === 'buongiorno'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Heart className="w-4 h-4 text-rose-500" />
            1. Titolo 3D & Cuore sulla &apos;I&apos;
          </button>

          <button
            onClick={() => setActiveSection('sabato')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeSection === 'sabato'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-400" />
            2. Sottotitolo Arcobaleno Olografico
          </button>

          <button
            onClick={() => setActiveSection('data')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeSection === 'data'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            3. Data Bassorilievo Scolpita
          </button>

          <button
            onClick={() => setActiveSection('firma')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeSection === 'firma'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Type className="w-4 h-4 text-pink-400" />
            4. Firma Calligrafica Corsiva
          </button>

          <button
            onClick={() => setActiveSection('all')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeSection === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Tutte le Scritte Insieme
          </button>
        </div>
      </div>

      {/* PANNELLO DIDATTICO: "COME SI FA QUESTA SCRITTA?" */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsExplainerOpen(!isExplainerOpen)}>
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
            <Info className="w-4 h-4" />
            <span>Guida Tecnica: Come funziona la tecnica di rendering di questa scritta?</span>
          </div>
          <button className="text-slate-400 hover:text-white">
            {isExplainerOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {isExplainerOpen && (
          <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            {activeSection === 'buongiorno' && (
              <>
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">1</span>
                    Estrusione 3D a Strati
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Si usa la proprietà <strong className="text-slate-200 font-mono">text-shadow</strong> sovrapponendo da 4 a 6 ombre distanziate di 1px verso il basso con tonalità progressivamente più scure.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">2</span>
                    Riflesso Lucido con ::after
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Si aggiunge <strong className="text-slate-200 font-mono">content: attr(data-letter)</strong> sullo pseudo-elemento con <strong className="text-slate-200 font-mono">-webkit-background-clip: text</strong> e gradiente bianco semitrasparente.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">3</span>
                    Cuore Vettoriale sulla &apos;I&apos;
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    L&apos;asta della &apos;I&apos; ospita un quadrato ruotato di 45° con due semicerchi su <strong className="text-slate-200 font-mono">::before</strong> e <strong className="text-slate-200 font-mono">::after</strong> e animazione <strong className="text-slate-200 font-mono">liveHeartPulse</strong>.
                  </p>
                </div>
              </>
            )}

            {activeSection === 'sabato' && (
              <>
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">1</span>
                    Gradiente sul Testo
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Il gradiente a 7 colori orizzontali è tagliato sulla forma dei caratteri usando <strong className="text-slate-200 font-mono">-webkit-background-clip: text</strong> e <strong className="text-slate-200 font-mono">-webkit-text-fill-color: transparent</strong>.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">2</span>
                    Animazione Continua 200%
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Con <strong className="text-slate-200 font-mono">background-size: 200%</strong> la sfumatura scorre dolcemente all&apos;infinito tramite <strong className="text-slate-200 font-mono">@keyframes liveRainbowShift</strong> muovendo la posizione orizzontale.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">3</span>
                    Multi Drop-Shadow
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    I filtri <strong className="text-slate-200 font-mono">drop-shadow</strong> a cascata generano un contorno bianco nitido e un&apos;ombra scura 3D che stacca la scritta da qualsiasi sfondo.
                  </p>
                </div>
              </>
            )}

            {activeSection === 'data' && (
              <>
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">1</span>
                    Font Monumentale Cinzel
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Le grazie geometriche classiche del font romano forniscono la linea ideale per un effetto targa e incisione ad alto contrasto.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">2</span>
                    Luci Contrapposte (Bassorilievo)
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Un&apos;ombra bianca superiore di 1px simula la luce incidente dall&apos;alto, mentre un&apos;ombra nera sottostante simula l&apos;incavo profondo nella pietra o cartoncino.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">3</span>
                    Stelline Decorative Twinkle
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Le stelline ai lati creano un ritmo orizzontale simmetrico con rotazione a 45° e pulsazione di scala a tempo sfasato.
                  </p>
                </div>
              </>
            )}

            {activeSection === 'firma' && (
              <>
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">1</span>
                    Calligrafia Corsiva Fluida
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    L&apos;uso di font calligrafici come <strong className="text-slate-200 font-mono">Great Vibes</strong> simula la penna stilografica donando calore e autenticità all&apos;augurio.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">2</span>
                    Rilievo Bianco Superiore
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Una delicata linea bianca di 1px fa apparire la firma stampata in rilievo brillante sulla cartolina.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">3</span>
                    Posizionamento Asimmetrico
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Collocata in basso a sinistra crea equilibrio diagonale rispetto all&apos;oggetto di scena posizionato a destra.
                  </p>
                </div>
              </>
            )}

            {activeSection === 'all' && (
              <>
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1">1. Gerarchia Visiva</div>
                  <p className="text-slate-400 leading-relaxed">
                    Data piccola e formale &rarr; Titolo grande e tridimensionale &rarr; Sottotitolo colorato &rarr; Firma corsiva intima.
                  </p>
                </div>
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1">2. Armonia dei Font</div>
                  <p className="text-slate-400 leading-relaxed">
                    Accostamento calibrato tra Serif Monumentale, Display 3D Bold, e Cursive Calligrafico.
                  </p>
                </div>
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1">3. Zero Dipendenze</div>
                  <p className="text-slate-400 leading-relaxed">
                    Nessun file immagine esterno, SVG pesante o canvas JS: solo puro HTML e CSS nativo.
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* ZONA PRINCIPALE: ANTEPRIMA LIVE + SELETTORI INTERATTIVI */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* COLONNA SINISTRA: PALCO ANTEPRIMA SCRITTA */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center min-h-[340px] relative overflow-hidden">
            {/* Sfondo cartolina per testare il contrasto reale */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: 'radial-gradient(circle at 50% 40%, rgba(251, 191, 36, 0.15) 0%, rgba(255, 255, 255, 0.02) 60%, transparent 85%)'
              }}
            />

            <div className="absolute top-3 left-4 text-[11px] font-mono font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Anteprima Live Renderizzata in Tempo Reale
            </div>

            {/* CONTENUTO VISIVO DELLA SCRITTA IN BASE ALLA SEZIONE */}
            <div className="w-full flex flex-col items-center justify-center py-6 px-2 z-10 select-none">
              
              {/* SEZIONE: BUONGIORNO */}
              {activeSection === 'buongiorno' && (
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-1.5 flex-wrap">
                    {/* Cuoricino sinistro 3D */}
                    <div className="live-heart-3d h-top-l shrink-0"><div className="live-heart-specular" /></div>

                    {/* Lettere renderizzate dinamicamente con i selettori attivi */}
                    {customBgText.split('').map((char, idx) => {
                      if (char.toUpperCase() === 'I' && bgDot === 'heart') {
                        return (
                          <div key={idx} className="live-let-i-container mx-0.5">
                            <div className="live-heart-on-i" />
                            <span 
                              className="live-let-i-stem"
                              style={{
                                textShadow: getBuongiornoShadow(),
                              }}
                            >
                              I
                            </span>
                          </div>
                        );
                      }

                      if (char.toUpperCase() === 'I' && bgDot === 'star') {
                        return (
                          <div key={idx} className="live-let-i-container mx-0.5">
                            <div className="live-sparkle s-md" style={{ position: 'absolute', top: 0 }} />
                            <span 
                              className="live-let-i-stem"
                              style={{ textShadow: getBuongiornoShadow() }}
                            >
                              I
                            </span>
                          </div>
                        );
                      }

                      return (
                        <span
                          key={idx}
                          data-letter={char}
                          className={`live-letter-3d ${getThemeColorClass(idx)}`}
                          style={{
                            textShadow: getBuongiornoShadow(),
                            animationPlayState: bgAnim === 'none' ? 'paused' : 'running',
                            animationName: bgAnim === 'bounce' ? 'liveLetterBounce' : bgAnim === 'float' ? 'liveFloatGentle' : 'none',
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}

                    {/* Cuoricino destro 3D */}
                    <div className="live-heart-3d h-top-r shrink-0"><div className="live-heart-specular" /></div>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-3">
                    Stile attivo: <span className="text-amber-400 font-semibold">{bgTheme}</span> • Profondità: <span className="text-amber-400 font-semibold">{bgDepth}</span> • Puntino: <span className="text-amber-400 font-semibold">{bgDot}</span>
                  </div>
                </div>
              )}

              {/* SEZIONE: BUON SABATO */}
              {activeSection === 'sabato' && (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="live-sparkle s-md" />
                    <h2
                      className="live-sabato-text"
                      style={{
                        background: getSabatoGradientCss(),
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: getSabatoFilterCss(),
                        animationPlayState: sabatoAnim ? 'running' : 'paused',
                      }}
                    >
                      {customSabatoText}
                    </h2>
                    <div className="live-sparkle s-md" />
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-2">
                    Gradiente: <span className="text-amber-400 font-semibold">{sabatoGrad}</span> • Contorno: <span className="text-amber-400 font-semibold">{sabatoOut}</span> • Animazione: <span className="text-amber-400 font-semibold">{sabatoAnim ? 'Attiva' : 'Pausa'}</span>
                  </div>
                </div>
              )}

              {/* SEZIONE: DATA */}
              {activeSection === 'data' && (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3">
                    {dateSparkles && <div className="live-sparkle s-md" />}
                    <span
                      className="live-date-text"
                      style={{
                        letterSpacing: dateSpacing === 'normal' ? '0.04em' : dateSpacing === 'wide' ? '0.08em' : '0.16em',
                        color: dateSty === 'goldFoil' ? '#b45309' : dateSty === 'roseGold' ? '#9f1239' : '#1a2536',
                        textShadow: getDateShadowCss(),
                      }}
                    >
                      {customDateText}
                    </span>
                    {dateSparkles && <div className="live-sparkle s-md" />}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-2">
                    Incisione: <span className="text-amber-400 font-semibold">{dateSty}</span> • Spaziatura: <span className="text-amber-400 font-semibold">{dateSpacing}</span>
                  </div>
                </div>
              )}

              {/* SEZIONE: FIRMA */}
              {activeSection === 'firma' && (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="live-sparkle s-md" />
                    <span
                      className="live-my-angel"
                      style={{
                        fontFamily: `'${sigFont}', cursive`,
                        color: sigColor === 'ruby' ? '#991b1b' : sigColor === 'amberGold' ? '#b45309' : sigColor === 'choco' ? '#3d1400' : '#1a2536',
                        textShadow: sigRelief ? '0 1px 0 #ffffff, 1px 2px 3px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0,0,0,0.15)',
                      }}
                    >
                      {customSigText}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-2">
                    Font: <span className="text-amber-400 font-semibold">{sigFont}</span> • Inchiostro: <span className="text-amber-400 font-semibold">{sigColor}</span>
                  </div>
                </div>
              )}

              {/* SEZIONE: TUTTE LE SCRITTE INSIEME */}
              {activeSection === 'all' && (
                <div className="w-full max-w-md bg-[#fff9ed] p-6 rounded-2xl shadow-xl border border-amber-900/20 flex flex-col items-center gap-3 text-slate-950">
                  {/* Data */}
                  <span
                    className="live-date-text"
                    style={{ fontSize: 26, textShadow: getDateShadowCss() }}
                  >
                    {customDateText}
                  </span>

                  {/* Buongiorno */}
                  <div className="flex items-center justify-center gap-1 my-1">
                    <div className="live-heart-3d h-top-l shrink-0" style={{ transform: 'scale(0.8) rotate(-45deg)' }}><div className="live-heart-specular" /></div>
                    <span className="text-3xl font-black font-['Lilita_One'] tracking-wide text-[#0d6efd]" style={{ textShadow: getBuongiornoShadow() }}>B</span>
                    <span className="text-3xl font-black font-['Lilita_One'] tracking-wide text-[#dc2626]" style={{ textShadow: getBuongiornoShadow() }}>U</span>
                    <span className="text-3xl font-black font-['Lilita_One'] tracking-wide text-[#ea580c]" style={{ textShadow: getBuongiornoShadow() }}>O</span>
                    <span className="text-3xl font-black font-['Lilita_One'] tracking-wide text-[#eab308]" style={{ textShadow: getBuongiornoShadow() }}>N</span>
                    <span className="text-3xl font-black font-['Lilita_One'] tracking-wide text-[#16a34a]" style={{ textShadow: getBuongiornoShadow() }}>G</span>
                    <div className="live-let-i-container" style={{ width: 16, height: 40 }}>
                      <div className="live-heart-on-i" style={{ width: 12, height: 12, top: 0 }} />
                      <span className="live-let-i-stem" style={{ fontSize: 36, textShadow: getBuongiornoShadow() }}>I</span>
                    </div>
                    <span className="text-3xl font-black font-['Lilita_One'] tracking-wide text-[#65a30d]" style={{ textShadow: getBuongiornoShadow() }}>O</span>
                    <span className="text-3xl font-black font-['Lilita_One'] tracking-wide text-[#0284c7]" style={{ textShadow: getBuongiornoShadow() }}>R</span>
                    <span className="text-3xl font-black font-['Lilita_One'] tracking-wide text-[#9333ea]" style={{ textShadow: getBuongiornoShadow() }}>N</span>
                    <span className="text-3xl font-black font-['Lilita_One'] tracking-wide text-[#059669]" style={{ textShadow: getBuongiornoShadow() }}>O</span>
                    <div className="live-heart-3d h-top-r shrink-0" style={{ transform: 'scale(0.8) rotate(-45deg)' }}><div className="live-heart-specular" /></div>
                  </div>

                  {/* Sottotitolo */}
                  <h2
                    className="live-sabato-text"
                    style={{
                      fontSize: 30,
                      background: getSabatoGradientCss(),
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: getSabatoFilterCss(),
                    }}
                  >
                    {customSabatoText}
                  </h2>

                  {/* Firma */}
                  <div className="w-full flex justify-start pl-4 mt-2">
                    <span
                      className="live-my-angel"
                      style={{
                        fontSize: 28,
                        fontFamily: `'${sigFont}', cursive`,
                        color: '#1a2536',
                        textShadow: '0 1px 0 #ffffff, 1px 2px 3px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {customSigText}
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* BOX DEL CODICE SEMPRE VISIBILE IN TEMPO REALE SOTTO L'ANTEPRIMA */}
          <div className="bg-[#0b0c10] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-950/90 border-b border-slate-800/80 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  Codice della Scritta Corrente ({activeSnippet.split('\n').length} righe)
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Selettore linguaggi CSS vs HTML */}
                <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setCodeTab('css')}
                    className={`px-2.5 py-1 rounded font-mono font-semibold transition-colors cursor-pointer ${
                      codeTab === 'css' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    CSS (&lt;style&gt;)
                  </button>
                  <button
                    onClick={() => setCodeTab('html')}
                    className={`px-2.5 py-1 rounded font-mono font-semibold transition-colors cursor-pointer ${
                      codeTab === 'html' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    HTML
                  </button>
                  <button
                    onClick={() => setCodeTab('full')}
                    className={`px-2.5 py-1 rounded font-mono font-semibold transition-colors cursor-pointer ${
                      codeTab === 'full' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Tutto Insieme
                  </button>
                </div>

                <button
                  onClick={() => handleCopy('snippet', activeSnippet)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    copiedKey === 'snippet'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  {copiedKey === 'snippet' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'snippet' ? 'Copiato!' : 'Copia'}</span>
                </button>
              </div>
            </div>

            {/* Contenuto codice con numerazione */}
            <div className="overflow-x-auto max-h-[300px] p-4 text-xs font-mono select-text leading-relaxed">
              <pre className="text-slate-300 flex">
                <div className="select-none pr-4 text-slate-600 text-right border-r border-slate-800/80 mr-4 shrink-0">
                  {activeSnippet.split('\n').map((_, i) => (
                    <div key={i} className="h-5 leading-5 text-[11px] font-mono">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <code className="text-amber-100/90 flex-1 block whitespace-pre">
                  {activeSnippet.split('\n').map((line, i) => (
                    <div key={i} className="h-5 leading-5">
                      {line}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA: PANNELLO DEI SELETTORI INTERATTIVI */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                Selettori Interattivi di Configurazione
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                Cambia e guarda il codice
              </span>
            </div>

            {/* SELETTORI PER: BUONGIORNO */}
            {activeSection === 'buongiorno' && (
              <div className="space-y-4">
                {/* Input testo */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1 block">
                    Modifica Testo del Titolo:
                  </label>
                  <input
                    type="text"
                    value={customBgText}
                    onChange={e => setCustomBgText(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-amber-500 uppercase tracking-wider"
                  />
                </div>

                {/* Palette Colore Lettere */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Palette Colore Lettere:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'multicolor', label: 'Multicolore Joyful (Originale)' },
                      { id: 'liquidGold', label: 'Oro Liquido & Champagne' },
                      { id: 'candyPink', label: 'Rosa Fragola & Candy' },
                      { id: 'cyberNeon', label: 'Cyber Neon Fluo' },
                      { id: 'oceanBreeze', label: 'Oceano & Cobalto' },
                    ].map(theme => (
                      <button
                        key={theme.id}
                        onClick={() => setBgTheme(theme.id as BuongiornoColorTheme)}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                          bgTheme === theme.id
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {theme.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Profondità 3D (text-shadow stack) */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Profondità Estrusione 3D (text-shadow):
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'flat', label: 'Piatto 2D (0 ombre)' },
                      { id: 'light', label: 'Morbido (2 strati)' },
                      { id: 'standard', label: 'Completo (6 strati standard)' },
                      { id: 'mega', label: 'Mega 3D (8 strati profondi)' },
                    ].map(dep => (
                      <button
                        key={dep.id}
                        onClick={() => setBgDepth(dep.id as Depth3D)}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                          bgDepth === dep.id
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {dep.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Puntino sulla I */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Puntino Vettoriale sulla Lettera &apos;I&apos;:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'heart', label: '❤️ Cuoricino 3D con Pulsazione' },
                      { id: 'star', label: '✨ Stellina Scintillante' },
                    ].map(dot => (
                      <button
                        key={dot.id}
                        onClick={() => setBgDot(dot.id as DotStyle)}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                          bgDot === dot.id
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {dot.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animazione Rimbalzo */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Animazione Lettere:
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'bounce', label: 'Rimbalzo a Onda' },
                      { id: 'float', label: 'Fluttuazione' },
                      { id: 'none', label: 'Fermo (Pausa)' },
                    ].map(an => (
                      <button
                        key={an.id}
                        onClick={() => setBgAnim(an.id as LetterAnimation)}
                        className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                          bgAnim === an.id
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {an.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SELETTORI PER: BUON SABATO */}
            {activeSection === 'sabato' && (
              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1 block">
                    Modifica Testo Sottotitolo:
                  </label>
                  <input
                    type="text"
                    value={customSabatoText}
                    onChange={e => setCustomSabatoText(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-amber-500 uppercase tracking-wider"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Palette Gradiente Continuo:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'rainbow', label: '🌈 Arcobaleno Olografico' },
                      { id: 'sunset', label: '🌅 Tramonto Solare' },
                      { id: 'glitzPink', label: '🌸 Rosa Glitz & Fucsia' },
                      { id: 'aurora', label: '🌌 Aurora Boreale' },
                      { id: 'goldSolar', label: '☀️ Oro & Ambra Radiosa' },
                    ].map(grad => (
                      <button
                        key={grad.id}
                        onClick={() => setSabatoGrad(grad.id as SabatoGradient)}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                          sabatoGrad === grad.id
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {grad.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Effetto Contorno & Bordo 3D:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'crispWhite', label: 'Bordo Bianco + Ombra 3D' },
                      { id: 'neonGlow', label: 'Bagliore Neon Fluo' },
                      { id: 'dark3D', label: 'Contorno Scuro 3D Netto' },
                      { id: 'subtleShadow', label: 'Solo Ombra Sfumata' },
                    ].map(out => (
                      <button
                        key={out.id}
                        onClick={() => setSabatoOut(out.id as SabatoOutline)}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                          sabatoOut === out.id
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {out.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Animazione Scorrimento Orizzontale:
                  </label>
                  <button
                    onClick={() => setSabatoAnim(!sabatoAnim)}
                    className={`w-full py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      sabatoAnim
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span>Stato Animazione:</span>
                    <span>{sabatoAnim ? '▶ In Esecuzione (8s)' : '⏸ In Pausa'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* SELETTORI PER: DATA */}
            {activeSection === 'data' && (
              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1 block">
                    Modifica Testo Data:
                  </label>
                  <input
                    type="text"
                    value={customDateText}
                    onChange={e => setCustomDateText(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-amber-500 uppercase tracking-wider"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Stile Incisione / Materiale:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'carved', label: 'Incisione Lapidea Classica' },
                      { id: 'goldFoil', label: 'Timbro in Foglia d&apos;Oro' },
                      { id: 'slateModern', label: 'Grafite Notte Moderna' },
                      { id: 'roseGold', label: 'Oro Rosa Romantico' },
                    ].map(sty => (
                      <button
                        key={sty.id}
                        onClick={() => setDateSty(sty.id as DateStyle)}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                          dateSty === sty.id
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {sty.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Spaziatura Caratteri (letter-spacing):
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'normal', label: 'Compatta' },
                      { id: 'wide', label: 'Elegante' },
                      { id: 'ultra', label: 'Monumentale' },
                    ].map(sp => (
                      <button
                        key={sp.id}
                        onClick={() => setDateSpacing(sp.id as 'normal' | 'wide' | 'ultra')}
                        className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                          dateSpacing === sp.id
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {sp.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setDateSparkles(!dateSparkles)}
                    className={`w-full py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      dateSparkles
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span>Stelline Scintillanti ai Lati:</span>
                    <span>{dateSparkles ? '✨ 4 Stelline Attive' : 'Disattivate'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* SELETTORI PER: FIRMA */}
            {activeSection === 'firma' && (
              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1 block">
                    Modifica Testo Firma:
                  </label>
                  <input
                    type="text"
                    value={customSigText}
                    onChange={e => setCustomSigText(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Font Calligrafico Corsivo:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'Great Vibes', label: 'Great Vibes (Elegante)' },
                      { id: 'Pacifico', label: 'Pacifico (Morbido Pop)' },
                      { id: 'Sacramento', label: 'Sacramento (Delicato)' },
                      { id: 'Dancing Script', label: 'Dancing Script (Spensierato)' },
                    ].map(f => (
                      <button
                        key={f.id}
                        onClick={() => setSigFont(f.id as SignatureFont)}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                          sigFont === f.id
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 mb-1.5 block">
                    Colore Inchiostro:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'navy', label: 'Inchiostro Notte (#1a2536)' },
                      { id: 'ruby', label: 'Rosso Passione Rubino' },
                      { id: 'amberGold', label: 'Oro Ambrato Antico' },
                      { id: 'choco', label: 'Cioccolato Intenso' },
                    ].map(c => (
                      <button
                        key={c.id}
                        onClick={() => setSigColor(c.id as 'navy' | 'ruby' | 'amberGold' | 'choco')}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                          sigColor === c.id
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setSigRelief(!sigRelief)}
                    className={`w-full py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      sigRelief
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span>Luce Bianca di Rilievo 3D:</span>
                    <span>{sigRelief ? '✓ Attiva' : 'Disattivata'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* SELETTORI PER: TUTTE LE SCRITTE */}
            {activeSection === 'all' && (
              <div className="space-y-3 text-xs text-slate-300">
                <p className="text-slate-400">
                  Questa vista d&apos;insieme mostra l&apos;equilibrio armonico tra tutti e 4 gli strati tipografici contemporaneamente.
                </p>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-amber-400 font-semibold">Testi attualmente caricati:</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                    <div>Data: <span className="font-mono text-white">{customDateText}</span></div>
                    <div>Titolo: <span className="font-mono text-white">{customBgText}</span></div>
                    <div>Sottotitolo: <span className="font-mono text-white">{customSabatoText}</span></div>
                    <div>Firma: <span className="font-mono text-white">{customSigText}</span></div>
                  </div>
                </div>

                <button
                  onClick={handleApplyToCard}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-md shadow-amber-500/20 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Salva e Applica Tutti i Testi alla Cartolina
                </button>
              </div>
            )}

            {/* PULSANTE COPIA RAPIDA DELL'INTERO BLOCCO CODICE */}
            <div className="pt-2 border-t border-slate-800/80">
              <button
                onClick={() => handleCopy('css-direct', currentCssSnippet)}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                {copiedKey === 'css-direct' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{copiedKey === 'css-direct' ? 'Copiato negli appunti!' : 'Copia Solo il Blocco CSS'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

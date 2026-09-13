import React, { useState, useMemo } from 'react';
import {
  CardTextConfig,
  AnimationSettings,
  TitleTheme,
  TitleDepth,
  TitleDot,
  TitleAnim,
  SubtitleGradient,
  SubtitleEffect,
  DateStyle,
  SignatureFont,
  SignatureColor,
} from '../types';
import {
  generateTitleHtml,
  generateSubtitleHtml,
  generateDateHtml,
  generateSignatureHtml,
  generateTitleCss,
  generateSubtitleCss,
  generateDateCss,
  generateSignatureCss,
  generateTypographyCss,
  generateSingleTextStandaloneHtml,
} from '../data/typographyGenerators';
import {
  Type,
  Sparkles,
  Copy,
  Check,
  Code2,
  Heart,
  Sliders,
  ChevronDown,
  ChevronUp,
  Info,
  CheckCircle2,
  Zap,
  LayoutGrid,
  Download,
} from 'lucide-react';

interface TypographyWorkshopProps {
  texts: CardTextConfig;
  onTextsChange: (newTexts: CardTextConfig) => void;
  anim: AnimationSettings;
  onReturnToCard: () => void;
  onOpenInspector: () => void;
}

type TypographySection = 'buongiorno' | 'sabato' | 'data' | 'firma' | 'all';

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
  const [bgTheme, setBgTheme] = useState<TitleTheme>(texts.titleTheme ?? 'multicolor');
  const [bgDepth, setBgDepth] = useState<TitleDepth>(texts.titleDepth ?? 'standard');
  const [bgSpecular, setBgSpecular] = useState<boolean>(texts.titleSpecular !== false);
  const [bgDot, setBgDot] = useState<TitleDot>(texts.titleDot === 'star' ? 'star' : 'heart');
  const [bgAnim, setBgAnim] = useState<TitleAnim>(texts.titleAnim ?? 'bounce');
  const [customBgText, setCustomBgText] = useState<string>(texts.buongiorno);

  // --- STATI SELETTORI PER "BUON SABATO" ---
  const [sabatoGrad, setSabatoGrad] = useState<SubtitleGradient>(texts.subtitleGradient ?? 'rainbow');
  const [sabatoOut, setSabatoOut] = useState<SubtitleEffect>(texts.subtitleEffect ?? 'glow-white');
  const [sabatoAnim, setSabatoAnim] = useState<boolean>(texts.subtitleAnim !== false);
  const [customSabatoText, setCustomSabatoText] = useState<string>(texts.subGreeting);

  // --- STATI SELETTORI PER DATA ---
  const [dateSty, setDateSty] = useState<DateStyle>(texts.dateStyle ?? 'stone');
  const [dateSparkles, setDateSparkles] = useState<boolean>(texts.dateStars !== false);
  const [customDateText, setCustomDateText] = useState<string>(texts.date);

  // --- STATI SELETTORI PER FIRMA ---
  const [sigFont, setSigFont] = useState<SignatureFont>(texts.sigFont ?? 'greatvibes');
  const [sigColor, setSigColor] = useState<SignatureColor>(texts.sigColor ?? 'night');
  const [sigRelief, setSigRelief] = useState<boolean>(texts.sigEmboss !== false);
  const [customSigText, setCustomSigText] = useState<string>(texts.signature);

  // CONFIGURAZIONE UNIFICATA: UNICA FONTE DI VERITÀ
  const activeConfig: CardTextConfig = useMemo(() => ({
    ...texts,
    date: customDateText,
    buongiorno: customBgText,
    subGreeting: customSabatoText,
    signature: customSigText,
    titleTheme: bgTheme,
    titleDepth: bgDepth,
    titleSpecular: bgSpecular,
    titleDot: bgDot,
    titleAnim: bgAnim,
    subtitleGradient: sabatoGrad,
    subtitleEffect: sabatoOut,
    subtitleAnim: sabatoAnim,
    dateStyle: dateSty,
    dateStars: dateSparkles,
    sigFont: sigFont,
    sigColor: sigColor,
    sigEmboss: sigRelief,
  }), [
    texts,
    customDateText, customBgText, customSabatoText, customSigText,
    bgTheme, bgDepth, bgSpecular, bgDot, bgAnim,
    sabatoGrad, sabatoOut, sabatoAnim,
    dateSty, dateSparkles,
    sigFont, sigColor, sigRelief,
  ]);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const handleApplyToCard = () => {
    onTextsChange(activeConfig);
    setCopiedKey('applied');
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // GENERATORI CONDIVISI RIGOROSAMENTE IDENTICI A QUELLI DELLA CARD
  const titleCssCode = generateTitleCss(activeConfig, anim);
  const titleHtmlCode = generateTitleHtml(activeConfig);

  const subtitleCssCode = generateSubtitleCss(activeConfig, anim);
  const subtitleHtmlCode = generateSubtitleHtml(activeConfig);

  const dateCssCode = generateDateCss(activeConfig, anim);
  const dateHtmlCode = generateDateHtml(activeConfig);

  const signatureCssCode = generateSignatureCss(activeConfig, anim);
  const signatureHtmlCode = generateSignatureHtml(activeConfig);

  const allTypographyCss = generateTypographyCss(activeConfig, anim);
  const allTypographyHtml = `${dateHtmlCode}\n\n${titleHtmlCode}\n\n${subtitleHtmlCode}\n\n${signatureHtmlCode}`;

  let currentCssSnippet = titleCssCode;
  let currentHtmlSnippet = titleHtmlCode;

  if (activeSection === 'sabato') {
    currentCssSnippet = subtitleCssCode;
    currentHtmlSnippet = subtitleHtmlCode;
  } else if (activeSection === 'data') {
    currentCssSnippet = dateCssCode;
    currentHtmlSnippet = dateHtmlCode;
  } else if (activeSection === 'firma') {
    currentCssSnippet = signatureCssCode;
    currentHtmlSnippet = signatureHtmlCode;
  } else if (activeSection === 'all') {
    currentCssSnippet = allTypographyCss;
    currentHtmlSnippet = `<!-- STRUTTURA TIPOGRAFICA COMPLETA -->\n${allTypographyHtml}`;
  }

  const currentStandaloneHtml = generateSingleTextStandaloneHtml(activeSection, activeConfig, anim);

  const activeSnippet = codeTab === 'css'
    ? currentCssSnippet
    : codeTab === 'html'
    ? currentHtmlSnippet
    : currentStandaloneHtml;

  const handleDownloadSingleHtml = () => {
    const htmlContent = generateSingleTextStandaloneHtml(activeSection, activeConfig, anim);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const baseName = activeSection === 'buongiorno'
      ? `scritta-3d-${(customBgText || 'buongiorno').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
      : activeSection === 'sabato'
      ? `scritta-arcobaleno-${(customSabatoText || 'buon-sabato').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
      : activeSection === 'data'
      ? `scritta-data-${(customDateText || 'data').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
      : activeSection === 'firma'
      ? `scritta-firma-${(customSigText || 'firma').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
      : `tutte-le-scritte-tipografia`;
    link.download = `${baseName}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    handleCopy('download-single', '');
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      {/* INIEZIONE DELLO STYLE TAG REALE DEL WORKSHOP: IL PREVIEW USA ESATTAMENTE IL CSS GENERATO */}
      <style>{allTypographyCss}</style>

      {/* HEADER SESSIONE SCRITTE */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
              <Type className="w-3.5 h-3.5" />
              Sessione Dedicata Scritte &amp; Tipografia 3D
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              Come si Fanno le Scritte in Puro HTML + CSS
              <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                Codice Corrispondente al 100%
              </span>
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Ogni selettore modifica istantaneamente sia il rendering grafico che il codice puro sottostante (HTML + CSS): estrusioni a strati 3D, riflessi lucidi, cuoricini vettoriali e gradienti olografici.
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
            1. Titolo 3D &amp; Cuore sulla &apos;I&apos;
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
                    Si usa la proprietà <strong className="text-slate-200 font-mono">text-shadow</strong> sovrapponendo da 4 a 8 ombre distanziate di 1px verso il basso con tonalità coordinate al colore di ogni lettera.
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
                    Il gradiente orizzontale continuo è tagliato sul testo usando <strong className="text-slate-200 font-mono">-webkit-background-clip: text</strong> e <strong className="text-slate-200 font-mono">-webkit-text-fill-color: transparent</strong>.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">2</span>
                    Animazione Continua 200%
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Con <strong className="text-slate-200 font-mono">background-size: 200% auto</strong> la sfumatura scorre dolcemente all&apos;infinito tramite <strong className="text-slate-200 font-mono">@keyframes liveRainbowShift</strong>.
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
              Anteprima Live Renderizzata con le Regole CSS Generate
            </div>

            {/* CONTENUTO VISIVO DELLA SCRITTA IN BASE ALLA SEZIONE */}
            <div className="w-full flex flex-col items-center justify-center py-6 px-2 z-10 select-none">
              
              {/* SEZIONE: BUONGIORNO */}
              {activeSection === 'buongiorno' && (
                <div className="flex flex-col items-center gap-2">
                  <div className="live-buongiorno-wrapper">
                    <div className="live-heart-3d h-top-l shrink-0"><div className="live-heart-specular" /></div>

                    {(customBgText || 'BUONGIORNO').split('').map((char, idx) => {
                      if (char === ' ') {
                        return <span key={idx} className="live-letter-space" style={{ display: 'inline-block', width: 14 }} />;
                      }

                      const upper = char.toUpperCase();
                      if (upper === 'I' && bgDot === 'heart') {
                        return (
                          <div key={idx} className={`live-let-i-container let-dyn-${idx}`}>
                            <div className="live-heart-on-i" />
                            <span className="live-let-i-stem">{char}</span>
                          </div>
                        );
                      }

                      if (upper === 'I' && bgDot === 'star') {
                        return (
                          <div key={idx} className={`live-let-i-container let-dyn-${idx}`}>
                            <div className="live-star-on-i">✦</div>
                            <span className="live-let-i-stem">{char}</span>
                          </div>
                        );
                      }

                      return (
                        <span
                          key={idx}
                          data-letter={char}
                          className={`live-letter-3d let-dyn-${idx}`}
                        >
                          {char}
                        </span>
                      );
                    })}

                    <div className="live-heart-3d h-top-r shrink-0"><div className="live-heart-specular" /></div>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-3">
                    Tema: <span className="text-amber-400 font-semibold">{bgTheme}</span> • Profondità: <span className="text-amber-400 font-semibold">{bgDepth}</span> • Puntino: <span className="text-amber-400 font-semibold">{bgDot}</span>
                  </div>
                </div>
              )}

              {/* SEZIONE: BUON SABATO */}
              {activeSection === 'sabato' && (
                <div className="flex flex-col items-center gap-3">
                  <div className="live-subtitle-wrapper">
                    <div className="live-sparkle s-md" />
                    <h2 className="live-sabato-text">{customSabatoText}</h2>
                    <div className="live-sparkle s-md" />
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-2">
                    Gradiente: <span className="text-amber-400 font-semibold">{sabatoGrad}</span> • Effetto: <span className="text-amber-400 font-semibold">{sabatoOut}</span> • Animazione: <span className="text-amber-400 font-semibold">{sabatoAnim ? 'Attiva' : 'Pausa'}</span>
                  </div>
                </div>
              )}

              {/* SEZIONE: DATA */}
              {activeSection === 'data' && (
                <div className="flex flex-col items-center gap-3">
                  <div className="live-date-row">
                    {dateSparkles && <div className="live-sparkle s-md sp-tl1" />}
                    <span className="live-date-text">{customDateText}</span>
                    {dateSparkles && <div className="live-sparkle s-md sp-tr1" />}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-2">
                    Stile Incisione: <span className="text-amber-400 font-semibold">{dateSty}</span> • Stelline: <span className="text-amber-400 font-semibold">{dateSparkles ? 'Attive' : 'Disattivate'}</span>
                  </div>
                </div>
              )}

              {/* SEZIONE: FIRMA */}
              {activeSection === 'firma' && (
                <div className="flex flex-col items-center gap-3">
                  <div className="live-footer-row" style={{ justifyContent: 'center', paddingLeft: 0 }}>
                    <div className="live-sparkle s-md sp-bl" />
                    <span className="live-my-angel">{customSigText}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-2">
                    Font: <span className="text-amber-400 font-semibold">{sigFont}</span> • Inchiostro: <span className="text-amber-400 font-semibold">{sigColor}</span> • Rilievo: <span className="text-amber-400 font-semibold">{sigRelief ? 'Attivo' : 'Piatto'}</span>
                  </div>
                </div>
              )}

              {/* SEZIONE: TUTTE LE SCRITTE INSIEME */}
              {activeSection === 'all' && (
                <div className="w-full max-w-md bg-[#fff9ed] p-6 rounded-2xl shadow-xl border border-amber-900/20 flex flex-col items-center gap-2 text-slate-950">
                  <div className="live-date-row">
                    {dateSparkles && <div className="live-sparkle s-sm sp-tl1" />}
                    <span className="live-date-text" style={{ fontSize: 16 }}>{customDateText}</span>
                    {dateSparkles && <div className="live-sparkle s-sm sp-tr1" />}
                  </div>

                  <div className="live-buongiorno-wrapper" style={{ transform: 'scale(0.85)', transformOrigin: 'center' }}>
                    <div className="live-heart-3d h-top-l shrink-0"><div className="live-heart-specular" /></div>
                    {(customBgText || 'BUONGIORNO').split('').map((char, idx) => {
                      if (char === ' ') return <span key={idx} style={{ display: 'inline-block', width: 8 }} />;
                      if (char.toUpperCase() === 'I' && bgDot === 'heart') {
                        return (
                          <div key={idx} className={`live-let-i-container let-dyn-${idx}`}>
                            <div className="live-heart-on-i" />
                            <span className="live-let-i-stem">{char}</span>
                          </div>
                        );
                      }
                      return (
                        <span key={idx} data-letter={char} className={`live-letter-3d let-dyn-${idx}`}>
                          {char}
                        </span>
                      );
                    })}
                    <div className="live-heart-3d h-top-r shrink-0"><div className="live-heart-specular" /></div>
                  </div>

                  <div className="live-subtitle-wrapper" style={{ transform: 'scale(0.85)', transformOrigin: 'center' }}>
                    <h2 className="live-sabato-text">{customSabatoText}</h2>
                  </div>

                  <div className="live-footer-row" style={{ marginTop: 6, paddingLeft: 12 }}>
                    <div className="live-sparkle s-sm sp-bl" />
                    <span className="live-my-angel" style={{ fontSize: 32 }}>{customSigText}</span>
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
                  title="Copia il codice selezionato negli appunti"
                >
                  {copiedKey === 'snippet' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'snippet' ? 'Copiato!' : 'Copia'}</span>
                </button>

                {/* PULSANTE DEDICATO ESPORTA FILE HTML COMPLETO DELLA SCRITTA SINGOLA */}
                <button
                  onClick={handleDownloadSingleHtml}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    copiedKey === 'download-single'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-sm active:scale-95'
                  }`}
                  title="Scarica direttamente il file HTML completo con tutte le animazioni attive"
                >
                  {copiedKey === 'download-single' ? <Check className="w-3 h-3 text-white" /> : <Download className="w-3 h-3" />}
                  <span>{copiedKey === 'download-single' ? 'Scaricato!' : 'Esporta File HTML'}</span>
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
                      { id: 'multicolor', label: 'Multicolore Zaffiro/Smeraldo' },
                      { id: 'liquidGold', label: 'Oro Liquido Fuso' },
                      { id: 'candyPink', label: 'Rosa Fragola & Candy' },
                      { id: 'cyberNeon', label: 'Ciano Neon / Smeraldo' },
                      { id: 'oceanBreeze', label: 'Brezza Oceano / Blu' },
                    ].map(theme => (
                      <button
                        key={theme.id}
                        onClick={() => setBgTheme(theme.id as TitleTheme)}
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
                      { id: 'light', label: 'Luce Morbida (2 strati)' },
                      { id: 'standard', label: 'Standard (6 strati standard)' },
                      { id: 'mega', label: 'Mega 3D Extra Profondo (8 strati)' },
                    ].map(dep => (
                      <button
                        key={dep.id}
                        onClick={() => setBgDepth(dep.id as TitleDepth)}
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
                        onClick={() => setBgDot(dot.id as TitleDot)}
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
                        onClick={() => setBgAnim(an.id as TitleAnim)}
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
                      { id: 'rainbow', label: '🌈 Arcobaleno Olografico 7 Colori' },
                      { id: 'sunset', label: '🌅 Tramonto Solare Corallo' },
                      { id: 'pink', label: '🌸 Rosa Fluo & Fucsia' },
                      { id: 'aurora', label: '🌌 Aurora Boreale Ciano/Viola' },
                      { id: 'gold', label: '☀️ Oro & Ambra Radiosa' },
                    ].map(grad => (
                      <button
                        key={grad.id}
                        onClick={() => setSabatoGrad(grad.id as SubtitleGradient)}
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
                    Effetto Contorno &amp; Bordo 3D:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'glow-white', label: 'Bordo Bianco + Ombra 3D' },
                      { id: 'neon-border', label: 'Bagliore Neon Fluo Ciano' },
                      { id: 'dark-outline', label: 'Contorno Scuro 3D Netto' },
                      { id: 'soft-shadow', label: 'Solo Ombra Sfumata' },
                    ].map(out => (
                      <button
                        key={out.id}
                        onClick={() => setSabatoOut(out.id as SubtitleEffect)}
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
                    <span>{sabatoAnim ? '▶ In Esecuzione (6s)' : '⏸ In Pausa'}</span>
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
                      { id: 'stone', label: 'Incisione Lapidea Classica' },
                      { id: 'gold', label: 'Timbro in Foglia d&apos;Oro' },
                      { id: 'minimal', label: 'Grafite Notte Moderna' },
                      { id: 'rosegold', label: 'Oro Rosa Romantico' },
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
                      { id: 'greatvibes', label: 'Great Vibes (Elegante)' },
                      { id: 'pacifico', label: 'Pacifico (Morbido Pop)' },
                      { id: 'sacramento', label: 'Sacramento (Delicato)' },
                      { id: 'dancingscript', label: 'Dancing Script (Spensierato)' },
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
                      { id: 'night', label: 'Inchiostro Notte (#1e293b)' },
                      { id: 'ruby', label: 'Rosso Passione Rubino' },
                      { id: 'gold', label: 'Oro Ambrato Antico' },
                      { id: 'choco', label: 'Cioccolato Intenso' },
                    ].map(c => (
                      <button
                        key={c.id}
                        onClick={() => setSigColor(c.id as SignatureColor)}
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
                  <div className="text-amber-400 font-semibold">Testi attualmente configurati:</div>
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

            {/* PULSANTE COPIA RAPIDA DELL'INTERO BLOCCO CODICE E DOWNLOAD FILE AUTONOMO */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => handleCopy('css-direct', currentCssSnippet)}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                {copiedKey === 'css-direct' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{copiedKey === 'css-direct' ? 'Copiato negli appunti!' : 'Copia Solo il Blocco CSS'}</span>
              </button>

              <button
                onClick={handleDownloadSingleHtml}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-300 text-xs font-semibold border border-amber-500/40 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                title="Esporta il file HTML della singola scritta con animazione perfettamente attiva"
              >
                {copiedKey === 'download-single' ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4 text-amber-400" />}
                <span>{copiedKey === 'download-single' ? 'File HTML Scaricato!' : 'Scarica File HTML con Animazione'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

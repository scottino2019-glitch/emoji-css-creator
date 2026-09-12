import React, { useState } from 'react';
import { CardArt } from './components/CardArt';
import { ControlsPanel } from './components/ControlsPanel';
import { CodeViewerModal } from './components/CodeViewerModal';
import { VariantsWorkshop } from './components/VariantsWorkshop';
import { LiveCodeInspector } from './components/LiveCodeInspector';
import { TypographyWorkshop } from './components/TypographyWorkshop';
import {
  CardTextConfig,
  LayerVisibility,
  AnimationSettings,
  CardVariantConfig,
  ActiveSessionTab,
} from './types';
import { generateStandaloneHtml } from './data/rawHtmlCode';
import { generateCardCss } from './data/cssGenerators';
import { 
  Code2, 
  Download, 
  Sparkles, 
  ExternalLink, 
  Check,
  Palette,
  Eye,
  Smile,
  Crown,
  Coffee,
  LayoutGrid,
  Type
} from 'lucide-react';

export default function App() {
  // Configurazione dei testi modificabili
  const [texts, setTexts] = useState<CardTextConfig>({
    date: '12 SETTEMBRE',
    buongiorno: 'BUONGIORNO',
    subGreeting: 'BUON SABATO',
    signature: 'My angel',
  });

  // Visibilità selettiva dei livelli grafici
  const [layers, setLayers] = useState<LayerVisibility>({
    texts: true,
    emoji: true,
    coffee: true,
    hearts: true,
    sparkles: true,
    steam: true,
  });

  // Impostazioni animazioni
  const [anim, setAnim] = useState<AnimationSettings>({
    isPlaying: true,
    speed: 1,
  });

  // Varianti del personaggio e degli oggetti
  const [variants, setVariants] = useState<CardVariantConfig>({
    eyes: 'wink',
    mouth: 'kissLips',
    accessory: 'flowerPin',
    companion: 'coffeeCup',
  });

  // Sessione attiva (Cartolina, Ispettore Codice, o Laboratorio sessioni varianti)
  const [activeTab, setActiveTab] = useState<ActiveSessionTab>('card');

  // Livello di zoom/scala della cartolina
  const [scale, setScale] = useState<number>(0.95);

  // Trigger interattivi per animazioni a scatto
  const [burstKissKey, setBurstKissKey] = useState<number>(0);
  const [burstSteamKey, setBurstSteamKey] = useState<number>(0);

  // Stato modale codice
  const [isCodeModalOpen, setIsCodeModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleBurstKiss = () => {
    setBurstKissKey(prev => prev + 1);
    showToast('💋 Bacetto soffiato verso la tazzina!');
  };

  const handleBurstSteam = () => {
    setBurstSteamKey(prev => prev + 1);
    showToast('☕ Vapore a cuore in ascesa!');
  };

  const handleDownloadHtml = () => {
    const htmlContent = generateStandaloneHtml(texts, anim, variants);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `buongiorno-sabato-${texts.date.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('📥 File HTML autonomo scaricato con tutte le tue varianti!');
  };

  const currentCode = generateStandaloneHtml(texts, anim, variants);
  const currentUnifiedCss = generateCardCss(anim, variants);

  return (
    <div className="min-h-screen bg-[#111116] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* INIEZIONE GLOBALE DEL CSS DELLA CARD: Garantisce che le classi CSS e i keyframe siano SEMPRE visibili in tutta l'app */}
      <style id="buongiorno-global-style">{currentUnifiedCss}</style>

      {/* BARRA DI NAVIGAZIONE SUPERIORE */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              Buongiorno & Buon Sabato in Puro HTML + CSS
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                &lt;style&gt; Unificato
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Disegno vettoriale puro: anteprime in tempo reale e codice HTML+CSS consultabile su ogni livello
            </p>
          </div>
        </div>

        {/* PULSANTI DI AZIONE IN TESTATA */}
        <div className="flex items-center gap-2">
          <a
            href="/buongiorno-sabato.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-700/70 transition-colors"
            title="Apri il file HTML autonomo senza React"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden md:inline">File Standalone</span>
          </a>

          <button
            onClick={handleDownloadHtml}
            id="btn-header-download"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Scarica .html</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            id="btn-header-inspector"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              activeTab === 'code'
                ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Ispettore Codice</span>
          </button>

          <button
            onClick={() => setIsCodeModalOpen(true)}
            id="btn-header-code"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Code2 className="w-4 h-4" />
            <span>Vedi Codice HTML Puro</span>
          </button>
        </div>
      </header>

      {/* BARRA DI SELEZIONE DELLE SESSIONI (CARTOLINA, CODICE, O VARIANTI) */}
      <nav className="border-b border-slate-800/80 bg-slate-900/60 px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4 overflow-x-auto">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('card')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'card'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Cartolina Completa
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'code'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Ispettore Codice HTML & CSS
          </button>

          <button
            onClick={() => setActiveTab('typography')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'typography'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 border border-amber-500/20'
            }`}
          >
            <Type className="w-3.5 h-3.5 text-amber-400" />
            Sessione Scritte & 3D
          </button>

          <div className="h-4 w-px bg-slate-700/60 mx-1 hidden sm:block" />

          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider hidden sm:inline">
            Laboratorio Grafico:
          </span>

          <button
            onClick={() => setActiveTab('eyes')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'eyes'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Sessione Occhi
          </button>

          <button
            onClick={() => setActiveTab('mouth')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'mouth'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Smile className="w-3.5 h-3.5" />
            Sessione Bocca
          </button>

          <button
            onClick={() => setActiveTab('accessories')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'accessories'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Crown className="w-3.5 h-3.5" />
            Sessione Accessori
          </button>

          <button
            onClick={() => setActiveTab('objects')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'objects'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" />
            Sessione Oggetti
          </button>
        </div>

        {/* INDICATORE CONFIGURAZIONE COMPLESSIVA */}
        <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Rendering puro senza immagini esterne</span>
        </div>
      </nav>

      {/* NOTIFICA TOAST */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl border border-slate-700 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* CONTENUTO PRINCIPALE */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center">
        {activeTab === 'card' ? (
          /* VISTA CARTOLINA COMPLETA */
          <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-8">
            
            {/* COLONNA SINISTRA: LA CARTOLINA RENDERIZZATA */}
            <div className="w-full lg:flex-1 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-amber-400" />
                  Rendering Diretto Pure HTML & CSS
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('code')}
                    className="text-xs font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
                  >
                    <Code2 className="w-3 h-3" />
                    <span>Apri Ispettore Codice &rarr;</span>
                  </button>
                </div>
              </div>

              {/* CANVAS STAGE */}
              <div className="w-full flex justify-center items-start overflow-hidden py-2 min-h-[770px]">
                <CardArt
                  texts={texts}
                  layers={layers}
                  anim={anim}
                  variants={variants}
                  scale={scale}
                  burstKissKey={burstKissKey}
                  burstSteamKey={burstSteamKey}
                />
              </div>
            </div>

            {/* COLONNA DESTRA: PANNELLO DI CONTROLLO INTERATTIVO */}
            <div className="w-full lg:w-[480px] flex flex-col items-center lg:sticky lg:top-24">
              <ControlsPanel
                texts={texts}
                setTexts={setTexts}
                layers={layers}
                setLayers={setLayers}
                anim={anim}
                setAnim={setAnim}
                variants={variants}
                setVariants={setVariants}
                scale={scale}
                setScale={setScale}
                onBurstKiss={handleBurstKiss}
                onBurstSteam={handleBurstSteam}
                onOpenCode={() => setIsCodeModalOpen(true)}
                onDownloadHtml={handleDownloadHtml}
                onOpenWorkshop={(tab) => setActiveTab(tab)}
              />

              {/* CARD INFORMATIVA SUL METODO USATO */}
              <div className="w-full max-w-xl mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-1.5">
                <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Tutto concentrato nel tag &lt;style&gt;
                </div>
                <p className="leading-relaxed">
                  Tutte le classi, forme, ombre e keyframes sono generati all&apos;interno di un unico blocco CSS. In questo modo hai il controllo totale di ogni gradiente, diametro di sfera, curvatura di labbra, inclinazione e ritmo di animazione senza dipendere da nessun foglio esterno.
                </p>
              </div>
            </div>
          </div>
        ) : activeTab === 'code' ? (
          /* VISTA ISPETTORE CODICE LIVE COMPLETO */
          <LiveCodeInspector
            texts={texts}
            anim={anim}
            variants={variants}
            onDownloadHtml={handleDownloadHtml}
            onOpenModal={() => setIsCodeModalOpen(true)}
            onReturnToCard={() => setActiveTab('card')}
          />
        ) : activeTab === 'typography' ? (
          /* VISTA SESSIONE DEDICATA SCRITTE & TIPOGRAFIA 3D */
          <TypographyWorkshop
            texts={texts}
            onTextsChange={(newTexts) => {
              setTexts(newTexts);
              showToast('✍️ Testi aggiornati nella cartolina!');
            }}
            anim={anim}
            onReturnToCard={() => setActiveTab('card')}
            onOpenInspector={() => setActiveTab('code')}
          />
        ) : (
          /* VISTA LABORATORIO SESSIONI (OCCHI, BOCCA, ACCESSORI, OGGETTI) */
          <VariantsWorkshop
            activeTab={activeTab}
            onTabChange={(t) => setActiveTab(t)}
            variants={variants}
            onVariantChange={(v) => {
              setVariants(v);
              showToast('✨ Variante applicata al codice della cartolina!');
            }}
            onReturnToCard={() => setActiveTab('card')}
          />
        )}
      </main>

      {/* MODALE DI VISUALIZZAZIONE CODICE COMPLETO */}
      <CodeViewerModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        codeString={currentCode}
        onDownloadHtml={handleDownloadHtml}
      />

    </div>
  );
}

import React from 'react';
import {
  CardTextConfig,
  LayerVisibility,
  AnimationSettings,
  CardVariantConfig,
  ActiveSessionTab,
} from '../types';
import {
  EYE_VARIANTS,
  MOUTH_VARIANTS,
  ACCESSORY_VARIANTS,
  COMPANION_VARIANTS,
} from '../data/variantsData';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Heart, 
  Coffee, 
  Type, 
  Sliders, 
  Eye, 
  ZoomIn, 
  ZoomOut,
  Flame,
  Code2,
  FileDown,
  Smile,
  Crown,
  Wand2
} from 'lucide-react';

interface ControlsPanelProps {
  texts: CardTextConfig;
  setTexts: React.Dispatch<React.SetStateAction<CardTextConfig>>;
  layers: LayerVisibility;
  setLayers: React.Dispatch<React.SetStateAction<LayerVisibility>>;
  anim: AnimationSettings;
  setAnim: React.Dispatch<React.SetStateAction<AnimationSettings>>;
  variants: CardVariantConfig;
  setVariants: React.Dispatch<React.SetStateAction<CardVariantConfig>>;
  scale: number;
  setScale: (s: number) => void;
  onBurstKiss: () => void;
  onBurstSteam: () => void;
  onOpenCode: () => void;
  onDownloadHtml: () => void;
  onOpenWorkshop: (tab: ActiveSessionTab) => void;
}

export const ControlsPanel: React.FC<ControlsPanelProps> = ({
  texts,
  setTexts,
  layers,
  setLayers,
  anim,
  setAnim,
  variants,
  setVariants,
  scale,
  setScale,
  onBurstKiss,
  onBurstSteam,
  onOpenCode,
  onDownloadHtml,
  onOpenWorkshop,
}) => {
  const togglePlay = () => {
    setAnim(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const setSpeed = (speed: number) => {
    setAnim(prev => ({ ...prev, speed }));
  };

  const toggleLayer = (key: keyof LayerVisibility) => {
    setLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleResetTexts = () => {
    setTexts({
      date: '12 SETTEMBRE',
      buongiorno: 'BUONGIORNO',
      subGreeting: 'BUON SABATO',
      signature: 'My angel',
    });
  };

  return (
    <div className="w-full max-w-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-5 text-slate-200 shadow-2xl space-y-5">
      
      {/* HEADER CONTROLLI */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Personalizzazione & Varianti</h2>
            <p className="text-xs text-slate-400">Puro codice HTML e CSS (tag &lt;style&gt;)</p>
          </div>
        </div>

        {/* PULSANTI CODICE E DOWNLOAD */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCode}
            id="btn-view-code"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5" />
            Vedi Codice HTML
          </button>
          <button
            onClick={onDownloadHtml}
            id="btn-download-html-quick"
            title="Scarica file standalone .html con tutte le varianti scelte"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium border border-slate-700 transition-all cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            .HTML
          </button>
        </div>
      </div>

      {/* SELETTORE DELLE VARIANTI GRAFICHE */}
      <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Wand2 className="w-3.5 h-3.5" />
            Varianti dei Personaggi
          </span>
          <button
            onClick={() => onOpenWorkshop('eyes')}
            className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 cursor-pointer"
          >
            Apri Laboratorio Sessioni &rarr;
          </button>
        </div>

        {/* 1. SELEZIONE OCCHI */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              Stile Occhi
            </span>
            <button
              onClick={() => onOpenWorkshop('eyes')}
              className="text-[10px] text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              Isola sessione
            </button>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {EYE_VARIANTS.map(eye => (
              <button
                key={eye.id}
                onClick={() => setVariants(prev => ({ ...prev, eyes: eye.id }))}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left truncate transition-all cursor-pointer flex items-center gap-1.5 ${
                  variants.eyes === eye.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
                title={eye.description}
              >
                <span>{eye.icon}</span>
                <span className="truncate">{eye.name.split(' (')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. SELEZIONE BOCCA */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium flex items-center gap-1">
              <Smile className="w-3.5 h-3.5 text-rose-400" />
              Stile Bocca
            </span>
            <button
              onClick={() => onOpenWorkshop('mouth')}
              className="text-[10px] text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              Isola sessione
            </button>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {MOUTH_VARIANTS.map(m => (
              <button
                key={m.id}
                onClick={() => setVariants(prev => ({ ...prev, mouth: m.id }))}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left truncate transition-all cursor-pointer flex items-center gap-1.5 ${
                  variants.mouth === m.id
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 font-semibold'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
                title={m.description}
              >
                <span>{m.icon}</span>
                <span className="truncate">{m.name.split(' (')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. SELEZIONE ACCESSORI */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              Accessorio Testa
            </span>
            <button
              onClick={() => onOpenWorkshop('accessories')}
              className="text-[10px] text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              Isola sessione
            </button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
            {ACCESSORY_VARIANTS.map(acc => (
              <button
                key={acc.id}
                onClick={() => setVariants(prev => ({ ...prev, accessory: acc.id }))}
                className={`px-2 py-1.5 rounded-lg text-xs font-medium text-left truncate transition-all cursor-pointer flex items-center gap-1.5 ${
                  variants.accessory === acc.id
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 font-semibold'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
                title={acc.description}
              >
                <span>{acc.icon}</span>
                <span className="truncate">{acc.name.split(' (')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4. SELEZIONE OGGETTO DI SCENA */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium flex items-center gap-1">
              <Coffee className="w-3.5 h-3.5 text-emerald-400" />
              Oggetto di Scena
            </span>
            <button
              onClick={() => onOpenWorkshop('objects')}
              className="text-[10px] text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              Isola sessione
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {COMPANION_VARIANTS.map(comp => (
              <button
                key={comp.id}
                onClick={() => setVariants(prev => ({ ...prev, companion: comp.id }))}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left truncate transition-all cursor-pointer flex items-center gap-1.5 ${
                  variants.companion === comp.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 font-semibold'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
                title={comp.description}
              >
                <span>{comp.icon}</span>
                <span className="truncate">{comp.name.split(' (')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGA PLAY/PAUSE, VELOCITÀ E ZOOM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Playback & Velocità */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 space-y-2">
          <label className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Animazioni CSS Keyframes
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              id="btn-toggle-play"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                anim.isPlaying
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30'
              }`}
            >
              {anim.isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" /> Pausa
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" /> Avvia
                </>
              )}
            </button>

            {/* Velocità 0.5x, 1x, 1.5x */}
            <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800">
              {[0.5, 1, 1.5, 2].map(spd => (
                <button
                  key={spd}
                  onClick={() => setSpeed(spd)}
                  className={`px-2 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    anim.speed === spd
                      ? 'bg-slate-700 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Zoom & Scala Visualizzatore */}
        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 space-y-2">
          <label className="text-xs text-slate-400 font-medium flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              Scala Card
            </span>
            <span className="text-slate-300 font-mono text-[11px]">{Math.round(scale * 100)}%</span>
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScale(Math.max(0.6, scale - 0.1))}
              disabled={scale <= 0.6}
              title="Riduci dimensione"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-40 border border-slate-800 cursor-pointer"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <input
              type="range"
              min="0.6"
              max="1.2"
              step="0.05"
              value={scale}
              onChange={e => setScale(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <button
              onClick={() => setScale(Math.min(1.2, scale + 0.1))}
              disabled={scale >= 1.2}
              title="Ingrandisci dimensione"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-40 border border-slate-800 cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* AZIONI INTERATTIVE ISTANTANEE */}
      <div className="bg-gradient-to-r from-rose-950/30 via-slate-950/60 to-amber-950/30 p-3.5 rounded-xl border border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-medium text-slate-300">
          Trigger Animazioni Effetti:
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={onBurstKiss}
            id="btn-trigger-kiss"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-md shadow-rose-600/30 transition-all cursor-pointer active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            Soffia Bacio
          </button>
          <button
            onClick={onBurstSteam}
            id="btn-trigger-steam"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-md shadow-amber-600/30 transition-all cursor-pointer active:scale-95"
          >
            <Flame className="w-3.5 h-3.5" />
            Fuma Vapore
          </button>
        </div>
      </div>

      {/* LIVELLI VISIBILI (LAYER TOGGLES) */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
          Visibilità Livelli CSS
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {[
            { key: 'texts' as const, label: 'Scritte' },
            { key: 'emoji' as const, label: 'Emoji 3D' },
            { key: 'coffee' as const, label: 'Oggetto' },
            { key: 'hearts' as const, label: 'Cuori' },
            { key: 'sparkles' as const, label: 'Stelle' },
            { key: 'steam' as const, label: 'Vapore' },
          ].map(layer => (
            <button
              key={layer.key}
              onClick={() => toggleLayer(layer.key)}
              className={`py-1.5 px-2 rounded-lg text-xs font-medium transition-all text-center border cursor-pointer ${
                layers[layer.key]
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 opacity-60'
              }`}
            >
              {layer.label}
            </button>
          ))}
        </div>
      </div>

      {/* MODIFICA TESTI IN TEMPO REALE */}
      <div className="space-y-3 pt-2 border-t border-slate-800">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Type className="w-3.5 h-3.5 text-amber-400" />
            Testi della Cartolina
          </label>
          <button
            onClick={handleResetTexts}
            title="Ripristina testi originali"
            className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            Predefiniti
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-[11px] text-slate-400 mb-1 block">Data superiore:</label>
            <input
              type="text"
              value={texts.date}
              onChange={e => setTexts(prev => ({ ...prev, date: e.target.value }))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="text-[11px] text-slate-400 mb-1 block">Titolo principale:</label>
            <input
              type="text"
              value={texts.buongiorno}
              onChange={e => setTexts(prev => ({ ...prev, buongiorno: e.target.value }))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="text-[11px] text-slate-400 mb-1 block">Sottotitolo arcobaleno:</label>
            <input
              type="text"
              value={texts.subGreeting}
              onChange={e => setTexts(prev => ({ ...prev, subGreeting: e.target.value }))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="text-[11px] text-slate-400 mb-1 block">Firma corsiva:</label>
            <input
              type="text"
              value={texts.signature}
              onChange={e => setTexts(prev => ({ ...prev, signature: e.target.value }))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* LINK DIRETTO ALLA SESSIONE SCRITTE DEDICATA */}
        <button
          onClick={() => onOpenWorkshop('typography')}
          className="w-full mt-3 py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-rose-500/15 hover:from-amber-500/25 hover:to-rose-500/25 text-amber-300 border border-amber-500/30 hover:border-amber-500/50 text-xs font-semibold flex items-center justify-between transition-all cursor-pointer shadow-sm"
        >
          <span className="flex items-center gap-2">
            <Type className="w-4 h-4 text-amber-400" />
            <span>Laboratorio Scritte & Tipografia 3D</span>
          </span>
          <span className="text-[11px] font-mono text-amber-400 font-bold">&rarr; Selettori & Codice</span>
        </button>
      </div>
    </div>
  );
};

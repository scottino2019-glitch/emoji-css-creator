import React, { useState } from 'react';
import {
  ActiveSessionTab,
  CardVariantConfig,
  EyeVariant,
  MouthVariant,
  AccessoryVariant,
  CompanionObjectVariant,
} from '../types';
import {
  EYE_VARIANTS,
  MOUTH_VARIANTS,
  ACCESSORY_VARIANTS,
  COMPANION_VARIANTS,
  VariantMeta,
} from '../data/variantsData';
import {
  CharacterAccessory,
  CharacterEyes,
  CharacterMouth,
  CompanionObjectRenderer,
} from './characterComponents';
import { 
  getEyesHtml, 
  getMouthHtml, 
  getAccessoryHtml, 
  getCompanionHtml 
} from '../data/htmlGenerators';
import { generateCardCss } from '../data/cssGenerators';
import { 
  Check, 
  Copy, 
  Sparkles, 
  Eye, 
  Smile, 
  Crown, 
  Coffee, 
  Code2, 
  Layers, 
  FileCode,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Type
} from 'lucide-react';

interface VariantsWorkshopProps {
  activeTab: ActiveSessionTab;
  onTabChange: (tab: ActiveSessionTab) => void;
  variants: CardVariantConfig;
  onVariantChange: (newVariants: CardVariantConfig) => void;
  onReturnToCard: () => void;
}

export const VariantsWorkshop: React.FC<VariantsWorkshopProps> = ({
  activeTab,
  onTabChange,
  variants,
  onVariantChange,
  onReturnToCard,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedCodeId, setExpandedCodeId] = useState<string | null>(null);
  const [codeType, setCodeType] = useState<Record<string, 'css' | 'html'>>({});

  // CSS completo generato per garantire che tutte le regole e i keyframe siano attivi
  const unifiedCss = generateCardCss({ isPlaying: true, speed: 1 }, variants);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const toggleExpandCode = (id: string) => {
    setExpandedCodeId(prev => (prev === id ? null : id));
  };

  const setCardCodeType = (id: string, type: 'css' | 'html') => {
    setCodeType(prev => ({ ...prev, [id]: type }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      
      {/* INIEZIONE LOCALE DELLO STILE: Garantisce che tutte le classi CSS e i keyframe esistano sempre */}
      <style>{unifiedCss}</style>

      {/* HEADER DELLA SESSIONE WORKSHOP */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Laboratorio Grafico & Codice Puro HTML+CSS
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              Sessioni di Creazione Grafica
              <span className="text-xs px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                Anteprime 3D + Codice Immediato
              </span>
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Esplora ogni variante disegnata con puro CSS interno. Visualizza l&apos;anteprima isolata in tempo reale e consulta direttamente il codice HTML e CSS di ciascun elemento.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onReturnToCard}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-1.5"
            >
              Visualizza Cartolina Completa &rarr;
            </button>
          </div>
        </div>

        {/* PULSANTI DI NAVIGAZIONE TRA LE 4 SESSIONI */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-800/80">
          <button
            onClick={() => onTabChange('eyes')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'eyes'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Eye className="w-4 h-4" />
            Sessione Occhi ({EYE_VARIANTS.length})
          </button>

          <button
            onClick={() => onTabChange('mouth')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'mouth'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Smile className="w-4 h-4" />
            Sessione Bocca ({MOUTH_VARIANTS.length})
          </button>

          <button
            onClick={() => onTabChange('accessories')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'accessories'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Crown className="w-4 h-4" />
            Sessione Accessori ({ACCESSORY_VARIANTS.length})
          </button>

          <button
            onClick={() => onTabChange('objects')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'objects'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80'
            }`}
          >
            <Coffee className="w-4 h-4" />
            Sessione Oggetti di Scena ({COMPANION_VARIANTS.length})
          </button>

          <button
            onClick={() => onTabChange('typography')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'typography'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold shadow-lg shadow-amber-500/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 border border-amber-500/20'
            }`}
          >
            <Type className="w-4 h-4 text-amber-400" />
            Sessione Scritte & 3D (Nuova)
          </button>
        </div>
      </div>

      {/* ANTEPRIMA DEL PERSONAGGIO ATTUALE NELLA SESSIONE */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {/* Avatar live dell'emoji assemblato */}
          <div className="relative w-28 h-28 bg-gradient-to-b from-[#2a2618] via-[#1a1914] to-[#121215] rounded-2xl border border-amber-500/30 shadow-inner flex items-center justify-center overflow-hidden shrink-0">
            <div
              className="relative flex items-center justify-center"
              style={{
                transform: 'scale(0.52)',
                transformOrigin: 'center center',
                width: 192,
                height: 192,
              }}
            >
              <div className="live-emoji-head" style={{ position: 'relative', top: 15, left: 0 }}>
                <div className="live-emoji-specular" />
                <CharacterAccessory variant={variants.accessory} />
                <div className="live-eyebrow eb-l" />
                <div className="live-eyebrow eb-r" />
                <CharacterEyes variant={variants.eyes} />
                <div className="live-blush b-l" />
                <div className="live-blush b-r" />
                <CharacterMouth variant={variants.mouth} />
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Configurazione Attiva Sulla Cartolina
            </div>
            <div className="text-base font-bold text-white mt-0.5">
              {EYE_VARIANTS.find(v => v.id === variants.eyes)?.name.split(' (')[0]} +{' '}
              {MOUTH_VARIANTS.find(v => v.id === variants.mouth)?.name.split(' (')[0]}
            </div>
            <div className="text-xs text-slate-400 mt-1.5 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/80">
                👑 {ACCESSORY_VARIANTS.find(v => v.id === variants.accessory)?.name.split(' (')[0]}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/80">
                {COMPANION_VARIANTS.find(v => v.id === variants.companion)?.icon}{' '}
                {COMPANION_VARIANTS.find(v => v.id === variants.companion)?.name.split(' (')[0]}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onReturnToCard}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer flex items-center gap-1.5"
          >
            Torna alla Cartolina &rarr;
          </button>
        </div>
      </div>

      {/* CONTENUTO DELLA SESSIONE SELEZIONATA: GRIGLIA DI CARTE */}
      {activeTab === 'eyes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EYE_VARIANTS.map(item => {
            const isSelected = variants.eyes === item.id;
            const htmlSnippet = getEyesHtml(item.id);
            const currentCodeType = codeType[item.id] || 'css';
            const isCodeOpen = expandedCodeId === item.id;

            return (
              <VariantCard
                key={item.id}
                item={item}
                isSelected={isSelected}
                onSelect={() => onVariantChange({ ...variants, eyes: item.id })}
                onCopy={(snippet) => handleCopy(item.id, snippet)}
                isCopied={copiedId === item.id}
                isCodeOpen={isCodeOpen}
                onToggleCode={() => toggleExpandCode(item.id)}
                codeType={currentCodeType}
                onSetCodeType={(t) => setCardCodeType(item.id, t)}
                htmlSnippet={htmlSnippet}
                previewContent={
                  <div
                    className="relative flex items-center justify-center shrink-0"
                    style={{
                      transform: 'scale(0.62)',
                      transformOrigin: 'center center',
                      width: 192,
                      height: 192,
                    }}
                  >
                    <div className="live-emoji-head" style={{ position: 'relative', top: 12, left: 0 }}>
                      <div className="live-emoji-specular" />
                      <div className="live-eyebrow eb-l" />
                      <div className="live-eyebrow eb-r" />
                      <CharacterEyes variant={item.id} />
                      <div className="live-blush b-l" />
                      <div className="live-blush b-r" />
                      <CharacterMouth variant={variants.mouth} />
                    </div>
                  </div>
                }
              />
            );
          })}
        </div>
      )}

      {activeTab === 'mouth' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOUTH_VARIANTS.map(item => {
            const isSelected = variants.mouth === item.id;
            const htmlSnippet = getMouthHtml(item.id);
            const currentCodeType = codeType[item.id] || 'css';
            const isCodeOpen = expandedCodeId === item.id;

            return (
              <VariantCard
                key={item.id}
                item={item}
                isSelected={isSelected}
                onSelect={() => onVariantChange({ ...variants, mouth: item.id })}
                onCopy={(snippet) => handleCopy(item.id, snippet)}
                isCopied={copiedId === item.id}
                isCodeOpen={isCodeOpen}
                onToggleCode={() => toggleExpandCode(item.id)}
                codeType={currentCodeType}
                onSetCodeType={(t) => setCardCodeType(item.id, t)}
                htmlSnippet={htmlSnippet}
                previewContent={
                  <div
                    className="relative flex items-center justify-center shrink-0"
                    style={{
                      transform: 'scale(0.62)',
                      transformOrigin: 'center center',
                      width: 192,
                      height: 192,
                    }}
                  >
                    <div className="live-emoji-head" style={{ position: 'relative', top: 12, left: 0 }}>
                      <div className="live-emoji-specular" />
                      <div className="live-eyebrow eb-l" />
                      <div className="live-eyebrow eb-r" />
                      <CharacterEyes variant={variants.eyes} />
                      <div className="live-blush b-l" />
                      <div className="live-blush b-r" />
                      <CharacterMouth variant={item.id} />
                    </div>
                  </div>
                }
              />
            );
          })}
        </div>
      )}

      {activeTab === 'accessories' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACCESSORY_VARIANTS.map(item => {
            const isSelected = variants.accessory === item.id;
            const htmlSnippet = getAccessoryHtml(item.id);
            const currentCodeType = codeType[item.id] || 'css';
            const isCodeOpen = expandedCodeId === item.id;

            return (
              <VariantCard
                key={item.id}
                item={item}
                isSelected={isSelected}
                onSelect={() => onVariantChange({ ...variants, accessory: item.id })}
                onCopy={(snippet) => handleCopy(item.id, snippet)}
                isCopied={copiedId === item.id}
                isCodeOpen={isCodeOpen}
                onToggleCode={() => toggleExpandCode(item.id)}
                codeType={currentCodeType}
                onSetCodeType={(t) => setCardCodeType(item.id, t)}
                htmlSnippet={htmlSnippet}
                previewContent={
                  <div
                    className="relative flex items-center justify-center shrink-0"
                    style={{
                      transform: 'scale(0.56)',
                      transformOrigin: 'center center',
                      width: 192,
                      height: 230,
                    }}
                  >
                    <div className="live-emoji-head" style={{ position: 'relative', top: 28, left: 0 }}>
                      <div className="live-emoji-specular" />
                      <CharacterAccessory variant={item.id} />
                      <div className="live-eyebrow eb-l" />
                      <div className="live-eyebrow eb-r" />
                      <CharacterEyes variant={variants.eyes} />
                      <div className="live-blush b-l" />
                      <div className="live-blush b-r" />
                      <CharacterMouth variant={variants.mouth} />
                    </div>
                  </div>
                }
              />
            );
          })}
        </div>
      )}

      {activeTab === 'objects' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANION_VARIANTS.map(item => {
            const isSelected = variants.companion === item.id;
            const htmlSnippet = getCompanionHtml(item.id);
            const currentCodeType = codeType[item.id] || 'css';
            const isCodeOpen = expandedCodeId === item.id;

            return (
              <VariantCard
                key={item.id}
                item={item}
                isSelected={isSelected}
                onSelect={() => onVariantChange({ ...variants, companion: item.id })}
                onCopy={(snippet) => handleCopy(item.id, snippet)}
                isCopied={copiedId === item.id}
                isCodeOpen={isCodeOpen}
                onToggleCode={() => toggleExpandCode(item.id)}
                codeType={currentCodeType}
                onSetCodeType={(t) => setCardCodeType(item.id, t)}
                htmlSnippet={htmlSnippet}
                previewContent={
                  <div
                    className="relative flex items-center justify-center shrink-0"
                    style={{
                      width: 240,
                      height: 330,
                      transform: 'scale(0.50)',
                      transformOrigin: 'bottom center',
                      marginTop: 10,
                      marginBottom: -10,
                    }}
                  >
                    <CompanionObjectRenderer variant={item.id} showSteam={true} />
                  </div>
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

interface VariantCardProps<T extends string> {
  key?: React.Key;
  item: VariantMeta<T>;
  isSelected: boolean;
  onSelect: () => void;
  onCopy: (snippet: string) => void;
  isCopied: boolean;
  isCodeOpen: boolean;
  onToggleCode: () => void;
  codeType: 'css' | 'html';
  onSetCodeType: (t: 'css' | 'html') => void;
  htmlSnippet: string;
  previewContent: React.ReactNode;
}

function VariantCard<T extends string>({
  item,
  isSelected,
  onSelect,
  onCopy,
  isCopied,
  isCodeOpen,
  onToggleCode,
  codeType,
  onSetCodeType,
  htmlSnippet,
  previewContent,
}: VariantCardProps<T>) {
  const currentSnippet = codeType === 'css' ? item.snippet : htmlSnippet;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-5 transition-all ${
        isSelected
          ? 'bg-slate-900 border-2 border-amber-500 shadow-xl shadow-amber-500/15'
          : 'bg-slate-900/90 border border-slate-800 hover:border-slate-700 shadow-md'
      }`}
    >
      {/* BADGE DI STATO SUPERIORE */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
          <span>{item.icon}</span>
          <span>{item.badge}</span>
        </span>

        {isSelected && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Attivo
          </span>
        )}
      </div>

      {/* BOOTH DI ANTEPRIMA VETTORIALE CON ILLUMINAZIONE STUDIO */}
      <div className="relative w-full h-48 bg-gradient-to-b from-[#1c1d28] via-[#14151e] to-[#0c0d12] rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden mb-4 shadow-inner">
        {/* Riflesso luce centrale ambient */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 55%, rgba(251, 191, 36, 0.15) 0%, rgba(255, 255, 255, 0.03) 45%, transparent 75%)'
          }}
        />
        {previewContent}
      </div>

      {/* INFORMAZIONI VARIANT */}
      <h3 className="text-base font-bold text-white leading-snug">
        {item.name}
      </h3>
      <p className="text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
        {item.description}
      </p>

      {/* HIGHLIGHTS CSS */}
      <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
        {item.cssHighlights.map((hl, i) => (
          <span
            key={i}
            className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-amber-300/80"
          >
            {hl}
          </span>
        ))}
      </div>

      {/* PANNELLO CODICE ESPANDIBILE INTEGRATO: PERMETTE DI VEDERE IL CODICE SULLA CARD */}
      <div className="mb-3">
        <button
          onClick={onToggleCode}
          className={`w-full py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-between border transition-all cursor-pointer ${
            isCodeOpen
              ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
              : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:bg-slate-800/80'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{isCodeOpen ? 'Nascondi Codice' : 'Mostra Codice HTML & CSS'}</span>
          </span>
          {isCodeOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {isCodeOpen && (
          <div className="mt-2 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs flex flex-col gap-2 animate-in fade-in duration-200">
            {/* Selettore CSS vs HTML */}
            <div className="flex items-center justify-between">
              <div className="flex bg-slate-900 p-0.5 rounded-md border border-slate-800 text-[10px]">
                <button
                  onClick={() => onSetCodeType('css')}
                  className={`px-2.5 py-1 rounded font-mono font-semibold transition-colors cursor-pointer ${
                    codeType === 'css'
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Puro CSS (&lt;style&gt;)
                </button>
                <button
                  onClick={() => onSetCodeType('html')}
                  className={`px-2.5 py-1 rounded font-mono font-semibold transition-colors cursor-pointer ${
                    codeType === 'html'
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Struttura HTML
                </button>
              </div>

              <button
                onClick={() => onCopy(currentSnippet)}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-semibold border border-slate-700 transition-colors cursor-pointer"
              >
                {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{isCopied ? 'Copiato!' : 'Copia'}</span>
              </button>
            </div>

            {/* Box codice formattato */}
            <pre className="font-mono text-[11px] leading-relaxed p-2.5 bg-[#090a0e] rounded-lg border border-slate-800/80 text-amber-200/90 overflow-x-auto max-h-48 select-text">
              <code>{currentSnippet}</code>
            </pre>
          </div>
        )}
      </div>

      {/* AZIONI: APPLICA ALLA CARD PRINCIPALE E COPIA RAPIDA */}
      <div className="mt-auto flex items-center gap-2 pt-2 border-t border-slate-800/80">
        <button
          onClick={onSelect}
          className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            isSelected
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-default'
              : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-md shadow-orange-500/20 active:scale-95'
          }`}
        >
          {isSelected ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Selezionato
            </>
          ) : (
            <>Applica alla Card</>
          )}
        </button>

        <button
          onClick={() => onCopy(currentSnippet)}
          title="Copia Frammento nel blocco note"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all cursor-pointer flex items-center justify-center"
        >
          {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

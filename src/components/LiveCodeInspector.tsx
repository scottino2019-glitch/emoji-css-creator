import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Code2, 
  FileCode, 
  Layers, 
  Sparkles,
  Search,
  Maximize2
} from 'lucide-react';
import { CardTextConfig, AnimationSettings, CardVariantConfig } from '../types';
import { generateStandaloneHtml } from '../data/rawHtmlCode';
import { generateCardCss } from '../data/cssGenerators';
import { getEyesHtml, getMouthHtml, getAccessoryHtml, getCompanionHtml } from '../data/htmlGenerators';
import { generateTitleHtml, generateSubtitleHtml, generateDateHtml } from '../data/typographyGenerators';
import { CardArt } from './CardArt';

interface LiveCodeInspectorProps {
  texts: CardTextConfig;
  anim: AnimationSettings;
  variants: CardVariantConfig;
  onDownloadHtml: () => void;
  onOpenModal: () => void;
  onReturnToCard: () => void;
}

export const LiveCodeInspector: React.FC<LiveCodeInspectorProps> = ({
  texts,
  anim,
  variants,
  onDownloadHtml,
  onOpenModal,
  onReturnToCard,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'full' | 'css' | 'html' | 'variant'>('full');
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fullHtml = generateStandaloneHtml(texts, anim, variants);
  const pureCss = generateCardCss(anim, variants, texts);
  
  const bodyHtml = `<!-- PALCO PRINCIPALE CARTELLINA -->
<div class="card-canvas">
  <div class="card-ambient-glow"></div>

${generateDateHtml(texts)}

${generateTitleHtml(texts)}

${generateSubtitleHtml(texts)}

  <!-- 4. PALCO DEI PERSONAGGI VETTORIALI -->
  <div class="live-stage-characters">
    <div class="live-floor-reflection"></div>

    <!-- PERSONAGGIO: EMOJI VETTORIALE -->
    <div class="live-emoji-figure">
      <div class="live-emoji-shadow"></div>
      <div class="live-emoji-leg leg-l"></div>
      <div class="live-emoji-leg leg-r"></div>
      <div class="live-emoji-foot foot-l"></div>
      <div class="live-emoji-foot foot-r"></div>
      <div class="live-emoji-arm-l"></div>

      <div class="live-emoji-head">
        <div class="live-emoji-specular"></div>

        ${getAccessoryHtml(variants.accessory)}

        <div class="live-eyebrow eb-l"></div>
        <div class="live-eyebrow eb-r"></div>

        ${getEyesHtml(variants.eyes)}

        <div class="live-blush b-l"></div>
        <div class="live-blush b-r"></div>

        ${getMouthHtml(variants.mouth)}
      </div>
    </div>

    <!-- OGGETTO DI SCENA VETTORIALE SELEZIONATO -->
    ${getCompanionHtml(variants.companion)}
  </div>

  <!-- 5. FIRMA CALLIGRAFICA 3D -->
  <div class="live-footer-row">
    <div class="live-sparkle s-md sp-bl"></div>
    <span class="live-my-angel">${texts.signature}</span>
  </div>
</div>`;

  const variantSpecificSnippet = `/* ==========================================================================
   CONFIGURAZIONE ATTUALE DELLE VARIANTI ATTIVE
   Occhi: ${variants.eyes} | Bocca: ${variants.mouth}
   Accessorio: ${variants.accessory} | Oggetto: ${variants.companion}
   ========================================================================== */

/* HTML DEI LIVELLI ATTIVI */
${getAccessoryHtml(variants.accessory)}
${getEyesHtml(variants.eyes)}
${getMouthHtml(variants.mouth)}
${getCompanionHtml(variants.companion)}
`;

  let displayedCode = fullHtml;
  if (activeSubTab === 'css') displayedCode = `<style>\n${pureCss}\n</style>`;
  else if (activeSubTab === 'html') displayedCode = bodyHtml;
  else if (activeSubTab === 'variant') displayedCode = variantSpecificSnippet;

  const handleCopy = () => {
    navigator.clipboard.writeText(displayedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const codeLines = displayedCode.split('\n');

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      
      {/* HEADER ISPETTORE CODICE */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
            <Code2 className="w-3.5 h-3.5" />
            Ispettore Codice Live & Standalone
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            Tutto in Puro HTML & CSS
            <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono font-medium border border-amber-500/30">
              &lt;style&gt; Unificato ({codeLines.length} linee)
            </span>
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Qui puoi visualizzare, copiare o scaricare l&apos;intero codice sorgente della cartolina con le tue personalizzazioni applicate in tempo reale.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onReturnToCard}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
          >
            &larr; Torna alla Card
          </button>

          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
              copied
                ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copiato!' : 'Copia Questo Codice'}</span>
          </button>

          <button
            onClick={onDownloadHtml}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Scarica .html</span>
          </button>
        </div>
      </div>

      {/* SELETTORE DELLE SEZIONI DI CODICE */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950/80 p-2 rounded-xl border border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveSubTab('full')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'full'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            File HTML Completo Standalone
          </button>

          <button
            onClick={() => setActiveSubTab('css')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'css'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Solo Tag &lt;style&gt; (Puro CSS)
          </button>

          <button
            onClick={() => setActiveSubTab('html')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'html'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Solo Struttura &lt;body&gt; (Elementi)
          </button>

          <button
            onClick={() => setActiveSubTab('variant')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'variant'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Codice Varianti Attive
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <a
            href="/buongiorno-sabato.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Apri anteprima standalone</span>
          </a>
        </div>
      </div>

      {/* BLOCCO DEL CODICE SORGENTE CON NUMERI DI RIGA */}
      <div className="relative bg-[#0b0c10] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* BARRA SUPERIORE DEL BLOCCO */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/90 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 font-mono text-slate-400">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-semibold text-slate-300">
              {activeSubTab === 'full' && 'buongiorno-sabato.html'}
              {activeSubTab === 'css' && 'styles.css (Raccolto nel tag <style>)'}
              {activeSubTab === 'html' && 'body-structure.html'}
              {activeSubTab === 'variant' && 'active-variants-snippet.html'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 font-mono">
              {codeLines.length} righe • {new Blob([displayedCode]).size} bytes
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copiato!' : 'Copia'}</span>
            </button>
          </div>
        </div>

        {/* CONTENUTO CODICE SCORREVOLE */}
        <div className="overflow-x-auto max-h-[640px] p-4 text-xs font-mono select-text leading-relaxed">
          <pre className="text-slate-300 flex">
            {/* NUMERAZIONE RIGHE */}
            <div className="select-none pr-4 text-slate-600 text-right border-r border-slate-800/80 mr-4 shrink-0">
              {codeLines.map((_, index) => (
                <div key={index} className="h-5 leading-5 font-mono text-[11px]">
                  {index + 1}
                </div>
              ))}
            </div>

            {/* TESTO CODICE */}
            <code className="text-amber-100/90 flex-1 block">
              {codeLines.map((line, index) => (
                <div key={index} className="h-5 leading-5 whitespace-pre">
                  {line}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>

    </div>
  );
};

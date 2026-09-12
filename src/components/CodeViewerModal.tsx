import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Sparkles, 
  Palette, 
  Info,
  Layers,
  FileCode,
  Code2
} from 'lucide-react';

interface CodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  codeString: string;
  onDownloadHtml: () => void;
}

export const CodeViewerModal: React.FC<CodeViewerModalProps> = ({
  isOpen,
  onClose,
  codeString,
  onDownloadHtml,
}) => {
  const [copied, setCopied] = useState(false);
  const [viewSection, setViewSection] = useState<'full' | 'style' | 'body'>('full');

  if (!isOpen) return null;

  // Estrai solo il tag style o solo il body se richiesto
  let displayedCode = codeString;
  if (viewSection === 'style') {
    const styleMatch = codeString.match(/<style>([\s\S]*?)<\/style>/i);
    displayedCode = styleMatch ? `<style>\n${styleMatch[1].trim()}\n</style>` : codeString;
  } else if (viewSection === 'body') {
    const bodyMatch = codeString.match(/<body>([\s\S]*?)<\/body>/i);
    displayedCode = bodyMatch ? bodyMatch[1].trim() : codeString;
  }

  const lines = displayedCode.split('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(displayedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={e => e.stopPropagation()}
      >
        {/* HEADER DELLA MODALE */}
        <div className="flex flex-wrap items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/90 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Puro Codice HTML + CSS Interno
                <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Zero Dipendenze
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Tutto contenuto all&apos;interno del tag &lt;style&gt; per il 100% di controllo grafico
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Selettore rapido del contenuto visualizzato */}
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setViewSection('full')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                  viewSection === 'full' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>File Completo ({lines.length} righe)</span>
              </button>

              <button
                onClick={() => setViewSection('style')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                  viewSection === 'style' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Solo &lt;style&gt;</span>
              </button>

              <button
                onClick={() => setViewSection('body')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                  viewSection === 'body' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Solo Struttura &lt;body&gt;</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* BARRA AZIONI E ISTRUZIONI */}
        <div className="flex flex-wrap items-center justify-between px-5 py-2.5 bg-slate-950 border-b border-slate-800 text-xs gap-2">
          <span className="text-slate-400 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            Puoi salvare questo codice in un file <strong className="text-amber-300 font-mono">index.html</strong> e aprirlo su qualsiasi dispositivo offline senza installare nulla!
          </span>

          <div className="flex items-center gap-2">
            <a
              href="/buongiorno-sabato.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Nuova Scheda</span>
            </a>

            <button
              onClick={onDownloadHtml}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Scarica .html</span>
            </button>

            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                copied 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiato negli Appunti!' : 'Copia Questo Codice'}</span>
            </button>
          </div>
        </div>

        {/* CORPO DEL CODICE CON NUMERAZIONE RIGHE E SYNTAX HIGHLIGHT */}
        <div className="flex-1 overflow-auto p-4 font-mono text-xs leading-relaxed bg-[#0b0c10] select-text">
          <pre className="text-slate-300 flex">
            {/* Numeri riga */}
            <div className="select-none pr-4 text-slate-600 text-right border-r border-slate-800 mr-4 shrink-0">
              {lines.map((_, index) => (
                <div key={index} className="h-5 leading-5 font-mono text-[11px]">
                  {index + 1}
                </div>
              ))}
            </div>

            {/* Contenuto codice */}
            <code className="text-amber-100/90 flex-1 block">
              {lines.map((line, index) => (
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

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  GitBranch, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle2, 
  Terminal, 
  Activity, 
  Trash2,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ThemeMode } from '../types';

interface ConsoleMockupProps {
  theme: ThemeMode;
  onOpenSimulator: () => void;
}

export const ConsoleMockup: React.FC<ConsoleMockupProps> = ({
  theme,
  onOpenSimulator,
}) => {
  const [activeTab, setActiveTab] = useState<'apercu' | 'lifecycle' | 'github'>('apercu');

  return (
    <div
      id="hero-console-mockup"
      className={`rounded-2xl border transition-all duration-300 shadow-xl overflow-hidden ${
        theme === 'dark'
          ? 'bg-[#0b1322] border-slate-800/90 text-slate-100 shadow-black/40'
          : 'bg-white border-slate-200/80 text-slate-900 shadow-slate-200/60'
      }`}
    >
      {/* Top window bar (macOS style) */}
      <div
        className={`px-4 py-3 border-b flex items-center justify-between text-xs select-none ${
          theme === 'dark'
            ? 'bg-[#08101e] border-slate-800 text-slate-400'
            : 'bg-slate-50/80 border-slate-100 text-slate-500'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] opacity-75">
            app.codediali • Console
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00b87a] animate-pulse" />
            Connecté au Cloud
          </span>
        </div>
      </div>

      {/* Mini Console Navigation Tabs */}
      <div
        className={`px-4 pt-2.5 border-b flex items-center gap-2 text-xs ${
          theme === 'dark'
            ? 'bg-[#09111f] border-slate-800/60'
            : 'bg-slate-50/40 border-slate-100'
        }`}
      >
        <button
          type="button"
          onClick={() => setActiveTab('apercu')}
          className={`pb-2 px-2.5 font-medium border-b-2 transition-all cursor-pointer ${
            activeTab === 'apercu'
              ? 'border-[#00b87a] text-[#00b87a]'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Vue d'ensemble
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('lifecycle')}
          className={`pb-2 px-2.5 font-medium border-b-2 transition-all cursor-pointer ${
            activeTab === 'lifecycle'
              ? 'border-[#00b87a] text-[#00b87a]'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Cycle de vie (Supprimer / Relancer)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('github')}
          className={`pb-2 px-2.5 font-medium border-b-2 transition-all cursor-pointer ${
            activeTab === 'github'
              ? 'border-[#00b87a] text-[#00b87a]'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Lien GitHub
        </button>
      </div>

      <div className="p-5 space-y-4">
        {activeTab === 'apercu' && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {/* 3 Metric Cards (faithful to screenshot 1) */}
            <div className="grid grid-cols-3 gap-3">
              {/* Card 1 */}
              <div
                className={`p-3 rounded-xl border transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#0e1728] border-slate-800'
                    : 'bg-slate-50/80 border-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  Instance
                </div>
                <div className="text-xl font-bold mt-1 text-slate-800 dark:text-slate-100">
                  1
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                  En ligne
                </span>
              </div>

              {/* Card 2 */}
              <div
                className={`p-3 rounded-xl border transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#0e1728] border-slate-800'
                    : 'bg-slate-50/80 border-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  Application
                </div>
                <div className="text-xl font-bold mt-1 text-slate-800 dark:text-slate-100">
                  Exemple
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-500 mt-1">
                  Auto-hébergé
                </span>
              </div>

              {/* Card 3 */}
              <div
                className={`p-3 rounded-xl border transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#0e1728] border-slate-800'
                    : 'bg-slate-50/80 border-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  Déploiement
                </div>
                <div className="text-xl font-bold mt-1 text-slate-800 dark:text-slate-100">
                  1-Clic
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-500 mt-1">
                  Via GitHub
                </span>
              </div>
            </div>

            {/* Health & Traffic Visual Activity bars (matching screenshot 1) */}
            <div
              className={`p-3.5 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-[#0e1728]/70 border-slate-800'
                  : 'bg-slate-50/50 border-slate-100'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-2 font-medium">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#00b87a]" />
                  Disponibilité du conteneur
                </span>
                <span className="text-emerald-500 font-semibold">100% opérationnel</span>
              </div>

              {/* Activity bars */}
              <div className="flex items-end gap-1.5 h-11 pt-2">
                {[35, 55, 40, 70, 48, 85, 62, 95, 78, 82, 90, 88].map((val, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-[#00b87a]/25 hover:bg-[#00b87a] rounded-sm transition-all duration-300 relative group cursor-pointer"
                    style={{ height: `${val}%` }}
                  >
                    <div className="absolute inset-x-0 bottom-0 bg-[#00b87a] rounded-sm" style={{ height: `${Math.max(val * 0.7, 20)}%` }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action prompt inside console */}
            <div
              className={`p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                theme === 'dark'
                  ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300'
                  : 'bg-emerald-50/70 border-emerald-200/80 text-emerald-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-[#00b87a] text-white">
                  <RefreshCw className="w-3.5 h-3.5" />
                </div>
                <span>Prêt à remplacer cette app d'exemple par votre projet ?</span>
              </div>
              <button
                type="button"
                onClick={onOpenSimulator}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#00b87a] text-white hover:bg-[#009e69] transition-colors cursor-pointer shrink-0 shadow-sm"
              >
                Simuler
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === 'lifecycle' && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3 text-xs"
          >
            <div
              className={`p-3 rounded-xl border ${
                theme === 'dark' ? 'bg-[#0e1728] border-slate-800' : 'bg-slate-50 border-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100 mb-1">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-500 font-bold flex items-center justify-center text-[11px]">
                  1
                </span>
                <span>Supprimer cette application d'exemple</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 pl-7 text-[11px]">
                Dans votre dashboard Code Diali, cliquez sur <strong>« Supprimer l'application »</strong>. Le conteneur se libère instantanément tout en conservant votre sous-domaine gratuit et votre quota.
              </p>
            </div>

            <div
              className={`p-3 rounded-xl border ${
                theme === 'dark' ? 'bg-[#0e1728] border-slate-800' : 'bg-slate-50 border-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100 mb-1">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold flex items-center justify-center text-[11px]">
                  2
                </span>
                <span>Coller votre lien GitHub & Recommencer</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 pl-7 text-[11px]">
                Renseignez simplement l'URL de votre dépôt Git. Code Diali configure l'environnement, exécute le build et relance votre service en quelques secondes.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenSimulator}
              className="w-full py-2 rounded-lg text-xs font-semibold bg-[#00b87a] hover:bg-[#009e69] text-white flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Ouvrir le simulateur interactif</span>
            </button>
          </motion.div>
        )}

        {activeTab === 'github' && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3 text-xs"
          >
            <div
              className={`p-3 rounded-xl border font-mono text-[11px] ${
                theme === 'dark' ? 'bg-[#08101e] border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              <div className="text-slate-400 text-[10px] mb-1 font-sans font-semibold">Exemple d'URL GitHub acceptée :</div>
              <div className="text-emerald-500 break-all select-all">
                https://github.com/votre-compte/votre-projet.git
              </div>
            </div>

            <ul className="space-y-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00b87a]" />
                Dépôts publics & privés pris en charge
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00b87a]" />
                Auto-détection: Node, React, Next, Vue, Python, Docker
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00b87a]" />
                SSL Let's Encrypt et routage DNS automatiques
              </li>
            </ul>

            <button
              type="button"
              onClick={onOpenSimulator}
              className="w-full py-2 rounded-lg text-xs font-semibold border border-[#00b87a] text-[#00b87a] hover:bg-[#00b87a]/10 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Tester avec un lien d'exemple</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}

        {/* Console Footer Pills (exact replica of screenshot 1) */}
        <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-emerald-400'
                : 'bg-emerald-50/60 border-emerald-100 text-emerald-700'
            }`}
          >
            <ShieldCheck className="w-3 h-3 text-[#00b87a]" />
            Turnstile actif
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-slate-300'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            <Layers className="w-3 h-3 text-sky-500" />
            Sous-domaine offert
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-slate-300'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            <Server className="w-3 h-3 text-emerald-500" />
            Support L1→L3
          </span>
        </div>
      </div>
    </div>
  );
};

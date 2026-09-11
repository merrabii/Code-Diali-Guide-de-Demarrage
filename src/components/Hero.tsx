import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Terminal, RefreshCw, GitBranch, Trash2 } from 'lucide-react';
import { ConsoleMockup } from './ConsoleMockup';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
  onOpenSimulator: () => void;
  onScrollToGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  theme,
  onOpenSimulator,
  onScrollToGuide,
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge (matching user's screenshot) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25">
              <span className="w-2 h-2 rounded-full bg-[#00b87a] animate-pulse" />
              <span>Application d'exemple auto-hébergée • Code Diali Cloud</span>
            </div>

            {/* Main Title with iconic bold green styling from screenshots */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Votre application d'exemple,{' '}
              <span className="text-[#00b87a] inline-block">
                prête à être remplacée en un clic.
              </span>
            </h1>

            {/* Clear explanation for new clients */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Bienvenue sur votre instance Code Diali ! Vous visualisez actuellement un modèle
              d'accueil auto-hébergé. Il vous garantit que votre conteneur cloud, votre sous-domaine
              et vos certificats SSL sont 100% opérationnels. Découvrez comment le supprimer
              et déployer votre propre code grâce à un simple lien GitHub, sans aucune complication.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={onOpenSimulator}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#00b87a] hover:bg-[#009e69] text-white transition-all transform active:scale-95 shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <span>Tester la simulation GitHub</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                type="button"
                onClick={onScrollToGuide}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-[#0f172a] border-slate-800 text-slate-200 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <span>Comment ça marche ?</span>
              </button>
            </div>

            {/* Bullet guarantees (matching user's screenshot 1 bottom) */}
            <div className={`pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00b87a]" />
                <span>Hébergement infogéré</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00b87a]" />
                <span>1 seul lien GitHub suffit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00b87a]" />
                <span>Suppression sécurisée & réversible</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Console Mockup */}
          <div className="lg:col-span-5">
            <ConsoleMockup
              theme={theme}
              onOpenSimulator={onOpenSimulator}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, GitBranch, ExternalLink, Heart, Server } from 'lucide-react';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onScrollToTop }) => {
  return (
    <footer
      id="app-footer"
      className={`border-t transition-colors ${
        theme === 'dark'
          ? 'bg-[#060d17] border-slate-800 text-slate-400'
          : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-slate-800/60">
          
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#00b87a] flex items-center justify-center text-white font-bold text-sm shadow-sm">
              CD
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
                  Code Diali
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  CLOUD
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Plateforme d'hébergement nouvelle génération & déploiement Git
              </p>
            </div>
          </div>

          {/* System status pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#00b87a] animate-pulse" />
            <span>Tous les services cloud sont opérationnels</span>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-xs font-medium">
            <a href="#hero" onClick={onScrollToTop} className="hover:text-[#00b87a] transition-colors">
              Haut de page
            </a>
            <a href="#guide" className="hover:text-[#00b87a] transition-colors">
              Guide Client
            </a>
            <a href="#simulator" className="hover:text-[#00b87a] transition-colors">
              Simulateur
            </a>
            <a href="#catalog" className="hover:text-[#00b87a] transition-colors">
              Catalogue
            </a>
          </div>

        </div>

        {/* Bottom copyright & explanation notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Code Diali Cloud. Modèle d'application auto-hébergé pour nouveaux clients.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00b87a]" />
              SSL Let's Encrypt inclus
            </span>
            <span className="flex items-center gap-1">
              <Server className="w-3.5 h-3.5 text-[#00b87a]" />
              Conteneur isolé
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

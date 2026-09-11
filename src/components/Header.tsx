import React from 'react';
import { Sun, Moon, ShoppingBag, ExternalLink, ShieldCheck, Terminal } from 'lucide-react';
import { ThemeMode } from '../types';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenSimulator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onOpenSimulator,
}) => {
  return (
    <header
      id="app-header"
      className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-[#08101e]/90 border-slate-800 text-slate-100'
          : 'bg-white/90 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left: Code Diali Brand */}
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#00b87a] flex items-center justify-center text-white font-bold text-base shadow-sm transition-transform duration-200 group-hover:scale-105">
              CD
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight leading-none">
                  Code Diali
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  Cloud
                </span>
              </div>
              <span className={`text-[11px] leading-tight mt-0.5 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Premium Hosting Platforme
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 ml-4 text-sm font-medium">
            <a
              href="#guide"
              id="nav-guide-link"
              className={`transition-colors hover:text-[#00b87a] ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Guide Nouveau Client
            </a>
            <a
              href="#simulator"
              id="nav-simulator-link"
              className={`transition-colors hover:text-[#00b87a] ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Simulateur GitHub
            </a>
            <a
              href="#catalog"
              id="nav-catalog-link"
              className={`transition-colors hover:text-[#00b87a] ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Offres & Stacks
            </a>
            <a
              href="#faq"
              id="nav-faq-link"
              className={`transition-colors hover:text-[#00b87a] ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Aide & FAQ
            </a>
          </nav>
        </div>

        {/* Right: Actions, Theme Switcher, Status */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live Instance Pill */}
          <div
            id="instance-status-pill"
            className={`hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border ${
              theme === 'dark'
                ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00b87a]"></span>
            </span>
            <span>Instance d'exemple active</span>
          </div>

          {/* Theme Switcher (exact style from user's screenshots) */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={onToggleTheme}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
            }`}
            aria-label="Basculer le thème"
          >
            {theme === 'dark' ? (
              <>
                <Moon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Thème sombre</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Thème clair</span>
              </>
            )}
          </button>

          {/* Interactive Test Action */}
          <button
            id="header-try-sim-btn"
            type="button"
            onClick={onOpenSimulator}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#00b87a] hover:bg-[#009e69] text-white transition-colors cursor-pointer shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Tester le remplacement</span>
          </button>

          {/* Cart / Notification indicator (matching screenshot 2 & 3 with green badge 1) */}
          <div
            id="client-badge-wrapper"
            title="Votre compte client Code Diali est connecté"
            className={`relative p-2 rounded-xl border transition-colors ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                : 'bg-white border-slate-200 text-slate-700 shadow-sm'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span
              id="notification-count"
              className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 bg-[#00b87a] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-[#08101e]"
            >
              1
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

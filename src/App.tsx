/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LifecycleSteps } from './components/LifecycleSteps';
import { DeploymentSimulator } from './components/DeploymentSimulator';
import { PlansAndTemplates } from './components/PlansAndTemplates';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('codediali_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [showBanner, setShowBanner] = useState(true);

  // Sync theme to root html element class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('codediali_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGuide = () => {
    const el = document.getElementById('guide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="app-root-container"
      className={`min-h-screen font-sans transition-colors duration-200 selection:bg-[#00b87a]/20 selection:text-[#00b87a] ${
        theme === 'dark'
          ? 'bg-[#08101e] text-slate-100'
          : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      {/* Top Welcome Announcement Bar */}
      {showBanner && (
        <div
          id="welcome-announcement-bar"
          className="bg-gradient-to-r from-emerald-600 via-[#00b87a] to-teal-600 text-white px-4 py-2 text-xs font-medium flex items-center justify-between"
        >
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
              <span className="hidden sm:inline-flex p-1 rounded bg-white/20">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span>
                <strong>Espace Nouveau Client :</strong> Cette application est un modèle auto-hébergé. Vous pouvez la remplacer à tout moment avec votre propre lien GitHub.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={scrollToSimulator}
                className="hidden md:inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-85 text-xs font-semibold cursor-pointer"
              >
                <span>Tester la simulation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={() => setShowBanner(false)}
                className="p-1 hover:bg-white/20 rounded-md transition-colors cursor-pointer"
                aria-label="Fermer la bannière"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenSimulator={scrollToSimulator}
      />

      {/* Main Page Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          theme={theme}
          onOpenSimulator={scrollToSimulator}
          onScrollToGuide={scrollToGuide}
        />

        {/* 3 Steps Lifecycle Guide */}
        <LifecycleSteps
          theme={theme}
          onOpenSimulator={scrollToSimulator}
        />

        {/* Interactive Deployment Sandbox Simulator */}
        <DeploymentSimulator
          theme={theme}
        />

        {/* Catalog Offers & Git Frameworks */}
        <PlansAndTemplates
          theme={theme}
          onSelectGitHubDeploy={scrollToSimulator}
        />

        {/* FAQ Section */}
        <FAQSection
          theme={theme}
        />
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        onScrollToTop={scrollToTop}
      />
    </div>
  );
}

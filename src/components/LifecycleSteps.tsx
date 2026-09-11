import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Trash2, 
  GitBranch, 
  ArrowRight, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers,
  HelpCircle
} from 'lucide-react';
import { ThemeMode } from '../types';

interface LifecycleStepsProps {
  theme: ThemeMode;
  onOpenSimulator: () => void;
}

export const LifecycleSteps: React.FC<LifecycleStepsProps> = ({
  theme,
  onOpenSimulator,
}) => {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const sampleUrl = 'https://github.com/codediali/react-starter-template';

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const steps = [
    {
      stepNumber: '01',
      badge: 'État actuel',
      badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      title: 'Votre app d’exemple est en ligne',
      desc: 'Ce site que vous consultez est une application de démonstration hébergée sur votre conteneur dédié. Elle valide le bon fonctionnement de votre sous-domaine, de votre certificat SSL et de l’infrastructure cloud.',
      icon: CheckCircle2,
      iconColor: 'text-[#00b87a]',
      features: [
        'Sous-domaine Code Diali actif',
        'Certificat HTTPS / SSL automatique',
        'Conteneur isolé et prêt pour votre code',
      ],
    },
    {
      stepNumber: '02',
      badge: 'Action client',
      badgeColor: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30',
      title: 'Supprimez l’exemple en 1 clic',
      desc: 'Rendez-vous dans votre espace client Code Diali > Mes Services. Un simple clic sur « Supprimer l’application » purge l’application temporaire sans impacter votre abonnement ni vos accès.',
      icon: Trash2,
      iconColor: 'text-rose-500',
      features: [
        'Aucune commande terminal requise',
        'Conservation garantie de votre sous-domaine',
        'Suppression sécurisée en moins de 5 secondes',
      ],
    },
    {
      stepNumber: '03',
      badge: 'Nouveau départ',
      badgeColor: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
      title: 'Collez votre lien GitHub & Déployez',
      desc: 'Indiquez l’URL de votre dépôt GitHub (public ou privé). Code Diali détecte automatiquement votre framework, compile les dépendances et met votre vraie application en production.',
      icon: GitBranch,
      iconColor: 'text-purple-500',
      features: [
        'Prise en charge de React, Node, Python, Docker...',
        'Détection automatique des scripts de build',
        'Recommencez ou changez de dépôt à volonté',
      ],
    },
  ];

  return (
    <section id="guide" className="py-16 md:py-24 border-t border-b border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (matching typography from screenshot 1 "CAPACITÉS - Une console complète, sans friction") */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#00b87a]">
            Processus Nouveau Client
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Supprimer et recommencer, sans friction.
          </h2>
          <p className={`text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Vous n'avez pas besoin d'être un expert DevOps. Tout le cycle de vie de votre
            application se gère avec simplicité et transparence.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.stepNumber}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 relative flex flex-col justify-between group hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-[#0b1322] border-slate-800/80 hover:border-slate-700 text-slate-100 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-900 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700">
                      {s.stepNumber}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${s.badgeColor}`}>
                      {s.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl border ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-slate-50 border-slate-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${s.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold leading-snug">
                      {s.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {s.desc}
                  </p>
                </div>

                {/* Features list */}
                <div className={`pt-4 border-t space-y-2 text-xs font-medium ${
                  theme === 'dark' ? 'border-slate-800/70 text-slate-300' : 'border-slate-100 text-slate-600'
                }`}>
                  {s.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00b87a] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive GitHub Link Bar (Direct helper for the client) */}
        <div className={`mt-10 p-5 sm:p-6 rounded-2xl border transition-all ${
          theme === 'dark'
            ? 'bg-[#0e1728] border-slate-800 text-slate-200'
            : 'bg-slate-50 border-slate-200 text-slate-800'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <GitBranch className="w-4 h-4 text-[#00b87a]" />
                <span>Format du lien GitHub accepté</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Vous pouvez copier cet exemple de dépôt modèle pour faire votre premier test de déploiement en 1 clic :
              </p>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="px-3 py-2 rounded-lg bg-black/5 dark:bg-black/40 border border-slate-300/60 dark:border-slate-700/60 font-mono text-xs text-emerald-600 dark:text-emerald-400 select-all truncate max-w-xs sm:max-w-sm">
                {sampleUrl}
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-2 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                {copiedUrl ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00b87a]" />
                    <span>Copié !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copier</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onOpenSimulator}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#00b87a] hover:bg-[#009e69] text-white flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-sm"
              >
                <span>Tester dans le simulateur</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

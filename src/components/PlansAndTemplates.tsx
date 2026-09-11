import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ExternalLink, ArrowRight, Check, Sparkles, Server } from 'lucide-react';
import { ThemeMode, PlanCard } from '../types';

interface PlansAndTemplatesProps {
  theme: ThemeMode;
  onSelectGitHubDeploy: () => void;
}

export const PlansAndTemplates: React.FC<PlansAndTemplatesProps> = ({
  theme,
  onSelectGitHubDeploy,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'generic' | 'real-web' | 'template'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const cards: PlanCard[] = [
    {
      id: 'plan-gratuit',
      category: 'generic',
      badgeType: 'generic',
      title: 'Plan Gratuit',
      description: 'Commencez gratuitement — un vrai espace client et un déploiement.',
      specs: ['256 Mo RAM', '0.5 CPU'],
      subline: 'Idéal pour tester votre premier conteneur.',
    },
    {
      id: 'deploy-github',
      category: 'generic',
      badgeType: 'generic',
      title: 'Deploy my GitHub App',
      description: 'Déployez votre application GitHub en un clic — sous-domaine gratuit inclus.',
      specs: ['1024 Mo RAM', '1 CPU', '2 Go', '1 To / mois'],
      subline: 'Recommandé pour votre projet personnel ou d’entreprise.',
      highlight: true,
    },
    {
      id: 'managed-wp',
      category: 'real-web',
      badgeType: 'real-web',
      title: 'Managed WP',
      description: 'WordPress géré, déployé en quelques clics sur votre infrastructure.',
      specs: ['1024 Mo RAM', '1 CPU', '2 Go', '1 To / mois'],
      subline: 'Mémoire (RAM) req. Bande passante',
    },
    {
      id: 'fullstack-node',
      category: 'template',
      badgeType: 'template',
      title: 'Fullstack React & Node',
      description: 'Stack moderne avec SSR, API REST et rechargement fluide.',
      specs: ['2048 Mo RAM', '2 CPU', '5 Go', '2 To / mois'],
      subline: 'Production ready pour projets SaaS et e-commerce.',
    },
    {
      id: 'python-microservice',
      category: 'template',
      badgeType: 'template',
      title: 'Python & FastApi Worker',
      description: 'Conteneur optimisé pour charges de calcul, IA et scripts de traitement.',
      specs: ['2048 Mo RAM', '2 CPU', '10 Go', 'Non mesuré'],
      subline: 'Architecture asynchrone ultra-rapide.',
    },
    {
      id: 'installation-fees',
      category: 'generic',
      badgeType: 'generic',
      title: 'Installation Fees',
      description: 'Frais d’installation unique de votre service avec support prioritaire.',
      specs: ['Support 24/7', 'Garantie SLA 99.9%'],
      subline: 'Aucun frais caché après la mise en route.',
    },
  ];

  const filteredCards = cards.filter((card) => {
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'generic' && card.category === 'generic') ||
      (activeFilter === 'real-web' && card.category === 'real-web') ||
      (activeFilter === 'template' && card.category === 'template');

    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="catalog" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with same phrasing as screenshot: "Hébergez votre app, en quelques clics." */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-[#00b87a] border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00b87a]" />
            <span>Boutique officielle • Code Diali</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hébergez votre app,{' '}
            <span className="text-[#00b87a]">en quelques clics.</span>
          </h2>

          <p className={`text-sm sm:text-base max-w-2xl leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Chaque offre de Code Diali est configurable. Choisissez vos options, finalisez vos
            coordonnées et recevez votre sous-domaine gratuit par email.
          </p>

          {/* Guarantees row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 pt-1">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00b87a]" />
              <span>Provisionnement immédiat</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00b87a]" />
              <span>Sous-domaine gratuit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00b87a]" />
              <span>Support prioritaire</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar (Identical layout to screenshot 2 & 3) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher une offre, un service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-[#00b87a] transition-all ${
                theme === 'dark'
                  ? 'bg-[#0b1322] border-slate-800 text-slate-200 placeholder:text-slate-500'
                  : 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 shadow-sm'
              }`}
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#00b87a] text-white shadow-sm'
                  : theme === 'dark'
                    ? 'bg-[#0e1728] text-slate-300 hover:bg-slate-800 border border-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tout
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('generic')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                activeFilter === 'generic'
                  ? 'bg-[#00b87a] text-white shadow-sm'
                  : theme === 'dark'
                    ? 'bg-[#0e1728] text-slate-300 hover:bg-slate-800 border border-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              generic
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('real-web')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                activeFilter === 'real-web'
                  ? 'bg-[#00b87a] text-white shadow-sm'
                  : theme === 'dark'
                    ? 'bg-[#0e1728] text-slate-300 hover:bg-slate-800 border border-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Real Web
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('template')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                activeFilter === 'template'
                  ? 'bg-[#00b87a] text-white shadow-sm'
                  : theme === 'dark'
                    ? 'bg-[#0e1728] text-slate-300 hover:bg-slate-800 border border-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Frameworks Git
            </button>
          </div>
        </div>

        {/* Product Cards Grid (Faithfully matching user's screenshots 2 & 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl p-5 border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                card.highlight
                  ? 'ring-2 ring-[#00b87a]/60 relative'
                  : ''
              } ${
                theme === 'dark'
                  ? 'bg-[#0b1322] border-slate-800 text-slate-100 hover:border-slate-700 shadow-md shadow-black/30'
                  : 'bg-white border-slate-200 text-slate-900 hover:border-slate-300 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {/* Top Badge: Square dot + uppercase category */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <span className="w-2 h-2 rounded-[2px] bg-[#00b87a]" />
                    <span>{card.badgeType === 'real-web' ? 'REAL WEB' : 'GENERIC'}</span>
                  </div>
                  {card.highlight && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00b87a] text-white uppercase">
                      Recommandé
                    </span>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-extrabold tracking-tight mb-2">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className={`text-xs leading-relaxed mb-4 min-h-[36px] ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {card.description}
                </p>

                {/* Specs Pills (e.g. 1024 Mo RAM, 1 CPU, 2 Go, 1 To / mois) */}
                {card.specs && card.specs.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {card.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-medium ${
                          theme === 'dark'
                            ? 'bg-slate-900 border border-slate-800 text-slate-300'
                            : 'bg-slate-100 border border-slate-200 text-slate-700'
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom line and action */}
              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                {card.subline && (
                  <div className="text-[10px] text-slate-400 mb-2 truncate">
                    {card.subline}
                  </div>
                )}
                <button
                  type="button"
                  onClick={onSelectGitHubDeploy}
                  className={`w-full py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    card.highlight
                      ? 'bg-[#00b87a] hover:bg-[#009e69] text-white shadow-sm'
                      : theme === 'dark'
                        ? 'bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>Configurer & Déployer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

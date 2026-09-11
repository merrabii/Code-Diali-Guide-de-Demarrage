import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldCheck, Zap, LifeBuoy } from 'lucide-react';
import { ThemeMode, FAQItem } from '../types';

interface FAQSectionProps {
  theme: ThemeMode;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ theme }) => {
  const [openId, setOpenId] = useState<string | null>('q1');

  const faqs: FAQItem[] = [
    {
      id: 'q1',
      question: "Pourquoi cette page d'exemple est-elle affichée sur mon hébergement ?",
      answer: "Cette page est une démonstration auto-hébergée déployée automatiquement lors de la création de votre instance. Elle vous prouve visuellement que votre conteneur cloud est actif, que le routage réseau fonctionne et que votre certificat de sécurité SSL/TLS est correctement installé.",
    },
    {
      id: 'q2',
      question: "Comment supprimer cette application d'exemple en toute sécurité ?",
      answer: "Rendez-vous dans votre espace client Code Diali > onglet 'Mon Application'. Cliquez simplement sur le bouton 'Supprimer l'application'. La mémoire et l'espace disque sont instantanément libérés pour accueillir votre propre code.",
    },
    {
      id: 'q3',
      question: "Est-ce que je conserve mon sous-domaine gratuit après la suppression ?",
      answer: "Oui, à 100%. Votre sous-domaine (ex: client.codediali.cloud), vos certificats SSL ainsi que vos quotas de ressources (RAM, vCPU) restent strictement réservés à votre compte. Ils seront immédiatement réassignés à votre nouvelle application GitHub.",
    },
    {
      id: 'q4',
      question: "Comment relancer mon application grâce à un seul lien GitHub ?",
      answer: "Après avoir cliqué sur 'Supprimer', la console Code Diali vous affiche un champ unique pour coller l'URL de votre dépôt Git (public ou privé). Dès validation, notre moteur cloud clone votre code, installe les modules requis et démarre votre serveur en production.",
    },
    {
      id: 'q5',
      question: "Quels langages et frameworks puis-je déployer avec mon lien GitHub ?",
      answer: "Code Diali prend en charge nativement React, Next.js, Vite, Vue, Node.js, Express, Python (FastAPI, Django, Flask), PHP, Go, Ruby, ainsi que tout projet contenant un simple Dockerfile.",
    },
    {
      id: 'q6',
      question: "Puis-je recommencer ou changer de dépôt GitHub si je me trompe ?",
      answer: "Absolument. Vous pouvez supprimer, mettre à jour ou remplacer votre dépôt GitHub autant de fois que vous le souhaitez, sans aucune contrainte ni frais supplémentaires.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-[#00b87a] border border-emerald-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tout ce qu'un nouveau client doit savoir.
          </h2>
          <p className={`text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Des réponses directes et sans jargon pour vous aider à prendre le contrôle de votre instance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? theme === 'dark'
                      ? 'bg-[#0b1322] border-emerald-500/40 shadow-md shadow-black/20'
                      : 'bg-white border-emerald-500/40 shadow-sm'
                    : theme === 'dark'
                      ? 'bg-[#08101e] border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#00b87a]' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                        theme === 'dark'
                          ? 'border-slate-800/80 text-slate-300'
                          : 'border-slate-100 text-slate-600'
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Need support callout box */}
        <div className={`mt-10 p-6 rounded-2xl border text-center space-y-3 transition-colors ${
          theme === 'dark'
            ? 'bg-[#0b1322] border-slate-800 text-slate-200'
            : 'bg-emerald-50/50 border-emerald-200/60 text-slate-800'
        }`}>
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
            <LifeBuoy className="w-4 h-4 text-[#00b87a]" />
            <span>Vous avez encore une question ou besoin d'assistance ?</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Notre équipe de support Code Diali est disponible pour vous accompagner pas-à-pas dans le déploiement de votre premier dépôt GitHub.
          </p>
          <div className="pt-2">
            <a
              href="mailto:support@codediali.cloud"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#00b87a] hover:bg-[#009e69] text-white transition-colors cursor-pointer shadow-sm"
            >
              <span>Contacter le support client</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Trash2, 
  GitBranch, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  AlertCircle,
  Loader2,
  Cpu,
  Layers,
  Globe
} from 'lucide-react';
import { ThemeMode, DeploymentPreset } from '../types';

interface DeploymentSimulatorProps {
  theme: ThemeMode;
}

export const DeploymentSimulator: React.FC<DeploymentSimulatorProps> = ({ theme }) => {
  const presets: DeploymentPreset[] = [
    {
      name: 'React + Vite',
      repoUrl: 'https://github.com/codediali/starter-react-vite',
      framework: 'React / Vite',
      description: 'SPA ultra-rapide avec Tailwind CSS préconfiguré.',
    },
    {
      name: 'Next.js App',
      repoUrl: 'https://github.com/codediali/starter-nextjs-app',
      framework: 'Next.js SSR',
      description: 'Application Fullstack avec rendu côté serveur et API.',
    },
    {
      name: 'Node / Express API',
      repoUrl: 'https://github.com/codediali/starter-express-api',
      framework: 'Node.js',
      description: 'API REST légère et performante avec base de données.',
    },
    {
      name: 'Python FastAPI',
      repoUrl: 'https://github.com/codediali/starter-python-fastapi',
      framework: 'FastAPI / Python',
      description: 'Microservice moderne pour traitement de données et IA.',
    },
  ];

  const [repoUrl, setRepoUrl] = useState(presets[0].repoUrl);
  const [stage, setStage] = useState<'idle' | 'deleting' | 'cloning' | 'building' | 'deploying' | 'finished'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [currentAppStatus, setCurrentAppStatus] = useState<string>("Application d'exemple active");

  // Step runner
  const runSimulation = () => {
    if (stage !== 'idle' && stage !== 'finished') return;

    setStage('deleting');
    setLogs([
      `[0.1s] Déclenchement de la suppression de l'application d'exemple...`,
      `[0.4s] Arrêt gracieux du conteneur temporaire...`,
      `[0.8s] Purge des fichiers statiques et libération du port 3000...`,
      `[1.1s] Instance nettoyée. Conservation du sous-domaine 'client-demo.codediali.cloud'.`
    ]);

    setTimeout(() => {
      setStage('cloning');
      setLogs(prev => [
        ...prev,
        `[1.5s] Connexion à GitHub : ${repoUrl}...`,
        `[2.0s] Dépôt cloné avec succès (branch: main). Analyse de package.json...`
      ]);
    }, 1400);

    setTimeout(() => {
      setStage('building');
      setLogs(prev => [
        ...prev,
        `[2.6s] Détection automatique : Runtime Node.js détecté.`,
        `[3.1s] Exécution de 'npm install --production' & 'npm run build'...`,
        `[3.8s] Build terminé avec 0 avertissement. Bundle optimisé.`
      ]);
    }, 2800);

    setTimeout(() => {
      setStage('deploying');
      setLogs(prev => [
        ...prev,
        `[4.2s] Démarrage du service de production sur le port 3000...`,
        `[4.6s] Synchronisation DNS & Certificat SSL Let's Encrypt validé...`
      ]);
    }, 4200);

    setTimeout(() => {
      setStage('finished');
      setCurrentAppStatus("Votre nouveau projet GitHub est EN LIGNE !");
      setLogs(prev => [
        ...prev,
        `[5.0s] ✓ Déploiement réussi ! Votre application est accessible sur votre sous-domaine sécurisé.`
      ]);
    }, 5300);
  };

  const handleReset = () => {
    setStage('idle');
    setCurrentAppStatus("Application d'exemple active");
    setLogs([]);
  };

  return (
    <section id="simulator" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-[#00b87a] border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulateur interactif en direct</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Voyez comme c'est simple de recommencer.
          </h2>
          <p className={`text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Testez ici la suppression du modèle d'accueil et le remplacement par votre propre dépôt GitHub.
            Sans taper de commande, sans risque d'erreur.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Controls & Presets */}
          <div className="lg:col-span-6 space-y-5">
            <div className={`p-6 rounded-2xl border transition-all ${
              theme === 'dark'
                ? 'bg-[#0b1322] border-slate-800 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}>
              
              <h3 className="text-lg font-bold flex items-center gap-2 mb-1">
                <GitBranch className="w-5 h-5 text-[#00b87a]" />
                <span>1. Choisissez ou saisissez votre dépôt GitHub</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Sélectionnez un modèle suggéré ou collez l'URL de votre propre dépôt Git.
              </p>

              {/* Presets Chips */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {presets.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => {
                      setRepoUrl(preset.repoUrl);
                      if (stage === 'finished') handleReset();
                    }}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                      repoUrl === preset.repoUrl
                        ? 'border-[#00b87a] bg-[#00b87a]/10 text-slate-900 dark:text-white font-medium'
                        : theme === 'dark'
                          ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold flex items-center justify-between">
                      <span>{preset.name}</span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">
                        {preset.framework}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {preset.description}
                    </div>
                  </button>
                ))}
              </div>

              {/* GitHub URL Input */}
              <div className="space-y-2 mb-5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Lien GitHub du projet :
                </label>
                <div className="relative">
                  <input
                    id="simulator-github-input"
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    disabled={stage !== 'idle' && stage !== 'finished'}
                    placeholder="https://github.com/nom/mon-app"
                    className={`w-full px-3.5 py-2.5 text-xs font-mono rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#00b87a] transition-all ${
                      theme === 'dark'
                        ? 'bg-[#08101e] border-slate-700 text-slate-200'
                        : 'bg-slate-50 border-slate-300 text-slate-800'
                    }`}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  id="simulator-run-btn"
                  type="button"
                  onClick={runSimulation}
                  disabled={stage !== 'idle' && stage !== 'finished'}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                    stage === 'idle' || stage === 'finished'
                      ? 'bg-[#00b87a] hover:bg-[#009e69] text-white shadow-emerald-600/20 active:scale-[0.98]'
                      : 'bg-slate-400 dark:bg-slate-700 text-slate-200 cursor-not-allowed'
                  }`}
                >
                  {stage === 'idle' && (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>Lancer la suppression & le redéploiement</span>
                    </>
                  )}
                  {stage === 'deleting' && (
                    <>
                      <Trash2 className="w-4 h-4 animate-bounce text-rose-300" />
                      <span>Suppression de l'exemple en cours...</span>
                    </>
                  )}
                  {stage === 'cloning' && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-emerald-200" />
                      <span>Clonage du dépôt GitHub...</span>
                    </>
                  )}
                  {stage === 'building' && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-purple-200" />
                      <span>Build & Dépendances...</span>
                    </>
                  )}
                  {stage === 'deploying' && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-sky-200" />
                      <span>Mise en ligne SSL...</span>
                    </>
                  )}
                  {stage === 'finished' && (
                    <>
                      <RotateCcw className="w-4 h-4" />
                      <span>Recommencer la simulation</span>
                    </>
                  )}
                </button>

                {stage === 'finished' && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className={`px-3 py-3 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                      theme === 'dark'
                        ? 'border-slate-800 text-slate-300 hover:bg-slate-800'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                    title="Remettre à zéro"
                  >
                    Réinitialiser
                  </button>
                )}
              </div>

            </div>

            {/* Reassurance notes for new clients */}
            <div className={`p-4 rounded-xl border text-xs flex items-start gap-3 ${
              theme === 'dark'
                ? 'bg-[#08101e] border-slate-800 text-slate-400'
                : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}>
              <AlertCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">
                  Aucun risque de perdre vos accès
                </strong>
                Supprimer l'application d'exemple supprime uniquement les fichiers web de démonstration. Votre compte, vos clés API, votre sous-domaine et votre abonnement restent intacts.
              </div>
            </div>
          </div>

          {/* Right panel: Real-time Terminal & Status */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Live Progress Indicator */}
            <div className={`p-4 rounded-2xl border transition-all ${
              theme === 'dark' ? 'bg-[#0b1322] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-slate-500 dark:text-slate-400">Statut de votre instance :</span>
                <span className={`px-2 py-0.5 rounded-md font-mono text-[11px] ${
                  stage === 'finished'
                    ? 'bg-emerald-500/20 text-emerald-500 font-bold'
                    : stage === 'idle'
                      ? 'bg-blue-500/10 text-blue-500'
                      : 'bg-amber-500/20 text-amber-500 font-bold animate-pulse'
                }`}>
                  {currentAppStatus}
                </span>
              </div>

              {/* Progress Steps Visualizer */}
              <div className="grid grid-cols-4 gap-1.5 text-[10px] text-center font-medium mt-3">
                <div className={`p-1.5 rounded-lg border transition-all ${
                  stage === 'deleting'
                    ? 'border-rose-500 bg-rose-500/10 text-rose-500 font-bold'
                    : stage !== 'idle'
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500'
                      : 'border-slate-200 dark:border-slate-800 text-slate-400'
                }`}>
                  1. Purge
                </div>
                <div className={`p-1.5 rounded-lg border transition-all ${
                  stage === 'cloning'
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500 font-bold'
                    : ['building', 'deploying', 'finished'].includes(stage)
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500'
                      : 'border-slate-200 dark:border-slate-800 text-slate-400'
                }`}>
                  2. Clone Git
                </div>
                <div className={`p-1.5 rounded-lg border transition-all ${
                  stage === 'building'
                    ? 'border-purple-500 bg-purple-500/10 text-purple-500 font-bold'
                    : ['deploying', 'finished'].includes(stage)
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500'
                      : 'border-slate-200 dark:border-slate-800 text-slate-400'
                }`}>
                  3. Build
                </div>
                <div className={`p-1.5 rounded-lg border transition-all ${
                  stage === 'finished'
                    ? 'border-[#00b87a] bg-[#00b87a]/20 text-[#00b87a] font-bold'
                    : stage === 'deploying'
                      ? 'border-sky-500 bg-sky-500/10 text-sky-500 font-bold'
                      : 'border-slate-200 dark:border-slate-800 text-slate-400'
                }`}>
                  4. En ligne
                </div>
              </div>
            </div>

            {/* Simulated Cloud Terminal */}
            <div className="rounded-2xl border border-slate-800 bg-[#070d18] text-slate-200 overflow-hidden shadow-xl font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-2.5 bg-[#050a12] border-b border-slate-800 flex items-center justify-between text-[11px] select-none text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#00b87a]" />
                  <span>codediali-runner • output logs</span>
                </div>
                <span className="text-[10px] text-slate-500">
                  {stage === 'idle' ? 'En attente' : stage === 'finished' ? 'Terminé (5.3s)' : 'Traitement...'}
                </span>
              </div>

              {/* Terminal Screen Body */}
              <div className="p-4 h-56 overflow-y-auto space-y-2 text-[11px] leading-relaxed">
                {logs.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center space-y-2">
                    <Terminal className="w-8 h-8 opacity-30 text-[#00b87a]" />
                    <p>Cliquez sur "Lancer la suppression & le redéploiement" pour voir le flux en direct.</p>
                  </div>
                ) : (
                  logs.map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`${
                        log.includes('✓') 
                          ? 'text-[#00b87a] font-bold' 
                          : log.includes('Purge') || log.includes('suppression')
                            ? 'text-rose-400'
                            : 'text-slate-300'
                      }`}
                    >
                      {log}
                    </motion.div>
                  ))
                )}
                {stage !== 'idle' && stage !== 'finished' && (
                  <div className="flex items-center gap-2 text-emerald-400 pt-1">
                    <span className="w-1.5 h-3 bg-[#00b87a] animate-pulse inline-block" />
                    <span className="text-[10px] opacity-75">Opération cloud en cours...</span>
                  </div>
                )}
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-4 py-2 bg-[#050a12] border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                <span>DNS: client-demo.codediali.cloud</span>
                <span className="text-emerald-400">SSL: Actif (TLS 1.3)</span>
              </div>
            </div>

            {/* Success banner when finished */}
            <AnimatePresence>
              {stage === 'finished' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00b87a] shrink-0" />
                    <div>
                      <span className="font-bold block">Félicitations !</span>
                      Vous savez désormais exactement comment supprimer et relancer un projet via un simple lien GitHub.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

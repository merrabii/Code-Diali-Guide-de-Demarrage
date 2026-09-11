export type ThemeMode = 'light' | 'dark';

export interface PlanCard {
  id: string;
  category: string;
  badgeType: 'generic' | 'real-web' | 'template';
  title: string;
  description: string;
  specs: string[];
  subline?: string;
  highlight?: boolean;
}

export interface DeploymentPreset {
  name: string;
  repoUrl: string;
  framework: string;
  description: string;
}

export interface SimulationLog {
  id: number;
  text: string;
  type: 'info' | 'success' | 'warn' | 'action';
  time: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

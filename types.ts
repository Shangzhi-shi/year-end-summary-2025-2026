import { LucideIcon } from 'lucide-react';

export interface SectionData {
  title: string;
  items: string[];
}

export interface ModuleData {
  id: string;
  title: string;
  icon: LucideIcon;
  coreFunctions: SectionData;
  challenges: SectionData;
  images?: string[];
}

export interface OverviewData {
  title: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  period: string;
  avatar?: string;
}

export interface ReflectionItem {
  type: 'success' | 'warning' | 'info';
  title: string;
  content: string[];
}

export interface FuturePlanItem {
  category: string;
  icon: LucideIcon;
  goals: string[];
  color: string;
}
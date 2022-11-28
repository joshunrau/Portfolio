import type { IconType } from 'react-icons';

export interface Project {
  name: string;
  description: string;
  ghLink: string;
}

export interface Skill {
  name: string;
  icon: IconType
}

export type SectionName = 'about' | 'skills' | 'projects' | 'contact';

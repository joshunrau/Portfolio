import type { MutableRefObject } from 'react';

export type Ref = MutableRefObject<HTMLElement | null>

export type SectionName = 'about' | 'skills' | 'projects' | 'contact';

export type ActiveSection = SectionName | null;
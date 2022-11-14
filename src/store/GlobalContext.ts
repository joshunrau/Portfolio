import { createContext, type Dispatch, type SetStateAction } from 'react';

import type { SectionName } from '@/models/common';

interface GlobalContextInterface {
  activeSection: SectionName,
  setActiveSection: Dispatch<SetStateAction<SectionName>>
}

const GlobalContext = createContext<GlobalContextInterface | undefined>(undefined);

export default GlobalContext;
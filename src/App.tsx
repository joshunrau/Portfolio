import React, { useState } from 'react';

import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { type SectionName } from '@/models/common';
import GlobalContext from '@/store/GlobalContext';

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionName>('about');
  return (
    <GlobalContext.Provider value={{ activeSection, setActiveSection }}>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </GlobalContext.Provider>
  );
};

export default App;

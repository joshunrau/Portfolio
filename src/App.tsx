import React, { useState } from 'react';

import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import GlobalContext from '@/store/GlobalContext';

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionName>('about');
  return (
    <GlobalContext.Provider value={{ activeSection, setActiveSection }}>
      <div className="flex h-screen w-screen flex-col bg-slate-900 text-slate-300 antialiased">
        <Navbar />
        <main className="h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
          <About />
          <Skills />
          <Projects />
        </main>
      </div>
    </GlobalContext.Provider>
  );
};

export default App;

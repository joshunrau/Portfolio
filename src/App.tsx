import React, { useState } from 'react';

import styles from './App.module.scss';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { SectionName } from './interfaces';
import GlobalContext from './store/GlobalContext';

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionName>('about');
  
  return (
    <GlobalContext.Provider value={{ activeSection, setActiveSection }}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <About />
        <Skills />
        <Projects />
      </main>
    </GlobalContext.Provider>
  );
};

export default App;

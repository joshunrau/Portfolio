import React, { useContext, useEffect, useRef } from 'react';

import useVisible from '../../hooks/useVisible';
import GlobalContext from '../../store/GlobalContext';

interface SectionProps {
  children: [React.ReactElement, React.ReactElement]; // [Body, Image]
  id: SectionName;
}

const Section = ({ children, id }: SectionProps) => {
  const globalContext = useContext(GlobalContext);
  const ref = useRef(null);
  const isVisible = useVisible(ref, {
    threshold: 0.5
  });

  useEffect(() => {
    if (isVisible) {
      globalContext?.setActiveSection(id);
    }
  }, [isVisible]);

  return (
    <section
      className="container grid h-full snap-start grid-cols-1 items-center gap-10 md:grid-cols-2"
      ref={ref}
    >
      {children}
    </section>
  );
};

export default Section;

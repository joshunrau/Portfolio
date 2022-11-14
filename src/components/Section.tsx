import React, { useContext, useEffect, useRef } from 'react';

import useVisible from '@/hooks/useVisible';
import type { SectionName } from '@/models/common';
import GlobalContext from '@/store/GlobalContext';

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  id: SectionName
}

const Section = (props: SectionProps) => {
  const globalContext = useContext(GlobalContext);
  const ref = useRef(null);
  const isVisible = useVisible(ref, {
    // This will therefore break if the size of any section is more than 2x the viewport height
    threshold: 0.5
  });

  useEffect(() => {
    if (isVisible) {
      globalContext?.setActiveSection(props.id);
    }
  }, [isVisible]);

  /*
  useEffect(() => {

  }, isVisible);
  
  useEffect(() => {
    onVisibilityChange(ref, isVisible);
  }, [isVisible]); */

  return (
    <section ref={ref} {...props}>
      {props.children}
    </section>
  );
};

export default Section;

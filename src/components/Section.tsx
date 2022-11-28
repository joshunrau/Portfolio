import React, { useContext, useEffect, useRef } from 'react';

import classNames from 'classnames';

import styles from './Section.module.scss';

import useVisible from '@/hooks/useVisible';
import { type SectionName } from '@/interfaces';
import GlobalContext from '@/store/GlobalContext';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id: SectionName;
}

const Section = ({ children, className, id }: SectionProps) => {
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
    <section className={classNames(styles.section, className)} id={id} ref={ref}>
      {children}
    </section>
  );
};

export default Section;
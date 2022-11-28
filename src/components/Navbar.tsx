import React, { useContext, useRef, useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/solid';
import classNames from 'classnames';

import styles from './Navbar.module.scss';

import GlobalContext from '@/store/GlobalContext';

const sectionNames = ['about', 'skills', 'projects', 'contact'] as const;

const Navbar = () => {
  const globalContext = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target instanceof HTMLElement && event.target.classList.contains(styles.navbar)) {
      setIsOpen(false);
    }
  };

  return (
    <div className={classNames(styles.navbar, { [styles.open]: isOpen })} ref={ref} onClick={handleClick}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Joshua Unrau</h3>
        <button className={styles.toggle} onClick={handleToggle}>
          <Bars3Icon className={styles.toggleIcon} />
        </button>
        <nav className={styles.nav}>
          {sectionNames.map((sectionName) => (
            <a
              className={classNames(styles.link, { [styles.active]: globalContext?.activeSection === sectionName })}
              key={sectionName}
              href={sectionName}
            >
              {sectionName}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

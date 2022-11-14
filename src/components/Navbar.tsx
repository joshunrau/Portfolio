import React, { useContext, useState } from 'react';

import classNames from 'classnames';

import type { SectionName } from '@/models/common';
import GlobalContext from '@/store/GlobalContext';

const Navbar = () => {
  const globalContext = useContext(GlobalContext);
  const [expanded, setExpanded] = useState(false);

  const handleToggleClick = () => setExpanded((prevExpanded) => !prevExpanded);
  const handleNavClick = () => setExpanded(false);

  const getLinkClasses = (sectionName: SectionName) => classNames('navbar-link', {
    'navbar-link-active': sectionName === globalContext?.activeSection
  });

  return (
    <div className="navbar">
      <div className="container d-flex flex-wrap justify-content-between p-1">
        <h3 className="navbar-header">Joshua Unrau</h3>
        <button className="navbar-toggle" onClick={handleToggleClick} type="button">
          <div className="navbar-toggle-bar" />
          <div className="navbar-toggle-bar" />
          <div className="navbar-toggle-bar" />
        </button>
        <nav className="navbar-nav" style={expanded ? { height: '100%' } : undefined}>
          <a className={getLinkClasses('about')} href="#about" onClick={handleNavClick}>About</a>
          <a className={getLinkClasses('skills')} href="#skills" onClick={handleNavClick}>Skills</a>
          <a className={getLinkClasses('projects')} href="#projects" onClick={handleNavClick}>Projects</a>
          <a className={getLinkClasses('contact')} href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

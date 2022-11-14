import React, { useState } from 'react';

import classNames from 'classnames';

import NavbarLink from './NavbarLink';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);
  const handleNavbarLinkClick = () => setIsToggled(false);

  return (
    <div className="sticky bg-slate-900/75">
      <div className="container flex flex-wrap justify-between border-b border-slate-300 py-3">
        <h3 className="px-1 text-2xl">Joshua Unrau</h3>
        <button
          className="flex h-6 w-6 flex-col justify-between self-center md:hidden"
          type="button"
          onClick={handleToggle}
        >
          <div className="h-0.5 w-full bg-slate-300" />
          <div className="h-0.5 w-full bg-slate-300" />
          <div className="h-0.5 w-full bg-slate-300" />
        </button>
        <nav
          className={classNames(
            'flex max-h-0 w-full flex-col overflow-hidden text-xl md:max-h-fit md:w-auto md:flex-row md:items-center',
            { 'max-h-fit': isToggled }
          )}
        >
          <NavbarLink href="#about" sectionName="about" onClick={handleNavbarLinkClick}>
            About
          </NavbarLink>
          <NavbarLink href="#skills" sectionName="skills" onClick={handleNavbarLinkClick}>
            Skills
          </NavbarLink>
          <NavbarLink href="#projects" sectionName="projects" onClick={handleNavbarLinkClick}>
            Projects
          </NavbarLink>
          <NavbarLink href="#contact" sectionName="contact" onClick={handleNavbarLinkClick}>
            Contact
          </NavbarLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

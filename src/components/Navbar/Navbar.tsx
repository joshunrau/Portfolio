import React, { useState } from 'react';

import classNames from 'classnames';

import NavbarLink from './NavbarLink';
import NavbarToggle from './NavbarToggle';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);
  const handleNavbarLinkClick = () => setIsToggled(false);

  return (
    <div className="absolute w-full bg-slate-900/75">
      <div className="container flex flex-wrap justify-between border-b border-slate-300 py-3">
        <h3 className="py-2 text-2xl">Joshua Unrau</h3>
        <NavbarToggle onClick={handleToggle} />
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

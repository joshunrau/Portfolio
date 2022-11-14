import React, { useContext } from 'react';

import classNames from 'classnames';

import GlobalContext from '@/store/GlobalContext';

interface NavLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  sectionName: string;
}

const NavLink = ({ children, sectionName, ...props }: NavLinkProps) => {
  const globalContext = useContext(GlobalContext);
  return (
    <a
      className={classNames('border-slate-300 px-1', {
        'md:border-b': globalContext?.activeSection === sectionName
      })}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavLink;

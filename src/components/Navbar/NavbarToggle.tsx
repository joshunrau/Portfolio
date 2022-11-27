import React from 'react';

interface NavbarToggleProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const NavbarToggle = ({ onClick }: NavbarToggleProps) => {
  return (
    <button
      className="flex h-6 w-6 flex-col justify-between self-center md:hidden"
      type="button"
      onClick={onClick}
    >
      <div className="h-0.5 w-full bg-slate-300" />
      <div className="h-0.5 w-full bg-slate-300" />
      <div className="h-0.5 w-full bg-slate-300" />
    </button>
  );
};

export default NavbarToggle;

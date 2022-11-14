import React from 'react';

interface BodyProps {
  children: React.ReactNode
}

const Body = ({ children }: BodyProps) => {
  return (
    <div className='flex-1'>
      { children }
    </div>
  )
}

export { Body as default, BodyProps };
import React from 'react';

interface ImageProps {
  alt: string;
  src: string;
}

const Image = ({ alt, src }: ImageProps) => {
  return (
    <div className="hidden flex-1 items-center justify-center md:flex">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;

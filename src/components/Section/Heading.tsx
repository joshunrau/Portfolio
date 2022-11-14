import React from 'react';

import classNames from 'classnames';

interface HeadingProps {
  centered?: boolean;
  text: string;
}

const Heading = ({ centered, text }: HeadingProps) => {
  return <h1 className={classNames('mb-3 text-3xl', { 'text-center': centered })}>{text}</h1>;
};

export default Heading;

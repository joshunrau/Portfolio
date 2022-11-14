import React from 'react';

import { animated, useSpring } from '@react-spring/web';

interface SkillProps {
  logo: string;
  name: string;
}

const bounceConfig = {
  mass: 2,
  tension: 400
};

const Skill = ({ name, logo }: SkillProps) => {
  const [logoAnimationProps, logoAnimationApi] = useSpring(() => ({
    config: bounceConfig,
    transform: 'scale(1.0)'
  }));

  const [textAnimationProps, textAnimationApi] = useSpring(() => ({
    config: bounceConfig,
    opacity: 0
  }));

  const handleMouseEnter = () => {
    logoAnimationApi.start({ transform: 'scale(1.3)' });
    textAnimationApi.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    logoAnimationApi.start({ transform: 'scale(1.0)' });
    textAnimationApi.start({ opacity: 0 });
  };

  return (
    <animated.div className="skill" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <animated.img alt={name} className="logo" src={logo} style={logoAnimationProps} />
      <animated.span style={textAnimationProps}>{name}</animated.span>
    </animated.div>
  );
};

export default Skill;

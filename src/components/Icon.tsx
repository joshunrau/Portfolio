import React from 'react';

import { animated, useSpring } from '@react-spring/web';
import { type IconType } from 'react-icons';

import styles from './Icon.module.scss';

interface SkillProps {
  icon: IconType;
  name: string;
}

const bounceConfig = {
  mass: 2,
  tension: 400
};

const Icon = ({ name, icon }: SkillProps) => {
  const AnimatedIcon = animated(icon);

  const [iconAnimationProps, iconAnimationApi] = useSpring(() => ({
    config: bounceConfig,
    transform: 'scale(1.0)'
  }));

  const [textAnimationProps, textAnimationApi] = useSpring(() => ({
    config: bounceConfig,
    opacity: 0
  }));

  const handleMouseEnter = () => {
    iconAnimationApi.start({ transform: 'scale(1.3)' });
    textAnimationApi.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    iconAnimationApi.start({ transform: 'scale(1.0)' });
    textAnimationApi.start({ opacity: 0 });
  };

  return (
    <animated.div className={styles.wrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <AnimatedIcon className={styles.icon} style={iconAnimationProps} />
      <animated.span className={styles.text} style={textAnimationProps}>
        {name}
      </animated.span>
    </animated.div>
  );
};

export default Icon;

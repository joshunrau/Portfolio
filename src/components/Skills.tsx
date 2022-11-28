import React, { useEffect, useRef } from 'react';

import { animated, useTrail } from '@react-spring/web';
import {
  SiBootstrap,
  SiFlask,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiReact,
  SiScikitlearn,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiSass,
  SiTypescript,
  SiGit,
  SiWebpack
} from 'react-icons/si';

import Icon from './Icon';
import Section from './Section';
import styles from './Skills.module.scss';

import fillerImage from '@/assets/img/skills-filler.svg';
import useVisible from '@/hooks/useVisible';
import { Skill } from '@/interfaces';

const skills: Skill[] = [
  {
    name: 'Bootstrap',
    icon: SiBootstrap
  },
  {
    name: 'Flask',
    icon: SiFlask
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs
  },
  {
    name: 'NumPy',
    icon: SiNumpy
  },
  {
    name: 'Pandas',
    icon: SiPandas
  },
  {
    name: 'React',
    icon: SiReact
  },
  {
    name: 'Scikit-Learn',
    icon: SiScikitlearn
  },
  {
    name: 'SiCss3',
    icon: SiCss3
  },
  {
    name: 'HTML',
    icon: SiHtml5
  },
  {
    name: 'JavaScript',
    icon: SiJavascript
  },
  {
    name: 'Python',
    icon: SiPython
  },
  {
    name: 'SASS',
    icon: SiSass
  },
  {
    name: 'TypeScript',
    icon: SiTypescript
  },
  {
    name: 'Git',
    icon: SiGit
  },
  {
    name: 'Webpack',
    icon: SiWebpack
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isVisible = useVisible(ref, {
    threshold: 0.5
  });

  const config = {
    mass: 1,
    tension: 200
  };

  const [trail, api] = useTrail(skills.length, () => ({
    config,
    opacity: 0,
    scale: 0
  }));

  useEffect(() => {
    api.start({
      opacity: 1,
      scale: 1
    });
  }, [isVisible]);

  return (
    <Section className={styles.skills} id="skills">
      <img className={styles.image} alt="filter" src={fillerImage} />
      <div className={styles.content}>
        <h3 className={styles.heading}>My Tech Stack</h3>
        <div className={styles.grid} ref={ref}>
          {trail.map((style, index) => (
            <animated.div key={index} style={style}>
              <Icon {...skills[index]} />
            </animated.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;

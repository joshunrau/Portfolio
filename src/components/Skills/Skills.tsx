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

import fillerImage from '../../assets/img/skills-filler.svg';
import Section from '../../components/Section';
import useVisible from '../../hooks/useVisible';
import Skill from '../../models/Skill';

import Icon from './Icon';

const skills = [
  new Skill('Bootstrap', SiBootstrap),
  new Skill('Flask', SiFlask),
  new Skill('Node.js', SiNodedotjs),
  new Skill('NumPy', SiNumpy),
  new Skill('Pandas', SiPandas),
  new Skill('React', SiReact),
  new Skill('Scikit-Learn', SiScikitlearn),
  new Skill('CSS', SiCss3),
  new Skill('HTML', SiHtml5),
  new Skill('JavaScript', SiJavascript),
  new Skill('Python', SiPython),
  new Skill('SASS', SiSass),
  new Skill('TypeScript', SiTypescript),
  new Skill('Git', SiGit),
  new Skill('Webpack', SiWebpack)
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
    <Section id="skills">
      <Section.Image alt="filter" src={fillerImage} />
      <Section.Body>
        <Section.Heading centered text="My Tech Stack" />
        <div className="grid grid-cols-5 gap-2" ref={ref}>
          {trail.map((style, index) => (
            <animated.div key={index} style={style}>
              <Icon {...skills[index]} />
            </animated.div>
          ))}
        </div>
      </Section.Body>
    </Section>
  );
};

export default Skills;

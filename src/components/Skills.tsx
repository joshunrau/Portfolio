import React, { useEffect, useRef } from 'react';

import { animated, useTrail } from '@react-spring/web';

import fillerImage from '@/assets/img/skills-filler.svg';
import logos from '@/assets/logos';
import Section from '@/components/Section';
import Skill from '@/components/Skill';
import useVisible from '@/hooks/useVisible';

const Skills = () => {
  const ref = useRef(null);
  const isVisible = useVisible(ref, {
    threshold: 0.5
  });

  const config = {
    mass: 1,
    tension: 200
  };

  const [trail, api] = useTrail(logos.length, () => ({
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
      <div className="container d-flex justify-content-between">
        <div className="skills-image-container">
          <img alt="filler for skills section" src={fillerImage} />
        </div>
        <div className="d-flex flex-column justify-content-center p-2">
          <h1 className="text-align-center">My Tech Stack</h1>
          <div className="d-flex flex-wrap" ref={ref}>
            {trail.map((style, index) => {
              const { label, src } = logos[index];
              return (
                <animated.div key={label} style={style}>
                  <Skill logo={src} name={label} />
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;

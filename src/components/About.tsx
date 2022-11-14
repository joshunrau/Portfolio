import React from 'react';

import avatar from '@/assets/img/avatar.jpeg';
import Section from '@/components/Section';

const About = () => (
  <Section id="about">
    <div className="container d-flex justify-content-between">
      <div className="d-flex flex-column justify-content-center p-2">
        <h1>{'Hi, I\'m Josh'}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          doloremque veniam voluptas est aliquid minus cupiditate laboriosam
          iusto autem! Adipisci a rem soluta deleniti odit odio corporis
          aliquam recusandae. Ab!
        </p>
      </div>
      <div className="d-flex flex-column justify-content-center p-2">
        <img alt="Avatar of Joshua Unrau" src={avatar} />
      </div>
    </div>
  </Section>
);

export default About;

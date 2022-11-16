import React from 'react';

import avatar from '../../assets/img/avatar.png';
import Section from '../Section';

const About = () => (
  <Section id="about">
    <Section.Body>
      <Section.Heading text="Hi, I'm Josh" />
      <p>
        I am a full stack developer specializing in Python and JavaScript. Currently, I am working
        on the Douglas Informatics Platform.
      </p>
    </Section.Body>
    <Section.Image alt="avatar" src={avatar} />
  </Section>
);

export default About;

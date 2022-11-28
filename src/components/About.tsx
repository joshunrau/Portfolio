import React from 'react';

import styles from './About.module.scss';

import avatar from '@/assets/img/avatar.png';
import Section from '@/components/Section';

const About = () => {
  return (
    <Section className={styles.about} id="about">
      <div className={styles.infoContainer}>
        <h1>{"Hi, I'm Josh"}</h1>
        <p>I am a software developer specializing in Python and JavaScript.</p>
      </div>
      <img className={styles.avatar} src={avatar} alt="avatar" />
    </Section>
  );
};

export default About;

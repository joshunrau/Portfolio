import React from 'react';

import Gallery from './Gallery';
import styles from './Projects.module.scss';
import Section from './Section';

import fillerImage from '@/assets/img/skills-filler.svg';
import { Project } from '@/interfaces';


const projects: Project[] = [
  {
    name: 'CivetQC',
    description: 'A command line tool in Python for automated quality control of MRI images',
    ghLink: 'https://github.com/joshunrau/civetqc'
  },
  {
    name: 'MplusLGM',
    description: 'An R project to facilitate running batches of latent growth models in Mplus',
    ghLink: 'https://github.com/joshunrau/MplusLGM'
  }
];

const Projects = () => {
  return (
    <Section className={styles.projects} id="projects">
      <div className={styles.content}>
        <h3 className={styles.heading}>Featured Projects</h3>
        <Gallery projects={projects} />
      </div>
      <img className={styles.image} alt="filler" src={fillerImage} />
    </Section>
  );
};

export default Projects;

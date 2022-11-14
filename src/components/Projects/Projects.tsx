import React from 'react';

import Gallery from './Gallery';

import fillerImage from '@/assets/img/skills-filler.svg';
import Section from '@/components/Section';

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
    <Section id="projects">
      <Section.Body>
        <Section.Heading text="Projects" />
        <Gallery projects={projects} />
      </Section.Body>
      <Section.Image alt="filler" src={fillerImage} />
    </Section>
  );
};

export default Projects;

import React from 'react';

import { SiGithub } from 'react-icons/si';
import { EffectCards, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import styles from './Gallery.module.scss';

import { Project } from '@/interfaces';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const swiperProps: SwiperProps = {
  effect: 'cards',
  className: styles.swiper,
  grabCursor: true,
  loop: true,
  mousewheel: {
    forceToAxis: true
  },
  pagination: true,
  modules: [EffectCards, Mousewheel, Navigation, Pagination]
};

interface GalleryProps {
  projects: Project[];
}

const Gallery = ({ projects }: GalleryProps) => {
  return (
    <div>
      <Swiper {...swiperProps}>
        {projects.map((project) => (
          <SwiperSlide className={styles.swiper} key={project.name}>
            <h1 className={styles.heading}>{project.name}</h1>
            <p>{project.description}</p>
            <a href={project.ghLink} target="_blank" rel="noreferrer">
              <SiGithub className={styles.heading} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;

import React from 'react';

import { EffectCards, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { SiGithub } from 'react-icons/si';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const swiperProps: SwiperProps = {
  effect: 'cards',
  className: 'h-96',
  grabCursor: true,
  loop: true,
  mousewheel: {
    forceToAxis: true
  },
  pagination: true,
  modules: [EffectCards, Mousewheel, Navigation, Pagination]
};

interface GalleryProps {
  projects: Project[]
}

const Gallery = ({ projects }: GalleryProps) => {
  return (
    <div className="border border-stone-50">
      <Swiper {...swiperProps}>
        {projects.map((project) => (
          <SwiperSlide className="rounded-3xl bg-slate-800 p-5" key={project.name}>
            <h1 className="text-xl font-extrabold">{project.name}</h1>
            <p>{project.description}</p>
            <a href={project.ghLink} target="_blank" rel="noreferrer">
              <SiGithub className="h-10 w-auto" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;

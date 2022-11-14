import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import type Project from '@/models/Project';

interface GalleryProps {
  projects: Project[];
}

const Gallery = ({ projects }: GalleryProps) => (
  <div style={{ width: '100%' }}>
    <Swiper
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      slidesPerView={3}
      spaceBetween={50}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  </div>
);

/*
const Gallery = ({ projects }: GalleryProps) => {
  return (
    <div className="gallery">
      {width && springs.map(({ display, scale, x }, i) => (
        <animated.div className="gallery-item" key={i} style={{ display, x }}>
          <animated.div style={{ scale }}>
            <h1>{projects[i].name}</h1>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

*/
export default Gallery;
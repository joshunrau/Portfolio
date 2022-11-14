import React from 'react';

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Section from '@/components/Section';

const projects = [
  {
    name: 'CONP Experiments Portal'
  },
  {
    name: 'CivetQC'
  },
  {
    name: 'MplusLGM'
  }
];

const Projects = () => (
  <Section id="projects">
    <div className="container d-flex flex-column p-2">
      <h1>Projects</h1>
      <Swiper
        className="mySwiper"
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          clickable: true
        }}
        slidesPerView={1}
        spaceBetween={30}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  </Section>
);

export default Projects;

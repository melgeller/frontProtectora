import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.scss";
//import Imagen0 from "../../assets/ImgCity/Bangkok.jpg";
//import Imagen1 from "../../assets/ImgCity/Barcelona.jpg";
//import Imagen2 from "../../assets/ImgCity/Berlin.jpg";
//import Imagen3 from "../../assets/ImgCity/Brasilia.jpg";
//import Imagen4 from "../../assets/ImgCity/Sidney.jpg";
//import Imagen5 from "../../assets/ImgCity/London.jpg";
import { Pagination, Navigation } from 'swiper';
const Carousel = () => {
  return (
    <>
      <section className='carouselContainer'>Carousel</section>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <img src='../../assets/ImgCity/Bangkok.jpg' alt='' />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img src='../../assets/ImgCity/Barcelona.jpg' alt='' />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img src='../../assets/ImgCity/Berlin.jpg' alt='' />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img src='../../assets/ImgCity/Brasilia.jpg' alt='' />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img src='../../assets/ImgCity/Bangkok.jpg' alt='' />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img src='../../assets/ImgCity/Bangkok.jpg' alt='' />{' '}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

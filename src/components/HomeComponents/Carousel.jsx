import React from 'react';

import { useContext } from 'react';
import { PetContext } from '../../context/context';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.scss';

import { Pagination, Navigation } from 'swiper';
const Carousel = () => {
  const { pets } = useContext(PetContext);
  return (
    <>
      <section className='carouselContainer'>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
              slidesPerGroup: 1,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'>
          {pets.map((pet) => (
            <SwiperSlide>
              <img src={pet.picture} alt={pet.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Carousel;

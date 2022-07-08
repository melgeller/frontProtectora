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


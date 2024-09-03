import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StyledSwiper = styled(Swiper)<{ fullScreen?: boolean }>`
  width: 100%;
  height: ${props => props.fullScreen ? '100vh' : '500px'};

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--secondary-color);
  }

  .swiper-pagination-bullet-active {
    background-color: var(--secondary-color);
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface SliderProps {
  images: string[];
  fullScreen?: boolean;
}

const Slider: React.FC<SliderProps> = ({ images, fullScreen = false }) => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      fullScreen={fullScreen}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <SlideImage src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default Slider;
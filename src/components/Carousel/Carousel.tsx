// ImagePicker.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { images } from '../../data/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

function Carousel() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const [index, setIndex] = useState<number>(0);
  const onChangeIndex = (num: number) => {
    if (num === 4) setIndex(1);
    else if (num === 0) setIndex(3);
    else setIndex(num);
  };
  return (
    <Container>
      <Swiper
        //   onActiveIndexChange={onChangeIndex}
        className="home"
        onSlideChange={(e) => onChangeIndex(e.activeIndex)}
        loop={true} // 슬라이드 반복 여부
        slidesPerView={1} // 한 슬라이드에 보여줄 갯수
        navigation
        pagination={{
          el: '.swiper-pagination', // 페이저 버튼을 담을 태그 설정
          clickable: true, // 버튼 클릭 여부
          type: 'bullets', // 버튼 모양 결정 "bullets", "fraction"
        }}
        autoHeight={true}
        //   modules={[Autoplay, Navigation]}
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
      >
        <SwiperSlide>
          <SwiperContent src={images[0]} alt="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent src={images[1]} alt="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent src={images[2]} alt="swiper-img" />
        </SwiperSlide>
        <Pagenation className="swiper-pagination" />
      </Swiper>
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  width: 100%;
`;

const SwiperContent = styled.img`
  width: 100%;
  max-height: 500px;
  min-width: 1000px;
`;

const Pagenation = styled.div`
  & .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.5);
    opacity: 1;
  }
  & .swiper-pagination-bullet-active {
    width: 30px;
    transition: width 0.5s;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
  }
`;

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';

import RateItem from './RateItem';

const RateList = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 가장 왼쪽 슬라이드 인덱스 추적

  const images = [
    '/mainhome/weeklyitem_01.webp',
    '/mainhome/weeklyitem_02.webp',
    '/mainhome/weeklyitem_03.webp',
    '/mainhome/weeklyitem_04.webp',
    '/mainhome/weeklyitem_05.webp',
    '/mainhome/weeklyitem_01.webp',
    '/mainhome/weeklyitem_02.webp',
    '/mainhome/weeklyitem_03.webp',
    '/mainhome/weeklyitem_04.webp',
    '/mainhome/weeklyitem_05.webp',
    '/mainhome/weeklyitem_01.webp',
    '/mainhome/weeklyitem_02.webp',
    '/mainhome/weeklyitem_03.webp',
    '/mainhome/weeklyitem_04.webp',
    '/mainhome/weeklyitem_05.webp',
  ];

  return (
    <Section>
      <RateInfo>
        <RateTitle>
          20대 <br /> 인기 드라마
        </RateTitle>
      </RateInfo>

      <RateSwiper
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={4}
        // modules={[Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // 슬라이드 변경 시 인덱스 업데이트
        // centeredSlides={true}
        // loop={true}
      >
        {/* {[...Array(10)].map((_, index) => ( */}
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index} className={index === activeIndex ? 'main-slide' : ''}>
            <RateItem image={imgSrc} rank={index + 1} isActive={index === activeIndex} />
          </SwiperSlide>
          // <SwiperSlide key={index} className={index === activeIndex ? 'main-slide' : ''}>
          //   <RateItem image={imgSrc} rank={index + 1} isActive={index === activeIndex} />
          // </SwiperSlide>
        ))}
      </RateSwiper>
    </Section>
  );
};

export default RateList;

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  position: relative;
  /* gap: 20px; */
  /* margin-top: 100px; */
`;

const RateInfo = styled.div`
  flex: 1;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  height: 443px;
  width: 443px;
`;

const RateTitle = styled.h3`
  color: white;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.5;
  margin: 0;
  text-align: left;
`;

const RateSwiper = styled(Swiper)`
  flex: 3;
  height: 535.62px;
  /* margin-bottom: 40px; */
  display: flex;

  .swiper-slide {
    width: 300px !important;
    height: 443px;
    display: flex;
    justify-content: center; /* 내부 이미지 중앙 정렬 */
    overflow: hidden;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
  }

  .main-slide {
    width: 371.57px !important;
    height: 535.62px;
    border-radius: 226.5px 226.5px 8px 8px;
    background-color: #000;
    /* position: relative; */
    /* overflow: visible; */
  }
`;

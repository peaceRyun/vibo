import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import RateItem from './RateItem';

const RateList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    '/mainhome/weeklyitem_01.webp',
    '/mainhome/weeklyitem_02.webp',
    '/mainhome/weeklyitem_03.webp',
    '/mainhome/weeklyitem_04.webp',
    '/mainhome/weeklyitem_05.webp',
  ];

  return (
    <Section>
      <LeftArea>
        <RateTitle>인기 드라마</RateTitle>
      </LeftArea>

      <RightArea>
        <RateSwiper
          spaceBetween={60} /* 슬라이드 간의 간격을 넉넉하게 설정 */
          slidesPerView={3.5}
          centeredSlides={false} /* 메인 슬라이드가 강조되도록 설정 */
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            390: { slidesPerView: 1, spaceBetween: 50 },
            600: { slidesPerView: 1.3, spaceBetween: 15 },
            768: { slidesPerView: 2.3, spaceBetween: 15 },
            1024: { slidesPerView: 3.3, spaceBetween: 15 },
          }}
        >
          {images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <RateItem image={imgSrc} rank={index + 1} isMainSlide={index === activeIndex} />
            </SwiperSlide>
          ))}
        </RateSwiper>
      </RightArea>
    </Section>
  );
};

export default RateList;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 40px;
  height: 75vh;
  /* padding: 60px 0 60px 0; */
  @media (max-width: 1024px) {
    flex-direction: column;
    /* gap: 40px; */
    height: 95vh;
    padding: 40px 0 40px 0;
  }
  @media (max-width: 600px) {
    /* padding:0px 0 0px 0; */
    height: 100vh;
  }
`;

const LeftArea = styled.div`
  flex: 1;
  /* padding-left: 60px;  */
  display: flex;
  align-items: center;
`;

const RightArea = styled.div`
  padding-left: 85px;
  flex: 3;
  overflow: hidden; /* 왼쪽으로 넘치는 슬라이드를 숨김 */
`;

const RateTitle = styled.h3`
  color: white;
  line-height: 1.5;
  margin: 0;
  font-size: var(--title-xlarge-size); //32
  font-weight: var(--title-xlarge-weight); //800
  @media (max-width: 1024px) {
    padding: 20px;
    font-size: var(--title-large-mobile); //24
    font-weight: var(--title-large-weigh); //700
  }
  @media (max-width: 600px) {
    font-size: var(--title-small-mobile); //17
    font-weight: var(--title-xsmall-weight); //700
  }
`;

const RateSwiper = styled(Swiper)`
  width: 100%;
  overflow: visible;

  .swiper-slide {
    overflow: visible;
  }
`;

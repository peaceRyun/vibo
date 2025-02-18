import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import RateItem from './RateItem';

const RateList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [slidesPerView, setSlidesPerView] = useState(4.5);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1.2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2.5);
      } else {
        setSlidesPerView(3.5);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);
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
        <RateTitle>
          20대 <br /> 인기 드라마
        </RateTitle>
      </LeftArea>

      <RightArea>
        <RateSwiper
          spaceBetween={60} /* 슬라이드 간의 간격을 넉넉하게 설정 */
          slidesPerView={4.5} /* 메인 슬라이드가 강조되도록 설정 */
          lidesPerView={slidesPerView}
          centeredSlides
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
  height: 65vh;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
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
  @media (max-width: 1024px) {
    padding-left: 0;
  }
`;

const RateTitle = styled.h3`
  color: white;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.5;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const RateSwiper = styled(Swiper)`
  width: 100%;
  overflow: visible;

  .swiper-slide {
    overflow: visible;
  }
`;

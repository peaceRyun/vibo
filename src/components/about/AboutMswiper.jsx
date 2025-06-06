// 어바웃 모바일 스와이퍼
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import AboutMslide1 from './AboutMslide1';
import AboutMslide2 from './AboutMslide2';
import AboutMslide3 from './AboutMslide3';
import { AboutSwiperWrapper } from './style';
import AboutMcard2 from './AboutMcard2';
import AboutMcard1 from './AboutMcard1';
import gsap from 'gsap';
import AboutMlast from './AboutMlast';
const AboutMswiper = ({ activeIndex, setActiveIndex }) => {
  const swiperRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      swiper.on('slideChangeTransitionStart', () => {
        gsap.to(wrapperRef.current, {
          opacity: 0,
          duration: 0.2,
        });
      });

      swiper.on('slideChangeTransitionEnd', () => {
        gsap.to(wrapperRef.current, {
          opacity: 1,
          duration: 0.2,
        });
      });
    }
  }, []);
  return (
    <AboutSwiperWrapper ref={wrapperRef}>
      <Swiper
        ref={swiperRef}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="about-swiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <AboutMslide1 />
          <AboutMcard1 />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMslide2 />
          {activeIndex === 1 && <AboutMcard2 activeIndex={activeIndex} />}
        </SwiperSlide>
        <SwiperSlide>
          <AboutMslide3 />
          {activeIndex === 2 && <AboutMlast activeIndex={activeIndex} />}
        </SwiperSlide>
      </Swiper>
    </AboutSwiperWrapper>
  );
};

export default AboutMswiper;

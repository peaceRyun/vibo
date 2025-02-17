// 어바웃 모바일 스와이퍼
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import AboutMslide1 from './AboutMslide1';
import AboutMslide2 from './AboutMslide2';
import AboutMslide3 from './AboutMslide3';
import { AboutSwiperWrapper } from './style';
import AboutMcard from './AboutMcard';
const AboutMswiper = () => {
  return (
    <AboutSwiperWrapper>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="about-swiper">
        <SwiperSlide>
          <AboutMslide1 />
          <AboutMcard />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMslide2 />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMslide3 />
        </SwiperSlide>
      </Swiper>
    </AboutSwiperWrapper>
  );
};

export default AboutMswiper;

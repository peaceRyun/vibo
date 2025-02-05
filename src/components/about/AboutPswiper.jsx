import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AboutPswiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/about/about_all01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/about/about_all02.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/about/about_all03.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/about/about_all04.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/about/about_all05.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/about/about_all06.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/about/about_all07.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/about/about_all08.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/about/about_all09.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AboutPswiper;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { Pagination } from 'swiper/modules';
import WatchingItem from './WatchingItem';

const WatchingList = () => {
  return (
    <Section>
      <LiveTitle>실시간 인기 LIVE</LiveTitle>
      <LiveSwiper slidesPerView={3.8} spaceBetween={16} pagination={{ clickable: true }} modules={[Pagination]}>
        {[...Array(5)].map((_, index) => (
          <SwiperSlide style={{ overflow: 'visible' }} key={index}>
            <WatchingItem />
          </SwiperSlide>
        ))}
      </LiveSwiper>
    </Section>
  );
};

export default WatchingList;

// Styled Components
const Section = styled.section``;

const LiveTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const LiveSwiper = styled(Swiper)`
  padding-bottom: 20px;
  overflow: visible;
  .swiper-slide {
    border-radius: 8px;
    width: auto;
    padding: 10px;
  }
`;

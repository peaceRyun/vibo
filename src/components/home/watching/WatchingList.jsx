import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { Pagination } from 'swiper/modules';
import WatchingItem from './WatchingItem';
import { MainContainer } from '../../../pages/home/main/style';

const WatchingList = () => {
  return (
    <MainContainer>
      <LiveContainer>
        <LiveTitle>실시간 인기 LIVE</LiveTitle>
        <LiveSwiper slidesPerView={3.8} spaceBetween={16} pagination={{ clickable: true }} modules={[Pagination]}>
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              {/* style={{ overflow: 'visible' }} */}
              <WatchingItem />
            </SwiperSlide>
          ))}
        </LiveSwiper>
      </LiveContainer>
    </MainContainer>
  );
};

export default WatchingList;

// Styled Components
const LiveContainer = styled.section`
  width: 100%;
  max-width: 1820px;
  margin: 0 auto;
`;

const LiveTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const LiveSwiper = styled(Swiper)`
  max-width: 100%;
  padding-bottom: 20px;
  overflow: hidden;
  /* padding-bottom: 20px;
  overflow: visible; */
  .swiper-slide {
    border-radius: 8px;
    width: auto;
    padding: 10px;
  }
`;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
// import { Pagination } from 'swiper/modules';
import WatchingItem from './WatchingItem';
// import { MainContainer } from '../../../pages/home/main/style';

const WatchingList = () => {
  const watchingUrl = [
    'https://www.youtube.com/embed/9z3HYlFcc6Q?autoplay=1&mute=1',
    'https://www.youtube.com/embed/cw83AVjugmg?autoplay=1&mute=1',
    'https://www.youtube.com/embed/MKX5W7mGUzo?autoplay=1&mute=1',
    'https://www.youtube.com/embed/clqcIUYkbGQ?autoplay=1&mute=1',
    'https://www.youtube.com/embed/v4iz9Mh8R-4?autoplay=1&mute=1',
    'https://www.youtube.com/embed/9z3HYlFcc6Q?autoplay=1&mute=1',
    'https://www.youtube.com/embed/cw83AVjugmg?autoplay=1&mute=1',
    'https://www.youtube.com/embed/MKX5W7mGUzo?autoplay=1&mute=1',
    'https://www.youtube.com/embed/clqcIUYkbGQ?autoplay=1&mute=1',
    'https://www.youtube.com/embed/v4iz9Mh8R-4?autoplay=1&mute=1',
  ];

  return (
    // <MainContainer>
    <LiveContainer>
      <LiveTitle>실시간 인기 LIVE</LiveTitle>
      <LiveSwiper slidesPerView={4.2} spaceBetween={16}>
        {/* pagination={{ clickable: true }} */}
        {watchingUrl.map((url, index) => (
          <SwiperSlide key={index}>
            {/* style={{ overflow: 'visible' }} */}
            <WatchingItem watchingUrl={url} />
          </SwiperSlide>
        ))}
      </LiveSwiper>
    </LiveContainer>
    // </MainContainer>
  );
};

export default WatchingList;

// Styled Components
const LiveContainer = styled.section`
  width: 100%;
  /* max-width: 1820px; */
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
  /* overflow: visible !important; */
  /* padding-bottom: 20px;
  overflow: visible; */
  .swiper-slide {
    border-radius: 8px;
    width: auto;
    /* padding: 10px; */
  }
`;

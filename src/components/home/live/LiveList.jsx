import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import LiveItem from './LiveItem';

const LiveList = ({ title }) => {
  const videoUrls = [
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
    <LiveContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledSwiper slidesPerView={4.2} spaceBetween={16}>
        {videoUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <LiveItem videoUrl={url} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </LiveContainer>
  );
};

export default LiveList;

// Styled Components
const LiveContainer = styled.section`
  width: 100%;
  margin: 0 auto;
`;

const StyledTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledSwiper = styled(Swiper)`
  padding-bottom: 20px;
  /* overflow: visible !important; */

  .swiper-slide {
    border-radius: 8px;
    width: auto;
  }
`;

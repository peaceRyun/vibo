import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import LiveItem from './LiveItem';

const LiveList = ({ title }) => {
  return (
    <LiveContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledSwiper slidesPerView={4.2} spaceBetween={16} pagination={{ clickable: true }}>
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <LiveItem />
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

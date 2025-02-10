import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import LiveItem from './LiveItem';
// import { Pagination } from 'swiper/modules';
// import { MainContainer } from '../../../pages/home/main/style';

const LiveList = () => {
  return (
    // <MainContainer>
    <LiveContainer>
      <StyledTitle>실시간 인기 LIVE</StyledTitle>
      <StyledSwiper slidesPerView={4.2} spaceBetween={16} pagination={{ clickable: true }}>
        {/* pagination={{ clickable: true }} modules={[Pagination]} */}
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} style={{ overflow: 'visible' }}>
            <LiveItem />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </LiveContainer>
    // </MainContainer>
  );
};

export default LiveList;

// Styled Components
const LiveContainer = styled.section`
  width: 100%;
  /* max-width: 1820px; */
  margin: 0 auto;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || '20px'};
`;

const StyledTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledSwiper = styled(Swiper)`
  padding-bottom: 20px;
  overflow: visible !important;
  .swiper-slide {
    border-radius: 8px;
    width: auto;
    /* padding: 10px; */
  }
`;

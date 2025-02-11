import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import LiveItem from './LiveItem';

const LiveList = ({ title }) => {
  // ⬅️ 부모 컴포넌트에서 title을 전달받음
  return (
    <LiveContainer>
      <StyledTitle>{title}</StyledTitle> {/* ⬅️ 전달받은 title 사용 */}
      <StyledSwiper slidesPerView={4.2} spaceBetween={16} pagination={{ clickable: true }}>
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} style={{ overflow: 'visible' }}>
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
  overflow: visible !important;

  .swiper-slide {
    border-radius: 8px;
    width: auto;
  }
`;

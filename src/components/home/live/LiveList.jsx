import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import LiveItem from './LiveItem';

const LiveList = () => {
  const sections = [
    { id: '1', title: '실시간 인기 LIVE' },
    { id: '2', title: '뉴스/시사/교양채널' },
    { id: '3', title: '스포츠 채널' },
    { id: '4', title: '예능 채널' },
    { id: '5', title: '다큐 채널' },
  ];

  return (
    <LiveContainer>
      {sections.map((section) => (
        <Section key={section.id} id={section.id}>
          {' '}
          {/* 섹션에 ID 추가 */}
          <StyledTitle>{section.title}</StyledTitle> {/* ID에 맞는 타이틀 출력 */}
          <StyledSwiper slidesPerView={4.2} spaceBetween={16} pagination={{ clickable: true }}>
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={`${section.id}-${index}`} style={{ overflow: 'visible' }}>
                <LiveItem />
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </Section>
      ))}
    </LiveContainer>
  );
};

export default LiveList;

// Styled Components
const LiveContainer = styled.section`
  width: 100%;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 30px; /* 섹션 간 간격 조정 */
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

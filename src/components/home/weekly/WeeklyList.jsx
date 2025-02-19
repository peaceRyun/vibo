import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { Pagination } from 'swiper/modules';
import WeeklyItem from './WeeklyItem';
import DaySelect from './DaySelect';
import { useState } from 'react';

const WeeklyList = () => {
  const [activeDay, setActiveDay] = useState('월');

  return (
    <Section>
      <WeeklyInfo>
        <WeeklyTitle>
          <UpdateText>VIBO 신작 업데이트</UpdateText>
          <UploadNotice>업로드 공지</UploadNotice>
        </WeeklyTitle>
        <DaySelect activeDay={activeDay} setActiveDay={setActiveDay} />
      </WeeklyInfo>
      <WeeklySwiper
        // modules={[Pagination]}
        // spaceBetween={40} /* 기본 간격 */
        // slidesPerView="auto"
        breakpoints={{
          1280: { slidesPerView: 5.5, spaceBetween: 40 } /* 데스크탑 */,
          1024: { slidesPerView: 4, spaceBetween: 30 } /* 태블릿 */,
          // 768: { slidesPerView: 2.5, spaceBetween: 20 } /* 작은 태블릿 */,
          600: { slidesPerView: 2.5, spaceBetween: 15 } /* 모바일 */,
          400: { slidesPerView: 1.5, spaceBetween: 1 } /* 작은 모바일 */,
        }}
      >
        {/* <WeeklySwiper spaceBetween={50} pagination={{ clickable: true }} slidesPerView={5.5}> */}
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <WeeklyItem activeDay={activeDay} />
          </SwiperSlide>
        ))}
      </WeeklySwiper>
    </Section>
  );
};

export default WeeklyList;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px 0 60px 0;
  @media (max-width: 1024px) {
    padding: 40px 0 40px 0;
  }
  @media (max-width: 600px) {
    padding: 30px 0 30px 0;
  }
  /* align-items: center; */
`;

const WeeklyInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2.375rem;
  gap: 0.5rem;
  flex-direction: column;
`;

const UpdateText = styled.h3`
  color: #fff;
  font-weight: 900;
  white-space: nowrap;
  padding: 0 10px;
  font-size: var(--title-xlarge-size); //32
  font-weight: var(--title-xlarge-weight); //800
  @media (max-width: 1024px) {
    font-size: var(--title-large-mobile); //24
    font-weight: var(--title-large-weigh); //700
  }
  @media (max-width: 600px) {
    font-size: var(--title-small-mobile); //17
    font-weight: var(--title-xsmall-weight); //700
  }
`;

const UploadNotice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a1a;
  color: #fff;
  padding: clamp(0.4rem, 1vw, 0.5rem) clamp(0.8rem, 1.5vw, 1rem);
  border-radius: 2rem;
  font-size: clamp(0.75rem, 1vw, 0.875rem);
  font-weight: 500;
  border: 1px solid #009c8c;
  white-space: nowrap;
  @media (max-width: 768px) {
    width: auto;
    padding: 0.4rem 0.8rem;
  }
`;
const WeeklySwiper = styled(Swiper)`
  width: 100%;
  max-width: 100%;
  /* .swiper-slide {
    display: flex;
    justify-content: center;
  } */

  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background-color: #1ee0b6;
    opacity: 1;
  }
  @media (max-width: 1024px) {
    overflow: hidden; /* ✅ 모바일에서 불필요한 여백 방지 */
  }
`;

const WeeklyTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

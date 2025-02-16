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
      <WeeklySwiper spaceBetween={50} pagination={{ clickable: true }} slidesPerView={6}>
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
  align-items: center;
`;

const WeeklyInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 2.375rem;
  gap: 0.5rem;
  flex-direction: column;
`;

const UpdateText = styled.h3`
  font-size: 2rem;
  color: #fff;
  font-weight: 900;
  white-space: nowrap;
`;

const UploadNotice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a1a;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #009c8c;
  white-space: nowrap;
`;
const WeeklySwiper = styled(Swiper)`
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background-color: #1ee0b6;
    opacity: 1;
  }
`;

const WeeklyTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

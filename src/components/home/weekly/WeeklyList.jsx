import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { Pagination } from 'swiper/modules';
import WeeklyItem from './WeeklyItem';
import DaySelect from './DaySelect';
import { useState, useEffect } from 'react';

const WeeklyList = () => {
  const [activeDay, setActiveDay] = useState('월');
  const [slidesPerView, setSlidesPerView] = useState(5.3);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 480);
    if (width <= 490) {
      setSlidesPerView(1.3);
    } else if (width <= 768) {
      setSlidesPerView(2.3);
    } else if (width <= 1024) {
      setSlidesPerView(3.3);
    } else {
      setSlidesPerView(5.3);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <Section>
      <WeeklyInfo>
        <WeeklyTitle>
          <UpdateText>VIBO 신작 업데이트</UpdateText>
          <UploadNotice>업로드 공지</UploadNotice>
        </WeeklyTitle>
        {!isMobile && (
          <DaySelectContainer>
            <DaySelect activeDay={activeDay} setActiveDay={setActiveDay} />
          </DaySelectContainer>
        )}
      </WeeklyInfo>
      <ResponsiveContainer isMobile={isMobile}>
        {isMobile && (
          <DaySelectWrapper>
            <DaySelect activeDay={activeDay} setActiveDay={setActiveDay} />
          </DaySelectWrapper>
        )}
        <WeeklySwiperWrapper>
          <WeeklySwiper spaceBetween={20} pagination={{ clickable: true }} slidesPerView={slidesPerView}>
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                <WeeklyItem activeDay={activeDay} />
              </SwiperSlide>
            ))}
          </WeeklySwiper>
        </WeeklySwiperWrapper>
      </ResponsiveContainer>
    </Section>
  );
};

export default WeeklyList;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 20px; */
  @media (max-width: 480px) {
    padding: 30px 0 30px 30px;
  }
`;

const WeeklyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* max-width: 1200px; */
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 480px) {
    width: 120%;
  }
`;

const DaySelectContainer = styled.div``;

const DaySelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 10px;
    align-items: center;
  }
`;

const ResponsiveContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
  flex-direction: ${({ isMobile }) => (isMobile ? 'row' : 'column')};
  justify-content: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
  align-items: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
`;

const WeeklySwiperWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const WeeklySwiper = styled(Swiper)`
  width: 100%;
  flex-grow: 1;
`;

const WeeklyTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

const UpdateText = styled.h2`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const UploadNotice = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a1a;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #009c8c;
  white-space: nowrap;
  /* font-size: 16px;
  color: gray; */

  @media (max-width: 1024px) {
    font-size: 12px;
    padding: 5px 12px;
  }
`;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
// import { Pagination } from 'swiper/modules'; // 페이지네이션 모듈 주석 처리
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import CommonItem from './CommonItem';
import { useEffect, useState } from 'react';

export const CommonList = () => {
  const navigate = useNavigate();
  const onGo = () => {
    navigate('/contentlist');
  };
  // const [slidesToShow, setSlidesToShow] = useState(6.3);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  // const adjustSlidesToShow = () => {
  //   const width = window.innerWidth;
  //   setIsMobile(width <= 1024);
  //   if (width <= 490) {
  //     setSlidesToShow(1.3);
  //   } else {
  //     setSlidesToShow(6.3);
  //   }
  // };

  // useEffect(() => {
  //   adjustSlidesToShow();
  //   window.addEventListener('resize', adjustSlidesToShow);
  //   return () => {
  //     window.removeEventListener('resize', adjustSlidesToShow);
  //   };
  // }, []);

  const { TVseriesData } = useSelector((state) => state.tvSeriesR);

  if (!TVseriesData) {
    return <div>loading....</div>;
  }
  if (TVseriesData.length > 0) {
    return (
      <Section>
        <CommonInfo>
          <CommonTitle>
            XX님이
            <br />
            좋아할만 한<br />
            예능
            <VerticalText>TV</VerticalText>
          </CommonTitle>
          <MoreBtn onClick={onGo}>더보기</MoreBtn>
        </CommonInfo>

        <CommonSwiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3.3 },
            1600: { slidesPerView: 6.3 },
          }}
        >
          {TVseriesData.map((content) => (
            <SwiperSlide key={content.id}>
              <CommonItem content={content} />
            </SwiperSlide>
          ))}
        </CommonSwiper>
      </Section>
    );
  }
};

export default CommonList;

const Section = styled.section`
  display: flex;
  /* align-items: center; */
  position: relative;
  // gap: 5px;
`;

const VerticalText = styled.div`
  position: absolute;
  left: 19.8%;
  top: 21%;
  transform: translateY(-50%) rotate(-270deg);
  font-size: 80px;
  font-weight: bold;
  color: #5e5e5e;
  letter-spacing: 5px;
  @media (max-width: 1040px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: none;
  }

  /* @media (max-width: 1040px) {
    position: absolute;
    left: 80%;
    top: 15%;
    transform: translateY(-50%) rotate(-270deg);
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    letter-spacing: 5px;
  }
  @media (max-width: 600px) {
    position: absolute;
    left: 34%;
    top: 15%;
    transform: translateY(-50%) rotate(-270deg);
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    letter-spacing: 5px;
  } */
`;

const CommonInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* height: 443px; */
`;

const CommonTitle = styled.h3`
  color: white;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  margin: 0;
  @media (max-width: 1040px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const MoreBtn = styled.button`
  background-color: var(--primary-600);
  color: black;
  font-size: 17px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 155px;
  height: 40px;
  font-weight: bold;

  &:hover {
    background-color: var(--primary-base);
  }

  @media (max-width: 600px) {
    font-size: 15px;
    width: 110px;
    height: 35px;
  }
`;

const CommonSwiper = styled(Swiper)`
  flex: 4;
  /* height: 443px; */

  .swiper-slide {
    // width: 300px !important; // 이 줄을 제거하거나 주석 처리합니다
    /* height: 443px; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
  }

  @media (max-width: 1040px) {
    flex: 3;
  }
  @media (max-width: 600px) {
    flex: 1;
  }
`;

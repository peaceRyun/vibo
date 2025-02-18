// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import styled from 'styled-components';
// // import { Pagination } from 'swiper/modules'; // 페이지네이션 모듈 주석 처리
// import { useNavigate } from 'react-router';
// import { useSelector } from 'react-redux';
// import CommonItem from './CommonItem';

// export const CommonList = () => {
//     const navigate = useNavigate();
//     const onGo = () => {
//         navigate('/contentlist');
//     };
//     const { TVseriesData } = useSelector((state) => state.tvSeriesR);

//     if (!TVseriesData) {
//         return <div>loading....</div>;
//     }
//     if (TVseriesData.length > 0) {
//         return (
//             <Section>
//                 <CommonInfo>
//                     <CommonTitle>
//                         XX님이 <br />
//                         좋아할만 한 <br />
//                         예능
//                         <VerticalText>TV</VerticalText>
//                     </CommonTitle>
//                     <MoreBtn onClick={onGo}>더보기</MoreBtn>
//                 </CommonInfo>
//                 <CommonSwiper spaceBetween={30} pagination={{ clickable: true }} slidesPerView={5.5}>
//                     {/* modules={[Pagination]} */}
//                     {TVseriesData.map((content) => (
//                         <SwiperSlide key={content.id}>
//                             <CommonItem content={content} />
//                         </SwiperSlide>
//                     ))}
//                 </CommonSwiper>
//             </Section>
//         );
//     }
// };

// export default CommonList;

// const Section = styled.section`
//     display: flex;
//     /* align-items: center; */
//     position: relative;
//     // gap: 5px;
// `;

// const VerticalText = styled.div`
//     position: absolute;
//     left: 19.8%;
//     top: 21%;
//     transform: translateY(-50%) rotate(-270deg);
//     font-size: 80px;
//     font-weight: bold;
//     color: #5e5e5e;
//     letter-spacing: 5px;
// `;

// const CommonInfo = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     /* height: 443px; */
// `;

// const CommonTitle = styled.h3`
//     color: white;
//     font-size: 32px;
//     font-weight: bold;
//     line-height: 1.5;
//     margin: 0;
// `;

// const MoreBtn = styled.button`
//     background-color: var(--primary-600);
//     color: black;
//     font-size: 17px;
//     padding: 15px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     width: 155px;
//     height: 40px;
//     font-weight: bold;

//     &:hover {
//         background-color: var(--primary-base);
//     }
// `;

// const CommonSwiper = styled(Swiper)`
//     flex: 3;
//     /* height: 443px; */

//     .swiper-slide {
//         // width: 300px !important; // 이 줄을 제거하거나 주석 처리합니다
//         /* height: 443px; */
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         overflow: hidden;
//         border-radius: 8px;
//     }
// `;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CommonItem from './CommonItem';

export const CommonList = () => {
  const navigate = useNavigate();
  const onGo = () => {
    navigate('/contentlist');
  };
  const { TVseriesData } = useSelector((state) => state.tvSeriesR);
  const [slidesToShow, setSlidesToShow] = useState(5.3);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const adjustSlidesToShow = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 480);
    if (width <= 490) {
      setSlidesToShow(1.3);
    } else if (width <= 768) {
      setSlidesToShow(2.3);
    } else if (width <= 1024) {
      setSlidesToShow(3.3);
    } else {
      setSlidesToShow(5.3);
    }
  };

  useEffect(() => {
    adjustSlidesToShow();
    window.addEventListener('resize', adjustSlidesToShow);
    return () => {
      window.removeEventListener('resize', adjustSlidesToShow);
    };
  }, []);

  if (!TVseriesData) {
    return <div>loading....</div>;
  }
  if (TVseriesData.length > 0) {
    return (
      <Section $isMobile={isMobile}>
        {isMobile && (
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
        )}
        <ContentWrapper $isMobile={isMobile}>
          {!isMobile && (
            <CommonInfo>
              <CommonTitle>
                XX님이 <br />
                좋아할만 한 <br />
                예능
                <VerticalText>TV</VerticalText>
              </CommonTitle>
              <MoreBtn onClick={onGo}>더보기</MoreBtn>
            </CommonInfo>
          )}
          <CommonSwiperWrapper>
            <Swiper spaceBetween={30} pagination={{ clickable: true }} slidesPerView={slidesToShow}>
              {TVseriesData.map((content) => (
                <SwiperSlide key={content.id}>
                  <CommonItem content={content} />
                </SwiperSlide>
              ))}
            </Swiper>
          </CommonSwiperWrapper>
        </ContentWrapper>
      </Section>
    );
  }
};

export default CommonList;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  /* align-items: ${({ $isMobile }) => ($isMobile ? 'center' : 'flex-start')}; */
  width: 100%;
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
  /* position: absolute;
  left: 19.8%;
  top: 21%;
  transform: translateY(-50%) rotate(-270deg);
  font-size: 80px;
  font-weight: bold;
  color: #5e5e5e;
  letter-spacing: 5px; */

  @media (max-width: 1024px) {
    display: none;
  }
`;

const CommonInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 60px;

  /* flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center; */
  margin-bottom: ${({ $isMobile }) => ($isMobile ? '20px' : '0')};
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    justify-content: space-between;
    align-items: center;
    width: auto;
  }
`;

const CommonTitle = styled.h3`
  color: white;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  width: 355px;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 24px;
    text-align: left;
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
  @media (max-width: 480px) {
    width: 120px;
    height: 35px;
  }
`;

const CommonSwiperWrapper = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

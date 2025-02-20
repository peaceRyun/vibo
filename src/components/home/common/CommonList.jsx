import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
// import { Pagination } from 'swiper/modules'; // 페이지네이션 모듈 주석 처리
// import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import CommonItem from './CommonItem';

import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const CommonList = ({ fetchFunction, stateSelector }) => {
  const dispatch = useDispatch();
  // const content = stateSelector ? useSelector(stateSelector) : []; title값 부여 전
  // const content = stateSelector ? useSelector(stateSelector) : { title: '', contentlist: [] };
  // const animations = useSelector((state) => state.filterR.animations || []);
  const content = stateSelector
    ? useSelector(stateSelector) ?? { title: '', option: '', contentlist: [] }
    : { title: '', option: '', contentlist: [] };

  const loading = useSelector((state) => state.filterR.loading);

  useEffect(() => {
    if (fetchFunction) {
      // console.log(`📢 API 요청: ${title} 실행!`);
      dispatch(fetchFunction());
    }
    // else {
    //   console.error(`fetchFunction이 전달되지 않음: ${title}`);
    // }
  }, [dispatch, fetchFunction]);

  console.log('📌 Redux에서 가져온 데이터:', content);
  console.log('📌 Redux에서 가져온 title:', content?.title);
  console.log('📌 Redux에서 가져온 contentlist:', content?.contentlist);
  console.log('Redux에서 가져온 option', content?.option);

  // 데이터를 가져와서 필터링 적용해야함
  const navigate = useNavigate();
  const onGo = () => {
    navigate('/contentlist');
  };

  // const { KoreanContent } = useSelector((state) => state.filterR);

  // 기존 영역
  // const { TVseriesData } = useSelector((state) => state.tvSeriesR);

  // if (!TVseriesData) {
  //   return <div>loading....</div>;
  // }
  // if (TVseriesData.length > 0) {
  return (
    <Section>
      <CommonInfo>
        <CommonTitle>
          {/* {`
{title}
`} */}
          {/* {title} */}
          {content.title}
          <VerticalText>{content.option}</VerticalText>
        </CommonTitle>
        <MoreBtn onClick={onGo}>더보기</MoreBtn>
      </CommonInfo>
      <CommonSwiper
        spaceBetween={30} /* 기본 간격 */
        slidesPerView={5.5} /* 기본값 (데스크탑) */
        breakpoints={{
          // 1280: { slidesPerView: 5.5, spaceBetween: 30 },
          1024: { slidesPerView: 4.2, spaceBetween: 15 },
          // 768: { slidesPerView: 2.5, spaceBetween: 20 },
          // 600: { slidesPerView: 1.5, spaceBetween: 15 },
          400: { slidesPerView: 2.2, spaceBetween: 10 },
        }}
      >
        {/* modules={[Pagination]} */}
        {/* {content.contentlist.map((item) => (
          <SwiperSlide key={item.id}>
            <CommonItem content={item} />
          </SwiperSlide>
        ))} */}
        {content?.contentlist?.length > 0 ? (
          content.contentlist.map((item) => (
            <SwiperSlide key={item.id}>
              <CommonItem content={item} />
            </SwiperSlide>
          ))
        ) : (
          <p>콘텐츠를 불러오는 중...</p> // ✅ 데이터가 없을 경우 로딩 메시지 표시
        )}
      </CommonSwiper>
    </Section>
  );
  // }
};

export default CommonList;

const Section = styled.section`
  display: flex;
  /* align-items: center; */
  position: relative;
  // gap: 5px;
  padding: 60px 0 60px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 0 40px 0;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 30px 0 30px 0;
  }
`;

const VerticalText = styled.div`
  position: absolute;
  left: 15.8%;
  top: 46%;
  transform: translateY(-50%) rotate(-270deg);
  font-size: clamp(58px, 4vw, 55px);
  font-weight: bold;
  color: #5e5e5e;
  letter-spacing: 5px;
  z-index: 800;
  /* 아래내용은 기존꺼임 */
  /* position: absolute;
  left: 19.8%;
  top: 21%;
  transform: translateY(-50%) rotate(-270deg);
  font-size: clamp(50px, 6vw, 80px);
  font-weight: bold;
  color: #5e5e5e;
  letter-spacing: 5px; */
  /* @media (max-width: 1024px) {
    font-size: clamp(40px, 5vw, 60px);
    left: 15%;
    top: 30%;
  }
  @media (max-width: 600px) {
    font-size: clamp(30px, 4vw, 50px);
    left: 10%;
    top: 35%;
  } */
`;

const CommonInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 443px; */
  @media (max-width: 1024px) {
    text-align: left;
    white-space: normal;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
  }
`;

const CommonTitle = styled.h3`
  color: white;

  line-height: 1.5;
  margin: 0;
  white-space: pre-line;
  font-size: var(--title-xlarge-size); //32
  font-weight: var(--title-xlarge-weight); //800
  @media (max-width: 1024px) {
    font-size: var(--title-large-mobile); //24
    font-weight: var(--title-large-weigh); //700
    text-align: left;
    white-space: normal;
  }
  @media (max-width: 600px) {
    font-size: var(--title-small-mobile); //17
    font-weight: var(--title-xsmall-weight); //700
  }
`;

const MoreBtn = styled.button`
  background-color: var(--primary-600);
  color: black;
  font-size: clamp(14px, 1.2vw, 17px);
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: clamp(120px, 10vw, 155px);
  height: 40px;
  font-weight: bold;

  &:hover {
    background-color: var(--primary-base);
  }
`;

const CommonSwiper = styled(Swiper)`
  flex: 3;
  max-width: 100%;
  /* height: 443px; */

  .swiper-slide {
    // width: 300px !important; // 이 줄을 제거하거나 주석 처리합니다
    /* height: 443px; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
    /* min-width: 390px; */
  }
`;

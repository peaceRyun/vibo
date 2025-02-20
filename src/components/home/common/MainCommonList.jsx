import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CommonItem from './CommonItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const MainCommonList = ({ fetchFunction, stateSelector }) => {
  const dispatch = useDispatch();

  // ✅ Redux에서 데이터 가져올 때 기본값 설정 (undefined 방지)
  const content = stateSelector
    ? useSelector(stateSelector) ?? { title: '', option: '', contentlist: [] }
    : { title: '', option: '', contentlist: [] };

  const loading = useSelector((state) => state.filterR.loading);

  useEffect(() => {
    if (fetchFunction && typeof fetchFunction === 'function') {
      // ✅ 함수인지 확인 후 실행
      dispatch(fetchFunction());
    }
  }, [dispatch, fetchFunction]);

  console.log('📌 Redux에서 가져온 데이터:', content);
  console.log('📌 Redux에서 가져온 title:', content?.title);
  console.log('📌 Redux에서 가져온 contentlist:', content?.contentlist);
  console.log('Redux에서 가져온 option', content?.option);

  const navigate = useNavigate();
  const onGo = () => {
    navigate('/contentlist');
  };

  return (
    <Section>
      <CommonInfo>
        <CommonTitle>
          {content.title}
          <VerticalText>{content.option}</VerticalText>
        </CommonTitle>
        <MoreBtn onClick={onGo}>더보기</MoreBtn>
      </CommonInfo>

      <CommonSwiper
        spaceBetween={30} /* 기본 간격 */
        slidesPerView={5.5} /* 기본값 (데스크탑) */
        breakpoints={{
          1024: { slidesPerView: 4.2, spaceBetween: 15 },
          600: { slidesPerView: 2.5, spaceBetween: 10 }, // ✅ 모바일에서 2.5개 보이도록 변경
          400: { slidesPerView: 1.5, spaceBetween: 5 }, // ✅ 작은 모바일 화면에서 1.5개 보이도록 변경
        }}
      >
        {content?.contentlist?.length > 0 ? (
          content.contentlist.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              {' '}
              {/* ✅ id가 없을 경우 index 사용하여 오류 방지 */}
              <CommonItem content={item} />
            </SwiperSlide>
          ))
        ) : (
          <p>콘텐츠를 불러오는 중...</p> // ✅ 데이터가 없을 경우 로딩 메시지 표시
        )}
      </CommonSwiper>
    </Section>
  );
};

export default MainCommonList;

const Section = styled.section`
  display: flex;
  position: relative;
  padding: 60px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 0;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 30px 0;
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

  @media (max-width: 599px) {
    display: none; /* ✅ 모바일에서는 숨김 */
  }
`;

const CommonInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  font-size: var(--title-xlarge-size);
  font-weight: var(--title-xlarge-weight);

  @media (max-width: 1024px) {
    font-size: var(--title-large-mobile);
    font-weight: var(--title-large-weigh);
    text-align: left;
    white-space: normal;
  }
  @media (max-width: 600px) {
    font-size: var(--title-small-mobile);
    font-weight: var(--title-xsmall-weight);
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

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
  }
`;

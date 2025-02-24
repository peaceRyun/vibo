import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CommonItem from './CommonItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const fetchFunctionToVideoType = {
  getAnimations: 'drama',
  getDarkTheaterReleases: 'horror',
  getDramaTvs: 'thriller',
};

const MainCommonList = ({ fetchFunction, stateSelector }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const content = stateSelector
    ? useSelector(stateSelector) ?? { title: '', option: '', contentlist: [] }
    : { title: '', option: '', contentlist: [] };

  const loading = useSelector((state) => state.filterR.loading);

  const videoType = fetchFunction ? fetchFunctionToVideoType[fetchFunction.name] || 'drama' : 'drama';

  useEffect(() => {
    if (fetchFunction && typeof fetchFunction === 'function') {
      dispatch(fetchFunction());
    }
  }, [dispatch, fetchFunction]);

  const onGo = () => {
    navigate(`/contentlist/${videoType}`, {
      state: {
        contentData: content,
        videoType: videoType,
      },
    });
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
        spaceBetween={30}
        slidesPerView={5.5}
        breakpoints={{
          1024: { slidesPerView: 4.2, spaceBetween: 20 },
          600: { slidesPerView: 2.5, spaceBetween: 0 },
          300: { slidesPerView: 1.5, spaceBetween: 0 },
        }}
      >
        {content?.contentlist?.length > 0 ? (
          content.contentlist.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              <CommonItem content={item} videoType={videoType} />
            </SwiperSlide>
          ))
        ) : (
          <p>콘텐츠를 불러오는 중...</p>
        )}
      </CommonSwiper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  position: relative;
  padding: 60px 0;
  /* 드래그방지 */
  user-select: none;
  pointer-events: auto;
  touch-action: pan-y;
  user-drag: none;

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
  left: 100%;
  top: 3px;
  transform: rotate(90deg);
  transform-origin: top left;
  font-weight: bold;
  color: var(--gray-700);
  letter-spacing: 5px;
  z-index: 800;
  font-size: var(--title-xlarge-size);
  font-weight: var(--title-xlarge-weight);
  @media (max-width: 1024px) {
    display: none;
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

const CommonTitle = styled.div`
  position: relative;
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
  background-color: var(--primary-base);
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
    background-color: var(--primary-600);
    color: white;
  }
  @media (max-width: 1024px) {
    background-color: var(--primary-base);
    color: black;
    font-size: clamp(12px, 1.2vw, 17px);
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: clamp(84px, 7vw, 155px);
    height: 32px;
    font-weight: bold;
    margin: 0 15px;
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

export default MainCommonList;

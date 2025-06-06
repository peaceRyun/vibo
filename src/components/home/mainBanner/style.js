import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  margin-bottom: 60px;
  // min-height: 600px;
  position: relative;
  overflow: hidden;
  padding-left: 50px;
  /* 드래그방지 */
  user-select: none;
  pointer-events: auto;
  touch-action: pan-y;
  user-drag: none;
  @media (max-width: 600px) {
    padding-left: 20px;
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  height: auto;
  /* min-height: 600px; */
  overflow: visible;

  //페이지 네비 스타일링 추가
  .swiper-pagination-bullet {
    background-color: white !important;

    bottom: var(--swiper-pagination-bottom, 30px);
    @media (max-width: 600px) {
      display: none;
    }
  }
  .swiper-pagination-bullet-active {
    background-color: var(--primary-base) !important;
    /* bottom: var(--swiper-pagination-bottom, 50px); */
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--primary-base) !important;
    font-size: 30px !important;
    z-index: 11;
    top: var(--swiper-navigation-top-offset, 45%);
    padding: 0 60px 0 40px;

    /* margin: 50px; */
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  min-height: 600px;
  max-height: 600px;
  @media (max-width: 600px) {
    min-height: 400px;
    max-height: 400px;
    align-items: center;
  }
`;

export const SlideItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* 슬라이드 마다 살짝 어둡게 적용해보기 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
    border-radius: 12px;
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 40px; /* 하단 여백 */
  left: 50px; /* 왼쪽 여백 */
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8); /* 텍스트 가독성 개선 */
  max-width: 50%;
  padding: 20px;
  margin-bottom: 40px;
  z-index: 1000;
  @media (max-width: 600px) {
    max-width: 60%;
    padding: 10px;
    bottom: 15px;
    left: 20px;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 10px;
  text-align: left;
`;

export const Subtitle = styled.div`
  font-size: 24px;
  opacity: 0.9;
  text-align: left;
  color: gray;
  z-index: 1000;
`;

// ---------------------------MainBanner GSAP CSS
/* GSAP Floating Images */
// export const FloatingContainer = styled.div`

export const FloatingContainer = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
  overflow: visible;

  /* @media (min-width: 1700px) {
    top: 80px;
    height: 100%;
  } */

  @media (min-width: 1024px) and (max-width: 1450px) {
    // height: calc(100% - ((1450px - 100vw) * 0.1));
    /* top: calc(-100px + ((1450px - 100vw) * 0.1)); */
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const FloatingImage = styled.img`
  position: absolute;
  width: ${(props) => props.size || '50px'};
  height: auto;
  opacity: 1;
  z-index: 300;
`;
export const OverlayFilter = styled.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* min-width: 600px; */
  border-radius: 12px;
  background: linear-gradient(to top, rgba(0, 0, 0.3, 0.8), rgba(0, 0, 0, 0.1));
  z-index: 2;
  transition: opacity 1.5s ease;
`;
export const LogoImage = styled.img`
  width: auto;
  max-width: 600px;
  height: auto;
  margin: 0 auto;
  display: block;
  z-index: 2;
`;

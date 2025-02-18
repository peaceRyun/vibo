import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  margin-bottom: 60px;
  // min-height: 600px;
  position: relative;
  overflow: hidden;

  //   @media (max-width: 1600px) {
  //     height: 100px;
  //   }

  //   @media (max-width: 1280px) {
  //     height: 600px;
  //   }

  //   @media (max-width: 1024px) {
  //     height: auto;
  //   }
  //
`;

export const SwiperContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 600px;
  overflow: visible;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const SlideItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 40px; /* 하단 여백 */
  left: 50px; /* 왼쪽 여백 */
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); /* 텍스트 가독성 개선 */
  max-width: 50%;
  padding: 20px;
  margin-bottom: 40px;
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
`;

// ---------------------------MainBanner GSAP CSS
/* GSAP Floating Images */
export const FloatingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
`;

export const FloatingImage = styled.img`
  position: absolute;
  width: ${(props) => props.size || '50px'};
  height: auto;
  opacity: 1;
  z-index: 300;
`;

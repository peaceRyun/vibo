import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  margin-bottom: 60px;
  // min-height: 600px;
  position: relative;
  overflow: hidden;
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
  min-height: 600px;
  max-height: 600px;
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
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8); /* 텍스트 가독성 개선 */

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

  @media (min-width: 1700px) {
    top: 80px;
    height: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1450px) {
    // height: calc(100% - ((1450px - 100vw) * 0.1));
    top: calc(-100px + ((1450px - 100vw) * 0.1));
  }

  @media (max-width: 1219px) {
    top: -60px;
    height: 79%;
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
  min-width: 600px;
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
  z-index: ;
`;

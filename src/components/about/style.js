// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';
const gradientWave = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;
export const AboutBanner = styled.div`
  position: relative;
  color: white;
  width: 100%;
  height: 500px;
  overflow: hidden;

  .banner-container {
    width: 100%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .dimmed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%);
      z-index: 0;
    }
  }

  .banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    max-width: 800px;
    z-index: 1;

    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      font-size: 64px;
      font-weight: 900;
      white-space: nowrap;

      .default {
        color: #fff;
        font-weight: 700;
      }

      // .special {
      //   color: #07ffe6;
      // }
    }

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      font-size: 60px;
      font-weight: 700;

      .default {
        color: #fff;
      }

      .vibo {
        color: #07ffe6;
        font-weight: 900;
        font-size: 64px;
      }
    }
    p {
      display: flex;
      flex-direction: column;

      .description1 {
        font-size: 24px;
        font-weight: 700;
        margin-top: 12px;
        color: #d1d2d4;
      }
      .description2 {
        font-size: 18px;
        font-weight: 600;

        color: #d1d2d4;
      }
    }

    .start-button {
      margin-top: 40px;
      padding: 16px 108px;
      font-size: 18px;
      font-weight: 800;
      color: black;
      background-color: #07ffe6;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background-color: #05c6bb;
      }
    }
  }

  @media (max-width: 1024px) {
    .banner-content {
      h1 {
        font-size: 40px;
      }
      h2 {
        font-size: 30px;
      }
      .description {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    .banner-content {
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 24px;
      }
      .description {
        font-size: 14px;
      }
    }
  }
`;

export const OriginalContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .text-wrapper {
    max-width: 1200px;
    text-align: center;
    padding: 0 20px;
  }

  h2 {
    font-family: NanumSquare Neo;
    font-size: 60px;
    font-weight: 800;
    line-height: 100px;
    text-align: center;
    letter-spacing: 0.01em;
  }

  p {
    font-family: NanumSquare Neo;
    font-weight: 800;
    font-size: 30px;
    color: var(--gray-500);
  }
`;

export const OriginalWrapper = styled.div`
  position: relative;
  text-align: left;
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0;

  .content-container {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    max-width: 1440px;
    width: 100%;
  }

  .text-side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    gap: 140px;
  }

  h1 {
    font-family: NanumSquare Neo;
    font-size: 80px;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 20px;
    text-transform: uppercase;
    background: linear-gradient(to top, #07ffe6 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  .gradient-text {
  }

  .big-card {
    width: 100%;
    max-width: 500px;
    min-width: 300px;
    border-radius: 10px;
  }

  .image-side {
    display: flex;
    flex-direction: row;
    gap: 40px;
    // width: 50%;
  }

  .small-card {
    width: 100%;
    height: 100%;
    min-width: 200px;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    .content-container {
      flex-direction: column;
      align-items: center;
    }

    .text-side {
      align-items: center;
      width: 100%;
    }

    .image-side {
      flex-direction: row;
      justify-content: center;
      width: 100%;
    }

    .big-card,
    .small-card {
      max-width: 600px;
    }
  }
`;
export const AboutPswiperWrapper = styled.div`
  width: 100%;
  // padding: 0 0;

  overflow: hidden;
  position: absolute;
  top: 300px;

  .slider-container {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .slide-track {
    display: flex;

    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.02s linear;
  }

  .slide {
    width: 380px;
    height: 225px;
    margin: 0 20px;
    // background: #111;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide:last-child {
    margin-right: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
export const ContentContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 920px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .title {
    position: absolute;
    top: 70px;
    h2 {
      font-family: NanumSquare Neo;
      font-size: 60px;
      font-weight: 800;
      line-height: 100px;
      text-align: center;
      letter-spacing: 0.01em;
    }
    p {
      font-family: NanumSquare Neo;
      font-weight: 700;
      font-size: 30px;
      color: var(--gray-500);
    }
  }

  button {
    position: absolute;
    bottom: 0;
    background-color: var(--primary-base);
    width: 239px;
    height: 51px;
    font-weight: 800;
    font-size: 24px;
    border-radius: 50px;
  }
`;

export const FAQContainer = styled.div`
  width: 100%;
  max-width: 2800px;
  // height: 107px;
  margin: 100px auto;
  padding: 50px calc((100vw - 1360px) / 2);
  background-color: #191919;
  color: white;
  border-radius: 10px;
  text-align: center;
  background: #000;

  .faq-title {
    font-size: 60px;
    font-weight: 800;
    color: white;
    margin-bottom: 64px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: flex-start;
  }
`;

export const FAQItem = styled.div`
  background-color: ${({ active }) => (active ? '#2a2a2a' : '#3e3e3f')};
  color: ${({ active }) => (active ? '#07ffe6' : '#D1D2D4')};
  padding: 30px 40px;
  margin-bottom: ${({ active }) => (active ? '10px' : '35px')};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 34px;
  transition: background 0.3s ease-in-out, margin-bottom 0.3s ease-in-out;
  width: 100%;
  max-width: 1500px;
  height: 95px;

  &:hover {
    color: #07ffe6;
  }
`;

export const Question = styled.div`
  flex-grow: 1;
  text-align: left;
  font-weight: 700;
`;

export const Icon = styled.span`
  transition: transform 0.3s ease;
  transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const Answer = styled.div`
  font-size: 20px;
  text-align: left;
  padding: 10px 30px;
  color: #d1d2d4;
`;

export const AnswerWrapper = styled.div`
  max-width: 1470px;
  max-height: ${({ active }) => (active ? '100px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  background-color: #2a2a2a;
  border-radius: 6px;
  margin: ${({ active }) => (active ? '0 0 30px 30px;' : '0')};

  padding: ${({ active }) => (active ? '15px' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
`;

export const LastSectionWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #191919;
  color: white;
  text-align: center;
  gap: 100px;
  margin: 100px auto;

  .logo {
    width: 160px;
    height: 160px;
    object-fit: contain;
    // margin-top: 100px;
  }

  h2 {
    font-size: 54px;
    font-weight: 800;
  }

  .login-btn {
    // margin-top: 40px;
    padding: 17px 85px;
    background-color: #07ffe6;
    color: black;
    font-size: 24px;
    font-weight: 800;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background-color: #06dbbf;
    }

    &:active {
      background-color: #04998a;
    }
  }
`;

// ----------------------About M style

export const AboutSwiperWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;

  .about-swiper {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease-in-out;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 190px;
  }

  .swiper-pagination-bullet {
    background: #ffffff;
    opacity: 0.5;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #07ffe6;
    opacity: 1;
    width: 24px;
    border-radius: 10px;
  }
  .swiper-slide {
    opacity: 1; 
    transition: opacity 1s ease-in-out; 
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 432px;
  display: flex;
  flex-direction: column;
  // position: absolute;
  bottom: -100px;
  left: 0;
  gap: 30px;
  align-items: center;
  white-space: nowrap;
  justify-content: flex-end;
  position: relative;
  color: white;
  text-align: center;
  padding: 20px;

  .TitleBackground {
    position: absolute;
    bottom: -160px;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 600px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 10%);

    z-index: 1;
    
`;

export const SlideTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  bottom: 220px;

  .LastTitle {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);

    // .bold {
    //   position: absolute;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   top: -250px;
    //   font-family: metrobarat;
    //   font-size: 100px;
    //   letter-spacing: 3px;
    //   font-weight: 700;
    // }
    .light {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 24px;
      font-weight: 700;
    }
    .BoldLight {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 40px;
    }
  }
`;

export const SlideSubtitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #a8a9ad;
  margin-bottom: 100px;
  position: absolute;
  z-index: 100;

  .highlight {
    color: #06dbbf;
    font-weight: 700;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .main-btn,
  .sub-btn {
    width: 346px;
    height: 52px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    @media (max-width: 600px) {
      width: 346px;
      height: 52px;
      font-size: 16px;
    }

    @media (min-width: 601px) and (max-width: 1024px) {
      width: 560px;
      height: 52px;
      font-size: 16px;
    }
  }

  .main-btn {
    background: #06dbbf;
    color: white;
    border: none;
    bottom: 100px;
  }

  .sub-btn {
    background: none;
    color: white;
    border: 1px solid white;
    bottom: 30px;
  }
`;

export const ImgContainer = styled.div`
  display: grid;
  // grid-template-rows: repeat(0, auto);
  grid-template-columns: repeat(6, auto);
  gap: 14px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 0;
  overflow: visible;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  // background-color: #1b1b1b;
  .slide1card {
    min-width: 100px;
    min-height: 144px;
    width: auto;
    height: auto;
    max-height: 160px;
    object-fit: contain;
    overflow: visible;
  }
`;

export const LiveImgContainer = styled.div`
  display: flex;
  position: absolute;
  top: -200px;
  left: 0;
  width: 100%;
  gap: 10px;
  white-space: nowrap;
  overflow: visible;

  .live-slide {
    width: 700px;
    height: 830px;
    object-fit: contain;
  }
`;

export const LastContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const ViboText = styled.div`
  position: absolute;
  font-size: 100px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'metrobarat', sans-serif;
  opacity: 0;
`;
export const FinalViboText = styled.div`
  position: absolute;
  font-size: 100px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'metrobarat', sans-serif;
  background: linear-gradient(90deg, #07ffe6, #ffffff, #07ffe6);
  background-size: 400% 100%;
  display: inline-block;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientWave} 3s linear infinite;
`;

import styled from 'styled-components';

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
  }

  .gradient-text {
    background: linear-gradient(to top, #07ffe6 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  background: #000;
  padding: 20px 0;
  overflow: hidden;
  position: absolute;
  top: 300px;

  .slider-container {
    position: relative;
    width: 100%;
    height: 300px;
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
    width: 474px;
    height: 281px;
    margin: 10px;
    background: #111;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
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
  height: 1100px;
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
  max-width: 1700px;
  height: 107px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #191919;
  color: white;
  border-radius: 10px;
  text-align: center;

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

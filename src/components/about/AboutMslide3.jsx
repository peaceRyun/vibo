import { SlideContainer, SlideTitle, ButtonWrapper } from './style';

const AboutMslide3 = () => {
  return (
    <SlideContainer>
      <SlideTitle>
        <span className="bold">VIBO</span>
        <br />
        지금 시작해보세요
      </SlideTitle>
      <ButtonWrapper>
        <button className="main-btn">VIBO 시작하기</button>
        <button className="sub-btn">다른 계정으로 로그인 하기</button>
      </ButtonWrapper>
    </SlideContainer>
  );
};

export default AboutMslide3;

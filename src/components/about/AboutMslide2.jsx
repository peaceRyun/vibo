import { SlideContainer, SlideTitle, SlideSubtitle, ButtonWrapper } from './style';

const AboutMslide2 = () => {
  return (
    <SlideContainer>
      <SlideTitle>
        실시간으로 즐기는
        <br />
        라이브 & 콘텐츠 랭킹
      </SlideTitle>
      <SlideSubtitle>
        <span className="highlight">VIBO</span>에서 지금 가장 인기 있는
        <br />
        콘텐츠를 한눈에 확인하세요.
      </SlideSubtitle>
      <ButtonWrapper>
        <button className="main-btn">VIBO 시작하기</button>
        <button className="sub-btn">다른 계정으로 로그인 하기</button>
      </ButtonWrapper>
    </SlideContainer>
  );
};

export default AboutMslide2;

import { SlideContainer, SlideTitle, SlideSubtitle, ButtonWrapper } from './style';
const AboutMslide1 = () => {
  return (
    <SlideContainer>
      <SlideTitle>
        요즘 뜨는 모든 콘텐츠
        <br />
        무제한 스트리밍
      </SlideTitle>
      <SlideSubtitle>
        <span className="highlight">바이보+</span>부터
        <br />
        드라마, 예능, 영화, 해외 시리즈까지
      </SlideSubtitle>
      <ButtonWrapper>
        <button className="main-btn">VIBO 시작하기</button>
        <button className="sub-btn">다른 계정으로 로그인 하기</button>
      </ButtonWrapper>
    </SlideContainer>
  );
};

export default AboutMslide1;

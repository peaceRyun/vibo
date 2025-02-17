import AboutMcard from './AboutMcard';
import { SlideContainer, SlideTitle, SlideSubtitle } from './style';

const AboutMslide1 = () => {
  return (
    <>
      <SlideContainer>
        <div className="TitleBackground"></div>
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
      </SlideContainer>
    </>
  );
};

export default AboutMslide1;

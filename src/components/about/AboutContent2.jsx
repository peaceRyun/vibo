// 어바웃 PC버전 컨텐츠 2
import { OriginalContainer, OriginalWrapper } from './style';
const AboutContent2 = () => {
  return (
    <>
      <OriginalContainer>
        <div className="text-wrapper">
          <h2>시리즈, 영화, 다양한 TV 콘텐츠를</h2>
          <p>언제 어디서나 스트리밍 해보세요.</p>
        </div>
      </OriginalContainer>
      <OriginalWrapper>
        <div className="content-container">
          <div className="text-side">
            <h1>
              <span className="gradient-text">VIBO</span>
              <br />
              <span className="gradient-text">Original</span>
              <br />
              <span className="gradient-text">Contents</span>
            </h1>
            <img src="/about/about_original01.png" alt="about-original01" className="big-card" />
          </div>
          <div className="image-side">
            <img src="/about/about_original02.png" alt="about-original02" className="small-card" />
            <img src="/about/about_original03.png" alt="about-original03" className="small-card" />
          </div>
        </div>
      </OriginalWrapper>
    </>
  );
};

export default AboutContent2;

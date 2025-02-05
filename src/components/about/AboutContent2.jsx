// 어바웃 PC버전 컨텐츠 2
import { OriginalContainer, OriginalWrapper } from './style';
const AboutContent2 = () => {
  return (
    <>
      <OriginalContainer>
        <div>
          <h2>시리즈, 영화, 다양한 TV 콘텐츠를</h2>
          <p>언제 어디서나 스트리밍 해보세요</p>
        </div>
      </OriginalContainer>
      <OriginalWrapper>
        <div className="card">
          <div className="card01">
            <h1>
              VIBO
              <br />
              Original
              <br />
              Contents
            </h1>
            <img src="/about/about_original01.png" alt="about-original01" />
          </div>
          <div className="card02">
            <img src="/about/about_original02.png" alt="about-original02" />
          </div>
          <div className="card03">
            <img src="/about/about_original03.png" alt="about-original03" />
          </div>
        </div>
      </OriginalWrapper>
    </>
  );
};

export default AboutContent2;

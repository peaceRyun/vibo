// 어바웃 PC
import { Container } from '../../common/style';
import { AboutBanner, OriginalContainer, OriginalWrapper } from './style';
const AboutP = () => {
  return (
    <>
      <Container />
      {/* About 메인 배너 */}
      <AboutBanner>
        <img src="/public/about/about_banner.png" alt="aboutbanner" />
        <div className="banner-content">
          <h1>VIBO Special 콘텐츠는</h1>
          <br />
          <h1>오직 VIBO+ 에서만</h1>
          <p>매달 새롭게 추가되는 콘텐츠를</p>
          <br />
          <p>3가지 멤버십으로 시작해 보세요</p>
        </div>
      </AboutBanner>
      <section>
        <OriginalContainer>
          <div>
            <h2>시리즈, 영화, 다양한 TV 콘텐츠를</h2>
            <p>언제 어디서나 스트리밍 해보세요</p>
          </div>
          <OriginalWrapper>
            <h1>
              VIBO
              <br />
              <h1>Original</h1>
              <br />
              <h1>Contents</h1>
            </h1>
          </OriginalWrapper>
        </OriginalContainer>
      </section>
    </>
  );
};

export default AboutP;

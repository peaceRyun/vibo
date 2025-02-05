// 어바웃 PC버전 컨텐츠 1
import { AboutBanner } from './style';
const AboutContent1 = () => {
  return (
    <>
      <AboutBanner>
        <div className="banner-container">
          <img src="/about/about_banner.png" alt="aboutbanner" />
          <div className="banner-content">
            <h1>
              <span className="default">VIBO</span>
              <span className="special">Special 콘텐츠</span>
              <span className="default">는</span>
            </h1>
            <h2>
              <span className="default">오직</span>
              <span className="vibo">VIBO+</span>
              <span className="default">에서만</span>
            </h2>
            <h2>
              <p>
                매달 새롭게 추가되는 콘텐츠를
                <br />
                3가지 멤버십으로 시작해 보세요
              </p>
            </h2>
          </div>
        </div>
      </AboutBanner>
    </>
  );
};

export default AboutContent1;

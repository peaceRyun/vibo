import AboutPswiper from './AboutPswiper';
import { ContentContainer } from './style';

const AboutContent3 = () => {
  return (
    <>
      <ContentContainer>
        <div className="title">
          <h2>요즘 뜨는 모든 콘텐츠</h2>
          <p>
            5,500원으로 시작하세요.
            <br />
            멤버십은 언제든지 해지 가능합니다.
          </p>
        </div>
        <AboutPswiper />
        <button className="btn">지금 시작하기</button>
      </ContentContainer>
    </>
  );
};

export default AboutContent3;

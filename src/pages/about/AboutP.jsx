// 어바웃 PC
import { Container } from '../../common/style';
import AboutContent1 from '../../components/about/AboutContent1';
import AboutContent2 from '../../components/about/AboutContent2';
import AboutContent3 from '../../components/about/AboutContent3';
import AboutContent4 from '../../components/about/AboutContent4';
import AboutPswiper from '../../components/about/AboutPswiper';
import { AboutWrapper } from './style';

const AboutP = () => {
  return (
    <>
      <Container>
        <AboutWrapper>
          <section>
            <AboutContent1 />
            <AboutContent2 />
            <AboutContent3 />
          </section>
          <AboutContent4 />
        </AboutWrapper>
      </Container>
    </>
  );
};

export default AboutP;

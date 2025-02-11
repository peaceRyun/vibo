// 어바웃 PC
import AboutContent1 from '../../components/about/AboutContent1';
import AboutContent2 from '../../components/about/AboutContent2';
import AboutContent3 from '../../components/about/AboutContent3';
import AboutContent4 from '../../components/about/AboutContent4';
import AboutContent5 from '../../components/about/AboutContent5';
import AboutPswiper from '../../components/about/AboutPswiper';
import { AboutWrapper, Inner } from './style';

const AboutP = () => {
  return (
    <>
      <Inner>
        <AboutWrapper>
          <section>
            <AboutContent1 />
            <AboutContent2 />
            <AboutContent3 />
          </section>
          <AboutContent4 />
          <AboutContent5 />
        </AboutWrapper>
      </Inner>
    </>
  );
};

export default AboutP;

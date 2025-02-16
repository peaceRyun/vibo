// 어바웃 모바일
import AboutMButton from '../../components/about/AboutMButton';
import AboutMswiper from '../../components/about/AboutMswiper';

import { AboutMInner } from './style';

const AboutM = () => {
  return (
    <>
      <AboutMInner>
        <AboutMswiper />
        <AboutMButton />
      </AboutMInner>
    </>
  );
};

export default AboutM;

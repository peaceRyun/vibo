// 어바웃 모바일
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import AboutMButton from '../../components/about/AboutMButton';
import AboutMswiper from '../../components/about/AboutMswiper';

import { AboutMInner } from './style';

const AboutM = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const aboutMRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    gsap.fromTo(aboutMRef.current, { opacity: 0 }, { opacity: 1.5, duration: 1.5, ease: 'power2.out' });
  }, [isMobile]);
  if (!isMobile) return null;
  return (
    <AboutMInner className="about-m-container" ref={aboutMRef}>
      <AboutMswiper activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <AboutMButton />
    </AboutMInner>
  );
};

export default AboutM;

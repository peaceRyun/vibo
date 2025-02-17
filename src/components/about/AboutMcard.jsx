import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ImgContainer } from './style';

const AboutMcard = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((img, index) => {
      if (img) {
        const col = index % 2;
        const direction = col === 0 ? '-50px' : '50px';

        gsap.to(img, {
          y: direction,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    });
  }, []);

  return (
    <ImgContainer>
      {[...Array(12)].map((_, i) => (
        <img
          key={i}
          className="slide1card"
          src={`/about/aboutM_0${(i % 8) + 1}.png`}
          alt={`Slide ${i + 1}`}
          ref={(el) => (imgRefs.current[i] = el)}
        />
      ))}
    </ImgContainer>
  );
};

export default AboutMcard;

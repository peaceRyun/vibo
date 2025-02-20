import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FinalViboText, ViboText, LastContainer } from './style';

const AboutMlast = ({ activeIndex }) => {
  const textRefs = useRef([]);
  const finalTextRef = useRef(null);

  useEffect(() => {
    if (activeIndex === 2) {
      gsap.set(finalTextRef.current, { opacity: 0, y: -50 });

      gsap.fromTo(
        textRefs.current,
        {
          opacity: 0,
          scale: 0,
          x: () => Math.random() * 800 - 400,
          y: () => Math.random() * 500 - 250,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: -50,
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.1,
          onComplete: () => {
            gsap.to(textRefs.current, {
              opacity: 0,
              duration: 0.5,
              delay: 0,
            });
            gsap.to(finalTextRef.current, {
              opacity: 1,
              duration: 0.7,
              onComplete: () => {
                gsap.to(finalTextRef.current, {
                  backgroundPosition: '200% 50%',
                  duration: 3,
                  repeat: -1,
                  ease: 'linear',
                });
              },
            });
          },
        }
      );
    }
  }, [activeIndex]);

  return (
    <LastContainer>
      {Array.from({ length: 10 }).map((_, i) => (
        <ViboText key={i} ref={(el) => (textRefs.current[i] = el)}>
          VIBO
        </ViboText>
      ))}

      <FinalViboText ref={finalTextRef}>VIBO</FinalViboText>
    </LastContainer>
  );
};

export default AboutMlast;

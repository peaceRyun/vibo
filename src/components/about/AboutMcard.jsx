import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ImgContainer } from './style';

const AboutMcard = () => {
  const imgRefs = useRef([]); // ✅ useRef를 컴포넌트 내부에서 선언

  useEffect(() => {
    imgRefs.current.forEach((img, index) => {
      if (img) {
        const col = index % 2; // 2개의 열을 구분 (왼쪽 0, 오른쪽 1)
        const direction = col === 0 ? '-50px' : '50px'; // 왼쪽은 위로, 오른쪽은 아래로 이동

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
      {[...Array(10)].map((_, i) => (
        <img
          key={i}
          className="slide1card"
          src={`/about/aboutM_0${(i % 8) + 1}.png`}
          alt={`Slide ${i + 1}`}
          ref={(el) => (imgRefs.current[i] = el)} // ✅ 이미지 요소 참조 추가
        />
      ))}
    </ImgContainer>
  );
};

export default AboutMcard;

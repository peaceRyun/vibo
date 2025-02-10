import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { AboutPswiperWrapper } from './style';
import { useEffect, useRef } from 'react';

const images = [
  '/about/about_all01.png',
  '/about/about_all02.png',
  '/about/about_all03.png',
  '/about/about_all04.png',
  '/about/about_all05.png',
  '/about/about_all06.png',
  '/about/about_all07.png',
  '/about/about_all08.png',
  '/about/about_all09.png',
];

const AboutPswiper = () => {
  const topTrackRef = useRef(null);
  const bottomTrackRef = useRef(null);

  useEffect(() => {
    const createSlider = (track, direction = 'left', speed = 1) => {
      let position = 0;

      const animate = () => {
        if (direction === 'left') {
          position -= speed;
          if (Math.abs(position) >= track.scrollWidth / 2) {
            position = 0;
          }
        } else {
          position += speed;
          if (position >= track.scrollWidth / 2) {
            position = 0;
          }
        }

        track.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    };

    if (topTrackRef.current) {
      createSlider(topTrackRef.current, 'left', 1);
    }
    if (bottomTrackRef.current) {
      createSlider(bottomTrackRef.current, 'right', 1);
    }
  }, []);

  return (
    <AboutPswiperWrapper>
      <div className="slider-container">
        <div className="slide-track" ref={topTrackRef}>
          {[...images, ...images].map((src, index) => (
            <div className="slide" key={`top-${index}`}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="slider-container" style={{ marginTop: '20px' }}>
        <div className="slide-track" ref={bottomTrackRef}>
          {[...images, ...images].map((src, index) => (
            <div className="slide" key={`bottom-${index}`}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </AboutPswiperWrapper>
  );
};

export default AboutPswiper;

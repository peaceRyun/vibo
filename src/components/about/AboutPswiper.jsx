import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { AboutPswiperWrapper } from './style';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const images = [
    'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all01.png',
    'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all02.png',
    'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all03.png',
    'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all04.png',
    'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all05.png',
    'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all06.png',
    'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all07.png',
    'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all08.png',
    'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all09.png',
];

const AboutPswiper = () => {
    const topTrackRef = useRef(null);
    const bottomTrackRef = useRef(null);

    useEffect(() => {
        if (topTrackRef.current && bottomTrackRef.current) {
            gsap.set(topTrackRef.current, { x: 0 });
            gsap.set(bottomTrackRef.current, { x: '-50%' });

            gsap.to(topTrackRef.current, {
                x: '-50%',
                duration: 15,
                repeat: -1,
                ease: 'linear',
            });

            gsap.to(bottomTrackRef.current, {
                x: '0%',
                duration: 15,
                repeat: -1,
                ease: 'linear',
            });
        }
    }, []);

    return (
        <AboutPswiperWrapper>
            <div className='slider-container'>
                <div className='slide-track' ref={topTrackRef}>
                    {[...images, ...images].map((src, index) => (
                        <div className='slide' key={`top-${index}`}>
                            <img src={src} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='slider-container' style={{ marginTop: '20px' }}>
                <div className='slide-track' ref={bottomTrackRef}>
                    {[...images, ...images].map((src, index) => (
                        <div className='slide' key={`bottom-${index}`}>
                            <img src={src} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </AboutPswiperWrapper>
    );
};

export default AboutPswiper;

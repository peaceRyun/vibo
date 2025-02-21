import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { LiveImgContainer } from './style';

const AboutMcard2 = ({ activeIndex }) => {
    const liveImgRef = useRef(null);

    useEffect(() => {
        if (liveImgRef.current) {
            if (activeIndex === 1) {
                gsap.to(liveImgRef.current, {
                    x: '-200%',
                    duration: 5,
                    repeat: -1,
                    ease: 'linear',
                });
            }
        }
    }, [activeIndex]);
    return (
        <LiveImgContainer ref={liveImgRef}>
            <img
                className='live-slide'
                src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about\aboutM_09.png'
                alt='Live Slide 9'
            />
            <img
                className='live-slide'
                src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about\aboutM_10.png'
                alt='Live Slide 10'
            />
        </LiveImgContainer>
    );
};

export default AboutMcard2;

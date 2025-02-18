import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AboutContent1 from '../../components/about/AboutContent1';
import AboutContent2 from '../../components/about/AboutContent2';
import AboutContent3 from '../../components/about/AboutContent3';
import AboutContent4 from '../../components/about/AboutContent4';
import AboutMButton from '../../components/about/AboutMButton';
import AboutMswiper from '../../components/about/AboutMswiper';
import { AboutWrapper, Inner, AboutMInner } from './style';

const About = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
    const [activeIndex, setActiveIndex] = useState(0);
    const aboutMRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isDesktop && aboutMRef.current) {
            gsap.fromTo(aboutMRef.current, { opacity: 0 }, { opacity: 1.5, duration: 1.5, ease: 'power2.out' });
        }
    }, [isDesktop]);

    return (
        <>
            {isDesktop ? (
                <Inner>
                    <AboutWrapper>
                        <section>
                            <AboutContent1 />
                            <AboutContent2 />
                            <AboutContent3 />
                        </section>
                        <AboutContent4 />
                    </AboutWrapper>
                </Inner>
            ) : (
                <AboutMInner className='about-m-container' ref={aboutMRef}>
                    <AboutMswiper activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                    <AboutMButton />
                </AboutMInner>
            )}
        </>
    );
};

export default About;

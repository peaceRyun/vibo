import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import gsap from 'gsap';
import 'swiper/css';
import {
  BannerWrapper,
  FloatingContainer,
  SlideContent,
  SlideImage,
  SlideItem,
  Subtitle,
  SwiperContainer,
  Title,
} from './Teststyle';

const TestMainBanner = () => {
  const containerRef = useRef(null);
  const floatingRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [yPosition, setYPosition] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1600) {
        setYPosition(800);
      } else if (windowWidth > 1280) {
        setYPosition(700);
      } else if (windowWidth > 1024) {
        setYPosition(400);
      } else {
        setYPosition(300);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    const bannerWidth = containerRef.current.clientWidth;
    const totalItems = 36;
    const balloonImages = [
      { src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_v.png', left: '15%' },
      { src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_i.png', left: '35%' },
      { src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_b.png', left: '55%' },
      { src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_o.png', left: '75%' },
    ];
    const floatingElements = [];

    floatingRefs.current.forEach((el) => el.remove());
    floatingRefs.current = [];

    for (let i = 0; i < totalItems; i++) {
      const img = document.createElement('img');
      img.src = `https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_${String(i + 1).padStart(
        2,
        '0'
      )}.png`;
      img.classList.add('floating-item');
      img.style.position = 'absolute';
      img.style.width = 'auto';
      img.style.height = 'auto';
      img.style.top = '-100px';
      img.style.left = `${Math.random() * (bannerWidth - 100)}px`;
      containerRef.current.appendChild(img);
      floatingElements.push(img);
    }

    balloonImages.forEach(({ src, left }) => {
      const img = document.createElement('img');
      img.src = src;
      img.classList.add('floating-balloon');
      img.style.position = 'absolute';
      img.style.width = 'auto';

      img.style.top = '-100px';
      img.style.left = left;
      containerRef.current.appendChild(img);
      floatingElements.push(img);
    });

    floatingRefs.current = floatingElements;

    floatingElements.forEach((el) => {
      const isBalloon = el.classList.contains('floating-balloon');
      const isAccessory = el.classList.contains('floating-item');
      const randomDuration = isBalloon ? 5 + Math.random() * 3 : 2 + Math.random() * 1.5;

      gsap.to(el, {
        y: isAccessory ? yPosition - 50 : yPosition - 100,
        x: isBalloon ? `+=${Math.random() * 100 - 50}` : `+=${Math.random() * 80 - 40}`,
        rotation: isBalloon ? 0 : Math.random() * 360,
        duration: randomDuration,
        ease: 'power2.out',
        onComplete: () => {
          if (isBalloon) {
            gsap.to(el, {
              y: '+=20',
              repeat: -1,
              yoyo: true,
              duration: 2,
              ease: 'sine.inOut',
            });
          }
        },
      });
    });

    setTimeout(() => {
      gsap.to(floatingElements, {
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
      });
    }, 2000);

    return () => {
      floatingElements.forEach((el) => el.remove());
    };
  }, [isMobile, yPosition]);

  const banners = [
    {
      id: 1,
      image: '/mainhome/mainbanner_01.jpeg',
      title: '인사이드아웃',
      subtitle: '괜찮아, 다 잘될거야! 우리가 행복하게 만들어줄게',
      alt: '배너 1',
    },
    {
      id: 2,
      image: '/mainhome/mainbanner_02.jpeg',
      title: '조명가게',
      subtitle: '강풀 작가의 새로운 미스터리 드라마',
      alt: '배너 2',
    },
    {
      id: 3,
      image: '/mainhome/mainbanner_03.jpeg',
      title: '트리거',
      subtitle: '정의와 생존의 한계에서 펼쳐지는 스릴러 탐사보도!',
      alt: '배너 3',
    },
  ];

  return (
    <BannerWrapper>
      {!isMobile && <FloatingContainer ref={containerRef} />}
      <SwiperContainer>
        <Swiper
          key={isMobile}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1.1}
          spaceBetween={20}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <SlideItem>
                <SlideImage src={banner.image} alt={banner.title} />
                <SlideContent>
                  <Title>{banner.title}</Title>
                  <Subtitle>{banner.subtitle}</Subtitle>
                </SlideContent>
              </SlideItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </BannerWrapper>
  );
};

export default TestMainBanner;

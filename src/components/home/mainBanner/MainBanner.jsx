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
  LogoImage,
  OverlayFilter,
} from './style';

const MainBanner = () => {
  const containerRef = useRef(null);
  const floatingRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023.99);
  const [yPosition, setYPosition] = useState(600);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!containerRef.current || isMobile) return;
    const bannerHeight = containerRef.current.clientHeight;
    const bannerWidth = containerRef.current.clientWidth;
    const totalItems = 36;
    const floatingElements = [];
    //가로 아이템 영역을 잡아줌
    const maxItemSize = 10;
    const slideWidth = Math.min(1600, window.innerWidth);

    const balloonImages = [
      { src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_v.png', left: '15%' },
      { src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_i.png', left: '35%' },
      { src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_b.png', left: '55%' },
      { src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_o.png', left: '75%' },
    ];

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
      img.style.top = `${-Math.random() * 100}px`;
      // 가로 영역을 보고 줄일거임
      // img.style.left = `${Math.random() * (1500 - maxItemSize)}px`;
      // 반응형으로 위에꺼를 적용
      // img.style.left = `${Math.random() * (Math.min(1500, slideWidth) - maxItemSize)}px`;
      img.style.left = `${Math.random() * (slideWidth - maxItemSize)}px`; // ✅ 반응형 적용

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
      const isBalloon = el.classList.contains('floating-balloon'); // 풍선인지 판별
      const isAccessory = el.classList.contains('floating-item'); // 일반 악세사리인지 판별
      const randomDuration = isBalloon ? 8 + Math.random() * 4 : 2 + Math.random() * 1.5;
      const randomX = Math.random() * -10;
      gsap.to(el, {
        y: isBalloon ? yPosition - 150 : bannerHeight - 80, // 바닥까지 떨어짐
        x: isBalloon ? `+=${randomX}` : `+=${Math.random() * 40 - 10}`,
        rotation: Math.random() * 360, // 랜덤 회전 빙글빙글
        duration: randomDuration,
        ease: isBalloon ? 'power2.out' : 'bounce.out',
        onComplete: () => {
          if (isBalloon) {
            gsap.to(el, {
              x: `+=${Math.random() * 50 - 25}`,
              y: '+=20',
              repeat: -1,
              yoyo: true,
              duration: 2.5 + Math.random(),
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

      // 필터 제거 (GSAP 애니메이션 끝난 후)
      setTimeout(() => {
        setIsOverlayVisible(false);
      }, 1000);
    }, 2000);
  }, [isMobile, yPosition]);

  const banners = [
    {
      id: 1,
      image:
        'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img01.webp',
      logo: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo01.webp',
      alt: '배너 1',
    },
    {
      id: 2,
      image:
        'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img02.webp',
      logo: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo02.webp',
      alt: '배너 2',
    },
    {
      id: 3,
      image:
        'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img03.webp',
      logo: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo03.webp',
      alt: '배너 3',
    },
    {
      id: 4,
      image:
        'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img04.webp',
      logo: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo04.webp',
      alt: '배너 4',
    },
    {
      id: 5,
      image:
        'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img05.webp',
      logo: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo05.webp',
      alt: '배너 5',
    },
    {
      id: 6,
      image:
        'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img06.webp',
      logo: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo06.webp',
      alt: '배너 6',
    },
  ];

  return (
    <BannerWrapper>
      {!isMobile && <FloatingContainer ref={containerRef} />}
      {/* 기존 */}
      {/* {isOverlayVisible && <OverlayFilter />} */}
      <SwiperContainer>
        <Swiper
          key={isMobile}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          // loop={true}
          slidesPerView={1.1}
          spaceBetween={20}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={banner.id}>
              <SlideItem style={{ position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                  {isOverlayVisible && activeSlide === index && (
                    <OverlayFilter
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 2,
                      }}
                    />
                  )}
                  <SlideImage src={banner.image} alt={banner.title} />
                </div>
                <SlideContent>
                  <LogoImage src={banner.logo} alt="배너 로고" />
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

export default MainBanner;

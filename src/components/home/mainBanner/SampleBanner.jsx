// 메인 배너 컨테이너 (hj)
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import MainItem from './MainItem';
import { BannerWrapper, SlideContent, SlideImage, SlideItem, Subtitle, SwiperContainer, Title } from './Samplestyle';

const MainBanner = () => {
    const banners = [
        {
            id: 1,
            image: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/mainbanner_01.jpeg',
            title: '인사이드아웃',
            subtitle: '괜찮아, 다 잘될거야! 우리가 행복하게 만들어줄게',
            alt: '배너 1',
        },
        {
            id: 2,
            image: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/mainbanner_02.jpeg',
            title: '조명가게',
            subtitle: '강풀 작가의 새로운 미스터리 드라마',
            alt: '배너 2',
        },
        {
            id: 3,
            image: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/mainbanner_03.jpeg',
            title: '트리거',
            subtitle: '정의와 생존의 한계에서 펼쳐지는 스릴러 탐사보도!',
            alt: '배너 3',
        },
    ];

    return (
        <>
            <BannerWrapper>
                <SwiperContainer>
                    <Swiper
                        className='custom-swiper'
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        slidesPerView={1.1}
                        // centeredSlides={true}
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
        </>
    );
};

export default MainBanner;

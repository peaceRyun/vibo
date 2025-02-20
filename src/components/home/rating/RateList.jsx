import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import RateItem from './RateItem';
import { LeftArea, RateTitle, RightArea, Section } from './style';

const RateList = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        '/mainhome/weeklyitem_01.webp',
        '/mainhome/weeklyitem_02.webp',
        '/mainhome/weeklyitem_03.webp',
        '/mainhome/weeklyitem_04.webp',
        '/mainhome/weeklyitem_05.webp',
        '/mainhome/weeklyitem_01.webp',
        '/mainhome/weeklyitem_02.webp',
        '/mainhome/weeklyitem_03.webp',
        '/mainhome/weeklyitem_04.webp',
        '/mainhome/weeklyitem_05.webp',
        '/mainhome/weeklyitem_01.webp',
        '/mainhome/weeklyitem_02.webp',
        '/mainhome/weeklyitem_03.webp',
        '/mainhome/weeklyitem_04.webp',
        '/mainhome/weeklyitem_05.webp',
        '/mainhome/weeklyitem_01.webp',
        '/mainhome/weeklyitem_02.webp',
        '/mainhome/weeklyitem_03.webp',
        '/mainhome/weeklyitem_04.webp',
        '/mainhome/weeklyitem_05.webp',
    ];

    return (
        <Section>
            <LeftArea>
                <RateTitle>인기 드라마</RateTitle>
            </LeftArea>

            <RightArea>
                <RateSwiper
                    spaceBetween={60} /* 슬라이드 간의 간격을 넉넉하게 설정 */
                    slidesPerView={3.5}
                    centeredSlides={false} /* 메인 슬라이드가 강조되도록 설정 */
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        390: { slidesPerView: 1, spaceBetween: 50 },
                        600: { slidesPerView: 1.3, spaceBetween: 15 },
                        768: { slidesPerView: 2.3, spaceBetween: 15 },
                        1024: { slidesPerView: 3.3, spaceBetween: 15 },
                    }}
                >
                    {images.map((imgSrc, index) => (
                        <SwiperSlide key={index}>
                            <RateItem image={imgSrc} rank={index + 1} isMainSlide={index === activeIndex} />
                        </SwiperSlide>
                    ))}
                </RateSwiper>
            </RightArea>
        </Section>
    );
};

export default RateList;

const RateSwiper = styled(Swiper)`
    width: 100%;
    overflow: visible;

    .swiper-slide {
        overflow: visible;
    }
`;

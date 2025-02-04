import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { Pagination } from 'swiper/modules';
import RateItem from './RateItem';

const RateList = () => {
    const [activeIndex, setActiveIndex] = useState(0); // 가장 왼쪽 슬라이드 인덱스 추적

    return (
        <Section>
            <RateInfo>
                <RateTitle>
                    20대 <br /> 인기 드라마
                </RateTitle>
            </RateInfo>
            <RateSwiper
                spaceBetween={83}
                pagination={{ clickable: true }}
                slidesPerView={4}
                modules={[Pagination]}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // 슬라이드 변경 시 인덱스 업데이트
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide key={index} className={index === activeIndex ? 'main-slide' : ''}>
                        <RateItem />
                    </SwiperSlide>
                ))}
            </RateSwiper>
        </Section>
    );
};

export default RateList;

const Section = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    gap: 5px;
`;

const RateInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 443px;
`;

const RateTitle = styled.h3`
    color: white;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
`;

const RateSwiper = styled(Swiper)`
    flex: 3;
    height: 535.62px;

    .swiper-slide {
        width: 300px !important;
        height: 443px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 8px;
        transition: all 0.3s ease;
    }

    .main-slide {
        width: 371.57px !important;
        height: 535.62px;
        border-radius: 226.5px 226.5px 8px 8px;
        background-color: #000;
    }
`;

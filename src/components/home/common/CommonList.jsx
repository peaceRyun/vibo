import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
// import { Pagination } from 'swiper/modules'; // 페이지네이션 모듈 주석 처리
import CommonItem from './CommonItem';
import { useNavigate } from 'react-router';

export const CommonList = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (hoveredIndex !== null) {
            timer = setTimeout(() => {
                setActiveIndex(hoveredIndex);
            }, 500);
        } else {
            setActiveIndex(null);
        }

        return () => clearTimeout(timer);
    }, [hoveredIndex]);

    const onGo = () => {
        navigate('/contentlist');
    };

    return (
        <Section>
            <CommonInfo>
                <CommonTitle>
                    XX님이 <br />
                    좋아할만 한 <br />
                    예능
                    <VerticalText>TV</VerticalText>
                </CommonTitle>
                <MoreBtn onClick={onGo}>더보기</MoreBtn>
            </CommonInfo>
            <CommonSwiper
                spaceBetween={20}
                /* pagination={{ clickable: true }} */
                onSlideChange={() => setHoveredIndex(null)} // 🚀 슬라이드 넘길 때 효과 제거
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={activeIndex === index ? 'active' : ''}
                    >
                        <CommonItem />
                    </SwiperSlide>
                ))}
            </CommonSwiper>
        </Section>
    );
};

export default CommonList;

const Section = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    gap: 5px;
`;

const VerticalText = styled.div`
    position: absolute;
    left: 19.8%;
    top: 21%;
    transform: translateY(-50%) rotate(-270deg);
    font-size: 80px;
    font-weight: bold;
    color: #5e5e5e;
    letter-spacing: 5px;
`;

const CommonInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 443px;
`;

const CommonTitle = styled.h3`
    color: white;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
`;

const MoreBtn = styled.button`
    background-color: var(--primary-600);
    color: black;
    font-size: 24px;
    padding: 17px 32px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 134px;
    height: 51px;
    font-weight: bold;

    &:hover {
        background-color: var(--primary-base);
    }
`;

const CommonSwiper = styled(Swiper)`
    flex: 3;
    height: 443px;
    // overflow: visible;
    .swiper-slide {
        width: 300px !important;
        height: 443px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 8px;
        transition: opacity 0.3s ease-in-out;
        opacity: 1; /* 기본 상태 */
    }

    .swiper-slide.active {
        opacity: 0; /* 🚀 1초 이상 호버 시 투명도 변경 */
    }
`;

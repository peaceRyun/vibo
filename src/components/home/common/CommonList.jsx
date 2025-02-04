import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { Pagination } from 'swiper/modules';
import CommonItem from './CommonItem';

const CommonList = () => {
    return (
        <Section>
            <CommonInfo>
                <CommonTitle>
                    XX님이 <br />
                    좋아할만 한 <br />
                    예능
                    <VerticalText>TV</VerticalText>
                </CommonTitle>
                <MoreBtn>더보기</MoreBtn>
            </CommonInfo>
            <CommonSwiper spaceBetween={20} pagination={{ clickable: true }} modules={[Pagination]}>
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide key={index}>
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
    background-color: #00c8b3;
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
        background-color: #00a692;
    }
`;

const CommonSwiper = styled(Swiper)`
    flex: 3;
    height: 443px;

    .swiper-slide {
        width: 300px !important;
        height: 443px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 8px;
    }
`;

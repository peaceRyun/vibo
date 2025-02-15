import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
// import { Pagination } from 'swiper/modules'; // 페이지네이션 모듈 주석 처리
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import CommonItem from './CommonItem';

export const CommonList = () => {
    const navigate = useNavigate();
    const onGo = () => {
        navigate('/contentlist');
    };
    const { TVseriesData } = useSelector((state) => state.tvSeriesR);

    if (!TVseriesData) {
        return <div>loading....</div>;
    }
    if (TVseriesData.length > 0) {
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
                <CommonSwiper spaceBetween={30} pagination={{ clickable: true }} slidesPerView={5.5}>
                    {/* modules={[Pagination]} */}
                    {TVseriesData.map((content) => (
                        <SwiperSlide key={content.id}>
                            <CommonItem content={content} />
                        </SwiperSlide>
                    ))}
                </CommonSwiper>
            </Section>
        );
    }
};

export default CommonList;

const Section = styled.section`
    display: flex;
    /* align-items: center; */
    position: relative;
    // gap: 5px;
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
    /* height: 443px; */
`;

const CommonTitle = styled.h3`
    color: white;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
`;

const MoreBtn = styled.button`
    background-color: var(--primary-600);
    color: black;
    font-size: 17px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 155px;
    height: 40px;
    font-weight: bold;

    &:hover {
        background-color: var(--primary-base);
    }
`;

const CommonSwiper = styled(Swiper)`
    flex: 3;
    /* height: 443px; */

    .swiper-slide {
        // width: 300px !important; // 이 줄을 제거하거나 주석 처리합니다
        /* height: 443px; */
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 8px;
    }
`;

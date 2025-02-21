import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import WeeklyItem from './WeeklyItem';
import DaySelect from './DaySelect';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const WeeklyList = () => {
    const [activeDay, setActiveDay] = useState('일');
    const { weeklyContent, loading, isComplete } = useSelector((state) => state.weeklyR);
    const [displayContent, setDisplayContent] = useState([]);

    useEffect(() => {
        if (isComplete && weeklyContent && weeklyContent[activeDay]) {
            setDisplayContent(weeklyContent[activeDay] || []);
        }
    }, [isComplete, weeklyContent, activeDay]);

    return (
        <Section>
            <WeeklyInfo>
                <WeeklyTitle>
                    <UpdateText>VIBO 신작 업데이트</UpdateText>
                </WeeklyTitle>
                <DaySelect activeDay={activeDay} setActiveDay={setActiveDay} />
            </WeeklyInfo>
            {loading ? (
                <LoadingMessage>콘텐츠를 로딩 중입니다...</LoadingMessage>
            ) : (
                <WeeklySwiper
                    slidesPerView={1.25}
                    spaceBetween={25}
                    breakpoints={{
                        1280: { slidesPerView: 5.5, spaceBetween: 40 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                        600: { slidesPerView: 2.5, spaceBetween: 20 },
                        400: { slidesPerView: 1.8, spaceBetween: 20 },
                    }}
                >
                    {displayContent.length > 0 ? (
                        displayContent.map((show) => (
                            <SwiperSlide key={show.id}>
                                <LinkWrapper>
                                    <Link to={`/detail/series/${show.id}`}>
                                        <WeeklyItem show={show} />
                                    </Link>
                                </LinkWrapper>
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide>
                            <WeeklyItem />
                        </SwiperSlide>
                    )}
                </WeeklySwiper>
            )}
        </Section>
    );
};

export default WeeklyList;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 60px 0 60px 0;
    @media (max-width: 1024px) {
        padding: 40px 0 40px 0;
    }
    @media (max-width: 600px) {
        padding: 30px 0 30px 0;
    }
`;

const WeeklyInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2.375rem;
    gap: 0.5rem;
    flex-direction: column;
`;

const UpdateText = styled.h3`
    color: #fff;
    font-weight: 900;
    white-space: nowrap;
    padding: 0 10px;
    font-size: var(--title-xlarge-size);
    font-weight: var(--title-xlarge-weight);
    @media (max-width: 1024px) {
        font-size: var(--title-large-mobile);
        font-weight: var(--title-large-weigh);
    }
    @media (max-width: 600px) {
        font-size: var(--title-small-mobile);
        font-weight: var(--title-xsmall-weight);
    }
`;

const WeeklySwiper = styled(Swiper)`
    width: 100%;
    max-width: 100%;

    .swiper-pagination-bullet {
        background-color: #fff;
        opacity: 0.5;
    }

    .swiper-pagination-bullet-active {
        background-color: #1ee0b6;
        opacity: 1;
    }

    @media (max-width: 1024px) {
        overflow: hidden;
    }

    @media (max-width: 400px) {
        padding: 0 15px;
        overflow: visible;
    }
`;

const WeeklyTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`;

const LoadingMessage = styled.div`
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
`;

const LinkWrapper = styled.div`
    width: 100%;

    @media (max-width: 400px) {
        width: 78%;
        margin: 0 auto;
    }
`;

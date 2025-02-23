import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import LiveItem from './LiveItem';

const LiveList = ({ title }) => {
    const [isLoading, setIsLoading] = useState(true);

    const videoData = [
        {
            id: 1,
            url: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/A_Close-Up_Of_A_Ball_Being_Kicked_fhd_1248072.mp4',
            title: '축구 하이라이트 - 볼 킥 장면',
            broadcaster: 'KBS N',
        },
        {
            id: 2,
            url: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Aerial_Hyper_Lapse_Video_Of_Sport_City_-_Manchester_UK_fhd_2395741.mp4',
            title: '맨체스터 스포츠 시티 하이퍼랩스',
            broadcaster: 'Sky Sports',
        },
        {
            id: 3,
            url: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Athletes_Practice_At_Swimming_Pool_fhd_1018922.mp4',
            title: '수영 국가대표 훈련 현장',
            broadcaster: 'MBC Sports+',
        },
        {
            id: 4,
            url: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Baseball_Game_In_The_Stadium_fhd_141965.mp4',
            title: 'KBO 리그 - 잠실구장 현장',
            broadcaster: 'KBS N SPORTS',
        },
        {
            id: 5,
            url: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Busy_Pedestrian_Street_fhd_172445.mp4',
            title: '서울로 7017 - 퇴근길 풍경',
            broadcaster: 'tvN',
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <LiveContainer>
            <StyledTitle>{title}</StyledTitle>
            <SwiperContainer>
                <StyledSwiper
                    breakpoints={{
                        1024: {
                            slidesPerView: 4.2,
                            spaceBetween: 16,
                        },
                        600: {
                            slidesPerView: 2.2,
                            spaceBetween: 14,
                        },
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 8,
                        },
                    }}
                >
                    {videoData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <LiveItem videoData={item} isVisible={!isLoading} />
                        </SwiperSlide>
                    ))}
                </StyledSwiper>
                {isLoading && (
                    <LoadingOverlay>
                        <LoadingSpinner />
                    </LoadingOverlay>
                )}
            </SwiperContainer>
        </LiveContainer>
    );
};

export default LiveList;

const LiveContainer = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 60px 0 60px 0;
    @media (max-width: 1024px) {
        padding: 40px 0 40px 0;
    }
    @media (max-width: 600px) {
        padding: 30px 0 30px 0;
    }
`;

const StyledTitle = styled.h3`
    color: white;
    font-size: var(--title-xlarge-size);
    font-weight: var(--title-xlarge-weight);
    margin-bottom: 10px;
    @media (max-width: 1024px) {
        font-size: var(--title-large-mobile);
        font-weight: var(--title-large-weigh);
    }
    @media (max-width: 600px) {
        font-size: var(--title-small-mobile);
        font-weight: var(--title-xsmall-weight);
    }
`;

const SwiperContainer = styled.div`
    position: relative;
`;

const StyledSwiper = styled(Swiper)`
    padding-bottom: 20px;

    .swiper-slide {
        border-radius: 8px;
        width: auto;
        flex-shrink: 0;
    }
`;

const LoadingOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoadingSpinner = styled.div`
    width: 48px;
    height: 48px;
    border: 4px solid #fff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

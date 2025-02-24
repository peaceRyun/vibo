import React, { useRef, useMemo, useEffect, useState } from 'react';
import styled from 'styled-components';
import LiLikeButton from '../../../ui/lordicon/LiLikeButton';

const videosByType = {
    drama: [
        'drama/Couple_Walking_With_Children_On_Mountain_fhd_1284450.mp4',
        'drama/Romantic_Couple_On_The_Beach_fhd_1117955.mp4',
        'drama/Rural_Female_Jogger_At_Sunrise_fhd_630313.mp4',
        'drama/The_Couple_Was_Playing_Together_On_The_Bus_fhd_2580005.mp4',
    ],
    horror: [
        'horror/Bloody_Hand_Scratching_Glass_..._fhd_749917.mp4',
        'horror/Man_Walking_In_Alley_At_Night_fhd_847692.mp4',
        'horror/Nightmare_Demon_fhd_2896999.mp4',
        'horror/Scary_Doll_In_An_Abandoned_Kindergarten_fhd_1036161.mp4',
    ],
    thriller: [
        'thriller/A_Man_Walks_In_Forest_Holding_An_Axe_fhd_1348403.mp4',
        'thriller/Alone_Woman_In_A_Parking_Lot_fhd_2833198.mp4',
        'thriller/Body_Of_Murder_Victim_And_Bloody_Knife_At_Crime_Scene_fhd_2783148.mp4',
        'thriller/Woman_Holding_Umbrella_At_Winter_fhd_2158738.mp4',
    ],
};

const HoverItem = ({ content, videoType = 'drama' }) => {
    const { title, name, backdrop_path, overview } = content;
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const videoSrc = useMemo(() => {
        const videos = videosByType[videoType] || videosByType.drama;
        const randomIndex = Math.floor(Math.random() * videos.length);
        return `https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/${videos[randomIndex]}`;
    }, [videoType]);

    const handleMouseEnter = async () => {
        setIsHovered(true);
        if (videoRef.current && !isLoading) {
            try {
                await videoRef.current.play();
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Video playback error:', error);
                }
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            setTimeout(() => {
                if (!isHovered) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            }, 50);
        }
    };

    return (
        <ItemWrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Flex $justifyContent='space-between' $alignItems='center' $position='relative'>
                <ItemImg
                    src={
                        backdrop_path
                            ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                            : '/mainhome/sample/commonSample.png'
                    }
                    alt={title || name}
                />

                {!isLoading && (
                    <Video ref={videoRef} muted loop playsInline preload='metadata' $isHovered={isHovered}>
                        <source src={videoSrc} type='video/mp4' />
                        Your browser does not support the video tag.
                    </Video>
                )}

                {isLoading && (
                    <LoadingOverlay>
                        <LoadingSpinner />
                    </LoadingOverlay>
                )}

                <button>
                    <PlayImg
                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/carousel_action_atomic.png'
                        alt='play'
                    />
                </button>
            </Flex>
            <Flex $flexDirection='column' $padding='35px 20px 6px' $gap='8px'>
                <Flex $justifyContent='space-between' $alignItems='center'>
                    <Flex $justifyContent='space-between' $alignItems='center' $gap='10px'>
                        <img
                            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/전체관람가 관람등급 1.png'
                            alt='rateAll'
                        />
                        <Badge $br='4px' $padding='3.5px 5px' fontSize='12px'>
                            HD
                        </Badge>
                        <Span $fontSize='12px'>2024</Span>
                    </Flex>
                    <LiLikeButton content={content} width='30px' height='30px' />
                </Flex>
                <H4 $textAlign='left' $fontSize='20px'>
                    {title || name}
                </H4>
                <Contour />
            </Flex>
            <P $lineClamp='3'>{overview}</P>
        </ItemWrap>
    );
};

export default HoverItem;

const ItemWrap = styled.div`
    width: 100%;
    max-width: 394px;
    height: 100%;
    background-color: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto;
`;

const Video = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    opacity: ${(props) => (props.$isHovered ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
`;

const ItemImg = styled.img`
    width: 100%;
    height: 50%;
`;

const PlayImg = styled.img`
    position: absolute;
    width: 67.5px !important;
    height: 67.5px !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    gap: ${(props) => props.$gap};
    padding: ${(props) => props.$padding || '0'};
    position: ${(props) => props.$position};
    width: ${(props) => props.$width || 'auto'};
`;

const Badge = styled.div`
    border-radius: ${(props) => props.$br};
    border: 1px solid var(--primary-base);
    color: var(--primary-base);
    background-color: var(--gray-900);
    padding: ${(props) => props.$padding};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: ${(props) => props.fontSize};
`;

const Span = styled.span`
    font-size: ${(props) => props.$fontSize || '12px'};
    padding: ${(props) => props.$padding || '0'};
`;

const Contour = styled.div`
    margin: 5px 0 10px;
    height: 1px;
    background-color: var(--secondary-base);
`;

const H4 = styled.h4`
    font-size: ${(props) => props.$fontSize || '20px'};
    font-weight: 800;
    text-align: ${(props) => props.$textAlign || 'left'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const P = styled.p`
    padding: ${(props) => props.$padding || '7px 20px 0px'};
    font-size: ${(props) => props.$fontSize || '13px'};
    font-weight: 400;
    text-align: start;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${(props) => props.$lineClamp || '3'};
    overflow: hidden;
`;

import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const LiveItem = ({ videoData, isVisible }) => {
    const { url, title, broadcaster } = videoData;
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleError = (error) => {
            console.log('비디오 에러:', error);
        };

        video.addEventListener('error', handleError);
        video.pause();

        if (isVisible) {
            video.preload = 'metadata';
        } else {
            video.preload = 'none';
        }

        return () => {
            video.removeEventListener('error', handleError);
        };
    }, [isVisible]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        const video = videoRef.current;
        if (video && isVisible) {
            if (video.readyState >= 2) {
                try {
                    video.play().catch((error) => {
                        console.log('비디오 재생 실패:', error);
                    });
                } catch (error) {
                    console.log('비디오 재생 중 예외 발생:', error);
                }
            } else {
                const handleLoadedData = () => {
                    if (isHovered) {
                        video.play().catch((err) => console.log('로드 후 재생 실패:', err));
                    }
                    video.removeEventListener('loadeddata', handleLoadedData);
                };
                video.addEventListener('loadeddata', handleLoadedData);
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        const video = videoRef.current;
        if (video && !video.paused) {
            video.pause();
        }
    };

    return (
        <CardContainer>
            <VideoWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div></div>
                <StyledVideo
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload={isVisible ? 'metadata' : 'none'}
                    src={url}
                />
                <BadgeLive>LIVE</BadgeLive>
                {isLoading && (
                    <LoadingOverlay>
                        <LoadingSpinner />
                    </LoadingOverlay>
                )}
            </VideoWrapper>
            <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardBcName>{broadcaster}</CardBcName>
            </CardInfo>
        </CardContainer>
    );
};

export default LiveItem;

const CardContainer = styled.div`
    width: 100%;
`;

const VideoWrapper = styled.div`
    position: relative;
    padding-top: 56.25%;
    border-radius: 8px;
    overflow: hidden;
    background-color: #1a1a1a;
`;

const StyledVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const BadgeLive = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 4px 8px;
    background-color: #ff0000;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 4px;
`;

const CardInfo = styled.div`
    margin-top: 8px;
`;

const CardTitle = styled.h4`
    color: white;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CardBcName = styled.p`
    color: #999;
    font-size: 14px;
    margin-top: 4px;
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

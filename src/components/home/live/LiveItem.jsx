import { useState, useRef, useEffect } from 'react';
import { CardContainer, CardInfo, CardTitle, CardBcName, VideoWrapper, BadgeLive } from './style';

const LiveItem = ({ videoData, isVisible }) => {
    const { url, title, broadcaster } = videoData;
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

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
                <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload={isVisible ? 'metadata' : 'none'}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                    width='100%'
                    height='100%'
                    src={url}
                ></video>
                <BadgeLive>LIVE</BadgeLive>
            </VideoWrapper>
            <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardBcName>{broadcaster}</CardBcName>
            </CardInfo>
        </CardContainer>
    );
};

export default LiveItem;

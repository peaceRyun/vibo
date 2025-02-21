import { useState, useRef, useEffect } from 'react';
import { CardContainer, CardInfo, CardTitle, CardBcName, VideoWrapper, BadgeLive } from './style';

const LiveItem = ({ videoData }) => {
    const { url, title, broadcaster } = videoData;
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // 비디오 요소에 대한 에러 핸들러 등록
        const handleError = (error) => {
            console.log('비디오 에러:', error);
        };

        video.addEventListener('error', handleError);

        // 페이지 로드 시 비디오가 자동 재생되지 않도록 명시적으로 일시 정지
        video.pause();

        return () => {
            video.removeEventListener('error', handleError);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        const video = videoRef.current;
        if (video) {
            // readyState 확인하여 메타데이터가 로드된 경우에만 재생
            if (video.readyState >= 2) {
                try {
                    video.play().catch((error) => {
                        console.log('비디오 재생 실패:', error);
                    });
                } catch (error) {
                    console.log('비디오 재생 중 예외 발생:', error);
                }
            } else {
                // 메타데이터가 로드되지 않은 경우, 로드 이벤트 리스너 추가
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
                <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload='metadata'
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

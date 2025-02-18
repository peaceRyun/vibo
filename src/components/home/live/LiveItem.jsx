// Live 콘텐츠 스와이퍼
// 메인홈, 라이브홈에만 있는 스와이퍼
// 비슷한 콘텐츠
// 영화, 시리즈 콘텐츠 공통
import { useState, useRef, useEffect } from 'react';
import { CardContainer, CardInfo, CardTitle, CardBcName, VideoWrapper } from './style';

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

        return () => {
            video.removeEventListener('error', handleError);
        };
    }, []);

    const handleMouseEnter = async () => {
        setIsHovered(true);
        const video = videoRef.current;
        if (video && video.readyState >= 2) {
            // 비디오가 재생 가능한 상태인지 확인
            video.play();
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
                    autoPlay
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
            </VideoWrapper>
            <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardBcName>{broadcaster}</CardBcName>
            </CardInfo>
        </CardContainer>
    );
};

export default LiveItem;

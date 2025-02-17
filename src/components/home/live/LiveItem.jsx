// Live 콘텐츠 스와이퍼
// 메인홈, 라이브홈에만 있는 스와이퍼
// 비슷한 콘텐츠
// 영화, 시리즈 콘텐츠 공통
import { useState, useRef } from 'react';
import { CardContainer, CardInfo, CardTitle, CardBcName, IframeWrapper, StyledIframe, VideoWrapper } from './style';

const LiveItem = ({ videoData }) => {
    const { url, title, broadcaster } = videoData;
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // YouTube URL 체크 함수
    const isYoutubeUrl = (url) => {
        return url.includes('youtube.com') || url.includes('youtu.be');
    };

    // YouTube URL을 embed URL로 변환
    const getEmbedUrl = (url) => {
        if (url.includes('embed')) {
            return url.includes('autoplay') ? url : `${url}?autoplay=1&mute=1`;
        }
        return (
            url
                .replace('youtu.be/', 'www.youtube.com/embed/')
                .replace('youtube.com/watch?v=', 'youtube.com/embed/')
                .split('?')[0] + '?autoplay=1&mute=1'
        );
    };

    // hover 이벤트 핸들러
    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch((error) => console.log('자동 재생 실패:', error));
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <CardContainer>
            {isYoutubeUrl(url) ? (
                <IframeWrapper>
                    <StyledIframe
                        src={getEmbedUrl(url)}
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                    />
                </IframeWrapper>
            ) : (
                <VideoWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <video
                        ref={videoRef}
                        muted
                        loop
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                        width='100%'
                        height='100%'
                    >
                        <source src={url} type='video/mp4' />
                    </video>
                </VideoWrapper>
            )}
            <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardBcName>{broadcaster}</CardBcName>
            </CardInfo>
        </CardContainer>
    );
};

export default LiveItem;

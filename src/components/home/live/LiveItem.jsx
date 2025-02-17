// Live 콘텐츠 스와이퍼
// 메인홈, 라이브홈에만 있는 스와이퍼
// 비슷한 콘텐츠
// 영화, 시리즈 콘텐츠 공통
import { CardContainer, CardInfo, CardTitle, CardBcName, IframeWrapper, StyledIframe, VideoWrapper } from './style';

const LiveItem = ({ videoUrl }) => {
    // 테스트
    // const embedUrl = videoUrl.includes('embed')
    //   ? `${videoUrl}?autoplay=1&mute=1`
    //   : videoUrl.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0] + '?autoplay=1&mute=1';
    return (
        <CardContainer>
            {/* <IframeWrapper>
        <StyledIframe
          src={videoUrl}
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </IframeWrapper> */}
            <VideoWrapper>
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // 추가
                        display: 'block', // 추가
                    }}
                    width='100%'
                    height='100%'
                    onPlay={() => console.log('재생 시작')}
                    onPause={() => console.log('일시정지')}
                >
                    <source
                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/live_sample1.mp4'
                        type='video/mp4'
                    />
                </video>
            </VideoWrapper>
            <CardInfo>
                <CardTitle>KCC 프로농구</CardTitle>
                <CardBcName>tvN</CardBcName>
            </CardInfo>
        </CardContainer>
    );
};

export default LiveItem;

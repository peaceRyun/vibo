// Live 콘텐츠 스와이퍼
// 메인홈, 라이브홈에만 있는 스와이퍼
// 비슷한 콘텐츠
// 영화, 시리즈 콘텐츠 공통
import { CardContainer, CardInfo, CardTitle, CardBcName, IframeWrapper, StyledIframe } from './style';

const LiveItem = ({ videoUrl }) => {
  // 테스트
  // const embedUrl = videoUrl.includes('embed')
  //   ? `${videoUrl}?autoplay=1&mute=1`
  //   : videoUrl.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0] + '?autoplay=1&mute=1';
  return (
    <CardContainer>
      <IframeWrapper>
        <StyledIframe
          src={videoUrl}
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </IframeWrapper>
      <CardInfo>
        <CardTitle>KCC 프로농구</CardTitle>
        <CardBcName>tvN</CardBcName>
      </CardInfo>
    </CardContainer>
  );
};

export default LiveItem;

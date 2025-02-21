// 현재 보고 있는 콘텐츠 스와이퍼
// 메인 홈에만 있는 스와이퍼

import { CardContainer, CardInfo, CardTitle, CardEpisode, WatchingWrapper, WatchingIframe } from './style';

const WatchingItem = ({ watchingUrl }) => {
  return (
    <CardContainer>
      <WatchingWrapper>
        <WatchingIframe
          src={watchingUrl}
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </WatchingWrapper>
      <CardInfo>
        <CardTitle>신서유기 레전드 정주행</CardTitle>
        <CardEpisode>3화</CardEpisode>
      </CardInfo>
    </CardContainer>
  );
};

export default WatchingItem;

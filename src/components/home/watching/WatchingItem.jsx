// 현재 보고 있는 콘텐츠 스와이퍼
// 메인 홈에만 있는 스와이퍼
import { CardContainer, CardImage, CardInfo, CardTitle, CardEpisode } from './style';

const WatchingItem = () => {
    return (
        <CardContainer>
            <CardImage src="/contentdetail/sample/WatchingSample.png" alt="신서유기 레전드 정주행" />
            <CardInfo>
                <CardTitle>신서유기 레전드 정주행</CardTitle>
                <CardEpisode>3화</CardEpisode>
            </CardInfo>
        </CardContainer>
    );
};

export default WatchingItem;

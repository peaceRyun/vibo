// Live 콘텐츠 스와이퍼
// 메인홈, 라이브홈에만 있는 스와이퍼
// 비슷한 콘텐츠
// 영화, 시리즈 콘텐츠 공통
import { CardContainer, CardImage, CardInfo, CardTitle, CardBcName } from './style';

const LiveItem = () => {
    return (
        <CardContainer>
            <CardImage src="/mainhome/sample/LiveSample.png" alt="KCC 프로농구 tvN" />
            <CardInfo>
                <CardTitle>KCC 프로농구</CardTitle>
                <CardBcName>tvN</CardBcName>
            </CardInfo>
        </CardContainer>
    );
};

export default LiveItem;

// 주별 인기 콘텐츠 스와이퍼
// 메인홈에만 있는 스와이퍼
import { WeeklyItemContainer, WeeklyImg } from './style';

const WeeklyItem = () => {
    return (
        <WeeklyItemContainer>
            <WeeklyImg src="/mainhome/sample/WeeklySample.png" alt="주별 인기 콘텐츠" />
        </WeeklyItemContainer>
    );
};

export default WeeklyItem;

// 주별 인기 콘텐츠 스와이퍼
// 메인홈에만 있는 스와이퍼

// 주별 인기 있는 콘텐츠 탭 클릭시 다른 화면 보이도록 구현_0206
import { WeeklyItemContainer, WeeklyImg } from './style';

const WeeklyItem = ({ activeDay, imageUrl, title }) => {
    return (
        <WeeklyItemContainer>
            <WeeklyImg src={imageUrl} alt={`${title} - ${activeDay}요일 인기 콘텐츠`} />
        </WeeklyItemContainer>
    );
};

export default WeeklyItem;

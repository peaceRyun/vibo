// 주별 인기 콘텐츠 스와이퍼
// 메인홈에만 있는 스와이퍼

// 주별 인기 있는 콘텐츠 탭 클릭시 다른 화면 보이도록 구현_0206
import { WeeklyItemContainer, WeeklyImg } from './style';

const dayContents = {
  월: '/mainhome/weeklyitem_01.webp',
  화: '/mainhome/weeklyitem_02.webp',
  수: '/mainhome/weeklyitem_03.webp',
  목: '/mainhome/weeklyitem_04.webp',
  금: '/mainhome/weeklyitem_05.webp',
  토: '/mainhome/weeklyitem_06.webp',
  일: '/mainhome/weeklyitem_07.webp',
};

const WeeklyItem = ({ activeDay }) => {
  //   const { activeDay } = useDay();

  return (
    <WeeklyItemContainer>
      <WeeklyImg src={dayContents[activeDay]} alt={`${activeDay}요일 인기 콘텐츠`} />
    </WeeklyItemContainer>
    // <WeeklyItemContainer>
    //   <WeeklyImg src="/mainhome/sample/WeeklySample.png" alt="주별 인기 콘텐츠" />
    // </WeeklyItemContainer>
  );
};

export default WeeklyItem;

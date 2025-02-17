// 메인 홈
import React, { useEffect } from 'react';
// import { Container } from '../../../common/style';
import LiveList from '../../../components/home/live/LiveList';
import RateList from '../../../components/home/rating/RateList';
import WatchingList from '../../../components/home/watching/WatchingList';
import GenreNav from '../../../components/home/genreNav/GenreNav';
import WeeklyList from '../../../components/home/weekly/WeeklyList';
import AdBanner from '../../../components/home/adBanner/AdBanner';
import CommonList from '../../../components/home/common/CommonList';
// import Only1 from '../../../components/home/viboOnly/only1/Only1';
// import Only2 from '../../../components/home/viboOnly/only2/Only2';
// import MenuButton from '../../../components/home/menubutton/MenuButton';
import { MainContainer, MainContent } from './style';
import ViboOnly from '../../../components/home/viboOnly/ViboOnly';
import MenuSection from '../../../components/home/menubutton/MenuSection';
import MainBanner from '../../../components/home/mainBanner/MainBanner';
import { useDispatch } from 'react-redux';
import { getTVseries } from '../../../store/modules/getThunk';
import MobileOnly from '../../../components/home/viboOnly/MobileOnly';
// import { LiveContainer } from '../live/style';
// import { Container } from '../../../components/home/viboOnly/only1/style';

const liveTitles = [{ id: '1', title: '시청중인 콘텐츠' }];

const MainHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTVseries());
  }, []);
  return (
    <MainContent>
      <MainBanner />
      <MainContainer>
        {/* <WatchingList />
        <div>
          {liveTitles.map((section) => (
            <LiveList key={section.id} title={section.title} />
          ))}
        </div> */}
        <WeeklyList />
        <RateList />
        <GenreNav />
        <AdBanner />
        <CommonList />
        <CommonList />
        <CommonList />
        <ViboOnly />
      </MainContainer>
      <MenuSection />
    </MainContent>
  );
};

export default MainHome;

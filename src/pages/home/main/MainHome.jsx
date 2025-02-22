// 메인 홈
import React, { useEffect } from 'react';
// import { Container } from '../../../common/style';
import LiveList from '../../../components/home/live/LiveList';
import RateList from '../../../components/home/rating/RateList';
// import WatchingList from '../../../components/home/watching/WatchingList';
import GenreNav from '../../../components/home/genreNav/GenreNav';
import WeeklyList from '../../../components/home/weekly/WeeklyList';
import AdBanner from '../../../components/home/adBanner/AdBanner';
// import CommonList from '../../../components/home/common/CommonList';
// import Only1 from '../../../components/home/viboOnly/only1/Only1';
// import Only2 from '../../../components/home/viboOnly/only2/Only2';
// import MenuButton from '../../../components/home/menubutton/MenuButton';
import { MainContainer, MainContent } from './style';
import ViboOnly from '../../../components/home/viboOnly/ViboOnly';
import MenuSection from '../../../components/home/menubutton/MenuSection';
import MainBanner from '../../../components/home/mainBanner/MainBanner';
import { useDispatch } from 'react-redux';
import { getAiringToday, getMovie, getTopRated, getTVseries } from '../../../store/modules/getThunk';

import { getAnimations, getDarkTheaterReleases, getDramaTvs } from '../../../store/modules/getThunkThree';
import MainCommonList from '../../../components/home/common/MainCommonList';

// import { LiveContainer } from '../live/style';
// import { Container } from '../../../components/home/viboOnly/only1/style';

const liveTitles = [{ id: '1', title: '실시간 인기 LIVE' }];

const MainHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie());
    dispatch(getTVseries());
    dispatch(getAiringToday());
    dispatch(getTopRated());
    dispatch(getAnimations());
    dispatch(getDarkTheaterReleases());
    dispatch(getDramaTvs());
  }, []);
  return (
    <MainContent>
      {/* <MainBanner /> */}
      {/* <TestMainBanner /> */}
      <MainBanner />
      <MainContainer>
        <div>
          {liveTitles.map((section) => (
            <LiveList key={section.id} title={section.title} />
          ))}
        </div>
        {/* <WatchingList /> */}
        <WeeklyList />
        <RateList />
        <GenreNav />
      </MainContainer>
      <AdBanner />
      <MainContainer>
        {/* <CommonList type="series" />
        <CommonList type="movie" />
        <CommonList type="series" /> */}
        <MainCommonList fetchFunction={getAnimations} stateSelector={(state) => state.filterR.animations} />
        <MainCommonList
          fetchFunction={getDarkTheaterReleases}
          stateSelector={(state) => state.filterR.darkTheaterReleases}
        />
        <MainCommonList fetchFunction={getDramaTvs} stateSelector={(state) => state.filterR.dramaTvs} />
        <ViboOnly />
        {/* <CommonList fetchFunction={getDramaTvs} stateSelector={(state) => state.filterR.DramaTvs} /> */}
        {/* 헐 대소문자.. */}
      </MainContainer>

      <MenuSection />
    </MainContent>
  );
};

export default MainHome;

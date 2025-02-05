// 메인 홈
import React from 'react';
import { Container } from '../../../common/style';
import LiveList from '../../../components/home/live/LiveList';
import RateList from '../../../components/home/rating/RateList';
import WatchingList from '../../../components/home/watching/WatchingList';
import GenreNav from '../../../components/home/genreNav/GenreNav';
import WeeklyList from '../../../components/home/weekly/WeeklyList';
import AdBanner from '../../../components/home/adBanner/AdBanner';
import CommonList from '../../../components/home/common/CommonList';
import Only1 from '../../../components/home/viboOnly/only1/Only1';
import Only2 from '../../../components/home/viboOnly/only2/Only2';
import { MainContainer, ViboOnly } from './style';

const MainHome = () => {
  return (
    <div>
      <Container />
      <MainContainer>
        <WatchingList />
        <LiveList />
        <WeeklyList />

        <RateList />
        <GenreNav />
        <AdBanner />
        <CommonList />
        <CommonList />
        <CommonList />
        <ViboOnly>
          <Only1 />
          <Only2 />
        </ViboOnly>
      </MainContainer>
    </div>
  );
};

export default MainHome;

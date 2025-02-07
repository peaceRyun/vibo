// 시리즈 홈
import React from 'react';
import MainBanner from '../../../components/home/mainBanner/MainBanner';
import { MainContainer } from '../main/style';
import CommonList from '../../../components/home/common/CommonList';
import GenreNav from '../../../components/home/genreNav/GenreNav';
import { MoreButton, Section } from '../movie/style';
import TabButton from '../../../ui/tab/TabButton';
import PopularList from '../../../components/home/popularlank/PopularList';
import RateList from '../../../components/home/rating/RateList';

const SeriesHome = () => {
  const seriesTabs = ['국내드라마', '미국드라마', '영국드라마', '일본드라마', '중국드라마'];
  return (
    <div>
      <MainBanner />
      <MainContainer>
        <TabButton tabs={seriesTabs} />
        <PopularList />
        <RateList />

        <CommonList />
        <CommonList />
        <GenreNav />
        <CommonList />
        <CommonList />
        <Section>
          <MoreButton>더보기</MoreButton>
        </Section>
      </MainContainer>
    </div>
  );
};

export default SeriesHome;

// 영화 홈
import React from 'react';
import MainBanner from '../../../components/home/mainBanner/MainBanner';
import { MainContainer } from '../main/style';

import GenreNav from '../../../components/home/genreNav/GenreNav';

import CommonList from '../../../components/home/common/CommonList';

import { MoreButton, Section } from './style';
import TabButton from '../../../ui/tab/TabButton';

const MovieHome = () => {
  const movieTabs = ['국내영화', '미국영화', '영국영화', '일본영화', '대만영화'];
  return (
    <div>
      <MainBanner />
      <TabButton tabs={movieTabs} />
      <section>순위</section>
      <MainContainer>
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

export default MovieHome;

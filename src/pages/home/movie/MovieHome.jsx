// 영화 홈
import React from 'react';
import MainBanner from '../../../components/home/mainBanner/MainBanner';
import { MainContainer } from '../main/style';
import RateList from '../../../components/home/rating/RateList';
import GenreNav from '../../../components/home/genreNav/GenreNav';
import AdBanner from '../../../components/home/adBanner/AdBanner';
import CommonList from '../../../components/home/common/CommonList';
import Button from '../../../ui/button/Button';
import { MoreButton, Section } from './style';

const MovieHome = () => {
  return (
    <div>
      <MainBanner />
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

import React from 'react';
import { ExploreBox, ExploreContainer } from './MenuButton';

const MenuButton = () => {
  return (
    <div>
      <section>
        <h2>지금, 다양한 콘텐츠를 VIBO에서 찾아보세요.</h2>
        <ExploreContainer>
          <ExploreBox active>Series</ExploreBox>
          <ExploreBox>Movie</ExploreBox>
          <ExploreBox>TV</ExploreBox>
          <ExploreBox>VIBO</ExploreBox>
        </ExploreContainer>
      </section>
    </div>
  );
};

export default MenuButton;

import React from 'react';
import { ItemWrapper, RankingNumber, ImageContainer } from './style';

const PopularItem = ({ rank, image, title }) => {
  return (
    <ItemWrapper>
      <RankingNumber>{rank}</RankingNumber>
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>
    </ItemWrapper>
  );
};

export default PopularItem;

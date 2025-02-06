import React from 'react';
import { GenreNavContainer } from '../../../pages/home/test/test';
import { MainContainer } from '../../../pages/home/main/style';
import { ButtonContainer } from './GenreButton';

const GenreButton = () => {
  return (
    <ButtonContainer>
      {/* 장르별 콘텐츠 */}
      <section>
        <h2>장르별 콘텐츠</h2>
        <GenreNavContainer>
          {['ACTION', 'COMEDY', 'FANTASY', 'ROMANCE', 'THRILLER'].map((genre) => (
            <GenreButton key={genre}>{genre}</GenreButton>
          ))}
        </GenreNavContainer>
      </section>
    </ButtonContainer>
  );
};

export default GenreButton;

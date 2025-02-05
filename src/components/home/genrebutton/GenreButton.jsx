import React from 'react';
import { GenreNavContainer } from '../../../pages/home/test/test';

const GenreButton = () => {
  return (
    <div>
      {/* 장르별 콘텐츠 */}
      <section>
        <h2>장르별 콘텐츠</h2>
        <GenreNavContainer>
          {['ACTION', 'COMEDY', 'FANTASY', 'ROMANCE', 'THRILLER'].map((genre) => (
            <GenreButton key={genre}>{genre}</GenreButton>
          ))}
        </GenreNavContainer>
      </section>
    </div>
  );
};

export default GenreButton;

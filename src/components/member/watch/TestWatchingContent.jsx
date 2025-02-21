// 사용자 시청내역
import React from 'react';
import { ContentSection, MovieCard, RecommendedMovies } from './Teststyle';

const WatchingContent = () => {
  const movies = [
    { src: '/member/mypage_01.webp' },
    { src: '/member/mypage_02.webp' },
    { src: '/member/mypage_03.webp' },
    { src: '/member/mypage_04.webp' },
  ];

  return (
    <div>
      <ContentSection>
        <h3>시청하신 콘텐츠가 없습니다.</h3>
        <p>다양한 콘텐츠를 시청해보세요.</p>
        <p>고객님의 취향에 맞추어 추천을 해드릴까요?</p>

        {/* 추천 영화 카드 */}
        <RecommendedMovies>
          {movies.map((movie, index) => (
            <MovieCard key={index} style={{ backgroundImage: `url(${movie.src})` }} />
          ))}
        </RecommendedMovies>
      </ContentSection>
    </div>
  );
};

export default WatchingContent;

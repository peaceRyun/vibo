// 사용자 시청내역
import React, { useEffect, useRef } from 'react';
import { ColoredCard, ContentSection, MovieCard, RecommendedMovies } from './Teststyle';
import { gsap } from 'gsap';
const colors = [
  '#FF6B6B',
  '#FFCC5C',
  '#4ECDC4',
  '#1A535C',
  '#FFD166',
  '#6A0572',
  '#A29BFE',
  '#E84393',
  '#FDCB6E',
  '#00CEC9',
]; // 사용할 색상 배열

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const TestWatchingContent = () => {
  const movies = [
    { src: '/member/mypage_01.webp' },
    { src: '/member/mypage_02.webp' },
    { src: '/member/mypage_03.webp' },
    { src: '/member/mypage_04.webp' },
  ];
  const cardsRef = useRef([]);
  const coloredCardsRef = useRef(new Array(20).fill(null));
  const coloredCardColors = useRef(Array.from({ length: 20 }, () => getRandomColor())); // 20개 카드의 랜덤 색상

  const cardFinalPositions = useRef(
    Array.from({ length: movies.length }, () => ({
      x: 150,
      y: 10,
      // rotationZ: Math.random() * 40 - 20,
    }))
  );

  const coloredCardFinalPositions = useRef(
    Array.from({ length: 20 }, () => ({
      x: Math.random() * 200 - 150,
      y: Math.random() * 200 - 100,
      // rotationZ: Math.random() * 30 - 15,
    }))
  );

  useEffect(() => {
    gsap.set(cardsRef.current, {
      x: window.innerWidth,
      y: window.innerHeight,
      rotationX: 60,
      rotationY: 30, // 처음에는 완전히 누워있는 상태
      opacity: 0.5,
      // 살짝 아래에서 시작
    });

    gsap.set(coloredCardsRef.current, {
      x: window.innerWidth - 200, // 이미지 카드보다 더 우측에서 시작
      y: window.innerHeight - 100, // 이미지 카드보다 더 아래에서 시작
      rotationX: 60,
      rotationY: 30,
      opacity: 0.6, // 살짝 더 흐릿한 효과
    });

    cardsRef.current.forEach((card, index) => {
      if (card) {
        const { x, y, rotationZ } = cardFinalPositions.current[index];

        gsap.to(card, {
          x: index * 100 + x,
          y: -index * 70 + y,
          opacity: 1, // 완전히 선명하게
          // duration: randomDuration,
          duration: 1.5,
          ease: 'power2.out',
        });
      }
    });
    coloredCardsRef.current.forEach((card, index) => {
      if (card) {
        const { x, y, rotationZ } = coloredCardFinalPositions.current[index];

        gsap.to(card, {
          x: index * 100 + x,
          y: index * 50 + y,
          opacity: 0.6, // 살짝 덜 선명하게
          // duration: randomDuration,
          duration: 1.5,
          ease: 'power2.out',
        });
      }
    });
  }, []);
  return (
    <div>
      <ContentSection>
        <h3>시청하신 콘텐츠가 없습니다.</h3>
        <p>다양한 콘텐츠를 시청해보세요.</p>
        <p>고객님의 취향에 맞추어 추천을 해드릴까요?</p>

        {/* 추천 영화 카드 */}
        <RecommendedMovies>
          {/* {movies.map((movie, index) => (
            <MovieCard key={index} style={{ backgroundImage: `url(${movie.src})` }} />
          ))} */}
          {/* 20개의 알록달록한 배경 카드 */}
          {Array.from({ length: 20 }).map((_, index) => (
            <ColoredCard
              key={`bg-${index}`}
              ref={(el) => (coloredCardsRef.current[index] = el)}
              color={coloredCardColors.current[index]} // 개별 카드에 다른 색상 적용
            />
          ))}
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ backgroundImage: `url(${movie.src})` }}
            />
          ))}
        </RecommendedMovies>
      </ContentSection>
    </div>
  );
};

export default TestWatchingContent;

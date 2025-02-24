import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ColoredCard, ContentSection, MovieCard, RecommendedMovies, WatchingButton } from './style';
import { CategoryButton, CategoryFilter, ContentCard, ContentGrid } from '../buyzzim/style';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router';

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
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const WatchingContent = () => {
  const watchHistory = useSelector((state) => state.watchR.watchHistory);
  const navigate = useNavigate();

  const sortedWatchHistory = [...watchHistory].reverse();

  const cardsRef = useRef([]);
  const coloredCardsRef = useRef(new Array(10).fill(null));
  const coloredCardColors = useRef(Array.from({ length: 10 }, () => getRandomColor()));

  const coloredCardFinalPositions = useRef([
    { x: 480, y: 180 },
    { x: 670, y: 100 },
    { x: 600, y: 150 },
    { x: 160, y: 280 },
    { x: 650, y: 290 },
    { x: 400, y: 10 },
    { x: 500, y: 80 },
    { x: 430, y: 230 },
    { x: 250, y: 250 },
    { x: 400, y: 280 },
  ]);

  useEffect(() => {
    if (watchHistory.length === 0) {
      gsap.set(cardsRef.current, {
        x: window.innerWidth,
        y: window.innerHeight,
        rotationX: 63,
        rotationY: 35,
        opacity: 0.5,
      });

      gsap.set(coloredCardsRef.current, {
        x: window.innerWidth - 200,
        y: window.innerHeight - 100,
        rotationX: 65,
        rotationY: 30,
        opacity: 0.6,
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            x: index * 100 + 150,
            y: -index * 70 + 10,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
          });
        }
      });

      coloredCardsRef.current.forEach((card, index) => {
        if (card) {
          const { x, y } = coloredCardFinalPositions.current[index];

          gsap.to(card, {
            x,
            y,
            opacity: 0.6,
            duration: 1.8,
            ease: 'power2.out',
          });
        }
      });
    }
  }, [watchHistory.length]);

  return (
    <div>
      {watchHistory.length > 0 ? (
        <div>
          <CategoryFilter>
            <CategoryButton $active={true}>시청 기록</CategoryButton>
          </CategoryFilter>

          <ContentGrid>
            {sortedWatchHistory.map((item) => (
              <ContentCard
                key={item.id}
                style={{
                  backgroundImage: `url(${item.poster})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </ContentGrid>
        </div>
      ) : (
        <ContentSection>
          <h3>시청하신 콘텐츠가 없습니다.</h3>
          <p>다양한 콘텐츠를 시청해보세요.</p>
          <p>고객님의 취향에 맞추어 추천을 해드릴까요?</p>
          <div>
            <WatchingButton onClick={() => navigate('/mainhome')}>
              <p>콘텐츠 추천받기</p>
            </WatchingButton>
          </div>

          <RecommendedMovies>
            <div>
              {Array.from({ length: 10 }).map((_, index) => (
                <ColoredCard
                  key={`bg-${index}`}
                  ref={(el) => (coloredCardsRef.current[index] = el)}
                  color={getRandomColor()}
                />
              ))}
            </div>

            {Array.from({ length: 3 }).map((_, index) => (
              <MovieCard
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  backgroundImage: `url(https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/mypage_0${
                    index + 1
                  }.webp)`,
                }}
              />
            ))}
          </RecommendedMovies>
        </ContentSection>
      )}
    </div>
  );
};

export default WatchingContent;

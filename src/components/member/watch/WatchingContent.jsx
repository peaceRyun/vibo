// 사용자 시청내역
import React, { useEffect, useRef } from 'react';
import { ColoredCard, ContentSection, MovieCard, RecommendedMovies, WatchingButton } from './style';
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
]; // 10개 카드의 랜덤 색상에 사용할 색상 배열: 바꿔도됨

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const TestWatchingContent = () => {
    const movies = [
        { src: '/member/mypage_01.webp' },
        { src: '/member/mypage_02.webp' },
        { src: '/member/mypage_04.webp' },
    ];
    const cardsRef = useRef([]);
    const coloredCardsRef = useRef(new Array(10).fill(null));
    const coloredCardColors = useRef(Array.from({ length: 10 }, () => getRandomColor())); // 10개 카드의 랜덤 색상

    //버튼 클릭시 메인 홈 이동
    const navigate = useNavigate();

    const coloredCardFinalPositions = useRef([
        //x:숫자 클수록 오른쪽, y:숫자 클수록 위로
        { x: 480, y: 180 }, //1번
        { x: 670, y: 100 }, //2번
        { x: 600, y: 150 }, //3번
        { x: 160, y: 280 }, //4번
        { x: 650, y: 290 }, //5번
        { x: 400, y: 10 }, //6번
        { x: 500, y: 80 }, //7번
        { x: 430, y: 230 }, //8번
        { x: 250, y: 250 }, //9번
        { x: 400, y: 280 }, //10번
    ]);

    const cardFinalPositions = useRef(
        Array.from({ length: movies.length }, () => ({
            x: 150,
            y: 10,
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
            opacity: 0.6, // 알록달록카드 흐릿하게 조정 여기서
        });

        cardsRef.current.forEach((card, index) => {
            if (card) {
                const { x, y } = cardFinalPositions.current[index];

                gsap.to(card, {
                    x: index * 100 + x,
                    y: -index * 70 + y,
                    opacity: 1, // 완전히 선명하게
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
                <div>
                    <WatchingButton onClick={() => navigate('/')}>
                        <p>콘텐츠 추천받기</p>
                    </WatchingButton>
                </div>

                <RecommendedMovies>
                    {/* {movies.map((movie, index) => (
            <MovieCard key={index} style={{ backgroundImage: `url(${movie.src})` }} />
          ))} */}
                    <div>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <ColoredCard
                                key={`bg-${index}`}
                                ref={(el) => (coloredCardsRef.current[index] = el)}
                                color={coloredCardColors.current[index]} // 랜덤 컬러 지정
                            >
                                {index + 1}
                                {/* 삭제예정 */}
                            </ColoredCard>
                        ))}
                    </div>
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

// 시청내역 & 콘텐츠 추천 임시로
import styled from 'styled-components';

export const ContentSection = styled.div`
    text-align: left;
    margin-top: 20px;
    padding: 25px 0;
    h3 {
        font-size: 33px;
        padding-bottom: 25px;
    }
    p {
        font-size: 23px;
    }
`;

// 영화 추천 이미지 컨테이너 임시로
export const RecommendedMovies = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: -100px;
    position: relative;
`;

export const MovieCard = styled.div`
    width: 18.75rem;
    height: 380px;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    position: absolute;
    transform-origin: bottom;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.6); // inner shadow
        border-radius: 8px;
    }
`;

export const ColoredCard = styled.div`
    width: 9.375rem;
    height: 190px;
    background-color: ${(props) => props.color};
    border-radius: 8px;
    position: absolute;
    transform-origin: bottom;
    z-index: -2;
    opacity: 0.5;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
`;

// 버튼 추가 스타일링
export const WatchingButton = styled.div`
    display: flex;
    width: 150px;
    height: 45px;
    padding: 30px 20px;
    white-space: nowrap;
    border-radius: 5px;
    background-color: var(--primary-base);
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    cursor: pointer;
    &:hover {
        background-color: var(--primary-600);
    }
    p {
        display: flex;
        text-align: center;
        font-size: var(--label-medium-size);
        font-weight: var(--display-small-weight);
        color: var(--black);
    }
`;

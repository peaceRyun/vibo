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
  margin-top: 50px;
  position: relative;
`;

export const MovieCard = styled.div`
  // width: 18.75rem;
  // height: 380px;
  // background-size: cover;
  // background-position: center;
  // border-radius: 8px;
  // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  // transition: transform 0.3s ease;

  // &:hover {
  //   transform: scale(1.05);
  // }
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
    box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.6); // inner shadow 추가
    // border: 1px solid rgba(255, 255, 255, 0.4); // stroke 효과
    border-radius: 8px;
  }
`;

export const ColoredCard = styled.div`
  width: 9.375rem; // 원본 카드의 50%
  height: 190px; // 원본 카드의 50%
  background-color: ${(props) => props.color}; // 개별 카드마다 다른 색 적용
  border-radius: 8px;
  position: absolute;
  transform-origin: bottom;
  z-index: -2; // 원본 카드 아래로 배치
  opacity: 0.5;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
`;

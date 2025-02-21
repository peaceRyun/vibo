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
  margin-top: 30px;
`;

export const MovieCard = styled.div`
  width: 18.75rem;
  height: 380px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

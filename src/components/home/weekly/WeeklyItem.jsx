import styled from 'styled-components';
import { MdErrorOutline } from 'react-icons/md';

const WeeklyItem = ({ show }) => {
  if (!show) {
    return (
      <EmptyItemContainer>
        <MdErrorOutline size={26} />
        콘텐츠가 없습니다.
        <p>다른 요일탭을 클릭해주세요.</p>
      </EmptyItemContainer>
    );
  }

  const posterUrl = show.poster_path
    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
    : '/mainhome/default_poster.webp';

  return (
    <WeeklyItemContainer>
      <WeeklyImg src={posterUrl} alt={show.name || '콘텐츠 이미지'} />
    </WeeklyItemContainer>
  );
};

export default WeeklyItem;

const WeeklyItemContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  /* width: 260px; */
  height: 375px;
  cursor: pointer;
  margin: 10px 10px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 400px) {
    height: auto;
    width: 90%;
    margin: 0 auto;
    transform: scale(0.85);

    &:hover {
      transform: translateY(-3px) scale(0.85);
    }
  }
`;

const WeeklyImg = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  transition: filter 0.3s;

  ${WeeklyItemContainer}:hover & {
    filter: brightness(0.7);
  }

  @media (max-width: 400px) {
    max-height: 170px;
    width: 85%;
    margin: 0 auto;
    display: block;
  }
`;

const EmptyItemContainer = styled.div`
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 12px;
    color: #a8a9ad;
  }
  /* @media (max-width: 400px) {
    height: 180px;
  } */
`;

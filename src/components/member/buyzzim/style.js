import styled from 'styled-components';

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
  padding: 20px;
  justify-content: center;
  max-width: 1700px;
  margin: auto;
`;

export const ContentCard = styled.div`
  width: 250px;
  height: 415px;
  aspect-ratio: 9 / 14;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }
`;

export const CategoryFilter = styled.div`
  display: flex;
  gap: 15px;
  margin: 50px 0;
  /* margin-bottom: 20px; */
  justify-content: left;
`;

export const CategoryButton = styled.button`
  background: ${(props) => (props.active ? '#009C8C' : '#222')};
  color: ${(props) => (props.active ? '#000' : '#fff')};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: var(--label-medium-size);
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: var(--secondary-base);
    color: black;
  }
`;

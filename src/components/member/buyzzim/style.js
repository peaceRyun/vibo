import styled from 'styled-components';

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 15px;
  padding: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
`;

export const ContentCard = styled.div`
  width: 100%;
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
  margin-bottom: 20px;
  justify-content: center;
`;

export const CategoryButton = styled.button`
  background: ${(props) => (props.active ? '#68F5EB' : '#222')};
  color: ${(props) => (props.active ? '#000' : '#fff')};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #68f5eb;
    color: black;
  }
`;

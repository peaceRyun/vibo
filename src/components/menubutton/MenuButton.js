import styled from 'styled-components';

export const ExploreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: black;
  border-radius: 10px;
`;

export const ExploreBox = styled.div`
  width: 200px;
  height: 120px;
  background: ${(props) => (props.active ? '#68F5EB' : '#444')};
  color: ${(props) => (props.active ? 'black' : 'white')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #68f5eb;
    color: black;
  }
`;

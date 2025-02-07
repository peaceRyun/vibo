import styled from 'styled-components';

export const GenreButton = styled.button`
  background: ${(props) => (props.active ? '#68F5EB' : '#222')};
  color: ${(props) => (props.active ? '#000' : '#fff')};
  border: none;
  padding: 12px 20px;
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

export const ButtonContainer = styled.div`
  max-width: 1820px;
  width: 100%;
  margin: 0 auto; /* ✅ 가운데 정렬 */
  padding: 0 20px; /* ✅ 좌우 패딩 추가 */
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

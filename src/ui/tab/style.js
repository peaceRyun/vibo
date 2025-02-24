import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  /* 드래그방지 */
  user-select: none;
  pointer-events: auto;
  touch-action: pan-y;
  user-drag: none;
  /* background-color: black; */
  /* padding: 20px; */
  /* margin-top: 40px;
  margin-bottom: 40px; */
`;

export const TabButtonStyled = styled.button`
  width: 13.75rem;
  height: 3.75rem;
  padding: 10px 16px;
  border-radius: 999px;
  border: 2px solid var(--primary-base);
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.$active ? 'var(--black)' : '#ccc')};
  background-color: ${(props) => (props.$active ? 'var(--primary-base)' : 'transparent')};

  &:hover {
    background-color: #06dbbf;
    border: 2px solid #06dbbf;
  }
`;

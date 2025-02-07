import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  /* background-color: black; */
  padding: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const TabButtonStyled = styled.button`
  width: 13.75rem;
  height: 3.75rem;
  padding: 10px 16px;
  border-radius: 999px;
  border: 2px solid var(--secondary-base);
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.active ? 'var(--white)' : '#ccc')};
  background-color: ${(props) => (props.active ? 'var(--secondary-base)' : 'transparent')};

  &:hover {
    opacity: 0.8;
  }
`;

import styled from 'styled-components';

export const MoreButton = styled.button`
  display: flex;
  background-color: var(--primary-600);
  color: black;
  font-size: 24px;
  padding: 17px 32px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 31.25rem;
  height: 4.375rem;
  font-weight: bold;

  &:hover {
    background-color: var(--primary-base);
  }
`;

// const Section = styled.section`

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 120px;
`;

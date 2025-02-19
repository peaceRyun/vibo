import styled from 'styled-components';

export const WeeklyItemContainer = styled.div`
  width: 18.75rem;
  height: 26.9375rem;
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  transition: width 0.5s ease, height 0.5s ease;

  @media (max-width: 1024px) {
    width: 250px;
    height: 400px;
  }
  @media (max-width: 600px) {
    width: 230px;
    height: 350px;
  }
`;

export const WeeklyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

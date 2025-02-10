import styled from 'styled-components';

export const RateItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RateItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: ${({ isFirst }) => (isFirst ? '200px 200px 8px 8px' : '8px')};
  transition: border-radius 0.5s ease-in-out;
`;

export const RankNumber = styled.div`
  position: relative;
  bottom: -50px;
  left: -30px;
  z-index: 10;
  font-size: ${({ isFirst }) => (isFirst ? '300px' : '200px')};
  font-weight: 900;
  color: white;
  /* opacity: ${({ isFirst }) => (isFirst ? '1' : '0.5')}; */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease-in-out;
`;

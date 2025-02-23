import styled from 'styled-components';

export const CommonItemContainer = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 250px; */
  height: 375px;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-right: 40px;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.$isHovered ? 'rotateY(180deg)' : 'rotateY(0)')};
  border-radius: 10px;
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

export const CommonImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

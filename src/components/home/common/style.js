import styled from 'styled-components';

export const CommonItemContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  height: 375px;
  border-radius: 0.5rem;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 230px;
    height: 350px;
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.$isHovered ? 'rotateY(180deg)' : 'rotateY(0)')};
  border-radius: 0.5rem;
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.5rem;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 0.5rem;
`;

export const CommonImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

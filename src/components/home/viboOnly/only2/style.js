import styled from 'styled-components';

export const OnlyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 39.6875rem;
  height: 21.875rem;
  background-color: #000;
  padding: 0.9375rem;
  display: flex;
  gap: 2rem;
  border-radius: 0.5rem;
`;

export const Poster = styled.img`
  /* width: 18.125rem;  */
  height: 100%; /* 290px */
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.8rem;
  width: 355px;
`;

export const Title = styled.h2`
  font-size: 2.125rem; /* 34px */
  font-weight: 900; /* Pretendard Heavy */
  font-family: 'Pretendard', sans-serif;
  color: #fff;
  margin: 0;
`;

export const Tags = styled.div`
  gap: 10px;
  display: flex;
  /* width: 355px; */
`;

export const Tag = styled.div`
  font-size: 15px;
  padding: 15px;
  height: 1.6875rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  white-space: nowrap;
`;

export const Description = styled.p`
  font-size: 1.0625rem; /* 17px */
  color: #939598;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin: 0;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  padding: ${(props) => (props.$padding ? props.$padding : '')};
  position: ${(props) => props.$position};
  width: ${(props) => props.$width || 'auto'};
  border-top: ${(props) => props.$borderTop};
  white-space: ${(props) => props.$whiteSpace};
  font-size: ${(props) => props.$fontSize};
`;

export const Label = styled.span`
  font-size: 6.25rem;
  font-weight: 900;
  line-height: 100%;
  font-style: italic;
`;

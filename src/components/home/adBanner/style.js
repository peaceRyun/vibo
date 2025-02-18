import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 1770px;
  height: 28.6875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  @media (max-width: 1024px) {
    width: 1024px;
    height: 20rem;
  }

  @media (max-width: 600px) {
    width: 390px;
    height: 15rem;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  @media (max-width: 1024px) {
    width: 100%;
    height: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`;

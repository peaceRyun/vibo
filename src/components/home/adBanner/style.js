import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 60px 0 60px 0;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    height: 25rem;
    margin: 40px 0 40px 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 20rem;
    margin: 20px 0 20px 0;
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

import styled from 'styled-components';

export const AboutWrapper = styled.div`
  // margin: 100px 0;
  // padding: 20px;
`;

export const Inner = styled.div`
  //   margin: 0 auto;
  //   @media (max-width: 599px) {
  //     max-width: calc(390px - var(--spacing-8));
  //   }
  //   @media (min-width: 600px) {
  //     max-width: calc(var(--breakpoint-tablet) - var(--spacing-8));
  //   }
  //   // @media (min-width: 1025px) {
  //   //   max-width: calc(var(--breakpoint-desktop) - 100px);
  //   // }
  //
`;
export const AboutMInner = styled.div`
  margin: 0 auto;
  @media (max-width: 599px) {
    max-width: calc(390px - var(--spacing-8));
  }
  @media (min-width: 600px) {
    max-width: calc(var(--breakpoint-tablet) - var(--spacing-8));
  }

  position: relative;
`;

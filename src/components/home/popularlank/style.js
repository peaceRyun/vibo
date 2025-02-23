import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 5px;

  max-width: 1860px;

  .swiper-slide {
    width: 300px !important;
    height: 443px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
    transition: all 0.3s ease;
    overflow: visible !important;
  }

  @media (max-width: 1024px) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PopularSection = styled.div`
  display: flex;

  align-items: center;
  position: relative;

  /* padding: 0 20px; */
  gap: 20px;
  margin-top: 100px;
`;

export const PopularTitle = styled.div`
  color: white;
  margin-top: 32px;

  width: 465px;

  line-height: 1.5;

  text-align: left;
  font-size: var(--title-xlarge-size); //32
  font-weight: var(--title-xlarge-weight); //800
  @media (max-width: 1024px) {
    font-size: var(--title-large-mobile); //24
    font-weight: var(--title-large-weigh); //700
    text-align: left;
    white-space: normal;
  }
  @media (max-width: 600px) {
    font-size: var(--title-small-mobile); //17
    font-weight: var(--title-xsmall-weight); //700
  }
`;

export const PopularInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 443px;
`;

// ---------------------------------아이템 스타일링
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RankingNumber = styled.span`
  position: absolute;
  bottom: -3px;
  left: 15%;
  transform: translate(-67%, 15%);
  font-size: 130px;
  font-weight: 900;
  /* color: rgba(255, 255, 255, 0.8); */
  height: 200px;
  z-index: 1;
  background: linear-gradient(810deg, #3e3e3f, #a8a9ad, #d1d2d4); /* 부드러운 회색-흰색 그라데이션 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1024px) {
    width: 80%;
    font-size: 100px;
    font-weight: 900;
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 90px;
    font-weight: 900;
    bottom: 4px;
    left: 25%;
  }
`;
export const ImageContainer = styled.div`
  border: 2px solid transparent;
  margin-right: 40px;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;

    @media (max-width: 1024px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 70%;
      margin-left: 30px;
    }
  }
`;

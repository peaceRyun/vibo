import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 5px;
  /* display: flex;
  flex: 3;
  height: 535.62px; */
  /* overflow: visible !important; */

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
`;

export const PopularSection = styled.div`
  display: flex;

  align-items: center;
  position: relative;

  /* padding: 0 20px; */
  gap: 20px;
  margin-top: 100px;
`;

export const PopularTitle = styled.h2`
  color: white;
  /* width: 23rem; */
  font-size: 40px;
  width: 465px;
  font-weight: bold;
  line-height: 1.5;
  margin: 0;
  text-align: left;
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
  bottom: -18px;
  left: 16%;
  transform: translate(-67%, 15%);
  font-size: 130px;
  font-weight: 900;
  /* color: rgba(255, 255, 255, 0.8); */
  height: 200px;
  z-index: 1;
  background: linear-gradient(810deg, #3e3e3f, #a8a9ad, #d1d2d4); /* 부드러운 회색-흰색 그라데이션 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const ImageContainer = styled.div`
  border: 2px solid transparent;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

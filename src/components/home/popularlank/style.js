import styled from 'styled-components';

export const ListWrapper = styled.div`
  flex: 3;
  height: 535.62px;
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
  }
`;

export const PopularSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 20px;
  margin-top: 100px;
`;
// ---------------------------------아이템 스타일링
export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RankingNumber = styled.span`
  position: absolute;
  bottom: -30px;
  left: 10px;
  font-size: 64px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.3);
  z-index: 1;
`;
export const ImageContainer = styled.div`
  border: 2px solid transparent;
  /* &:hover {
    border: 2px solid blue;
  } */

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

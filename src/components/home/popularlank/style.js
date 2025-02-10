import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
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

  /* padding: 0 20px; */
  gap: 20px;
  margin-top: 100px;
`;

export const PopularTitle = styled.h2`
  color: white;
  /* width: 23rem; */
  font-size: 40px;
  width: 443px;
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
  width: 443px;
`;

// ---------------------------------아이템 스타일링
export const ItemWrapper = styled.div`
  /* position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* 부모 컨테이너 */
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center; /* 중앙 정렬 */
`;
export const RankingNumber = styled.span`
  position: absolute;
  bottom: -18px;
  left: 16%;
  transform: translateX(-50%);
  font-size: 150px;
  font-weight: 900;
  /* color: rgba(255, 255, 255, 0.8); */
  height: 200px;
  z-index: 1;
  background: linear-gradient(810deg, #3e3e3f, #a8a9ad, #d1d2d4); /* 부드러운 회색-흰색 그라데이션 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5); /* 어두운 그림자로 가독성 확보 * */

  /* position: absolute;
  bottom: -30px;
  left: 10px;
  font-size: 150px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.3);
  width: 80px; /* 일정한 너비 유지 */

  /*     position: relative;
    bottom: -111px;
    left: 49px;
    font-size: 140px;
    font-weight: 900;
    color: red; */
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

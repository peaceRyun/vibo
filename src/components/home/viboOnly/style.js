import styled from 'styled-components';

export const ViboContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
  width: 1750px;
  padding: 60px 0px 60px 0px;
  margin-left: -60px;
`;

export const ViboAllContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin: 0 90px;
  /* padding: 60px 50px 60px 50px; */
  @media (max-width: 1024px) {
    padding: 40px 0 40px 0;
  }
  @media (max-width: 600px) {
    padding: 30px 0 30px 0;
  }
`;

export const Title = styled.div`
  display: flex;
  color: white;

  margin-top: 40px;
  text-align: center;
  flex-direction: column;
  font-size: var(--title-xlarge-size);
  font-weight: var(--title-xlarge-weight); //800
  /*text-overflow: ellipsis; 왜 안먹음.. */

  @media (max-width: 1024px) {
    white-space: nowrap;
    overflow: hidden;
    margin-top: 10px;
    font-size: var(--title-large-mobile); //24
    font-weight: var(--title-large-weigh); //700
    text-align: 10px;
  }

  @media (max-width: 600px) {
    font-size: var(--title-small-mobile); //17
    font-weight: var(--title-xsmall-weight); //700
  }
`;

// export const Title = styled.div`
//   display: flex;
//   color: white;
//   font-size: 40px;
//   font-weight: 800;
//   margin-top: 40px;
//   text-align: center;
//   flex-direction: column;
// `;

export const Underline2 = styled.div`
  width: 600px;
  height: 1.5px;
  background: white;
  margin-top: 30px;
  align-self: center;

  @media (max-width: 1024px) {
    width: 80%;
    height: 2px;
    align-self: center;
    margin-top: 20px;
  }
`;

// 모바일 슬라이드 스타일링

export const MobileSlider = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100vh;
  }
`;

export const MobileCard = styled.div`
  background: black;
  border-radius: 16px;
  padding: 16px;
  /* display: flex
; */
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-height: 800px; */
  margin: 0 auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1024px) {
    width: 100%;
    max-height: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
    /* max-height: 100%; */
  }
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const MobilePoster = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 12px;
`;

export const InfoSection = styled.div`
  color: #fff;
  @media (max-width: 1024px) {
    width: 300px;
    max-height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 1024px) {
    width: 266px;
    max-height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const MobileCardText = styled.div`
  display: flex;
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  @media (max-width: 1024px) {
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    gap: 10px;
    margin-bottom: 6px;
    justify-content: flex-start;
  }
`;

export const Tag = styled.span`
  background: #444;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  @media (max-width: 1024px) {
    font-size: 10px;
    gap: 15px;
    margin-bottom: 6px;
    display: flex;
    justify-content: flex-start;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #bbb;
  max-width: 400px;
  height: auto;
  @media (max-width: 1024px) {
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* 최대 3줄 표시 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

// export const MobileTitle = styled.div`
//   font-size: 12px;
//   font-weight: 600;
//   text-align: center;
// `;

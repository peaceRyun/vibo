import styled from 'styled-components';

export const ViboContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  width: 1750px;
  @media (max-width: 1200px) {
    max-width: 1000px;
    gap: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  color: white;
  font-size: 40px;
  font-weight: 800;
  margin-top: 40px;
  text-align: center;
  flex-direction: column;
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
  width: 600px; /* 밑줄 길이 */
  height: 3px; /* 밑줄 두께 */
  background: white; /* 밑줄 색상 */
  margin-top: 30px; /* H2와의 간격 */
  align-self: center;

  @media (max-width: 1024px) {
    width: 200px;
    height: 2px;
    align-self: center;
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
`;

export const MobileCard = styled.div`
  background: #222;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 320px;
  margin: 0 auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 200px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const InfoSection = styled.div`
  color: #fff;
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Tag = styled.span`
  background: #444;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #bbb;
  max-width: 260px;
`;

export const MobileTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

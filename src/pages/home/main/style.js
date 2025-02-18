import styled from 'styled-components';

// 메인 컨테이너 (전체 컴포넌트 감싸기)
export const MainContainer = styled.div`
  /* max-width: 1820px; */
  width: 100%;
  margin: 0 auto;
  padding: 0 0 0 60px;

  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (max-width: 1024px) {
    padding: 0 20px; // 1024px 이하에서 좌우 패딩 조정
    gap: 40px; // 간격 줄이기
  }

  @media (max-width: 600px) {
    padding: 0 10px; // 600px 이하에서 더 작은 패딩 적용
    gap: 20px; // 간격 더 줄이기
  }
  /* 
  @media (max-width: 1200px) {
    padding: 0 40px;
    gap: 40px;
  }

  @media (max-width: 1024px) {
    padding: 0 30px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 20px;
  } */
`;

export const MainContent = styled.div`
  padding-top: 100px;
  /* @media (max-width: 1024px) {
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    padding-top: 60px;
  } */
`;

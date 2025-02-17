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
  }
`;

export const MainContent = styled.div`
  padding-top: 100px;
  @media (max-width: 1024px) {
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

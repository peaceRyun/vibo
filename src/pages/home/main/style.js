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
    padding: 30px;
  }
`;

export const MainContent = styled.div`
  padding-top: 100px;
`;

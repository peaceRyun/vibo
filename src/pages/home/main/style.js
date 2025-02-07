import styled from 'styled-components';

// 메인 컨테이너 (전체 컴포넌트 감싸기)
export const MainContainer = styled.div`
  /* max-width: 1820px; */
  width: 100%;
  margin: 0 auto; /* ✅ 가운데 정렬 */
  padding: 0 20px; /* ✅ 좌우 패딩 추가 */
  display: flex;
  flex-direction: column;
  gap: 60px;
  /* padding: 50px; */
  /* display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 50px;

  margin: auto; */
`;

export const ViboOnly = styled.div`
  display: flex;
`;

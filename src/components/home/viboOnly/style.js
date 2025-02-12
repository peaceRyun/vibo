import styled from 'styled-components';

export const ViboContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
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
`;

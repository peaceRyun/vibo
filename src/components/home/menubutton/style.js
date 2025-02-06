import styled from 'styled-components';

export const Section = styled.div`
  background: black;
  text-align: center;
  margin-top: 60px;
  padding: 40px 40px;
  max-width: 1820px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 40px;
  margin-bottom: 70px;
  display: inline-block;
`;

export const Underline = styled.div`
  width: 1000px; /* 밑줄 길이 */
  height: 3px; /* 밑줄 두께 */
  background: white; /* 밑줄 색상 */
  margin-top: 30px; /* H2와의 간격 */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

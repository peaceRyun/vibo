import styled from 'styled-components';

export const Section = styled.div`
  background: black;
  text-align: center;
  margin-top: 60px;
  padding: 40px 40px;
  @media (max-width: 1024px) {
    padding: 20px;
    margin-top: 30px;
  }
`;

export const Title = styled.div`
  color: var(--white);
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 70px;
  display: inline-block;
  @media (max-width: 1024px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

export const Underline = styled.div`
  width: 1000px; /* 밑줄 길이 */
  height: 3px; /* 밑줄 두께 */
  background: white; /* 밑줄 색상 */
  margin-top: 30px; /* H2와의 간격 */
  align-self: center;
  @media (max-width: 1024px) {
    width: 60%;
  }
`;

export const ButtonContainer = styled.div`
  /* display: flex;
  justify-content: center;
  gap: 40px;
  @media (max-width: 1024px) {
    gap: 20px;
  } */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    padding: 40px 40px;
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    padding: 40px 40px;
  }
`;

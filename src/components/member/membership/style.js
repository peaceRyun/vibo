import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: black;
  padding: 50px;
  border: 2px solid cyan;
  border-radius: 10px;
  color: white;
  width: 600px;
  height: 600px;
  text-align: center;
  font-weight: 7600;
  position: relative;
  .subtitle {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
      color: gray;
      padding: 10px;
    }
  }
`;
``;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: cyan;
  color: black;
  font-size: 40px;
`;

export const SubscriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  padding: 20px;
  border: 1px solid cyan;
  border-radius: 5px;
  margin: 60px 25px;
  width: 450px;
  height: 110px;
  .text {
    display: flex;
  }
  p {
    font-size: 20px;
    color: white;
    text-align: left;
  }
`;

export const ConfirmButton = styled.button`
  width: 260px;
  height: 50px;
  background: cyan;
  color: black;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

export const PaymentButton = styled.button`
  flex: 1 1 calc(50% - 10px); /* 2개씩 배치 */
  padding: 10px;
  background: gray;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover {
    background: cyan;
    color: black;
  }
`;
export const PlanContainer = styled.div`
  background: #222;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.p`
  color: #bbb;
  font-size: 14px;
`;

export const Value = styled.p`
  color: #bbb;
  font-size: 14px;
`;

export const HighlightValue = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const CheckBox = styled.div`
  display: flex;
`;

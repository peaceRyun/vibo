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
  background: black;
  padding: 20px;
  border: 2px solid cyan;
  border-radius: 8px;
  color: white;
  width: 400px;
  text-align: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: cyan;
  font-size: 18px;
  cursor: pointer;
`;

export const SubscriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  padding: 10px;
  border: 1px solid cyan;
  border-radius: 5px;
  margin: 20px 0;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  background: cyan;
  color: black;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

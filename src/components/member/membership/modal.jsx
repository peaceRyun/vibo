import React from 'react';
import { CloseButton, ConfirmButton, ModalBackground, ModalContainer, SubscriptionBox } from './style';

const Modal = ({ onclose, onConfirm }) => {
  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <CloseButton onClick={onclose}>&times;</CloseButton>
          <h2>광고형 스탠다드 이용권의 결제 내역을 확인해주세요.</h2>
          <p>정기 결제 주기를 확인해 주세요.</p>
          <SubscriptionBox>
            <span>
              월간{' '}
              <span
                style={{
                  background: 'cyan',
                  color: 'black',
                  padding: '2px 5px',
                  borderRadius: '3px',
                  fontSize: '12px',
                }}
              >
                EVENT
              </span>
            </span>
            <span>
              월 5,500원
              <br />
              <small style={{ color: 'gray' }}>지금 가입하면 50% 할인</small>
            </span>
          </SubscriptionBox>
          <ConfirmButton onClick={onConfirm}>확인 →</ConfirmButton>
        </ModalContainer>
      </ModalBackground>
      {/* <div>
        <h2>
          광고형 스탠다드 이용권의
          <br />
          결제 내역을 확인해주세요.
        </h2>
        <p>정기 결제 주기를 확인해주세요.</p>
      </div>
      <div>
        <span>월간</span>
        <span>EVENT</span>
        <span>월5,500원</span>
        <span>지금 구독하면 50% 할인</span>
      </div>
      <button>확인 </button> */}
    </>
  );
};

export default Modal;

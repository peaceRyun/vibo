import { useState } from 'react';
import {
  CheckBox,
  CloseButton,
  ConfirmButton,
  HighlightValue,
  InfoRow,
  Label,
  ModalBackground,
  ModalContainer,
  PaymentButton,
  PaymentOptions,
  PlanContainer,
  SubscriptionBox,
  Title,
} from './style';
import { Value } from 'sass';

const Modal = ({ onClose }) => {
  const [step, setStep] = useState(1);

  // 1단계: 결제 확인, 2단계: 결제 완료

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        {/* 1단계: 결제 확인 화면 */}
        {step === 1 && (
          <>
            <div className="subtitle">
              <h2>
                광고형 스탠다드 이용권의
                <br />
                결제 내역을 확인해주세요.
              </h2>
              <p>정기 결제 주기를 확인해 주세요.</p>
            </div>

            <SubscriptionBox>
              <div className="text">
                <p>
                  월간{' '}
                  <span
                    style={{
                      background: 'cyan',
                      color: 'black',
                      padding: '5px 5px',
                      borderRadius: '3px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                    }}
                  >
                    EVENT
                  </span>
                </p>
              </div>
              <p>
                월 5,500원
                <br />
                <span style={{ color: 'gray', fontSize: '12px' }}>지금 가입하면 50% 할인</span>
              </p>
            </SubscriptionBox>

            {/* "확인" 버튼 클릭 시 2단계로 이동 */}
            <ConfirmButton onClick={() => setStep(2)}>확인 →</ConfirmButton>
          </>
        )}

        {/* 2단계: 결제 완료 화면 */}
        {step === 2 && (
          <>
            <div className="subtitle">
              <h2>결제 정보를 입력해 주세요.</h2>
              <p>정기 결제에 사용할 결제 정보를 입력해 주세요.</p>
            </div>

            <PlanContainer>
              <Title>스탠다드 이용권</Title>

              <InfoRow>
                <Label>요금</Label>
                <p>5,500원</p>
              </InfoRow>

              <InfoRow>
                <Label>혜택</Label>
                <p>다운로드 3회권</p>
              </InfoRow>

              <InfoRow>
                <Label>결제 예정 금액</Label>
                <HighlightValue>5,500원</HighlightValue>
              </InfoRow>
            </PlanContainer>

            <PaymentOptions>
              <PaymentButton>결제방법1</PaymentButton>
              <PaymentButton>결제방법2</PaymentButton>
              <PaymentButton>결제방법3</PaymentButton>
              <PaymentButton>결제방법4</PaymentButton>
            </PaymentOptions>
            <CheckBox>
              <div>
                <input type="checkbox" id="agree" />
                <label htmlFor="agree"> 동의사항 내용 1</label>
              </div>
              <div>
                <input type="checkbox" id="agree" />
                <label htmlFor="agree"> 동의사항 내용 1</label>
              </div>
              <div>
                <input type="checkbox" id="agree" />
                <label htmlFor="agree"> 동의사항 내용 1</label>
              </div>
            </CheckBox>
            <ConfirmButton onClick={onClose}>닫기</ConfirmButton>
          </>
        )}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

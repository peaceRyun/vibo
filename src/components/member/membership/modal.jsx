import { useState } from 'react';
import {
  CloseButton,
  ConfirmButton,
  Flex,
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
import { MdRadioButtonChecked } from 'react-icons/md';
import { IoCheckbox } from 'react-icons/io5';
import { FiArrowRight } from 'react-icons/fi';

const Modal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedButton, setSelectedButton] = useState(null);

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
                <p>월간 </p>
                <span
                  style={{
                    background: ' var(--primary-base)',
                    color: 'black',
                    padding: '5px 5px',
                    borderRadius: '3px',
                    fontSize: '14px',
                    textAlign: 'center',
                    fontWeight: '800',
                  }}
                >
                  EVENT
                </span>
              </div>
              <p>
                월 5,500원
                <br />
                <span style={{ color: 'var(--gray-700)', fontSize: '14px' }}>지금 가입하면 50% 할인</span>
              </p>
            </SubscriptionBox>

            {/* "확인" 버튼 클릭 시 2단계로 이동 */}
            <ConfirmButton onClick={() => setStep(2)}>
              확인
              <FiArrowRight size={30} />
            </ConfirmButton>
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
              {['결제방법1', '결제방법2', '결제방법3', '결제방법4'].map((method) => (
                <PaymentButton
                  key={method}
                  onClick={() => setSelectedButton(method)}
                  $isSelected={selectedButton === method} // 선택 상태 전달
                >
                  {method}
                </PaymentButton>
              ))}
            </PaymentOptions>

            <Flex $flexDirection="column" $width="400px" $gap="7px">
              <Flex className="CheckBox" $justifyContent="space-between">
                <Flex $gap="15px" $alignItems="center" className="checkbox1">
                  <input type="checkbox" id="agree" />
                  <MdRadioButtonChecked color="var(--primary-base)" size="20px" />
                  <label htmlFor="agree"> 동의사항 내용 1</label>
                </Flex>
                <Flex $gap="15px" $alignItems="center" className="checkbox1">
                  <input type="checkbox" id="agree" />
                  <MdRadioButtonChecked color="var(--primary-base)" size="20px" />
                  <label htmlFor="agree"> 동의사항 내용 2</label>
                </Flex>
              </Flex>

              <Flex className="checkbox2" $gap="15px" $alignItems="center">
                <input type="checkbox" id="agree" />
                <IoCheckbox color="var(--primary-base)" size="20px" />
                <label htmlFor="agree"> 전체내용 동의하기</label>
              </Flex>
            </Flex>
            {/* 
            <ConfirmButton onClick={onClose}>닫기</ConfirmButton> */}
          </>
        )}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

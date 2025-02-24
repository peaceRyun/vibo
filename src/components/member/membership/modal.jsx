import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔹 추가
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
import { FiArrowRight } from 'react-icons/fi';

const Modal = ({ onClose, selectedPlan }) => {
    const [step, setStep] = useState(1);
    const [selectedButton, setSelectedButton] = useState(null);
    const navigate = useNavigate();

    const planDetails = {
        basic: { name: '베이직', price: '무료', benefit: 'X' },
        standard: { name: '스탠다드', price: '5,500원', benefit: '다운로드 3회권' },
        premium: { name: '프리미엄', price: '9,900원', benefit: '모든 혜택 제공' },
    };

    const { name, price, benefit } = planDetails[selectedPlan] || planDetails.standard;

    const handlePayment = () => {
        if (!selectedButton) {
            alert('결제 방법을 선택해주세요!');
            return;
        }

        localStorage.setItem('selectedPlan', selectedPlan);

        alert(`${name} 이용권 결제가 완료되었습니다.`);
        onClose();
        navigate('/mypage');
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <CloseButton onClick={onClose}>&times;</CloseButton>

                {step === 1 && (
                    <>
                        <div className="subtitle">
                            <h2>{name} 이용권의 결제 내역을 확인해주세요.</h2>
                            <p>정기 결제 주기를 확인해 주세요.</p>
                        </div>

                        <SubscriptionBox>
                            <div className="text">
                                <p>월간 </p>
                            </div>
                            <p>{price}</p>
                        </SubscriptionBox>

                        <ConfirmButton onClick={() => setStep(2)}>
                            확인
                            <FiArrowRight size={30} />
                        </ConfirmButton>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="subtitle">
                            <h2>결제 정보를 입력해 주세요.</h2>
                        </div>

                        <PlanContainer>
                            <Title>{name} 이용권</Title>
                            <InfoRow>
                                <Label>요금</Label>
                                <p>{price}</p>
                            </InfoRow>
                            <InfoRow>
                                <Label>혜택</Label>
                                <p>{benefit}</p>
                            </InfoRow>
                        </PlanContainer>

                        <PaymentOptions>
                            {['신용카드', '계좌이체', '페이코', '카카오페이'].map((method) => (
                                <PaymentButton
                                    key={method}
                                    onClick={() => {
                                        setSelectedButton(method);
                                        handlePayment();
                                    }}
                                    $isSelected={selectedButton === method}
                                >
                                    {method}
                                </PaymentButton>
                            ))}
                        </PaymentOptions>
                    </>
                )}
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;

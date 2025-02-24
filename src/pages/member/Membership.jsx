import { useState } from 'react';
import {
    Container,
    FeatureList,
    MembershipBanner,
    PaymentButton,
    Plan,
    PlanWrapper,
    SubscriptionContainer,
} from './style';
import Modal from '../../components/member/membership/modal';
import { MainContent } from '../home/main/style';

const Membership = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <>
            <MainContent>
                <Container />
                <MembershipBanner>
                    <img
                        src="https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/member_banner.PNG"
                        alt="membershipbanner"
                    />
                    <div className="banner-content">
                        <h1>VIBO 여기서 지금 스트리밍중</h1>
                        <p>다양한 콘텐츠를 합리적인 멤버십으로 즐겨보세요.</p>
                    </div>
                </MembershipBanner>

                <section>
                    <SubscriptionContainer>
                        <div className="title">
                            <h2>이용권 구독</h2>
                            <p>전체 이용권 정보를 보시려면 하단 [모든 이용권 보기] 버튼을 선택하세요.</p>

                            <ul className="list">
                                <li>월간 요금</li>
                                <li>프로필 추가</li>
                                <li>풀영상시청</li>
                                <li>댓글 / 평점</li>
                                <li>VIBO PLUS 이용권</li>
                            </ul>
                        </div>

                        {['basic', 'standard', 'premium'].map((plan) => (
                            <PlanWrapper key={plan}>
                                <Plan
                                    className={plan}
                                    $isFilled={selectedPlan === plan}
                                    onClick={() => handlePlanSelect(plan)}
                                >
                                    <h2>
                                        {plan === 'basic' ? '베이직' : plan === 'standard' ? '스탠다드' : '프리미엄'}
                                    </h2>
                                </Plan>
                                <FeatureList className="text" $isFilled={selectedPlan === plan}>
                                    <li>{plan === 'basic' ? '무료' : plan === 'standard' ? '5,500원' : '9,900원'}</li>
                                    <li>{plan === 'basic' ? '1개' : '3개'}</li>
                                    <li>{plan === 'basic' ? 'x' : '✔'}</li>
                                    <li>{plan === 'basic' ? 'x' : '✔'}</li>
                                    <li>{plan === 'premium' ? '✔' : 'x'}</li>
                                </FeatureList>
                            </PlanWrapper>
                        ))}
                    </SubscriptionContainer>

                    <PaymentButton onClick={() => setIsModalOpen(true)}>결제하기</PaymentButton>
                    {isModalOpen && <Modal selectedPlan={selectedPlan} onClose={() => setIsModalOpen(false)} />}
                </section>
            </MainContent>
        </>
    );
};

export default Membership;

// 멤버쉽(패스) 구매 페이지
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
``;

const Membership = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  return (
    <>
      <MainContent>
        <Container />
        {/* 메인 배너 */}
        <MembershipBanner>
          <img src="/member/member_banner.PNG" alt="membershipbanner" />
          <div className="banner-content">
            <h1>VIBO 여기서 지금 스트리밍중</h1>
            <p>다양한 콘텐츠를 합리적인 멤버십으로 즐겨보세요.</p>
          </div>
        </MembershipBanner>
        <section>
          <SubscriptionContainer>
            <div className="title">
              <h2>이용권 구독</h2>
              <p>
                전체 이용권 정보를 보시려면 <br /> 하단 [모든 이용권 보기] 버튼을 선택하세요.
              </p>

              <ul className="list">
                <li>월간 요금</li>
                <li>프로필 추가</li>
                <li>풀영상시청</li>
                <li>댓글 / 평점</li>
                <li>VIBO PLUS 이용권</li>
              </ul>
            </div>

            <PlanWrapper>
              <Plan
                className="basic"
                $isFilled={selectedPlan === 'basic'}
                onClick={() => setSelectedPlan(selectedPlan === 'basic' ? null : 'basic')}
              >
                <h2>베이직</h2>
              </Plan>
              <FeatureList>
                <li>무료</li>
                <li>1개</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
              </FeatureList>
            </PlanWrapper>

            <PlanWrapper>
              <Plan
                className="standard"
                $isFilled={selectedPlan === 'standard'}
                onClick={() => setSelectedPlan(selectedPlan === 'standard' ? null : 'standard')}
              >
                <h2>스탠다드</h2>
              </Plan>
              <FeatureList>
                <li>5,500원</li>
                <li>3개</li>
                <li>✔</li>
                <li>✔</li>
                <li>x</li>
              </FeatureList>
            </PlanWrapper>

            <PlanWrapper>
              <Plan
                className="premium"
                $isFilled={selectedPlan === 'premium'}
                onClick={() => setSelectedPlan(selectedPlan === 'premium' ? null : 'premium')}
              >
                <h2>프리미엄</h2>
              </Plan>
              <FeatureList>
                <li>9,900원</li>
                <li>3개</li>
                <li>✔</li>
                <li>✔</li>
                <li>✔</li>
              </FeatureList>
            </PlanWrapper>
          </SubscriptionContainer>
          {/* 결제하기 버튼 (모달 열기) */}
          <PaymentButton onClick={() => setIsModalOpen(true)}>결제하기</PaymentButton>

          {/* 모달 표시 */}
          {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
          {/* <PaymentButton>결제하기</PaymentButton>
        <Modal /> */}
          {/* <PaymentButton onClick={() => setIsModalOpen(true)}>결제하기</PaymentButton>
        {isModalOpen && (
          <Modal
            onClose={() => setIsModalOpen(false)}
            onConfirm={() => setIsModalOpen(false)} // 확인 버튼 누르면 모달 닫기
          />
        )} */}
        </section>
      </MainContent>
    </>
  );
};

export default Membership;

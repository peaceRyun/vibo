// 멤버쉽(패스) 구매 페이지
import { Container } from '../../common/style';
import { MembershipBanner } from './style';

const Membership = () => {
  return (
    <>
      {/* 메인 배너 */}
      <Container />
      <MembershipBanner>
        <div className="banner">
          <h1>VIBO 여기서 지금 스트리밍중</h1>
          <p>다양한 콘텐츠를 합리적인 멤버십으로 즐겨보세요.</p>
          <img src="/member/member_banner.PNG" alt="membershipbanner" />
        </div>
      </MembershipBanner>
      <section>
        <div>
          <h2>이용권 구독</h2>
          <p>
            전체 이용권 정보를 보시려면 <br /> 하단 [모든 이용권 보기] 버튼을 선택하세요.
          </p>
        </div>
        <div>
          <h2>베이직</h2>
          <h2>스탠다드</h2>
          <h2>프리미엄</h2>
        </div>
        <div>
          <ul>
            <li>월간요금</li>
            <li>프로필 추가</li>
            <li>풀영상시청</li>
            <li>댓글 / 평점</li>
            <li>VIBO PLUS 이용권</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>무료</li>
            <li>1개</li>
            <li>x</li>
            <li>x</li>
            <li>x</li>
          </ul>

          <ul>
            <li>5,500원</li>
            <li>3개</li>
            <li>v</li>
            <li>v</li>
            <li>x</li>
          </ul>

          <ul>
            <li>9,900원</li>
            <li>3개</li>
            <li>v</li>
            <li>v</li>
            <li>v</li>
          </ul>
        </div>
      </section>
      <button>결제하기</button>
    </>
  );
};

export default Membership;

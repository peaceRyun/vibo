import styled from 'styled-components';

export const MembershipBanner = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 21.875rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .banner-content {
    position: relative;
    z-index: 1;
    text-align: left;
    padding: 0 20px;

    h1 {
      font-size: 60px;
      font-weight: bold;
    }

    p {
      font-size: 40px;
      font-weight: 300;
    }
  }
`;

export const SubscriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  .list {
    margin-top: 3.75rem;
  }
  li {
    font-size: 20px;
    padding: 10px 0;
    /* border-top: 1px solid gray; */
    text-align: left;
  }

  .title {
    padding: 40px 20px;
  }
  h2 {
    font-size: 32px;
    font-weight: 800;
  }
  p {
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 40px 20px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 2.5rem;
    right: 0;
    width: 1px;
    height: 90%;

    background: gray;
  }
`;

export const Plan = styled.div`
  border: 1px solid var(--primary-base);
  /* padding: 20px; */
  border-radius: 10px;
  width: 18.75rem;
  height: 140px;
  background: ${({ isFilled }) => (isFilled ? 'cyan' : 'transparent')}; // 클릭하면 cyan 유지
  color: ${({ isFilled }) => (isFilled ? 'black' : 'inherit')}; // 클릭 시 글자색 변경
  transition: background 0.3s ease, color 0.3s ease;
  &:hover {
    background: var(--primary-base);
    color: black;
  }
  h2 {
    padding: 50px;
    text-align: center;
  }
`;

export const FeatureList = styled.ul`
  font-size: 20px;
  margin-top: 3.125rem;
  list-style: none;
  padding: 3.75rem
  width: 100%;
  &:hover {
    li {
    font-weight: 800;
    color: var(--primary-base);
  }}
  li{
    padding: 10px 0;
    /* border-top: 1px solid gray; */
    text-align: center;
    color: gray;
    font-weight: 300;
  }
  
`;

export const PaymentButton = styled.button`
  display: block;
  width: 240px;
  height: 60px;
  margin: 60px auto;
  padding: 0px;
  background: var(--primary-base);
  color: black;
  font-size: 24px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  /* cursor: pointer; */
`;

export const PlanRow = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: flex-start; */
  /* width: 100%; */
`;

// -------------------------- 회원정보 변경 페이지 스타일

// 전체 컨테이너
// 전체 컨테이너 (화면 중앙 정렬)
export const ProfileContainer = styled.div`
  padding: 3.125rem;
`;

export const InfoTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 60px;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  width: 150px; /* 라벨 고정 너비 */
  text-align: left;
  color: #bbb;
`;

export const InputContainer = styled.div`
  flex: 1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #444;
  border-radius: 5px;
  background: #222;
  color: var(--white);
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #444;
  border-radius: 5px;
  background: #222;
  color: var(--white);
`;

export const FlexGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 60px;
`;

export const Button = styled.button`
  width: 150px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${(props) => (props.cancel ? '#444' : '#68F5EB')};
  color: black;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const InformationBox = styled.div`
  width: 100%;
  height: 200px;
  background: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  color: var(--white);
`;

export const DeleteAccountText = styled.p`
  text-align: left;
  padding: 0 150px;
  color: gray;
  font-size: 12px;
  margin-top: 20px;
`;

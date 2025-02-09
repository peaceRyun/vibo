import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    padding: 0 var(--spacing-5);
    @media (min-width: 1025px) {
        padding: 0 50px;
    }
`;

export const MembershipBanner = styled.div`
    position: relative;
    text-align: center;
    color: var(--white);
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
        text-align: left;
        padding: 0 20px;

        h1 {
            font-size: var(--title-xxlarge-size);
            font-weight: var(--title-xlarge-weight);
        }

        p {
            font-size: var(--heading-medium-size);
            font-weight: var(--label-large-weight);
        }
    }
`;

export const SubscriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
    .list {
        margin-top: 60px;
    }
    li {
        font-size: var(--label-large-size);
        padding: 10px 0;
        /* border-top: 1px solid gray; */
        text-align: left;
    }

    .title {
        padding: 40px 20px;
    }
    h2 {
        font-size: var(--title-xlarge-size);
        font-weight: var(--title-xlarge-weight);
    }
    p {
        font-size: var(--title-medium-size);
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
        width: 0.0625rem;
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
    background: ${({ $isFilled }) => ($isFilled ? '#07FFE6' : 'transparent')};
    color: ${({ $isFilled }) => ($isFilled ? 'black' : 'inherit')};
    transition: background 0.3s ease, color 0.3s ease;
    &:hover {
        background: var(--primary-base);
        color: var(--black);
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

    width: 100%;
    &:hover {
        li {
            font-weight: 800;
            color: var(--primary-base);
        }
    }
    li {
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
    margin: 100px 300px;
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
    align-items: center;
    gap: 10px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 60px;
`;

export const Button = styled.button`
    width: 16.7rem;
    height: 100%;
    padding: ${(props) => (props.$padding ? props.$padding : '1.675rem 0px')};
    border: ${(props) => (props.$cancel ? '1px solid var(--gray-300)' : 'none')};
    border-radius: 5px;
    cursor: pointer;
    background: ${(props) => (props.$cancel ? '#444' : '#68F5EB')};
    color: ${(props) => (props.$cancel ? 'var(--gray-300)' : 'var(--gray-900)')};
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : '1.4rem')};
    font-weight: 700;
    text-align: center;
    opacity: 0.8;
    white-space: nowrap;
    &:hover {
        opacity: 1;
    }
`;

export const InformationBox = styled.div`
    /* width: 100%;
  height: 200px;
  background: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  color: var(--white); */
`;

export const InformationText = styled.div`
    padding-top: 3.35rem;
    h3 {
        font-size: 1.67rem;
    }
    p {
        font-size: 1.25rem;
        color: var(--gray-500);
    }
`;

export const DeleteAccountText = styled.p`
    text-align: left;
    padding: 0;
    color: gray;
    font-size: 12px;
    margin-top: 20px;
`;

export const ChecksWrap = styled.div`
    input {
        appearance: none;
    }
`;

// 개인정보 수집 및 마케팅 수신 동의 관련 css(권윤구)
export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    gap: ${(props) => props.$gap};
    padding: ${(props) => (props.$padding ? props.$padding : '')};
    position: ${(props) => props.$position};
    width: ${(props) => props.$width || 'auto'};
    border-top: ${(props) => props.$borderTop};
    color: ${(props) => props.$color};
`;

export const FlexUl = styled.ul`
    display: flex;
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    gap: ${(props) => props.$gap};
    padding: ${(props) => (props.$padding ? props.$padding : '')};
    position: ${(props) => props.$position};
    width: ${(props) => props.$width || 'auto'};
`;

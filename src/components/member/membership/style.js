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
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: var(--black);
    padding: 50px;
    border: 2px solid var(--primary-base);
    border-radius: 10px;
    color: var(--white);
    width: 600px;
    height: 600px;
    text-align: center;
    font-weight: 7600;
    position: relative;
    .subtitle {
        h2 {
            font-size: 30px;
            font-weight: 700;
        }
        p {
            font-size: 16px;
            color: var(--gray-700);
            margin-top: 10px;
        }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: var(--primary-base);
    color: var(--black);
    font-size: 40px;
`;

export const SubscriptionBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #222;
    padding: 20px;
    border: 1px solid var(--primary-base);
    border-radius: 5px;
    margin: 60px 25px;
    width: 450px;
    height: 110px;
    p {
        font-size: 20px;
        color: var(--white);
        font-weight: 700;
        text-align: left;
    }
    .text {
        display: flex;
        gap: 10px;
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;

export const ConfirmButton = styled.button`
    width: 260px;
    height: 50px;
    background: var(--primary-base);
    color: black;
    padding: 10px;
    font-size: 24px;
    font-weight: 800;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
`;

export const PaymentOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const PaymentButton = styled.button`
    flex: 1 1 calc(50% - 10px);
    padding: 10px;
    background: ${(props) => (props.$isSelected ? 'var(--primary-base)' : 'var(--gray-600)')};
    border: none;
    border-radius: 5px;
    color: ${(props) => (props.$isSelected ? 'var(--black)' : 'var(--white)')};
    cursor: pointer;

    &:hover {
        background: var(--primary-base);
        color: var(--black);
    }
`;
export const PlanContainer = styled.div`
    background: #222;
    color: var(--white);
    padding: 20px;
    border-radius: 10px;
    width: 400px;
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
`;

export const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const Label = styled.p`
    color: var(--gray-500);
    font-size: 14px;
`;

export const Value = styled.p`
    color: #bbb;
    font-size: 14px;
`;

export const HighlightValue = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

export const ChecksWrap = styled.div`
    input {
        appearance: none;
    }
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    gap: ${(props) => props.$gap};
    padding: ${(props) => (props.$padding ? props.$padding : '')};
    position: ${(props) => props.$position};
    width: ${(props) => props.$width || 'auto'};
    height: ${(props) => props.$height || 'auto'};
    border-top: ${(props) => props.$borderTop};
    color: ${(props) => props.$color};

    &.checkbox1,
    &.checkbox2 {
        flex: 1;
        input[type='checkbox'] {
            appearance: none;
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
    }
`;

import styled from 'styled-components';

export const SwitchContainer = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`;

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: ${(props) => (props.isRound ? '34px' : '0')};

    &:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: black;
        transition: 0.4s;
        border-radius: ${(props) => (props.isRound ? '50%' : '0')};
    }

    ${SwitchInput}:checked + & {
        background-color: var(--primary-base);
    }

    ${SwitchInput}:focus + & {
        box-shadow: 0 0 1px var(--primary-base);
    }

    ${SwitchInput}:checked + &:before {
        transform: translateX(26px);
    }
`;

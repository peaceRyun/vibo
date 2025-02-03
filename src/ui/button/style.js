import styled from 'styled-components';

export const ButtonA = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 5px;
    border: 1px solid var(--primary-base);
    background-color: transparent;
    color: var(--white);
    font-size: 1rem;
    font-weight: 700;
    padding: 17.5px 10px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    white-space: nowrap;
`;

export const ButtonB = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 5px;
    background-color: ${(props) => (props.type === 'disabled' ? 'var(--gray-200)' : 'var(--primary-base)')};
    color: ${(props) => (props.type === 'disabled' ? 'var(--gray-500)' : 'var(--black)')};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    padding: 17px 23px;
    ${(props) =>
        props.play &&
        `
        &::before {
            content: ' ';
            background-image: url('/contentdetail/ui/playicon.png');
            width: 18px;
            height: 20px;
            margin-right: 10px;
        }
    `}
`;

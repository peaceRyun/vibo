import styled from 'styled-components';

export const ButtonB = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 5px;
    background-color: ${(props) => (props.type === 'disabled' ? 'var(--gray-200)' : 'var(--primary-base)')};
    color: ${(props) => (props.type === 'disabled' ? 'var(--gray-500)' : 'var(--black)')};
    font-size: 1.5rem;
    font-weight: 900;
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

import styled from 'styled-components';

export const CardWrapper = styled.div`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    background: #fff5f5;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

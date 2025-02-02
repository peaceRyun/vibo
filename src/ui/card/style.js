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

export const CardOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
`;

export const CardTitle = styled.p`
    color: white;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
`;

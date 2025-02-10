import styled, { keyframes } from 'styled-components';

const rippleAnimation = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.6);
        opacity: 0.5;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
`;

export const LikeButtonWrapper = styled.div`
    position: relative;
    width: ${(props) => props.$size}px;
    height: ${(props) => props.$size}px;
    cursor: pointer;
`;

export const HeartImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.2s ease;
`;

export const RippleEffect = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${rippleAnimation} 0.6s ease-out;
    animation-fill-mode: forwards;
`;

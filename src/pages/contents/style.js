import styled from 'styled-components';

export const GridContainer = styled.div`
    margin: 80px 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 60px;
    row-gap: 136px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
    }
`;

export const Title = styled.div`
    grid-column: span 2;
    color: var(--white);
    font-size: clamp(40px, 3.65vw, 70px);
    font-weight: 900;
    margin: 0;
`;

export const BadgeBlank = styled.div`
    border: 1px solid var(--primary-base);
    border-radius: 5px;
    font-size: 13px;
    font-weight: 700;
    padding: 2px 4px;
`;

// ContentPlayer.jsx 관련
export const PlayerContainer = styled.div`
    width: 100%;
    max-width: 1000px; // 적당한 최대 너비 설정
    aspect-ratio: 16 / 9; // 영상 비율 유지
    position: relative;
    background-color: black;
    margin: 0 auto; // 가운데 정렬
`;

export const VideoWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden; // iframe이 넘치지 않도록
`;

export const ErrorMessage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
`;

export const IframeContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const VideoIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
`;

export const ControlsOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${VideoWrapper}:hover & {
        opacity: 1;
    }
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    position: relative;
    transition: height 0.2s ease;

    &:hover {
        height: 8px;

        // hover 시에만 핸들 표시
        & > div > div {
            transform: scale(1);
        }
    }
`;

export const ProgressBar = styled.div`
    width: ${(props) => props.$progress}%;
    height: 100%;
    background-color: #00e6c3; // 밝은 청록색
    position: relative;
    transition: width 0.1s linear;
`;

export const ProgressHandle = styled.div`
    width: 16px;
    height: 16px;
    background-color: #00e6c3;
    border-radius: 50%;
    position: absolute;
    right: -8px;
    top: 50%;
    transform: scale(0);
    transform-origin: center;
    transition: transform 0.2s ease;
    cursor: grab;
    margin-top: -8px;

    &:active {
        cursor: grabbing;
    }
`;

export const ControlsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ControlsGroup = styled.div`
    display: flex;
    gap: 10px;
`;

export const ControlButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;

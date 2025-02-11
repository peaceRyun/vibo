import styled from 'styled-components';

export const OuterContainer = styled.div`
    position: relative;
    width: ${({ isMainSlide }) => (isMainSlide ? '371.57px' : '255.88px')};
    height: ${({ isMainSlide }) => (isMainSlide ? '535.62px' : '369.11px')};
    overflow: visible;
`;

export const SlideImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${({ isMainSlide }) => (isMainSlide ? '200px 200px 8px 8px' : '8px')};
    position: relative;
    transition: border-radius 1s ease;
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const RankNumber = styled.div`
    position: absolute;
    bottom: ${({ isMainSlide }) => (isMainSlide ? '-150px' : '-100px')}; /* 숫자가 이미지 하단을 침범하도록 설정 */
    left: ${({ isMainSlide }) => (isMainSlide ? '82px' : '80px')}; /* 숫자의 왼쪽 위치 */
    font-size: ${({ isMainSlide }) => (isMainSlide ? '150px' : '100px')}; /* 숫자 크기 반영 */
    font-weight: 900;
    // font-style: oblique;
    color: #fff;
    z-index: 10;
    transition: all 0.5s ease-in-out;
    background: linear-gradient(to left, #fff 30%, #fff 60%, #fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

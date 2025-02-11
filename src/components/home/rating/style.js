import styled from 'styled-components';

export const OuterContainer = styled.div`
    position: relative;
    width: ${({ isMainSlide }) => (isMainSlide ? '370px' : '300px')}; /* main-slide에 맞게 크기 조정 */
    height: 443px;
    overflow: visible; /* 숫자가 바깥으로 넘칠 수 있도록 허용 */
`;
export const RateItemContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* 슬라이드 이미지는 넘치지 않게 설정 */
    border-radius: 8px;
`;

export const RateItemImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ isFirst }) => (isFirst ? '200px 200px 8px 8px' : '8px')};
    transition: border-radius 0.5s ease-in-out;
`;

export const RankNumber = styled.div`
    position: absolute;
    bottom: -40px; /* 이미지 밖으로 넘치게 */
    left: -40px;
    font-size: ${({ isFirst }) => (isFirst ? '300px' : '220px')};
    font-weight: 900;
    color: white;
    opacity: 0.9;
    z-index: 10;

    background: linear-gradient(to left, #fff, #707070);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    transition: all 0.5s ease-in-out;
`;

import styled from 'styled-components';

export const RateItemContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* 이미지가 튀어나오지 않도록 설정 */
`;

export const RateItemImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ isFirst }) => (isFirst ? '200px 200px 8px 8px' : '8px')};
    transition: all 0.5s ease-in-out; /* 모든 스타일의 변화에 애니메이션 적용 */
`;

/* 숫자 위치를 유동적으로 조정 */
export const RankNumber = styled.div`
    position: absolute;
    bottom: 10px;
    left: 20px;
    z-index: 10;
    font-size: ${({ isFirst }) => (isFirst ? '300px' : '200px')};
    font-weight: 900;
    color: white;
    background: linear-gradient(to left, #fff, rgba(0, 0, 0, 0.1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.5s ease-in-out;
`;

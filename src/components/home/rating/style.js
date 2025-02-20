import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    gap: 40px;
    height: 75vh;
    /* padding: 60px 0 60px 0; */
    @media (max-width: 1024px) {
        flex-direction: column;
        /* gap: 40px; */
        height: 95vh;
        padding: 40px 0 40px 0;
    }
    @media (max-width: 600px) {
        /* padding:0px 0 0px 0; */
        height: 100vh;
    }
`;

export const LeftArea = styled.div`
    flex: 1;
    /* padding-left: 60px;  */
    display: flex;
    align-items: center;
`;

export const RightArea = styled.div`
    padding-left: 85px;
    flex: 3;
    overflow: hidden; /* 왼쪽으로 넘치는 슬라이드를 숨김 */
`;

export const RateTitle = styled.h3`
    color: white;
    line-height: 1.5;
    margin: 0;
    font-size: var(--title-xlarge-size); //32
    font-weight: var(--title-xlarge-weight); //800
    @media (max-width: 1024px) {
        padding: 20px;
        font-size: var(--title-large-mobile); //24
        font-weight: var(--title-large-weigh); //700
    }
    @media (max-width: 600px) {
        font-size: var(--title-small-mobile); //17
        font-weight: var(--title-xsmall-weight); //700
    }
`;

export const OuterContainer = styled.div`
    position: relative;
    width: ${({ $isMainSlide }) => ($isMainSlide ? '371.57px' : '255.88px')};
    height: ${({ $isMainSlide }) => ($isMainSlide ? '535.62px' : '369.11px')};
    overflow: visible;
`;

export const SlideImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${({ $isMainSlide }) => ($isMainSlide ? '200px 200px 8px 8px' : '8px')};
    position: relative;
    transition: border-radius 1s ease;
    @media (max-width: 1024px) {
        width: 85%;
        height: 85%;
    }
    @media (max-width: 600px) {
        width: 65%;
        height: 65%;
    }
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

// export const RankNumber = styled.div`
//     position: absolute;
//     bottom: ${({ $isMainSlide }) => ($isMainSlide ? '-150px' : '-100px')}; /* 숫자가 이미지 하단을 침범하도록 설정 */
//     left: ${({ $isMainSlide }) => ($isMainSlide ? '82px' : '80px')}; /* 숫자의 왼쪽 위치 */
//     font-size: ${({ $isMainSlide }) => ($isMainSlide ? '150px' : '100px')}; /* 숫자 크기 반영 */
//     font-weight: 900;
//     // font-style: oblique;
//     color: #fff;
//     z-index: 10;
//     transition: all 0.5s ease-in-out;
//     background: linear-gradient(to left, #fff 30%, #fff 60%, #fff 100%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
// `;

////숫자 변경디자인 적용
export const RankNumber = styled.div`
    position: absolute;
    width: 152.32px;
    height: 333.92px;

    /* top: 50%;
  left: 10px; */
    top: 79%;
    left: -72px;
    transform: translateY(-50%) rotate(-0.12deg);

    font-family: 'NanumSquare Neo', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 130px;
    line-height: 500px;

    background: linear-gradient(92.58deg, rgba(0, 0, 0, 0.5) 40.27%, rgba(255, 255, 255, 0.5) 89.41%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    -webkit-text-stroke: 5px white;
    z-index: 10;

    ${({ $isMainSlide }) =>
        $isMainSlide &&
        `
        font-size: 200px;
        line-height: 400px;
        -webkit-text-stroke: 5px white; /* 🎯 메인 숫자는 더 굵은 테두리 적용 */
    `}
    @media (max-width: 1024px) {
        width: 90%;
        top: 65%;
        left: -150px;
    }

    @media (max-width: 600px) {
        font-size: 120px;
        width: 60%;
        top: 50%;
        left: -100px;
    }
`;
`;

// export const RankNumber = styled.div`;
//   position: absolute;
//   bottom: 15px; /* 🎯 숫자를 이미지 하단에 정렬 */
//   left: 10px; /* 🎯 숫자를 왼쪽 정렬 */
//   font-size: ${({ $isMainSlide }) => ($isMainSlide ? '100px' : '80px')}; /* 🎯 크기 조정 */
//   font-weight: 900;
//   color: white;
//   z-index: 10;
//   transition: all 0.3s ease-in-out;

//   background: linear-gradient(to top, #fff 30%, rgba(255, 255, 255, 0.6) 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

//   -webkit-text-stroke: 3px white;

//   opacity: ${({ $isMainSlide }) => ($isMainSlide ? '1' : '0.9')};
// `;
// export const RankNumber = styled.div`
//   position: absolute;
//   bottom: 10px;
//   left: 15px;
//   font-size: ${({ $isMainSlide }) => ($isMainSlide ? '80px' : '60px')};
//   font-weight: 900;
//   color: white;
//   z-index: 10;
//   transition: all 0.3s ease-in-out;
//   background: linear-gradient(to top, #fff 30%, rgba(255, 255, 255, 0.5) 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   opacity: ${({ $isMainSlide }) => ($isMainSlide ? '1' : '0.8')};
// `;

// export const RankNumber = styled.div`
// position: absolute;
// bottom: 15px; /* 🎯 숫자를 이미지 하단에 정렬 */
// left: 10px; /* 🎯 숫자를 왼쪽으로 정렬 */
// font-size: ${({ $isMainSlide }) => ($isMainSlide ? '100px' : '80px')}; /* 🎯 크기 조정 */
// font-weight: 900;
// color: white;
// z-index: 10;
// transition: all 0.3s ease-in-out;

// /* 🎨 텍스트 그라데이션 */
// background: linear-gradient(to top, #fff 30%, rgba(255, 255, 255, 0.6) 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;

// /* 🎨 숫자 외곽선 (stroke) */
// text-shadow:
//     -2px -2px 2px rgba(0, 0, 0, 0.8),
//      2px -2px 2px rgba(0, 0, 0, 0.8),
//     -2px  2px 2px rgba(0, 0, 0, 0.8),
//      2px  2px 2px rgba(0, 0, 0, 0.8);

// /* 🎯 메인 슬라이드 숫자는 더 강조 */
// opacity: ${({ $isMainSlide }) => ($isMainSlide ? '1' : '0.9')};
// `;

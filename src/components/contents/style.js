import styled from 'styled-components';

export const PBWrap = styled.div`
    margin-top: 100px;
    height: 600px;
    background-image: url('/contentdetail/sample/Slide 16_9 - 2.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

export const PBuiWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    margin: 0px 150px 63px;
`;

export const ItemWrap = styled.div`
    width: 100%;
    max-width: 394px;
    height: 367px;
    background-color: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto;
`;

export const SDrop = styled.div`
    width: 130px;
    height: 48px;
    border: 1px solid var(--primary-base);
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    gap: 10px;
    margin-right: 150px;
`;

export const ItemImg = styled.img`
    width: 100%;
    height: 221px;
`;

export const PlayImg = styled.img`
    position: absolute;
    width: 45px !important;
    height: 45px !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const LikeImg = styled.img`
    width: 34px;
    height: 29px;
`;

export const CRatingImg = styled.img`
    width: 34px;
    height: 34px;
`;

export const Flex = styled.div`
    display: flex;
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    gap: ${(props) => props.$gap};
    padding: ${(props) => (props.padding ? props.padding : '')};
    position: ${(props) => props.$position};
`;

export const FlexNone = styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.$gap};
    padding: ${(props) => (props.padding ? props.padding : '')};
`;

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: ${(props) => props.$gap};
`;

export const FlexSB = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${(props) => props.$gap};
`;

export const FlexBadgeWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    gap: ${(props) => props.$gap};
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.$gap};
    margin-top: ${(props) => `${props.$mt}`};
    margin-bottom: ${(props) => `${props.$mb}`};
    width: ${(props) => props.$width || 'auto'};
`;

export const FlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const FlexColUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.$gap};
`;

export const Badge = styled.div`
    border-radius: ${(props) => props.$br};
    border: 1px solid var(--primary-base);
    color: var(--primary-base);
    background-color: var(--gray-900);
    padding: ${(props) => props.$padding};
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: ${(props) => props.fontSize};
`;

export const Span = styled.span`
    font-size: 12px;
`;

export const SpanInfoDim = styled.span`
    font-size: 24px;
    color: var(--gray-600);
`;

export const SpanInfo = styled.span`
    font-size: 24px;
    color: var(--white);
`;

export const H2 = styled.h2`
    font-size: 40px;
    font-weight: 700;
    line-height: 100%;
`;

export const H3 = styled.h3`
    font-size: ${(props) => (props.fontSize ? props.fontSize : '28px')};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '800')};
`;

export const P = styled.p`
    padding: ${(props) => (props.padding ? props.padding : '7px 20px 0px')};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '13px')};
    font-weight: 400;
    text-align: start;
`;

export const P28 = styled.p`
    font-size: 28px;
    font-weight: 400;
    text-align: start;
`;

export const P20 = styled.p`
    font-size: 20px;
    font-weight: 400;
    text-align: start;
`;

export const BarDemo = styled.div`
    height: 5px;
    background-color: var(--primary-base);
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: var(--gray-900);
    padding: var(--spacing-6) var(--spacing-9);
    border-radius: 10px;
    width: 518px;
    height: 441px;
    border: 2px solid var(--primary-base);
`;

export const LoadMoreBtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const LoadMoreBtn = styled.button`
    background: #1d1d1d;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 2;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: var(--secondary-300);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
`;

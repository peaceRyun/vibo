import styled from 'styled-components';

export const PBWrap = styled.div`
    margin-top: 100px;
    height: 600px;
    background-image: url('/contentdetail/sample/Slide 16_9 - 2.png');
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

export const FlexNone = styled.div`
    display: flex;
    gap: ${(props) => props.gap};
`;

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const FlexSB = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${(props) => props.gap};
`;

export const FlexBadgeWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    gap: ${(props) => props.gap};
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};
`;

export const FlexColUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};
`;

export const MqBadge = styled.div`
    border-radius: 4px;
    border: 1px solid var(--primary-base);
    color: var(--primary-base);
    background-color: var(--gray-900);
    padding: 3.5px 5px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
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
`;

export const H3 = styled.h3`
    font-size: 28px;
    font-weight: 800;
`;

export const P = styled.p`
    padding: 7px 20px 0px;
    font-size: 13px;
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

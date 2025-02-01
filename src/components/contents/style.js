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
    margin: 0px 150px;
`;

export const ItemWrap = styled.div`
    width: 100%;
    max-width: 394px;
    height: 367px;
    background-color: var(--gray-800);
    border-radius: 7px;
    overflow: hidden;
    margin: 0 auto;
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

export const H2 = styled.h2`
    font-size: 40px;
    font-weight: 700;
`;

export const H4 = styled.h4`
    font-size: 28px;
    font-weight: 800;
`;

export const P = styled.p`
    padding: 7px 20px 0px;
    font-size: 13px;
    font-weight: 400;
    text-align: start;
`;

export const BarDemo = styled.div`
    height: 5px;
    background-color: var(--primary-base);
`;

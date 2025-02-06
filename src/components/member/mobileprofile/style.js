import styled from 'styled-components';

export const H2 = styled.h2`
    font-weight: 700;
    font-size: var(--heading-medium-size);
`;

export const P = styled.p`
    font-weight: 700;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : '20px')};
    color: ${(props) => props.$color};
`;

export const PageWrap = styled.div`
    height: 100vh;
    position: relative;
`;

export const EditForm = styled.form`
    height: calc(100vh - 300px);
    width: calc(1920px - 1200px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    gap: ${(props) => props.$gap};
    padding: ${(props) => (props.$padding ? props.$padding : '')};
    position: ${(props) => props.$position};
    width: ${(props) => props.$width || 'auto'};
    border-top: ${(props) => props.$borderTop};
`;

export const ProfileImgWrap = styled.div`
    overflow: hidden;
    border: ${(props) => props.$border};
    border-radius: ${(props) => props.$borderRadius};
    position: relative;
`;

export const ProfileImg = styled.img`
    width: ${(props) => props.$width || 'auto'};
    height: ${(props) => props.$height || 'auto'};
    filter: brightness(50%);
`;

export const DimmedWrap = styled.div`
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonEdit = styled.button`
    border: ${(props) => props.$border};
    border-radius: ${(props) => props.$borderRadius};
    padding: ${(props) => props.$padding};
    color: ${(props) => props.$color};
    width: ${(props) => props.$width};
`;

export const ButtonComplete = styled.button`
    border: ${(props) => props.$border};
    border-radius: ${(props) => props.$borderRadius};
    background-color: ${(props) => props.$backgroundColor};
    padding: ${(props) => props.$padding};
    color: ${(props) => props.$color};
    width: ${(props) => props.$width};
    font-weight: 800;
`;

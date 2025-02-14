import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
    z-index: 2;
    width: 70rem;
    height: 100vh;
    max-height: 61.25rem;
    padding: 0 75px 75px;
    background-color: black;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 40px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const H2 = styled.h2`
    font-weight: 700;
    font-size: var(--heading-medium-size);
    text-align: center;
`;

export const H3 = styled.h3`
    font-weight: 700;
    font-size: 30px;
    text-align: left;
`;

export const P = styled.p`
    font-weight: 700;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : '20px')};
    color: ${(props) => props.$color};
`;

export const PageWrap = styled.div`
    height: 75vh;
    position: relative;
`;

export const EditForm = styled.form`
    height: calc(100vh - 300px);
    width: calc(1920px - 1200px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    gap: ${(props) => props.$gap};
    padding: ${(props) => (props.$padding ? props.$padding : '')};
    margin: ${(props) => (props.$margin ? props.$margin : '')};
    position: ${(props) => props.$position};
    width: ${(props) => props.$width || 'auto'};
    border-top: ${(props) => props.$borderTop};
`;

export const ProfileImgWrap = styled.div`
    overflow: hidden;
    border: ${(props) => props.$border};
    border-radius: ${(props) => props.$borderRadius};
    position: relative;
    top: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        top: -30px;
    }
`;

export const ProfileImg = styled.img`
    width: ${(props) => props.$width || 'auto'};
    height: ${(props) => props.$height || 'auto'};
    filter: ${(props) => props.$filter && 'brightness(50%)'};
    object-fit: contain;
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

export const ButtonDark = styled.button`
    border: ${(props) => props.$border};
    border-radius: ${(props) => props.$borderRadius};
    padding: ${(props) => props.$padding};
    color: ${(props) => props.$color};
    width: ${(props) => props.$width};
`;

export const ButtonLight = styled.button`
    border: ${(props) => props.$border};
    border-radius: ${(props) => props.$borderRadius};
    background-color: ${(props) => props.$backgroundColor};
    padding: ${(props) => props.$padding};
    color: ${(props) => props.$color};
    width: ${(props) => props.$width};
    font-weight: 800;
`;

export const NickNameInput = styled.input`
    background-color: var(--gray-500);
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 20px;
    margin: 0;
    width: 32.167rem;
    height: 4.167rem;
    font-weight: 600;
    font-size: var(--title-medium-size);
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

export const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    padding: 75px 75px 0px 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

export const CloseButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: -75px;
    padding: 20px 20px 0 0;
`;

export const ModalCotent = styled.div`
    padding-top: 5rem;
`;

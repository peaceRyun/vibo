import { H2 } from './style';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';

const HeaderContainer = styled.div`
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

const CloseButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px 20px 0 0;
`;

const ModalHeader = ({ handleModalOpen }) => {
    return (
        <HeaderContainer>
            <H2>이미지 선택</H2>
            <CloseButton onClick={handleModalOpen}>
                <IoMdClose size='60px' />
            </CloseButton>
        </HeaderContainer>
    );
};

export default ModalHeader;

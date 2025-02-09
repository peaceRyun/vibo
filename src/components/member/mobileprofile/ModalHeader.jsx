import { CloseButton, H2, HeaderContainer } from './style';
import { IoMdClose } from 'react-icons/io';

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

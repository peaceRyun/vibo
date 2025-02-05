import Button from '../../ui/button/Button';
import ReviewForm from './ReviewForm';
import { Flex, H3, ModalContent, ModalOverlay, P } from './style';

const ReviewModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleContentClick = (e) => {
        e.stopPropagation(); // 이벤트 전파 중단
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={handleContentClick}>
                <Flex $flexDirection='column' $position='relative' $gap='20px'>
                    <H3 fontSize='19px' fontWeight='700'>
                        00 콘텐츠 리뷰
                    </H3>
                    <P fontSize='17px' $padding='0px'>
                        이 콘텐츠에 대해서 얼마나 만족하셨나요?
                    </P>
                    <Flex $gap='40px' $alignItems='center'>
                        <img
                            src='/contentdetail/sample/20191108.99001114353127601.jpg'
                            alt='콘텐츠 썸네일'
                            style={{ width: '200px', height: '100px' }}
                        />
                        <Flex $flexDirection='column' $position='relative' $gap='15px'>
                            <h4>옥씨부인전</h4>
                            <Flex $gap='5px' $alignItems='center'>
                                <img src='/contentdetail/ui/StarActive.png' alt='별' />
                                <img src='/contentdetail/ui/StarActive.png' alt='별' />
                                <img src='/contentdetail/ui/StarActive.png' alt='별' />
                                <img src='/contentdetail/ui/StarActive.png' alt='별' />
                            </Flex>
                        </Flex>
                    </Flex>
                    <ReviewForm />
                    <Flex $justifyCenter='center' $alignItems='center' $position='relative' $gap='60px'>
                        <Button
                            width='99px'
                            height='34px'
                            fontSize='12px'
                            fontWeight='400'
                            onClick={onClose}
                            type='disabled'
                        >
                            취소
                        </Button>
                        <Button width='99px' height='34px' fontSize='12px' onClick={onClose}>
                            확인
                        </Button>
                    </Flex>
                </Flex>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ReviewModal;

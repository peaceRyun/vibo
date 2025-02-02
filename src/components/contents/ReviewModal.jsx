import Button from '../../ui/button/Button';
import ReviewForm from './ReviewForm';
import { FlexCol, FlexNone, FlexSB, H3, ModalContent, ModalOverlay } from './style';

const ReviewModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleContentClick = (e) => {
        e.stopPropagation(); // 이벤트 전파 중단
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={handleContentClick}>
                <FlexCol gap='20px'>
                    <H3>00 콘텐츠 리뷰</H3>
                    <p>이 콘텐츠에 대해서 얼마나 만족하셨나요?</p>
                    <hr />
                    <FlexNone gap='20px'>
                        <img
                            src='/contentdetail/sample/20191108.99001114353127601.jpg'
                            alt='콘텐츠 썸네일'
                            style={{ width: '200px', height: '100px' }}
                        />
                        <FlexCol gap='10px'>
                            <h4>옥씨부인전</h4>
                            <FlexNone gap='5px'>
                                <img src='/contentdetail/ui/StarActive.png' alt='별' />
                                <img src='/contentdetail/ui/StarActive.png' alt='별' />
                                <img src='/contentdetail/ui/StarActive.png' alt='별' />
                                <img src='/contentdetail/ui/StarActive.png' alt='별' />
                            </FlexNone>
                        </FlexCol>
                    </FlexNone>
                    <ReviewForm />
                    <FlexSB>
                        <Button onClick={onClose}>등록</Button>
                        <Button onClick={onClose} type='disabled'>
                            취소
                        </Button>
                    </FlexSB>
                </FlexCol>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ReviewModal;

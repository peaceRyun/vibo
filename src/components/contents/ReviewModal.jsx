import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/button/Button';
import ReviewForm from './ReviewForm';
import { addReview } from '../../store/modules/reviewSlice';
import { Flex, H3, ModalContent, ModalOverlay, P } from './style';

const ReviewModal = ({ isOpen, onClose, contentDetail }) => {
    const dispatch = useDispatch();
    const { nickname = '익명', srcNow = '/contentdetail/sample/SampleProfile.png' } = useSelector(
        (state) => state.profileR
    );

    const [reviewText, setReviewText] = useState('');

    useEffect(() => {
        if (!isOpen) {
            setReviewText('');
        }
    }, [isOpen]);

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    const handleReviewSubmit = () => {
        if (!reviewText.trim()) {
            alert('리뷰를 입력해주세요.');
            return;
        }

        const newReview = {
            id: Date.now(),
            author: nickname,
            content: reviewText,
            created_at: new Date().toISOString(),
            author_details: {
                rating: 5,
                avatar_path: srcNow,
            },
        };

        dispatch(addReview(newReview));
        setReviewText('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={handleContentClick}>
                <Flex $flexDirection="column" $position="relative" $gap="20px">
                    <H3 fontSize="19px" fontWeight="700">
                        {contentDetail?.title || '리뷰 작성'}
                    </H3>
                    <P $fontSize="17px" $padding="0px">
                        이 콘텐츠에 대해서 얼마나 만족하셨나요?
                    </P>

                    <Flex $gap="15px" $alignItems="center">
                        <img
                            src={srcNow}
                            alt="유저 프로필"
                            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                        />
                        <span style={{ fontSize: '17px' }}>{nickname}</span>
                    </Flex>

                    {/* ✅ 수정: 이벤트 객체에서 value만 전달하도록 변경 */}
                    <ReviewForm value={reviewText} onChange={(e) => setReviewText(e.target.value)} />

                    <Flex $justifyContent="center" $alignItems="center" $position="relative" $gap="60px">
                        <Button width="99px" height="34px" fontSize="12px" fontWeight="400" onClick={onClose}>
                            취소
                        </Button>
                        <Button width="99px" height="34px" fontSize="12px" onClick={handleReviewSubmit}>
                            확인
                        </Button>
                    </Flex>
                </Flex>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ReviewModal;

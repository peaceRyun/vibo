import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/button/Button';
import ReviewForm from './ReviewForm';
import { addReview } from '../../store/modules/reviewSlice';
import { Flex, H3, ModalContent, ModalOverlay, P, EpItemContImg } from './style';
import { IoClose } from 'react-icons/io5';

const ReviewModal = ({ isOpen, onClose, contentDetail }) => {
    const dispatch = useDispatch();
    const {
        nickname = '익명',
        srcNow = 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/SampleProfile.png',
    } = useSelector((state) => state.profileR);

    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(5);

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
                rating: rating,
                avatar_path: srcNow,
            },
            moviePoster: contentDetail?.poster_path
                ? `https://image.tmdb.org/t/p/w500${contentDetail.poster_path}`
                : contentDetail?.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${contentDetail.backdrop_path}`
                : '/default-movie-poster.jpg',
            movieTitle: contentDetail?.title || '',
        };

        dispatch(addReview(newReview));
        setReviewText('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={handleContentClick}>
                <Flex $flexDirection='column' $position='relative' $gap='20px' $padding='24px 0 0'>
                    <button style={{ position: 'absolute', top: '0', right: '0' }} onClick={onClose}>
                        <IoClose size='30' color='white' />
                    </button>
                    <H3 fontSize='25px' fontWeight='700' $alignSelf='center'>
                        리뷰 작성하기
                    </H3>
                    <P $fontSize='17px' $padding='0px' $alignSelf='center' $color='var(--gray-500)'>
                        이 콘텐츠에 대해서 얼마나 만족하셨나요?
                    </P>

                    <Flex $gap='20px' $padding='0 20px'>
                        <EpItemContImg
                            src={
                                contentDetail?.backdrop_path
                                    ? `https://image.tmdb.org/t/p/w500${contentDetail.backdrop_path}`
                                    : '/placeholder.jpg'
                            }
                            alt={contentDetail?.title}
                            $width='200px'
                            $height='120px'
                        />
                        <Flex $flexDirection='column' $gap='10px'>
                            <P $fontSize='20px' $padding='0' $fontWeight='600'>
                                {contentDetail?.name ||
                                    contentDetail?.original_name ||
                                    contentDetail?.title ||
                                    contentDetail?.original_title ||
                                    '제목 없음'}
                            </P>
                            <Flex $gap='5px'>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => setRating(star)}
                                        style={{
                                            fontSize: '24px',
                                            color: 'yellow',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {star <= rating ? '★' : '☆'}
                                    </button>
                                ))}
                            </Flex>
                        </Flex>
                    </Flex>

                    <ReviewForm value={reviewText} onChange={(e) => setReviewText(e.target.value)} />

                    <Flex
                        $justifyContent='center'
                        $alignItems='center'
                        $position='relative'
                        $gap='8px'
                        $padding='10px 0 0'
                    >
                        <Button
                            width='100%'
                            height='34px'
                            fontSize='12px'
                            fontWeight='400'
                            onClick={onClose}
                            type='disabled'
                        >
                            취소
                        </Button>
                        <Button width='100%' height='34px' fontSize='12px' onClick={handleReviewSubmit}>
                            확인
                        </Button>
                    </Flex>
                </Flex>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ReviewModal;

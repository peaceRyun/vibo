import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonBlank } from '../../ui/button/Button';
// import ReviewItem from './ReviewItem';
import { Badge, Flex, FlexUl, H3, Line, LoadMoreBtn, LoadMoreBtnWrapper } from './style';
import ReviewModal from './ReviewModal';
import ReviewItemTest from './ReviewItemTest';

const ReviewListTest = () => {
    const [openModal, setOpenModal] = useState(false);
    const [visibleItems, setVisibleItems] = useState(5);

    // Redux store에서 리뷰 데이터 가져오기
    const { reviewData, loading, error } = useSelector((state) => state.reviewR);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleLoadMore = () => {
        setVisibleItems((prev) => Math.min(prev + 5, reviewData.length));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section>
            <Flex $flexDirection='column' $position='relative' $gap='20px' $padding='0 0 30px'>
                <Flex $gap='15px' $alignItems='center'>
                    <H3>사용자 평</H3>
                    <Badge $br='20px' $padding='5px 8px' fontSize='14px'>
                        {reviewData.length}
                    </Badge>
                </Flex>
                <Flex $gap='15px' $alignItems='center'>
                    <img src='/contentdetail/sample/SampleProfile.png' alt='샘플프로필' />
                    <span style={{ fontSize: '17px' }}>홍길동</span>
                    <ButtonBlank review width='173px' height='46px' onClick={handleOpenModal}>
                        리뷰 작성하기
                    </ButtonBlank>
                </Flex>
                <FlexUl $flexDirection='column' $gap='50px'>
                    {reviewData.slice(0, visibleItems).map((review) => (
                        <ReviewItemTest
                            key={review.id}
                            nickname={review.author}
                            rating={review.author_details?.rating || 0}
                            content={review.content}
                            date={review.created_at.split('T')[0]}
                            imgurl={review.author_details.avatar_path}
                        />
                    ))}
                </FlexUl>
                {visibleItems < reviewData.length && (
                    <LoadMoreBtnWrapper>
                        <Line />
                        <LoadMoreBtn onClick={handleLoadMore}>
                            <img src='/contentdetail/ui/loadMoreBtnIcon.png' alt='더보기아이콘' />
                        </LoadMoreBtn>
                    </LoadMoreBtnWrapper>
                )}
            </Flex>
            <ReviewModal isOpen={openModal} onClose={handleCloseModal} />
        </section>
    );
};

export default ReviewListTest;

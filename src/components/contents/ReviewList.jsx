import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonBlank } from '../../ui/button/Button';
import ReviewItem from './ReviewItem';
import { Badge, Flex, FlexUl, H3, Line, LoadMoreBtn, LoadMoreBtnWrapper } from './style';
import ReviewModal from './ReviewModal';

const ReviewList = ({ contentDetail }) => {
    const [openModal, setOpenModal] = useState(false);
    const [visibleItems, setVisibleItems] = useState(5);

    const reviews = useSelector((state) => state.reviewR.reviews);
    const { nickname, srcNow } = useSelector((state) => state.profileR);

    const sortedReviews = [...reviews].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleLoadMore = () => {
        setVisibleItems((prev) => Math.min(prev + 5, sortedReviews.length));
    };

    return (
        <section>
            <Flex $flexDirection="column" $position="relative" $gap="20px" $padding="0 0 30px">
                <Flex $gap="15px" $alignItems="center">
                    <H3>사용자 평</H3>
                    <Badge $br="20px" $padding="5px 8px" fontSize="17px" $border="none">
                        {sortedReviews.length}
                    </Badge>
                </Flex>
                <Flex $gap="15px" $alignItems="center">
                    <img
                        src={
                            srcNow ||
                            'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/SampleProfile.png'
                        }
                        alt="사용자 프로필"
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                    />
                    <span style={{ fontSize: '17px' }}>{nickname}</span>
                    <ButtonBlank review width="173px" height="46px" onClick={handleOpenModal}>
                        리뷰 작성하기
                    </ButtonBlank>
                </Flex>
                <FlexUl $flexDirection="column" $gap="50px">
                    {sortedReviews.slice(0, visibleItems).map((review) => (
                        <ReviewItem
                            key={review.id}
                            nickname={review.author}
                            rating={review.author_details?.rating || 0}
                            content={review.content}
                            date={review.created_at.split('T')[0]}
                            imgurl={review.author_details.avatar_path || srcNow} // ✅ 리뷰에도 사용자 프로필 이미지 적용
                        />
                    ))}
                </FlexUl>
                {visibleItems < sortedReviews.length && (
                    <LoadMoreBtnWrapper>
                        <Line />
                        <LoadMoreBtn onClick={handleLoadMore}>
                            <img src="/contentdetail/ui/loadMoreBtnIcon.png" alt="더보기아이콘" />
                        </LoadMoreBtn>
                    </LoadMoreBtnWrapper>
                )}
            </Flex>
            <ReviewModal isOpen={openModal} onClose={handleCloseModal} contentDetail={contentDetail} />
        </section>
    );
};

export default ReviewList;

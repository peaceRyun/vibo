// ReviewList.jsx
import { useState } from 'react';
import { ButtonBlank } from '../../ui/button/Button';
import ReviewItem from './ReviewItem';
import { Badge, Flex, FlexUl, H3, Line, LoadMoreBtn, LoadMoreBtnWrapper } from './style';
import ReviewModal from './ReviewModal';

const ReviewList = () => {
    const [openModal, setOpenModal] = useState(false);
    const [visibleItems, setVisibleItems] = useState(5);

    // 20개의 더미 데이터 생성 (최신 날짜순)
    const sample = Array(20)
        .fill()
        .map((_, index) => {
            const date = new Date();
            date.setDate(date.getDate() - index); // 현재 날짜에서 index만큼 뺀 날짜
            return {
                id: 20 - index,
                title: '환승연애',
                image: '/contentdetail/sample/sample-contentlsit.png',
                nickname: `사용자${20 - index}`,
                rating: Math.floor(Math.random() * 2) + 4, // 4 또는 5점
                content: `정말 재미있게 봤어요! ${20 - index}번째 리뷰입니다.`,
                date: date.toISOString().split('T')[0], // YYYY-MM-DD 형식
            };
        });

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleLoadMore = () => {
        setVisibleItems((prev) => Math.min(prev + 5, sample.length));
    };

    return (
        <>
            <section>
                <Flex $flexDirection='column' $position='relative' $gap='20px' $padding='0 0 30px'>
                    <Flex $gap='15px' $alignItems='center'>
                        <H3>사용자 평</H3>
                        <Badge $br='20px' $padding='5px 8px' fontSize='14px'>
                            {sample.length}
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
                        {sample.slice(0, visibleItems).map((item) => (
                            <ReviewItem
                                key={item.id}
                                nickname={item.nickname}
                                rating={item.rating}
                                content={item.content}
                                date={item.date}
                            />
                        ))}
                    </FlexUl>
                    {visibleItems < sample.length && (
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
        </>
    );
};

export default ReviewList;

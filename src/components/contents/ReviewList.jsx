import { useState } from 'react';
import { ButtonBlank } from '../../ui/button/Button';
import ReviewItem from './ReviewItem';
import { Badge, Flex, FlexUl, H3, Line, LoadMoreBtn, LoadMoreBtnWrapper } from './style';
import ReviewModal from './ReviewModal';

const ReviewList = () => {
    const [openModal, setOpenModal] = useState(false);
    const [visibleItems, setVisibleItems] = useState(5);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleLoadMore = () => {
        setVisibleItems((prev) => Math.min(prev + 5, dummyReviewData.length));
    };

    return (
        <section>
            <Flex $flexDirection='column' $position='relative' $gap='20px' $padding='0 0 30px'>
                <Flex $gap='15px' $alignItems='center'>
                    <H3>사용자 평</H3>
                    <Badge $br='20px' $padding='5px 8px' fontSize='14px'>
                        {dummyReviewData.length}
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
                    {dummyReviewData.slice(0, visibleItems).map((review) => (
                        <ReviewItem
                            key={review.id}
                            nickname={review.author}
                            rating={review.author_details?.rating || 0}
                            content={review.content}
                            date={review.created_at.split('T')[0]}
                            imgurl={review.author_details.avatar_path}
                        />
                    ))}
                </FlexUl>
                {visibleItems < dummyReviewData.length && (
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

export default ReviewList;

const dummyReviewData = [
    {
        id: 1,
        author: '김지훈',
        content:
            '정말 좋은 강의였습니다. 실무에서 바로 적용할 수 있는 내용들이 많아서 매우 유익했어요. 특히 실제 프로젝트 예제를 통한 설명이 이해하기 쉬웠습니다.',
        created_at: '2024-02-15T09:30:00',
        author_details: {
            rating: 5,
            avatar_path: '/contentdetail/sample/SampleProfile.png',
        },
    },
    {
        id: 2,
        author: '이미영',
        content:
            '초보자도 이해하기 쉽게 설명해주셔서 좋았습니다. 다만 일부 고급 개념에 대한 설명이 조금 부족했던 것 같네요.',
        created_at: '2024-02-14T15:20:00',
        author_details: {
            rating: 4,
            avatar_path: '/contentdetail/sample/SampleProfile.png',
        },
    },
    {
        id: 3,
        author: '박준서',
        content:
            '강의 자료가 잘 정리되어 있고, 실습 과정도 따라하기 쉬웠습니다. 특히 강사님의 실시간 피드백이 큰 도움이 되었어요!',
        created_at: '2024-02-13T11:45:00',
        author_details: {
            rating: 5,
            avatar_path: '/contentdetail/sample/SampleProfile.png',
        },
    },
    {
        id: 4,
        author: '최서연',
        content:
            '전반적으로 만족스러운 강의였습니다. 실무에서 자주 마주치는 문제들에 대한 해결 방법을 배울 수 있어서 좋았어요.',
        created_at: '2024-02-12T14:15:00',
        author_details: {
            rating: 4,
            avatar_path: '/contentdetail/sample/SampleProfile.png',
        },
    },
    {
        id: 5,
        author: '정현우',
        content:
            '강의 퀄리티가 훌륭했습니다. 특히 최신 트렌드를 반영한 내용들이 인상적이었어요. 다음 강의도 기대됩니다!',
        created_at: '2024-02-11T16:30:00',
        author_details: {
            rating: 5,
            avatar_path: '/contentdetail/sample/SampleProfile.png',
        },
    },
    {
        id: 6,
        author: '한소희',
        content:
            '실습 위주의 커리큘럼이 매우 도움이 되었습니다. 다만 진도가 조금 빠른 감이 있어서 따라가기 힘든 부분이 있었네요.',
        created_at: '2024-02-10T13:20:00',
        author_details: {
            rating: 4,
            avatar_path: '/contentdetail/sample/SampleProfile.png',
        },
    },
    {
        id: 7,
        author: '임재현',
        content: '강사님의 설명이 매우 명확하고 이해하기 쉬웠습니다. 실무 경험을 바탕으로 한 팁들이 특히 유용했어요.',
        created_at: '2024-02-09T10:45:00',
        author_details: {
            rating: 5,
            avatar_path: '/contentdetail/sample/SampleProfile.png',
        },
    },
    {
        id: 8,
        author: '송민지',
        content:
            '온라인 강의임에도 불구하고 충분한 상호작용이 있어서 좋았습니다. 질문에 대한 피드백도 빠르고 자세했어요.',
        created_at: '2024-02-08T17:10:00',
        author_details: {
            rating: 5,
            avatar_path: '/contentdetail/sample/SampleProfile.png',
        },
    },
    {
        id: 9,
        author: '강동훈',
        content:
            '예제 코드가 실무에서 바로 적용 가능한 수준으로 제공되어서 매우 만족스러웠습니다. 강의 자료도 잘 정리되어 있어요.',
        created_at: '2024-02-07T12:30:00',
        author_details: {
            rating: 4,
            avatar_path: '/contentdetail/sample/SampleProfile.png',
        },
    },
    {
        id: 10,
        author: '윤서진',
        content:
            '전체적인 커리큘럼 구성이 체계적이어서 좋았습니다. 기초부터 심화까지 단계별로 잘 설명해주셔서 이해하기 쉬웠어요.',
        created_at: '2024-02-06T15:45:00',
        author_details: {
            rating: 5,
            avatar_path: '/contentdetail/sample/SampleProfile.png',
        },
    },
];

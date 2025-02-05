import { useState } from 'react';
import { ButtonBlank } from '../../ui/button/Button';
import ReviewItem from './ReviewItem';
import { Badge, Flex, FlexUl, H3, Line, LoadMoreBtn, LoadMoreBtnWrapper } from './style';
import ReviewModal from './ReviewModal';

// 입력 받은 댓글 영역
// 영화, 시리즈 콘텐츠 공통
const ReviewList = () => {
    const [openModal, setOpenModal] = useState(false);
    const sample = Array(5).fill({
        title: '환승연애',
        image: '/contentdetail/sample/sample-contentlsit.png',
    });
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <>
            <section>
                <Flex $flexDirection='column' $position='relative' $gap='20px'>
                    <Flex $gap='15px' $alignItems='center'>
                        <H3>사용자 평</H3>
                        <Badge $br='20px' $padding='5px 8px' fontSize='14px'>
                            5
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
                        {sample.map((item, index) => (
                            <ReviewItem key={index} />
                        ))}
                    </FlexUl>
                    <LoadMoreBtnWrapper>
                        <Line />
                        <LoadMoreBtn>
                            <img src='/contentdetail/ui/loadMoreBtnIcon.png' alt='더보기아이콘' />
                        </LoadMoreBtn>
                    </LoadMoreBtnWrapper>
                </Flex>
                <ReviewModal isOpen={openModal} onClose={handleCloseModal} />
            </section>
        </>
    );
};

export default ReviewList;

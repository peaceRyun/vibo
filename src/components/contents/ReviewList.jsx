import { useState } from 'react';
import Button from '../../ui/button/Button';
import ReviewItem from './ReviewItem';
import { Badge, FlexCol, FlexColUl, FlexNone, H3 } from './style';
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
        console.log(openModal);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <>
            <section>
                <FlexCol gap='20px'>
                    <FlexNone gap='15px'>
                        <H3>사용자 평</H3>
                        <Badge br='20px' p='5px 8px' fontSize='14px'>
                            5
                        </Badge>
                    </FlexNone>
                    <FlexNone gap='15px'>
                        <img src='/contentdetail/sample/SampleProfile.png' alt='샘플프로필' />
                        <span style={{ fontSize: '17px' }}>홍길동</span>
                        <Button onClick={handleOpenModal}>등록</Button>
                    </FlexNone>
                    <FlexColUl gap='50px'>
                        {sample.map((item, index) => (
                            <ReviewItem key={index} />
                        ))}
                    </FlexColUl>
                </FlexCol>
                <ReviewModal isOpen={openModal} onClose={handleCloseModal} />
            </section>
        </>
    );
};

export default ReviewList;

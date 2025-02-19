import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
// import { Pagination } from 'swiper/modules'; // 페이지네이션 모듈 주석 처리
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import CommonItem from './CommonItem';

export const CommonList = ({ type = 'series' }) => {
    const navigate = useNavigate();
    const onGo = () => {
        navigate('/contentlist');
    };

    // Redux에서 데이터 가져오기 (type에 따라 다른 데이터 사용)
    const { TVseriesData } = useSelector((state) => state.tvSeriesR);
    const { movieData } = useSelector((state) => state.movieR);

    // type에 따라 적절한 데이터 선택
    const contentData = type === 'series' ? TVseriesData : movieData;

    // 타입에 따른 제목 설정
    const contentTitle = type === 'series' ? 'TV' : '영화';

    if (!contentData) {
        return <div>loading....</div>;
    }

    if (contentData.length > 0) {
        return (
            <Section>
                <CommonInfo>
                    <CommonTitle>
                        {`
  XX님이
  좋아할만 한
  ${type === 'series' ? '예능' : '액션'}`}
                        <VerticalText>{contentTitle}</VerticalText>
                    </CommonTitle>
                    <MoreBtn onClick={onGo}>더보기</MoreBtn>
                </CommonInfo>
                <CommonSwiper
                    spaceBetween={30} /* 기본 간격 */
                    slidesPerView={5.5} /* 기본값 (데스크탑) */
                    breakpoints={{
                        // 1280: { slidesPerView: 5.5, spaceBetween: 30 },
                        1024: { slidesPerView: 4.2, spaceBetween: 15 },
                        // 768: { slidesPerView: 2.5, spaceBetween: 20 },
                        // 600: { slidesPerView: 1.5, spaceBetween: 15 },
                        400: { slidesPerView: 2.2, spaceBetween: 10 },
                    }}
                >
                    {/* modules={[Pagination]} */}
                    {contentData.map((content) => (
                        <SwiperSlide key={content.id}>
                            <CommonItem content={{ ...content, media_type: type }} />
                        </SwiperSlide>
                    ))}
                </CommonSwiper>
            </Section>
        );
    }
};

export default CommonList;

const Section = styled.section`
    display: flex;
    /* align-items: center; */
    position: relative;
    // gap: 5px;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const VerticalText = styled.div`
    position: absolute;
    left: 19.8%;
    top: 21%;
    transform: translateY(-50%) rotate(-270deg);
    font-size: clamp(50px, 6vw, 80px);
    font-weight: bold;
    color: #5e5e5e;
    letter-spacing: 5px;
    @media (max-width: 1024px) {
        font-size: clamp(40px, 5vw, 60px);
        left: 15%;
        top: 30%;
    }
    @media (max-width: 600px) {
        font-size: clamp(30px, 4vw, 50px);
        left: 10%;
        top: 35%;
    }
`;

const CommonInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* height: 443px; */
    @media (max-width: 1024px) {
        text-align: left;
        white-space: normal;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 0;
    }
`;

const CommonTitle = styled.h3`
    color: white;
    font-size: clamp(24px, 2.5vw, 32px);
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
    white-space: pre-line;

    @media (max-width: 1024px) {
        text-align: left;
        white-space: normal;
    }
`;

const MoreBtn = styled.button`
    background-color: var(--primary-600);
    color: black;
    font-size: clamp(14px, 1.2vw, 17px);
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: clamp(120px, 10vw, 155px);
    height: 40px;
    font-weight: bold;

    &:hover {
        background-color: var(--primary-base);
    }
`;

const CommonSwiper = styled(Swiper)`
    flex: 3;
    max-width: 100%;
    /* height: 443px; */

    .swiper-slide {
        // width: 300px !important; // 이 줄을 제거하거나 주석 처리합니다
        /* height: 443px; */
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 8px;
        /* min-width: 390px; */
    }
`;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import LiveItem from './LiveItem';
import { Pagination } from 'swiper/modules';

const LiveList = () => {
    return (
        <Section>
            <StyledTitle>실시간 인기 LIVE</StyledTitle>
            <StyledSwiper slidesPerView={3.8} spaceBetween={16} pagination={{ clickable: true }} modules={[Pagination]}>
                {[...Array(5)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <LiveItem />
                    </SwiperSlide>
                ))}
            </StyledSwiper>
        </Section>
    );
};

export default LiveList;

// Styled Components
const Section = styled.section``;

const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap || '20px'};
`;

const StyledTitle = styled.h3`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const StyledSwiper = styled(Swiper)`
    padding-bottom: 20px;

    .swiper-slide {
        border-radius: 8px;
        width: auto;
        padding: 10px;
    }
`;

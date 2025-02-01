import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReItem from './reItem';
import { FlexCol, H4 } from './style';
import { Pagination } from 'swiper/modules';

const ReList = () => {
    return (
        <>
            <FlexCol gap='40px'>
                <H4>비슷한 콘텐츠</H4>
                <Swiper
                    slidesPerView={5.5}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <ReItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReItem />
                    </SwiperSlide>
                </Swiper>
            </FlexCol>
        </>
    );
};

export default ReList;

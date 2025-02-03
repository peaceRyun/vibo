import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReItem from './ReItem';
import { FlexCol, H3 } from './style';
import { Pagination } from 'swiper/modules';

const ReList = () => {
    return (
        <>
            <section style={{ marginTop: '30px' }}>
                <FlexCol $gap='40px'>
                    <H3>비슷한 콘텐츠</H3>
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
            </section>
        </>
    );
};

export default ReList;

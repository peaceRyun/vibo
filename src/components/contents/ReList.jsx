import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReItem from './ReItem';
import { Flex, H3 } from './style';
import { Pagination } from 'swiper/modules';

const ReList = () => {
    return (
        <>
            <section style={{ marginTop: '30px' }}>
                <Flex $flexDirection='column' $position='relative' $gap='40px' $width='1920px'>
                    <H3>비슷한 콘텐츠</H3>
                    <Swiper
                        slidesPerView={5.5}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className='mySwiper'
                        style={{ overflow: 'visible' }}
                    >
                        <SwiperSlide style={{ overflow: 'visible' }}>
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
                </Flex>
            </section>
        </>
    );
};

export default ReList;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import IconItem from './IconItem';

// 모바일 프로필 아이콘 스와이퍼
const IconSwiper = () => {
    return (
        <>
            <div style={{ height: '200px' }}>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className='mySwiper'
                >
                    <SwiperSlide style={{ width: '200px', height: '200px' }}>
                        <IconItem />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '200px', height: '200px' }}>
                        <IconItem />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '200px', height: '200px' }}>
                        <IconItem />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '200px', height: '200px' }}>
                        <IconItem />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '200px', height: '200px' }}>
                        <IconItem />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '200px', height: '200px' }}>
                        <IconItem />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '200px', height: '200px' }}>
                        <IconItem />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default IconSwiper;

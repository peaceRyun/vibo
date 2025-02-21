import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import IconItem from './IconItem';

const IconSwiper = ({ icons, handleIcon, handleModalOpen }) => {
    return (
        <div style={{ height: '200px' }}>
            <Swiper slidesPerView={5} spaceBetween={30} navigation={true} modules={[Navigation]} className='mySwiper'>
                {icons?.map((item) => (
                    <SwiperSlide key={item.id} style={{ width: '200px', height: '200px' }}>
                        <IconItem item={item} handleIcon={handleIcon} handleModalOpen={handleModalOpen} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default IconSwiper;

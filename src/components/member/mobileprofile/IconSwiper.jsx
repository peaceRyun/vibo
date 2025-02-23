import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import IconItem from './IconItem';
import { StyledSwiper } from './style';

const IconSwiper = ({ icons, handleIcon, handleModalOpen }) => {
    return (
        <div style={{ height: '200px' }}>
            <StyledSwiper
                slidesPerView={4.3}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className='mySwiper'
            >
                {icons?.map((item) => (
                    <SwiperSlide key={item.id} style={{ width: '200px', height: '200px' }}>
                        <IconItem item={item} handleIcon={handleIcon} handleModalOpen={handleModalOpen} />
                    </SwiperSlide>
                ))}
            </StyledSwiper>
        </div>
    );
};

export default IconSwiper;

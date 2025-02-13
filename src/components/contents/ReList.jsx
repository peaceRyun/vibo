import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReItem from './ReItem';
import { Flex, H3 } from './style';
import { useSelector } from 'react-redux';

const ReList = () => {
    const { TVseriesData } = useSelector((state) => state.tvSeriesR);

    if (!TVseriesData) {
        return <div>loading....</div>;
    }
    if (TVseriesData.length > 0) {
        return (
            <>
                <section>
                    <Flex $flexDirection='column' $position='relative' $gap='40px' $padding='30px 0 60px'>
                        <H3>비슷한 콘텐츠</H3>
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            className='mySwiper'
                            style={{ overflow: 'visible' }}
                        >
                            {TVseriesData.map((content) => (
                                <SwiperSlide key={content.id} style={{ overflow: 'visible' }}>
                                    <ReItem content={content} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Flex>
                </section>
            </>
        );
    }
};

export default ReList;

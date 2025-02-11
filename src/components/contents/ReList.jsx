import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReItem from './ReItem';
import { Flex, H3 } from './style';
import { useSelector } from 'react-redux';

const ReList = () => {
    const { movieData } = useSelector((state) => state.movieR);

    if (!movieData) {
        return <div>loading....</div>;
    }
    if (movieData.length > 0) {
        return (
            <>
                <section>
                    <Flex $flexDirection='column' $position='relative' $gap='40px' $padding='30px 0 60px'>
                        <H3>비슷한 콘텐츠</H3>
                        <Swiper
                            slidesPerView={5.5}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            className='mySwiper'
                            style={{ overflow: 'visible' }}
                        >
                            {movieData.map((movie) => (
                                <SwiperSlide key={movie.id} style={{ overflow: 'visible' }}>
                                    <ReItem movie={movie} />
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

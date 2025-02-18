import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReItem from './ReItem';
import { Flex, H3 } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMovieRecommendations } from '../../store/modules/getThunk';
import { useParams } from 'react-router-dom';

const ReList = ({ contentType }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { TVRecommendData, loading } = useSelector((state) => state.tvSeriesR);

    useEffect(() => {
        if (id) {
            dispatch(getMovieRecommendations(id));
        }
    }, [dispatch, id]);

    if (loading) {
        return <div>loading....</div>;
    }

    if (!TVRecommendData || TVRecommendData.length === 0) {
        return null;
    }

    return (
        <section>
            <Flex $flexDirection='column' $position='relative' $gap='40px' $padding='30px 0 60px'>
                <H3>비슷한 콘텐츠</H3>
                <Swiper
                    key={window.location.pathname}
                    breakpoints={{
                        599: { slidesPerView: 2, spaceBetween: 10 },
                        600: { slidesPerView: 3, spaceBetween: 20 },
                        1025: { slidesPerView: 6, spaceBetween: 30 },
                    }}
                    pagination={{ clickable: true }}
                    className='mySwiper'
                >
                    {TVRecommendData.map((content) => (
                        <SwiperSlide key={content.id}>
                            <ReItem content={content} contentType={contentType} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Flex>
        </section>
    );
};

export default ReList;

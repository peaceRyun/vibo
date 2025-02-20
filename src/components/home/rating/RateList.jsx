import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import RateItem from './RateItem';
import { LeftArea, RateTitle, RightArea, Section } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularContentThunk } from '../../../store/modules/getThunk';

const RateList = () => {
    const dispatch = useDispatch();
    const [activeIndex, setActiveIndex] = useState(0);
    const { popularContent, status } = useSelector((state) => state.popularR);

    // 기존 이미지 배열 (백업용)
    const images = [
        '/mainhome/weeklyitem_01.webp',
        '/mainhome/weeklyitem_02.webp',
        '/mainhome/weeklyitem_03.webp',
        '/mainhome/weeklyitem_04.webp',
        '/mainhome/weeklyitem_05.webp',
        '/mainhome/weeklyitem_01.webp',
        '/mainhome/weeklyitem_02.webp',
        '/mainhome/weeklyitem_03.webp',
        '/mainhome/weeklyitem_04.webp',
        '/mainhome/weeklyitem_05.webp',
        '/mainhome/weeklyitem_01.webp',
        '/mainhome/weeklyitem_02.webp',
        '/mainhome/weeklyitem_03.webp',
        '/mainhome/weeklyitem_04.webp',
        '/mainhome/weeklyitem_05.webp',
        '/mainhome/weeklyitem_01.webp',
        '/mainhome/weeklyitem_02.webp',
        '/mainhome/weeklyitem_03.webp',
        '/mainhome/weeklyitem_04.webp',
        '/mainhome/weeklyitem_05.webp',
    ];

    useEffect(() => {
        // 인기 콘텐츠 데이터 가져오기
        dispatch(fetchPopularContentThunk());
    }, [dispatch]);

    // 실제 표시할 데이터 준비
    const displayContent =
        status === 'succeeded' && popularContent.length > 0
            ? popularContent
            : images.map((img, idx) => ({
                  id: idx + 1,
                  poster_path: img,
                  media_type: 'series', // 기본값으로 tv 설정
              }));

    // 표시할 제목 설정
    const titleText = status === 'succeeded' && popularContent.length > 0 ? '인기 TOP 10' : '인기 드라마';

    return (
        <Section>
            <LeftArea>
                <RateTitle>{titleText}</RateTitle>
            </LeftArea>

            <RightArea>
                <RateSwiper
                    spaceBetween={60}
                    slidesPerView={3.5}
                    centeredSlides={false}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        390: { slidesPerView: 1, spaceBetween: 50 },
                        600: { slidesPerView: 1.3, spaceBetween: 15 },
                        768: { slidesPerView: 2.3, spaceBetween: 15 },
                        1024: { slidesPerView: 3.3, spaceBetween: 15 },
                    }}
                >
                    {displayContent.map((content, index) => {
                        // 인기 콘텐츠인 경우
                        if (status === 'succeeded' && popularContent.length > 0) {
                            const imagePath = content.poster_path
                                ? `https://image.tmdb.org/t/p/w500${content.poster_path}`
                                : '/mainhome/weeklyitem_01.webp'; // 폴백 이미지

                            return (
                                <SwiperSlide key={content.id || index}>
                                    <RateItem
                                        image={imagePath}
                                        rank={index + 1}
                                        isMainSlide={index === activeIndex}
                                        id={content.id}
                                        mediaType={content.media_type}
                                    />
                                </SwiperSlide>
                            );
                        }
                        // 기존 이미지 사용 (폴백)
                        else {
                            return (
                                <SwiperSlide key={index}>
                                    <RateItem
                                        image={content.poster_path}
                                        rank={index + 1}
                                        isMainSlide={index === activeIndex}
                                        id={content.id}
                                        mediaType={content.media_type}
                                    />
                                </SwiperSlide>
                            );
                        }
                    })}
                </RateSwiper>
            </RightArea>
        </Section>
    );
};

export default RateList;

const RateSwiper = styled(Swiper)`
    width: 100%;
    overflow: visible;

    .swiper-slide {
        overflow: visible;
    }
`;

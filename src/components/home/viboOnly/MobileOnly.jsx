import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  CardContainer,
  Description,
  InfoSection,
  MobileCard,
  MobileSlider,
  MobileTitle,
  Poster,
  Tag,
  Tags,
  Title,
} from './style';
import { Flex, Label } from './only1/style';

const MobileOnly = ({ content }) => {
  const getGenreName = (genreId) => {
    const genreMap = {
      28: '액션',
      12: '모험',
      16: '애니메이션',
      35: '코미디',
      80: '범죄',
      99: '다큐멘터리',
      18: '드라마',
      10751: '가족',
      14: '판타지',
      36: '역사',
      27: '공포',
      10402: '음악',
      9648: '미스터리',
      10749: '로맨스',
      878: 'SF',
      10770: 'TV 영화',
      53: '스릴러',
      10752: '전쟁',
      37: '서부',
    };
    return genreMap[genreId] || '기타';
  };
  // const items = [
  //   {
  //     title: '파묘',
  //     year: '2025',
  //     genre: '미스터리',
  //     rating: '15세',
  //     description: '미국 LA, 거액의 의뢰를 받은 무당 ‘화림’과 ‘봉길’은 기이한 병이 대물림되는 집안의 장소를 만난다.',
  //     image: '/mainhome/sample/Only1Sample.png',
  //   },
  //   {
  //     title: '다른 영화',
  //     year: '2024',
  //     genre: '스릴러',
  //     rating: '15세',
  //     description: '새로운 사건이 발생하며 예측할 수 없는 미스터리가 전개된다.',
  //     image: '/mainhome/sample/Only2Sample.png',
  //   },
  //   {
  //     title: '파묘',
  //     year: '2025',
  //     genre: '미스터리',
  //     rating: '15세',
  //     description: '미국 LA, 거액의 의뢰를 받은 무당 ‘화림’과 ‘봉길’은 기이한 병이 대물림되는 집안의 장소를 만난다.',
  //     image: '/mainhome/sample/Only1Sample.png',
  //   },
  //   {
  //     title: '다른 영화',
  //     year: '2024',
  //     genre: '스릴러',
  //     rating: '15세',
  //     description: '새로운 사건이 발생하며 예측할 수 없는 미스터리가 전개된다.',
  //     image: '/mainhome/sample/Only2Sample.png',
  //   },
  //   {
  //     title: '파묘',
  //     year: '2025',
  //     genre: '미스터리',
  //     rating: '15세',
  //     description: '미국 LA, 거액의 의뢰를 받은 무당 ‘화림’과 ‘봉길’은 기이한 병이 대물림되는 집안의 장소를 만난다.',
  //     image: '/mainhome/sample/Only1Sample.png',
  //   },
  // ];

  return (
    <>
      <MobileTitle>
        <h3>VIBO TOP 5</h3>
        {/* <Underline2 /> */}
      </MobileTitle>

      <MobileSlider>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          centeredSlides
        >
          {content?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <MobileCard>
                <CardContainer>
                  <Poster
                    src={
                      item.posterPath ? `https://image.tmdb.org/t/p/original${item.posterPath}` : '/fallback-image.png'
                    }
                    alt={item.title}
                  />
                  <InfoSection>
                    <Flex $alignItems="flex-end" $gap="30px" $padding="20px 0">
                      <Label>{index + 1}</Label>
                      <Title>{item.title}</Title>
                    </Flex>
                    <Tags>
                      <Tag>{item.releaseYear}</Tag>
                      <Tag>{item.genres?.map((genreId) => getGenreName(genreId)).join(', ')}</Tag>
                      <Tag>{item.adult ? '청소년 관람불가' : '전체 관람가'}</Tag>
                    </Tags>
                    <Description>{item.overview}</Description>
                  </InfoSection>
                </CardContainer>
              </MobileCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </MobileSlider>
    </>
  );
};

export default MobileOnly;

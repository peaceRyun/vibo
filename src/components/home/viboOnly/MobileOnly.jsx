import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import styled from 'styled-components';
import { Autoplay } from 'swiper/modules'; // 자동 슬라이드 기능 추가
import {
  CardContainer,
  Description,
  InfoSection,
  MobileCard,
  MobileCardText,
  MobilePoster,
  MobileSlider,
  // MobileTitle,
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

  return (
    <>
      {/* <MobileTitle>VIBO TOP 5</MobileTitle> */}

      <MobileSlider>
        <Swiper
          spaceBetween={10}
          centeredSlides={false}
          // 슬라이드 요소 반응형시 중앙 안하도록 하기
          loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          // modules={[Autoplay]}
          breakpoints={{
            390: { slidesPerView: 1.3, spaceBetween: 10 },
            600: { slidesPerView: 2.3, spaceBetween: 15 },
            768: { slidesPerView: 2.5, spaceBetween: 15 },
            1024: { slidesPerView: 3.3, spaceBetween: 15 },
            // 1280: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {content?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <StyledMobileCard>
                <CardContainer>
                  <StyledMobilePoster
                    src={
                      item.posterPath ? `https://image.tmdb.org/t/p/original${item.posterPath}` : '/fallback-image.png'
                    }
                    alt={item.title}
                  />
                  <StyledMobileCardText>
                    <InfoSection>
                      <Flex>
                        {/* $alignItems="flex-end" $gap="20px" $padding="15px 0" */}
                        <Label>{index + 1}</Label>
                        <Title>{item.title}</Title>
                      </Flex>
                      <Tags>
                        <Tag>{item.releaseYear}</Tag>
                        <Tag>
                          {item.genres
                            ?.slice(0, 2)
                            .map((genreId) => getGenreName(genreId))
                            .join(', ') || '장르 없음'}
                        </Tag>
                        <Tag>{item.adult ? '청소년 관람불가' : '전체 관람가'}</Tag>
                      </Tags>
                      <Description>{item.overview}</Description>
                    </InfoSection>
                  </StyledMobileCardText>
                </CardContainer>
              </StyledMobileCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </MobileSlider>
    </>
  );
};

export default MobileOnly;

// 스타일 조절
const StyledMobileCard = styled(MobileCard)`
  max-width: 100%;
  max-width: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  overflow: hidden;
  flex-shrink: 0;
  /* &:hover {
    transform: scale(1.05);
  } */
`;

const StyledMobilePoster = styled(MobilePoster)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const StyledMobileCardText = styled(MobileCardText)`
  flex-grow: 1;
  padding: 15px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 12px;
  }
`;

// const StyledTitle = styled(Title)`
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   max-width: 90%;
// `;

// // ✅ 설명 길면 3줄까지만 보이게 처리
// const StyledDescription = styled(Description)`
//   display: -webkit-box;
//   -webkit-line-clamp: 3; /* 최대 3줄 표시 */
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

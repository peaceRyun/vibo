import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  CardContainer,
  Description,
  InfoSection,
  ItemTitle,
  MobileCard,
  MobileSlider,
  MobileTitle,
  Poster,
  Tag,
  Tags,
  Underline2,
} from './style';

const MobileOnly = () => {
  const items = [
    {
      title: '파묘',
      year: '2025',
      genre: '미스터리',
      rating: '15세',
      description: '미국 LA, 거액의 의뢰를 받은 무당 ‘화림’과 ‘봉길’은 기이한 병이 대물림되는 집안의 장소를 만난다.',
      image: '/mainhome/sample/Only1Sample.png',
    },
    {
      title: '다른 영화',
      year: '2024',
      genre: '스릴러',
      rating: '15세',
      description: '새로운 사건이 발생하며 예측할 수 없는 미스터리가 전개된다.',
      image: '/mainhome/sample/Only2Sample.png',
    },
    {
      title: '파묘',
      year: '2025',
      genre: '미스터리',
      rating: '15세',
      description: '미국 LA, 거액의 의뢰를 받은 무당 ‘화림’과 ‘봉길’은 기이한 병이 대물림되는 집안의 장소를 만난다.',
      image: '/mainhome/sample/Only1Sample.png',
    },
    {
      title: '다른 영화',
      year: '2024',
      genre: '스릴러',
      rating: '15세',
      description: '새로운 사건이 발생하며 예측할 수 없는 미스터리가 전개된다.',
      image: '/mainhome/sample/Only2Sample.png',
    },
    {
      title: '파묘',
      year: '2025',
      genre: '미스터리',
      rating: '15세',
      description: '미국 LA, 거액의 의뢰를 받은 무당 ‘화림’과 ‘봉길’은 기이한 병이 대물림되는 집안의 장소를 만난다.',
      image: '/mainhome/sample/Only1Sample.png',
    },
  ];

  return (
    <>
      <MobileTitle>
        <h3>VIBO TOP 5</h3>
        {/* <Underline2 /> */}
      </MobileTitle>

      <MobileSlider>
        <Swiper spaceBetween={20} slidesPerView={1.2} centeredSlides>
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <MobileCard>
                <CardContainer>
                  <Poster src={item.image} alt={item.title} />
                  <InfoSection>
                    <ItemTitle>{item.title}</ItemTitle>
                    <Tags>
                      <Tag>{item.year}</Tag>
                      <Tag>{item.genre}</Tag>
                      <Tag>{item.rating}</Tag>
                    </Tags>
                    <Description>{item.description}</Description>
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

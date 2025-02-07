import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/navigation';
import PopularItem from './PopularItem';
import { ListWrapper, PopularInfo, PopularSection, PopularTitle } from './style'; // ✅ PopularSection import 확인!

const PopularList = () => {
  const popularDramas = [
    { id: 1, title: '별들에게 물어봐', image: '/dramahome/drama_01.webp' },
    { id: 2, title: '옥씨부인전', image: '/dramahome/drama_02.webp' },
    { id: 3, title: '도깨비', image: '/dramahome/drama_03.webp' },
    { id: 4, title: '너를 좋아해', image: '/dramahome/drama_04.webp' },
    { id: 5, title: '류주기', image: '/dramahome/drama_05.webp' },
    { id: 6, title: '조폭', image: '/dramahome/drama_06.webp' },
    { id: 7, title: '이한신', image: '/dramahome/drama_07.webp' },
    { id: 8, title: '지송', image: '/dramahome/drama_08.webp' },
    { id: 9, title: '슬의생', image: '/dramahome/drama_09.webp' },
    { id: 10, title: '별들에게 물어봐', image: '/dramahome/drama_10.webp' },
  ];
  return (
    <PopularSection>
      <ListWrapper>
        <PopularInfo>
          <PopularTitle>
            <h2>인기 드라마</h2>
          </PopularTitle>
        </PopularInfo>
        <Swiper spaceBetween={20} slidesPerView={4}>
          {popularDramas.map((drama, index) => (
            <SwiperSlide key={drama.id}>
              <PopularItem rank={index + 1} image={drama.image} title={drama.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ListWrapper>
    </PopularSection>
  );
};

export default PopularList;

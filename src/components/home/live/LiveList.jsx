import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import LiveItem from './LiveItem';

const LiveList = ({ title }) => {
  const videoData = [
    {
      id: 1,
      url: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/A_Close-Up_Of_A_Ball_Being_Kicked_fhd_1248072.mp4',
      title: '축구 하이라이트 - 볼 킥 장면',
      broadcaster: 'KBS N',
    },
    {
      id: 2,
      url: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Aerial_Hyper_Lapse_Video_Of_Sport_City_-_Manchester_UK_fhd_2395741.mp4',
      title: '맨체스터 스포츠 시티 하이퍼랩스',
      broadcaster: 'Sky Sports',
    },
    {
      id: 3,
      url: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Athletes_Practice_At_Swimming_Pool_fhd_1018922.mp4',
      title: '수영 국가대표 훈련 현장',
      broadcaster: 'MBC Sports+',
    },
    {
      id: 4,
      url: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Baseball_Game_In_The_Stadium_fhd_141965.mp4',
      title: 'KBO 리그 - 잠실구장 현장',
      broadcaster: 'KBS N SPORTS',
    },
    {
      id: 5,
      url: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Busy_Pedestrian_Street_fhd_172445.mp4',
      title: '서울로 7017 - 퇴근길 풍경',
      broadcaster: 'tvN',
    },
  ];

  return (
    <LiveContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledSwiper slidesPerView={4.2} spaceBetween={16}>
        {videoData.map((item) => (
          <SwiperSlide key={item.id}>
            <LiveItem videoData={item} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </LiveContainer>
  );
};

export default LiveList;

const LiveContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px; /* 작은 화면에서 여백 추가 */

  @media (max-width: 600px) {
    padding: 0 10px; /* 600px 이하에서 여백 축소 */
  }
`;

const StyledTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const StyledSwiper = styled(Swiper)`
  padding-bottom: 20px;

  .swiper-slide {
    border-radius: 8px;
    width: auto;
    flex-shrink: 0;
  }
`;

// 마이페이지
import React from 'react';
import { Container } from '../../common/style';
import ProfileEdit from './ProfileEdit';
import ProfileSwitch from './ProfileSwitch';
import ProfileInfoEdit from './ProfileInfoEdit';

const Mypage = () => {
  const [activeTab, setActiveTab] = React.useState('시청내역');

  const movies = [
    { src: '/member/mypage_01.webp' },
    { src: '/member/mypage_02.webp' },
    { src: '/member/mypage_03.webp' },
    { src: '/member/mypage_04.webp' },
  ];

  const userProfileImage = '/contentdetail/sample/SampleProfile.png';
  return (
    <div>
      <Container />
      <ProfileContainer>
        {/* 프로필 정보 */}
        {/* {Profiles.map((Profile, index) => (
          <ProfileImage key={index} style={{ backgroundImage: `url(${Profile.src})` }} />
        ))} */}

        <ProfileHeader>
          <ProfileImage src={userProfileImage} />
          {/* <ProfileImage /> */}
          <UserInfo>
            <UserName>바이보 님</UserName>
            <button>✏️ 프로필 전환</button>
          </UserInfo>
        </ProfileHeader>
        <PassContainer>
          <PassCard>
            <div className="PassTitle">
              <strong>ViBo 패스</strong>
            </div>
            <p>사용 중인 패스가 있습니다.</p>
          </PassCard>
          <PassCard>
            <div className="PassTitle2">
              <strong>패스 구매하기</strong>
            </div>
          </PassCard>
        </PassContainer>

        <PassCard2>
          <strong>패스를 구매하시면 VIBO Original, 실시간 인기콘텐츠와 다양한 영화를 시청하실 수 있어요!</strong>
        </PassCard2>

        <TabMenu>
          {['시청내역', '구매내역', '찜', '나의 리뷰'].map((tab) => (
            <TabItem key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
              {tab}
            </TabItem>
          ))}
        </TabMenu>
        {/* <TabMenu>
          <TabItem>시청내역</TabItem>
          <TabItem>구매내역</TabItem>
          <TabItem>찜</TabItem>
          <TabItem>나의 리뷰</TabItem>
        </TabMenu> */}

        <ContentSection>
          <h3>시청하신 콘텐츠가 없습니다.</h3>
          <p>다양한 콘텐츠를 시청해보세요.</p>
          <p>고객님의 취향에 맞추어 추천을 해드릴까요?</p>

          {/* 추천 영화 카드 */}
          <RecommendedMovies>
            {movies.map((movie, index) => (
              <MovieCard key={index} style={{ backgroundImage: `url(${movie.src})` }} />
            ))}
          </RecommendedMovies>
          {/* <RecommendedMovies>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </RecommendedMovies> */}
        </ContentSection>
      </ProfileContainer>
      {/* <ProfileEdit />
      <ProfileSwitch /> */}
      {/* <ProfileInfoEdit /> */}
    </div>
  );
};

export default Mypage;

import styled from 'styled-components';
// 전체 컨테이너
export const ProfileContainer = styled.div`
  padding: 50px;
  /* width: 70%;
  max-width: 1000px;
  margin: 50px auto;
  padding: 40px;
  background: #000;
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1); */
`;

// 프로필 정보 컨테이너
export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

// 프로필 이미지
export const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src || '/images/default-profile.jpg'});
  border: 2px solid #68f5eb;
`;

// 유저 정보
export const UserInfo = styled.div`
  flex: 1;
  display: flex;
  gap: 40px;
  button {
    color: white;
    padding: 10px;
    background-color: gray;
    border-radius: 10px;
  }
`;

// 유저 이름 분리?
export const UserName = styled.h2`
  display: flex;
  font-size: 22px;
  font-weight: bold;
  align-items: center;
  gap: 10px;
`;

export const PassContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
`;

// 패스 정보 컨테이너 ?? 더 추가??
export const PassCard = styled.div`
  background: #222;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  gap: 2.875rem;
  /* width: 48.25rem;
  height: 6.875rem; */
  .PassTitle {
    width: 26.625rem;
    height: 6.25rem;
  }
  .PassTitle2 {
    width: 18.75rem;
  }
`;
export const PassCard2 = styled.div`
  background: #222;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 825px;
  height: 6.875rem;
`;

// 탭 메뉴
export const TabMenu = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 100px;

  border-bottom: 2px solid #444;
  padding-bottom: 10px;
`;

export const TabItem = styled.div`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding-bottom: 5px;
  color: ${(props) => (props.active ? '#68F5EB' : 'white')};
  position: relative;
  margin-bottom: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: ${(props) => (props.active ? '100%' : '0')}; /* 활성화된 탭만 100% */
    height: 3px;
    background-color: #68f5eb;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

// 시청내역 & 콘텐츠 추천 임시로
export const ContentSection = styled.div`
  text-align: left;
  margin-top: 20px;
  padding: 25px 0;
  h3 {
    font-size: 33px;
    padding-bottom: 25px;
  }
  p {
    font-size: 23px;
  }
`;

// 영화 추천 이미지 컨테이너 임시로
const RecommendedMovies = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
`;

const MovieCard = styled.div`
  width: 18.75rem;
  height: 380px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

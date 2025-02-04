// 마이페이지
import React from 'react';
import { Container } from '../../common/style';
import ProfileEdit from './ProfileEdit';
import ProfileSwitch from './ProfileSwitch';
import ProfileInfoEdit from './ProfileInfoEdit';

const Mypage = () => {
  // const [activeTab, setActiveTab] = React.useState('시청내역');

  const [activeTab, setActiveTab] = useState('시청내역');

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
            <UserName>
              <strong>바이보</strong>
              <p>님</p>
            </UserName>
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
        {/* 탭 메뉴 */}
        <TabMenu>
          {['시청내역', '구매내역', '찜', '나의 리뷰'].map((tab) => (
            <TabItem key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
              {tab}
            </TabItem>
          ))}
        </TabMenu>
        <ContentWrapper>
          {activeTab === '시청내역' && <WatchingContent />}
          {activeTab === '구매내역' && <BuyingZzimContent />}
          {activeTab === '찜' && <BuyingZzimContent />}
          {activeTab === '나의 리뷰' && <BuyingZzimContent />}
        </ContentWrapper>
        {/* <TabMenu>
          {['시청내역', '구매내역', '찜', '나의 리뷰'].map((tab) => (
            <TabItem key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
              {tab}
            </TabItem>
          ))}
        </TabMenu> */}
      </ProfileContainer>
    </div>
  );
};

export default Mypage;

import styled from 'styled-components';
import WatchingContent from '../../components/member/watch/WatchingContent';
import BuyingZzimContent from '../../components/member/buyzzim/BuyingZzimContent';
import { useState } from 'react';
// 전체 컨테이너
export const ProfileContainer = styled.div`
  padding: 50px;
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
  font-weight: bold;
  align-items: center;
  gap: 10px;
  strong {
    font-size: 48px;
  }
  p {
    font-size: 32px;
  }
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
// 탭 메뉴 스타일
const TabMenu = styled.div`
  display: flex;
  gap: 60px;
  gap: 60px;
  margin-top: 90px;
  border-bottom: 2px solid #444;
  padding-bottom: 10px;
`;

const TabItem = styled.div`
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
    bottom: 0;
    left: 0;
    width: ${(props) => (props.active ? '100%' : '0')};
    height: 3px;
    background-color: #68f5eb;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

// 콘텐츠 영역 스타일
const ContentWrapper = styled.div`
  /* padding: 20px;
  background: #111;
  border-radius: 10px;
  margin-top: 20px; */
`;
// // 탭 메뉴
// export const TabMenu = styled.div`
//   display: flex;
//   gap: 60px;
//   margin-top: 100px;

//   border-bottom: 2px solid #444;
//   padding-bottom: 10px;
// `;

// export const TabItem = styled.div`
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   padding-bottom: 5px;
//   color: ${(props) => (props.active ? '#68F5EB' : 'white')};
//   position: relative;
//   margin-bottom: 20px;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -3px;
//     left: 0;
//     width: ${(props) => (props.active ? '100%' : '0')}; /* 활성화된 탭만 100% */
//     height: 3px;
//     background-color: #68f5eb;
//     transition: width 0.3s ease;
//   }

//   &:hover::after {
//     width: 100%;
//   }
// `;

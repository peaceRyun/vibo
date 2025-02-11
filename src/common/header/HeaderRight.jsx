// 헤더 오른쪽 영역 프로필, 검색버튼
import React from 'react';
import SearchIcon from './SearchIcon';
import ProfileLogo from './ProfileLogo';
import { RightContainer } from './style';

const HeaderRight = ({ onSearchClick, onProfileClick }) => {
  return (
    <RightContainer>
      <ProfileLogo onClick={onProfileClick} />
      <SearchIcon onClick={onSearchClick} />
    </RightContainer>
  );
};

export default HeaderRight;

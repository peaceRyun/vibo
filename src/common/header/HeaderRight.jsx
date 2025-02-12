// 헤더 오른쪽 영역 프로필, 검색버튼
import React, { useState } from 'react';
import SearchIcon from './SearchIcon';
import ProfileLogo from './ProfileLogo';
import { RightContainer } from './style';
import Dropdown from './Dropdown';

import CloseIcon from './CloseIcon';
import ProfileDropdown from './ProfileDropdown';

const HeaderRight = () => {
  const [isSearchOpen, setIsSerchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSearch = () => {
    setIsSerchOpen((prev) => !prev);
  };

  const togglesProfile = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <RightContainer>
      {/* 애도 하위 애들 클릭시 닫히게 해야함 */}
      {/* <ProfileLogo onClick={onProfileClick} /> */}
      <ProfileLogo onClick={togglesProfile} />

      {isProfileOpen && <ProfileDropdown onClose={() => setIsProfileOpen(false)} />}

      {/* 검색 아이콘 OR 닫기 아이콘 */}
      {isSearchOpen ? <CloseIcon onClick={toggleSearch} /> : <SearchIcon onClick={toggleSearch} />}

      {/* 검색창 드롭다운 */}
      {isSearchOpen && <Dropdown onClose={toggleSearch} />}
    </RightContainer>
  );
};

export default HeaderRight;

// 헤더 오른쪽 영역 프로필, 검색버튼
import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from './SearchIcon';
import ProfileLogo from './ProfileLogo';
import { RightContainer } from './style';
import Dropdown from './Dropdown';

import CloseIcon from './CloseIcon';
import ProfileDropdown from './ProfileDropdown';

const HeaderRight = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const searchRef = useRef(null);
  const profileRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const togglesProfile = () => {
    setIsProfileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
  });

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

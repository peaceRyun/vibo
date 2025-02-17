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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <RightContainer>
      {/* 검색 아이콘 OR 닫기 아이콘 */}
      <div ref={searchRef}>
        {isSearchOpen ? <CloseIcon onClick={toggleSearch} /> : <SearchIcon onClick={toggleSearch} />}
        {isSearchOpen && <Dropdown onClose={() => setIsSearchOpen(false)} />}
      </div>
      {/* 프로필 버튼 */}
      <div ref={profileRef}>
        <ProfileLogo onClick={togglesProfile} />
        {isProfileOpen && <ProfileDropdown onClose={() => setIsProfileOpen(false)} />}
      </div>
    </RightContainer>
  );
};

export default HeaderRight;

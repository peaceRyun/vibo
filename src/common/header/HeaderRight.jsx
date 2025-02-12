// 헤더 오른쪽 영역 프로필, 검색버튼
import React, { useState } from 'react';
import SearchIcon from './SearchIcon';
import ProfileLogo from './ProfileLogo';
import { RightContainer } from './style';
import Dropdown from './Dropdown';

import CloseIcon from './CloseIcon';
import { IoClose } from 'react-icons/io5';

const HeaderRight = ({ onProfileClick }) => {
  const [isSearchOpen, setIsSerchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSerchOpen((prev) => !prev);
  };

  return (
    <RightContainer>
      <ProfileLogo onClick={onProfileClick} />
      {/* <SearchIcon onClick={onSearchClick} /> */}

      {/* <CloseIcon onClick={toggleSearch}>{isSearchOpen ? <CloseIcon /> : <SearchIcon />}</CloseIcon>

      {isSearchOpen && <Dropdown onClose={toggleSearch} />} */}

      {/* <div onClick={toggleSearch}>{isSearchOpen ? <IoClose size={40} /> : <SearchIcon />}</div>

      {isSearchOpen && <Dropdown onClose={toggleSearch} />} */}
      {/* 검색 아이콘 OR 닫기 아이콘 */}
      {isSearchOpen ? <CloseIcon onClick={toggleSearch} /> : <SearchIcon onClick={toggleSearch} />}

      {/* 검색창 드롭다운 */}
      {isSearchOpen && <Dropdown onClose={toggleSearch} />}
    </RightContainer>
  );
};

export default HeaderRight;

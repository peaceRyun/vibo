// HeaderRight 안의 컴포넌트 (두개가 다른 기능을 동작하기 때문에 파일 두개로 나누었습니다.)
import React from 'react';
import { SearchIconContainer } from './style';
import { FiSearch } from 'react-icons/fi';

const SearchIcon = ({ onClick }) => {
  return (
    <SearchIconContainer onClick={onClick}>
      <FiSearch size={30} />
    </SearchIconContainer>
  );
};

export default SearchIcon;

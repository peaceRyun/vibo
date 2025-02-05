import React from 'react';
import { SearchContainer, SearchIcon, ProfileLogo } from './style';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
    return (
        <SearchContainer>
            <ProfileLogo src="/common/header/profileLogo.png" alt="프로필 로고" />
            <SearchIcon>
                <FiSearch size={20} />
            </SearchIcon>
        </SearchContainer>
    );
};

export default Search;

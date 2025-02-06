import React from 'react';
import { SearchContainer, SearchIcon, ProfileLogo } from './style';
import { FiSearch } from 'react-icons/fi';

const Search = ({ onSearchClick }) => {
    return (
        <SearchContainer onClick={onSearchClick}>
            <ProfileLogo src="/common/header/profileLogo.png" alt="프로필 로고" />
            <SearchIcon>
                <FiSearch size={30} />
            </SearchIcon>
        </SearchContainer>
    );
};

export default Search;

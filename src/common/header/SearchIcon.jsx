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

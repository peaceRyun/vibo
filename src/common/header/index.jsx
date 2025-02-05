import React from 'react';
import Nav from './Nav';
import Search from './Search';
import { HeaderContainer, Logo } from './style';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>VIBO</Logo>
            {/* 임시로고 */}
            <Nav />
            <Search />
        </HeaderContainer>
    );
};

export default Header;

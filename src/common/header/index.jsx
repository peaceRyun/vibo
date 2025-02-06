import React from 'react';
import Nav from './Nav';
import Search from './Search';
import { HeaderContainer, Logo, LeftSection } from './style';

const Header = () => {
    return (
        <HeaderContainer>
            <LeftSection>
                <Logo>VIBO</Logo>
                <Nav />
            </LeftSection>
            <Search />
        </HeaderContainer>
    );
};

export default Header;

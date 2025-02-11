import { useState } from 'react';
import Nav from './Nav';
import HeaderRight from './HeaderRight';
import Dropdown from './Dropdown';
import ProfileDropdown from './ProfileDropdown';
import { HeaderContainer, Logo, LeftSection } from './style';
import { Link } from 'react-router';

const Header = () => {
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);

    const toggleSearchDropdown = () => setSearchOpen((prev) => !prev);
    const toggleProfileDropdown = () => setProfileOpen((prev) => !prev);

    return (
        <div style={{ position: 'relative' }}>
            <HeaderContainer>
                <LeftSection>
                    <Link to='/'>
                        <Logo>VIBO</Logo>
                    </Link>
                    <Nav />
                </LeftSection>

                <HeaderRight onSearchClick={toggleSearchDropdown} onProfileClick={toggleProfileDropdown} />
            </HeaderContainer>

            {isSearchOpen && <Dropdown />}
            {isProfileOpen && <ProfileDropdown />}
        </div>
    );
};

export default Header;

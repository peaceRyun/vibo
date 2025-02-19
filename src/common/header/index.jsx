// import { useState } from 'react';
// import Nav from './Nav';
// import HeaderRight from './HeaderRight';
// import Dropdown from './Dropdown';
// import ProfileDropdown from './ProfileDropdown';
// import { HeaderContainer, Logo, LeftSection } from './style';
// import { Link } from 'react-router';

// const Header = () => {
//   const [isSearchOpen, setSearchOpen] = useState(false);
//   const [isProfileOpen, setProfileOpen] = useState(false);
//   const location = useLocation();

//   const hideNavPages = [''];
//   const isNavHidden = hideNavPages.includes(location.pathname);

//   const toggleSearchDropdown = () => setSearchOpen((prev) => !prev);
//   const toggleProfileDropdown = () => setProfileOpen((prev) => !prev);

//   return (
//     <div style={{ position: 'relative' }}>
//       <HeaderContainer>
//         <LeftSection>
//           <Link to="/">
//             <Logo>VIBO</Logo>
//           </Link>
//           {!isNavHidden && <Nav />}
//         </LeftSection>

//         <HeaderRight onSearchClick={toggleSearchDropdown} onProfileClick={toggleProfileDropdown} />
//       </HeaderContainer>

//       {isSearchOpen && <Dropdown />}
//       {isProfileOpen && <ProfileDropdown />}
//     </div>
//   );
// };

// export default Header;
import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // 현재 경로를 가져오기 위한 import
import Nav from './Nav';
import HeaderRight from './HeaderRight';
// import Dropdown from './Dropdown';
import DropDownUG from './dropdownug/DropDownUG';
import ProfileDropdown from './ProfileDropdown';
import { HeaderContainer, Logo, LeftSection, MobileMenuIcon, MobileMenu, NavItem, RightContainer } from './style';
import { Link } from 'react-router-dom'; // 'react-router' → 'react-router-dom'으로 변경
// import { FaBars } from 'react-icons/fa';
// import { IoMdMore } from 'react-icons/io';
import HeaderCenter from './HeaderCenter';

const Header = () => {
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const hideNavPages = ['/profilesforedit', '/profileinfoedit', '/profileselect', '/profileforedit'];
    const isNavHidden = hideNavPages.includes(location.pathname);

    const isAboutPage = ['/about', '/register', '/login'].includes(location.pathname);

    const toggleSearchDropdown = () => setSearchOpen((prev) => !prev);
    const toggleProfileDropdown = () => setProfileOpen((prev) => !prev);
    const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

    const closeSearchDropdown = () => setSearchOpen(false);

    return (
        <>
            {isAboutPage ? (
                <HeaderCenter />
            ) : (
                <HeaderContainer>
                    <LeftSection>
                        <Link to='/'>
                            <Logo>VIBO</Logo>
                        </Link>
                        {!isNavHidden && <Nav />}
                    </LeftSection>

                    {!isNavHidden && (
                        <RightContainer>
                            <HeaderRight
                                onSearchClick={toggleSearchDropdown}
                                onProfileClick={toggleProfileDropdown}
                                toggleMobileMenu={toggleMobileMenu}
                            />
                        </RightContainer>
                    )}

                    {isMobileMenuOpen && (
                        <MobileMenu>
                            <Link to='/serieshome' onClick={toggleMobileMenu}>
                                <NavItem>시리즈</NavItem>
                            </Link>
                            <Link to='/moviehome' onClick={toggleMobileMenu}>
                                <NavItem>영화</NavItem>
                            </Link>
                            <Link to='/livehome' onClick={toggleMobileMenu}>
                                <NavItem>라이브</NavItem>
                            </Link>
                            <NavItem onClick={toggleMobileMenu}>VIBO+</NavItem>
                        </MobileMenu>
                    )}

                    {isSearchOpen && <DropDownUG onClose={closeSearchDropdown} />}
                    {isProfileOpen && <ProfileDropdown />}
                </HeaderContainer>
            )}
        </>
        // <HeaderContainer>
        //   <LeftSection>
        //     <Link to="/">
        //       <Logo>VIBO</Logo>
        //     </Link>
        //     {!isNavHidden && <Nav />}
        //   </LeftSection>

        //   {!isNavHidden && (
        //     <RightContainer>
        //       <HeaderRight
        //         onSearchClick={toggleSearchDropdown}
        //         onProfileClick={toggleProfileDropdown}
        //         toggleMobileMenu={toggleMobileMenu}
        //       />
        //       {/* 더보기 메뉴 별로여서 일단 숨김.. */}
        //       {/* <MobileMenuIcon onClick={toggleMobileMenu}>
        //         <IoMdMore />
        //       </MobileMenuIcon> */}
        //     </RightContainer>
        //   )}

        //   {/* 모바일 메뉴 */}
        //   {isMobileMenuOpen && (
        //     <MobileMenu>
        //       <Link to="/serieshome" onClick={toggleMobileMenu}>
        //         <NavItem>시리즈</NavItem>
        //       </Link>
        //       <Link to="/moviehome" onClick={toggleMobileMenu}>
        //         <NavItem>영화</NavItem>
        //       </Link>
        //       <Link to="/livehome" onClick={toggleMobileMenu}>
        //         <NavItem>라이브</NavItem>
        //       </Link>
        //       <NavItem onClick={toggleMobileMenu}>VIBO+</NavItem>
        //     </MobileMenu>
        //   )}

        //   {isSearchOpen && <Dropdown />}
        //   {isProfileOpen && <ProfileDropdown />}
        // </HeaderContainer>
    );
};

export default Header;

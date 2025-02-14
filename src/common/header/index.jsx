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
import Dropdown from './Dropdown';
import ProfileDropdown from './ProfileDropdown';
import { HeaderContainer, Logo, LeftSection } from './style';
import { Link } from 'react-router-dom'; // 'react-router' → 'react-router-dom'으로 변경

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const location = useLocation(); // 현재 페이지 경로 가져오기

  const hideNavPages = ['/profilesforedit', '/profileinfoedit', '/profileselect', '/profileforedit'];
  const isNavHidden = hideNavPages.includes(location.pathname);

  const toggleSearchDropdown = () => setSearchOpen((prev) => !prev);
  const toggleProfileDropdown = () => setProfileOpen((prev) => !prev);

  return (
    <div style={{ position: 'relative' }}>
      <HeaderContainer>
        <LeftSection>
          <Link to="/">
            <Logo>VIBO</Logo>
          </Link>
          {/* 특정 페이지에서 Nav 숨김 */}
          {!isNavHidden && <Nav />}
        </LeftSection>

        {!isNavHidden && <HeaderRight onSearchClick={toggleSearchDropdown} onProfileClick={toggleProfileDropdown} />}
      </HeaderContainer>

      {isSearchOpen && <Dropdown />}
      {isProfileOpen && <ProfileDropdown />}
    </div>
  );
};

export default Header;

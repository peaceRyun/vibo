import { Link, useLocation } from 'react-router-dom';
import { NavContainer, NavItem } from './style';

const Nav = () => {
    const location = useLocation();

    return (
        <NavContainer>
            <Link to='/serieshome'>
                <NavItem $isActive={location.pathname === '/serieshome'}>시리즈</NavItem>
            </Link>
            <Link to='/moviehome'>
                <NavItem $isActive={location.pathname === '/moviehome'}>영화</NavItem>
            </Link>
            <Link to='/livehome'>
                <NavItem $isActive={location.pathname === '/livehome'}>라이브</NavItem>
            </Link>
            <NavItem $isActive={location.pathname === '/viboplus'}>VIBO+</NavItem>
        </NavContainer>
    );
};

export default Nav;

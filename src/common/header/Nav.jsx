import { Link } from 'react-router';
import { NavContainer, NavItem } from './style';

const Nav = () => {
    return (
        <NavContainer>
            <Link to='/serieshome'>
                <NavItem>시리즈</NavItem>
            </Link>
            <Link to='/moviehome'>
                <NavItem>영화</NavItem>
            </Link>
            <Link to='/livehome'>
                <NavItem>라이브</NavItem>
            </Link>
            <NavItem>VIBO+</NavItem>
        </NavContainer>
    );
};

export default Nav;

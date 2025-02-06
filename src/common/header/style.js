import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: #000;
    color: #fff;
    height: 5rem;
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: 3.0625rem;
`;

export const Logo = styled.h1`
    font-size: 3.125rem;
    font-family: 'metrobarat', sans-serif;
    font-weight: 400;
    background: linear-gradient(to right, #fff, #07ffe6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    margin-right: 3.0625rem;
`;

export const NavContainer = styled.nav`
    display: flex;
    gap: 3.5rem;
`;

export const NavItem = styled.span`
    font-size: 1.0625rem;
    font-weight: 800;
    font-family: 'Pretendard', sans-serif;
    color: #fff;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #1ee0b6;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 3.5rem;
    width: auto;
    margin-right: 2.8rem;
`;

export const ProfileLogo = styled.img`
    width: 40px;
    height: 40px;
    display: block;
    object-fit: cover;
    margin-right: 1.75rem;
`;

export const SearchIcon = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

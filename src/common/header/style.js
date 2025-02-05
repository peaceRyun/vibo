import styled from 'styled-components';

// 헤더 전체 레이아웃
export const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
    background-color: #000;
    color: #fff;
    height: 5rem; /* 80px */
`;

// 로고 스타일
export const Logo = styled.h1`
    font-size: 3.125rem; /* 50px */
    font-family: 'metrobarat', sans-serif;
    font-weight: 400; /* Regular */
    background: linear-gradient(to right, #07ffe6, #00bfb3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    margin-right: 3.0625rem; /* 49px */
`;

// 네비게이션
export const NavContainer = styled.nav`
    display: flex;
    gap: 3.5rem; /* 56px */
`;

export const NavItem = styled.span`
    font-size: 1.0625rem; /* 17px */
    font-weight: 800; /* Pretendard ExtraBold */
    font-family: 'Pretendard', sans-serif;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #1ee0b6;
    }
`;

// 검색 섹션
export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    padding-left: 3.5rem; /* 왼쪽 여백 (로고 + 간격 포함) */
`;

// 프로필 로고 스타일
export const ProfileLogo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 1.75rem; /* 28px 간격 */
`;

// 검색 아이콘 스타일
export const SearchIcon = styled.div`
    color: #fff;
`;

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #191919;
  color: #fff;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: rgb(255, 255, 255);
  transition: backdrop-filter 0.3s linear, background-color 0.3s linear;
  backdrop-filter: blur(30px);
  background-color: rgba(0, 0, 0, 0.7);
  inset: -1px 0px 0px;

  @media (max-width: 590px) {
    height: 4rem;
    padding: 15px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3.0625rem;

  @media (max-width: 590px) {
    gap: 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 3.125rem;
  font-family: 'metrobarat', sans-serif;
  font-weight: 400;
  background: linear-gradient(to right, #fff, #07ffe6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  @media (max-width: 590px) {
    font-size: 1.8rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 590px) {
    gap: 1rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 3.5rem;

  @media (max-width: 590px) {
    display: none;
  }
`;

export const NavItem = styled.span`
  font-size: 1.0625rem;
  font-weight: 800;
  font-family: 'Pretendard', sans-serif;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #07ffe6;
  }

  @media (max-width: 590px) {
    font-size: 0.9rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3.5rem;
  width: auto;
  margin-right: 2.8rem;
  cursor: pointer;
`;

export const ProfileLogoContainer = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  cursor: pointer;
`;

export const ProfileLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  object-fit: cover;
  margin-right: 1.75rem;
  cursor: pointer;

  @media (max-width: 590px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const SearchIconContainer = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #1ee0b6;
  }
`;

export const SearchIcon = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100vh; /* 화면의 세로 크기 전체를 채우기 */
  background-color: #191919;
  padding: 5rem 9.5rem 8.125rem 11.375rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: fixed;

  .content-wrapper {
    flex: 1;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    padding-top: 4.375rem;

    .left-section {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 1.063rem;
        font-weight: 800;
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          font-size: 0.938rem;
          line-height: 1.5rem;
          color: #939598;
          margin-bottom: 0.5rem;
        }

        .rank-number {
          color: #07ffe6;
          margin-right: 0.5rem;
        }
      }

      small {
        display: block;
        margin-top: 1rem;
        font-size: 0.938rem;
        color: #ccc;
      }
    }

    .right-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .right-section .section:last-child {
      margin-top: 11.875rem;
    }

    .section {
      h3 {
        font-size: 1.063rem;
        font-weight: 800;
        margin-bottom: 1rem;
        line-height: 1.5;
        color: #ffffff;
      }

      p {
        font-size: 0.95rem;
        color: #ccc;
      }

      .keywords {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        span {
          background-color: #191919;
          border: 1px solid #07ffe6;
          padding: 0.5rem 1rem;
          border-radius: 1.25rem;
          font-size: 0.75rem;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #07ffe6;
            color: #191919;
          }
        }
      }
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.063rem;
  background-color: #191919;
  border: none;
  border-bottom: 0.1875rem solid #1ee0b6;
  color: #fff;
  outline: none;

  &::placeholder {
    color: #57585a;
  }
`;

export const ActionText = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  color: #7e7e7e;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #1ee0b6;
  }
`;

export const ProfileDropdownContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 2rem;
  background-color: #191919;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  position: fixed;

  ul {
    width: 200px;
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
  }
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  gap: 0.5rem;
  transition: background 0.3s;
  color: white;
  font-size: 14px;
  &:hover {
    background-color: #07ffe6;
    color: #191919;
  }

  svg {
    color: #07ffe6;
  }
`;

export const UserIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #2e2e2e;
`;

export const BorderLine = styled.div`
  position: absolute;
  align-items: center;
  margin-top: 10px;
  width: 185px;
  height: 0px;
  border: 1px solid #07ffe6;
`;

export const LogOut = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #07ffe6;
    color: #191919;
  }
`;

// 모바일 전용 추가

export const MobileMenuIcon = styled.div`
  /* display: none; */
  cursor: pointer;
  font-size: 2.5rem;
  color: white;
  height: 43px;

  /* @media (max-width: 590px) {
    display: block;
  } */
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4rem;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  text-align: center;
  padding: 1rem;
  z-index: 999;

  ${NavItem} {
    padding: 1rem;
    font-size: 1.2rem;
  }
`;

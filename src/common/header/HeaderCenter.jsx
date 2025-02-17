import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeaderCenter = () => {
  return (
    <div>
      <HeaderContainer>
        <Logo to="/">LOGO</Logo>
      </HeaderContainer>
    </div>
  );
};

export default HeaderCenter;
const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

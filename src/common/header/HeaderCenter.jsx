import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeaderCenter = () => {
    return (
        <div>
            <HeaderContainer>
                <Logo to='/'>VIBO</Logo>
            </HeaderContainer>
        </div>
    );
};

export default HeaderCenter;
const HeaderContainer = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    @media (max-width: 1024px) {
        height: 4rem;
        padding: 15px;
    }
`;

const Logo = styled(Link)`
    font-size: 3.125rem;
    font-family: 'metrobarat', sans-serif;
    font-weight: 400;
    background: linear-gradient(to right, #fff, #07ffe6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    @media (max-width: 1024px) {
        font-size: 1.8rem;
    }
`;

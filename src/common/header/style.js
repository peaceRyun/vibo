import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: #191919;
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
        color: #07ffe6;
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

export const ProfileLogo = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    display: block;
    object-fit: cover;
    margin-right: 1.75rem;
`;

export const SearchIcon = styled.div`
    width: 1.875rem;
    height: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

export const DropdownContainer = styled.div`
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 49.375rem;
    background-color: #191919;
    padding: 5rem 9.5rem 8.125rem 11.375rem;
    color: #fff;
    display: flex;
    flex-direction: column;

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

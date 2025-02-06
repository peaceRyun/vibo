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

export const DropdownContainer = styled.div`
    position: absolute;
    top: 5rem; /* 헤더 아래로 적절히 띄움 */
    left: 50%;
    transform: translateX(-50%); /* 가로 중앙 정렬 */
    width: 100%;
    height: 790px;
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

        .left-section {
            display: flex;
            flex-direction: column;

            h3 {
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }

            ul {
                list-style: none;
                padding: 0;

                li {
                    font-size: 1rem;
                    line-height: 1.5rem;
                    color: #07ffe6;
                    margin-bottom: 0.5rem;
                }
            }

            small {
                display: block;
                margin-top: 1rem;
                font-size: 0.875rem;
                color: #ccc;
            }
        }

        .right-section {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .section {
                h3 {
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
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
                        border-radius: 20px;
                        font-size: 0.875rem;
                        color: #07ffe6;
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
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 1rem;
    font-size: 1.063rem;
    background-color: #191919;
    border: none;
    border-bottom: 3px solid #1ee0b6;
    color: #fff;
    outline: none;

    &::placeholder {
        color: #57585a;
    }
`;

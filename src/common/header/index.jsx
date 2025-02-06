import React, { useState } from 'react';
import Nav from './Nav';
import Search from './Search';
import { HeaderContainer, Logo, LeftSection, DropdownContainer, SearchInput } from './style';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <div style={{ position: 'relative' }}>
            <HeaderContainer>
                <LeftSection>
                    <Logo>VIBO</Logo>
                    <Nav />
                </LeftSection>
                <Search onSearchClick={toggleDropdown} />
            </HeaderContainer>

            {isDropdownOpen && (
                <DropdownContainer>
                    {/* 검색창 */}
                    <SearchInput
                        type="text"
                        placeholder="주요 콘텐츠"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {/* 콘텐츠 영역 */}
                    <div className="content-wrapper">
                        <div className="left-section">
                            <h3>실시간 인기 검색어</h3>
                            <ul>
                                <li>환승연애, 또 다른 시작</li>
                                <li>환승연애 3</li>
                                <li>환승연애</li>
                                <li>명탐정 코난: 100만 달러의 펜타그램</li>
                                <li>짱구는 못말려 24</li>
                                <li>원경</li>
                                <li>히트맨</li>
                                <li>환승연애 2</li>
                                <li>현역가왕 2</li>
                                <li>임원희의 미식전파사</li>
                            </ul>
                            <small>2025.01.22 오후 07:19 기준</small>
                        </div>

                        <div className="right-section">
                            <div className="section">
                                <h3>
                                    최근 검색어 <span>모두 지우기</span>
                                </h3>
                                <p>최근 검색한 내역이 없습니다.</p>
                            </div>

                            <div className="section">
                                <h3>
                                    장르 바로가기 <span>더보기</span>
                                </h3>
                                <div className="keywords">
                                    <span># 키워드</span>
                                    <span># 키워드</span>
                                    <span># 키워드</span>
                                    <span># 키워드</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </DropdownContainer>
            )}
        </div>
    );
};

export default Header;

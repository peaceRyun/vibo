// 검색창 드롭다운
import React, { useState } from 'react';
import { DropdownContainer, SearchInput, ActionText } from './style';

const Dropdown = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
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
              <li>
                <span className="rank-number">1</span> 환승연애, 또 다른 시작
              </li>
              <li>
                <span className="rank-number">2</span> 환승연애 3
              </li>
              <li>
                <span className="rank-number">3</span> 환승연애
              </li>
              <li>
                <span className="rank-number">4</span> 명탐정 코난: 100만 달러의 펜타그램
              </li>
              <li>
                <span className="rank-number">5</span> 짱구는 못말려 24
              </li>
              <li>
                <span className="rank-number">6</span> 원경
              </li>
              <li>
                <span className="rank-number">7</span> 히트맨
              </li>
              <li>
                <span className="rank-number">8</span> 환승연애 2
              </li>
              <li>
                <span className="rank-number">9</span> 현역가왕 2
              </li>
              <li>
                <span className="rank-number">10</span> 임원희의 미식전파사
              </li>
            </ul>
            <small>2025.01.22 오후 07:19 기준</small>
          </div>

          <div className="right-section">
            <div className="section">
              <h3>
                최근 검색어 <ActionText>모두 지우기</ActionText>
              </h3>
              <p>최근 검색한 내역이 없습니다.</p>
            </div>

            <div className="section">
              <h3>
                장르 바로가기 <ActionText>더보기</ActionText>
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
    </>
  );
};

export default Dropdown;

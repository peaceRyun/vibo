import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMulti } from '../../../store/modules/getThunk';
import { searchActions } from '../../../store/modules/searchSlice';
import {
    DropdownContainer,
    SearchInput,
    SearchResultsContainer,
    CategorySection,
    ResultsGrid,
    ResultItem,
    LoadingText,
    ActionText,
} from './style';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ onClose }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchResults, status } = useSelector((state) => state.searchR);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    const categorizedResults = {
        movie: searchResults.filter((item) => item.mediaType === 'movie').slice(0, 10),
        tv: searchResults.filter((item) => item.mediaType === 'tv').slice(0, 10),
        person: searchResults.filter((item) => item.mediaType === 'person').slice(0, 10),
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [onClose]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim()) {
            dispatch(searchActions.setQuery(value));
            dispatch(searchMulti({ query: value, page: 1 }));
        }
    };

    const handleItemClick = (id) => {
        onClose();
        navigate(`/detail/${id}`);
    };

    return (
        <DropdownContainer>
            <SearchInput
                type='text'
                placeholder='제목, 인물 검색'
                value={searchTerm}
                onChange={handleSearch}
                ref={dropdownRef}
            />

            {!searchTerm && (
                <div className='content-wrapper'>
                    {/* 왼쪽 섹션 - 실시간 인기 검색어 */}
                    <div className='left-section'>
                        <h3>실시간 인기 검색어</h3>
                        <ul>
                            <li>
                                <span className='rank-number'>1</span> 환승연애, 또 다른 시작
                            </li>
                            <li>
                                <span className='rank-number'>2</span> 환승연애 3
                            </li>
                            <li>
                                <span className='rank-number'>3</span> 환승연애
                            </li>
                            <li>
                                <span className='rank-number'>4</span> 명탐정 코난: 100만 달러의 펜타그램
                            </li>
                            <li>
                                <span className='rank-number'>5</span> 짱구는 못말려 24
                            </li>
                            <li>
                                <span className='rank-number'>6</span> 원경
                            </li>
                            <li>
                                <span className='rank-number'>7</span> 히트맨
                            </li>
                            <li>
                                <span className='rank-number'>8</span> 환승연애 2
                            </li>
                            <li>
                                <span className='rank-number'>9</span> 현역가왕 2
                            </li>
                            <li>
                                <span className='rank-number'>10</span> 임원희의 미식전파사
                            </li>
                        </ul>
                        <small>2025.01.22 오후 07:19 기준</small>
                    </div>

                    {/* 오른쪽 섹션 */}
                    <div className='right-section'>
                        {/* 최근 검색어 섹션 */}
                        <div className='section'>
                            <h3>
                                최근 검색어 <ActionText>모두 지우기</ActionText>
                            </h3>
                            <p>최근 검색한 내역이 없습니다.</p>
                        </div>

                        {/* 장르 바로가기 섹션 */}
                        <div className='section'>
                            <h3>
                                장르 바로가기 <ActionText>더보기</ActionText>
                            </h3>
                            <div className='keywords'>
                                <span># 키워드</span>
                                <span># 키워드</span>
                                <span># 키워드</span>
                                <span># 키워드</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {searchTerm && (
                <SearchResultsContainer>
                    {status === 'loading' ? (
                        <LoadingText>검색중...</LoadingText>
                    ) : (
                        <>
                            {categorizedResults.tv.length > 0 && (
                                <CategorySection>
                                    <ResultsGrid>
                                        <h3>시리즈</h3>
                                        {categorizedResults.tv.map((item) => (
                                            <ResultItem
                                                key={item.id}
                                                onClick={() => {
                                                    handleItemClick(item.id);
                                                }}
                                            >
                                                <img
                                                    src={
                                                        item.poster_path
                                                            ? `https://image.tmdb.org/t/p/w154${item.poster_path}`
                                                            : '/path-to-placeholder-image.jpg'
                                                    }
                                                    alt={item.name}
                                                />
                                                <p>{item.name}</p>
                                            </ResultItem>
                                        ))}
                                    </ResultsGrid>
                                </CategorySection>
                            )}

                            {categorizedResults.movie.length > 0 && (
                                <CategorySection>
                                    <ResultsGrid>
                                        <h3>영화</h3>
                                        {categorizedResults.movie.map((item) => (
                                            <ResultItem key={item.id}>
                                                <img
                                                    src={
                                                        item.poster_path
                                                            ? `https://image.tmdb.org/t/p/w154${item.poster_path}`
                                                            : '/path-to-placeholder-image.jpg'
                                                    }
                                                    alt={item.title}
                                                />
                                                <p>{item.title}</p>
                                            </ResultItem>
                                        ))}
                                    </ResultsGrid>
                                </CategorySection>
                            )}

                            {categorizedResults.person.length > 0 && (
                                <CategorySection>
                                    <ResultsGrid>
                                        <h3>인물</h3>
                                        {categorizedResults.person.map((item) => (
                                            <ResultItem key={item.id}>
                                                <img
                                                    src={
                                                        item.profile_path
                                                            ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                                                            : '/path-to-placeholder-image.jpg'
                                                    }
                                                    alt={item.name}
                                                />
                                                <p>{item.name}</p>
                                            </ResultItem>
                                        ))}
                                    </ResultsGrid>
                                </CategorySection>
                            )}
                        </>
                    )}
                </SearchResultsContainer>
            )}
        </DropdownContainer>
    );
};

export default Dropdown;

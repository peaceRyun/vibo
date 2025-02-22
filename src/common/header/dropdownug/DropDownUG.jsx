import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGenresThunk, fetchPopularContentThunk, searchMulti } from '../../../store/modules/getThunk';
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
    Flex,
    SearchInputWrapper,
    ClearButton,
} from './style';
import NoSearchResults from './NoSearchResults';
import { RiExternalLinkLine } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const MAX_RECENT_SEARCHES = 5; // 최근 검색어 최대 저장 개수

const Dropdown = ({ onClose }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);

    const { searchResults, status } = useSelector((state) => state.searchR);
    const { popularContent } = useSelector((state) => state.popularR);
    const { genres } = useSelector((state) => state.genreR);

    // 로컬스토리지에서 최근 검색어 불러오기
    useEffect(() => {
        const savedSearches = localStorage.getItem('recentSearches');
        if (savedSearches) {
            setRecentSearches(JSON.parse(savedSearches));
        }
    }, []);

    // 초기 데이터 로드
    useEffect(() => {
        dispatch(fetchPopularContentThunk());
        dispatch(fetchGenresThunk());
    }, [dispatch]);

    // 최근 검색어 저장 함수
    const saveRecentSearch = (term) => {
        if (!term.trim()) return;

        const newSearches = [term, ...recentSearches.filter((search) => search !== term)].slice(0, MAX_RECENT_SEARCHES);

        setRecentSearches(newSearches);
        localStorage.setItem('recentSearches', JSON.stringify(newSearches));
    };

    // 개별 검색어 삭제
    const removeRecentSearch = (searchTerm) => {
        const newSearches = recentSearches.filter((term) => term !== searchTerm);
        setRecentSearches(newSearches);
        localStorage.setItem('recentSearches', JSON.stringify(newSearches));
    };

    // 모든 검색어 삭제
    const clearAllSearches = () => {
        setRecentSearches([]);
        localStorage.removeItem('recentSearches');
    };

    // 검색어 초기화 함수
    const handleClearSearch = () => {
        setSearchTerm('');
        dispatch(searchActions.setQuery(''));
    };

    // 검색어 입력 처리
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim()) {
            dispatch(searchActions.setQuery(value));
            dispatch(searchMulti({ query: value, page: 1 }));
        }
    };

    // 검색 실행 (Enter 키 또는 검색 버튼 클릭 시)
    const executeSearch = () => {
        if (searchTerm.trim()) {
            saveRecentSearch(searchTerm.trim());
            // 여기에 실제 검색 로직 추가
        }
    };

    // Enter 키 처리
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            executeSearch();
        }
    };

    // 최근 검색어 클릭 처리
    const handleRecentSearchClick = (term) => {
        setSearchTerm(term);
        dispatch(searchActions.setQuery(term));
        dispatch(searchMulti({ query: term, page: 1 }));
    };

    // 검색 결과 항목 클릭 처리
    const handleItemClick = (id, mediaType) => {
        if (searchTerm.trim()) {
            saveRecentSearch(searchTerm.trim());
        }
        onClose();
        switch (mediaType) {
            case 'movie':
                navigate(`/detail/movie/${id}`);
                break;
            case 'tv':
                navigate(`/detail/series/${id}`);
                break;
            case 'person':
                navigate('/contents');
                break;
            default:
                navigate(`/detail/${id}`);
        }
    };

    // 카테고리별 검색 결과 분류
    const categorizedResults = {
        movie: searchResults.filter((item) => item.mediaType === 'movie').slice(0, 10),
        tv: searchResults.filter((item) => item.mediaType === 'tv').slice(0, 10),
        person: searchResults.filter((item) => item.mediaType === 'person').slice(0, 10),
    };

    // 인기 검색어 섹션 렌더링
    const renderPopularContent = () => (
        <div className='left-section'>
            <h3>실시간 인기 검색어</h3>
            <ul>
                {status === 'loading' ? (
                    <div>Loading...</div>
                ) : status === 'failed' ? (
                    <div>Error: {error || 'Something went wrong'}</div>
                ) : (
                    popularContent.map((content, index) => (
                        <li key={content.id}>
                            <span className='rank-number'>{index + 1}</span>
                            {content.title}
                        </li>
                    ))
                )}
            </ul>
            <small>2025.01.22 오후 07:19 기준</small>
        </div>
    );

    // 최근 검색어와 장르 섹션 렌더링
    const renderRightSection = () => (
        <div className='right-section'>
            <div className='section'>
                <Flex $alignItems='center' $justifyContent='space-between'>
                    <h3>최근 검색어</h3>
                    {recentSearches.length > 0 && (
                        <h3>
                            <Flex
                                $alignItems='center'
                                $gap='5px'
                                onClick={clearAllSearches}
                                style={{ cursor: 'pointer' }}
                            >
                                <FaTrashAlt color='var(--gray-100)' size='15' />
                                <ActionText>모두 지우기</ActionText>
                            </Flex>
                        </h3>
                    )}
                </Flex>
                {recentSearches.length > 0 ? (
                    <div className='recent-searches'>
                        {recentSearches.map((term, index) => (
                            <Flex
                                key={index}
                                $alignItems='center'
                                $justifyContent='space-between'
                                className='recent-search-item'
                            >
                                <span onClick={() => handleRecentSearchClick(term)} style={{ cursor: 'pointer' }}>
                                    {term}
                                </span>
                                <IoClose
                                    size={16}
                                    onClick={() => removeRecentSearch(term)}
                                    style={{ cursor: 'pointer' }}
                                />
                            </Flex>
                        ))}
                    </div>
                ) : (
                    <p>최근 검색한 내역이 없습니다.</p>
                )}
            </div>
            <div className='section'>
                <Flex $alignItems='center' $justifyContent='space-between'>
                    <h3>장르 바로가기</h3>
                    <h3>
                        <Flex $alignItems='center' $gap='5px'>
                            <RiExternalLinkLine color='var(--gray-100)' />
                            <ActionText>더보기</ActionText>
                        </Flex>
                    </h3>
                </Flex>
                <div className='keywords'>
                    {genres.map((item) => (
                        <span key={item.id}># {item.name}</span>
                    ))}
                </div>
            </div>
        </div>
    );

    // 카테고리별 검색 결과 렌더링
    const renderCategoryResults = (items, title, mediaType) => {
        if (items.length === 0) return null;

        return (
            <CategorySection>
                <ResultsGrid>
                    <h3>{title}</h3>
                    {items.map((item) => (
                        <ResultItem key={item.id} onClick={() => handleItemClick(item.id, mediaType)}>
                            <img
                                src={
                                    item[mediaType === 'person' ? 'profile_path' : 'poster_path']
                                        ? `https://image.tmdb.org/t/p/original${
                                              item[mediaType === 'person' ? 'profile_path' : 'poster_path']
                                          }`
                                        : '/path-to-placeholder-image.jpg'
                                }
                                alt={item.title || item.name}
                            />
                            <p>{item.title || item.name}</p>
                        </ResultItem>
                    ))}
                </ResultsGrid>
            </CategorySection>
        );
    };

    // 검색 결과 컨테이너 렌더링
    const renderSearchResults = () => {
        if (status === 'loading') {
            return <LoadingText>검색중...</LoadingText>;
        }

        if (searchResults.length === 0) {
            return <NoSearchResults searchTerm={searchTerm} />;
        }

        return (
            <>
                {renderCategoryResults(categorizedResults.tv, '시리즈', 'tv')}
                {renderCategoryResults(categorizedResults.movie, '영화', 'movie')}
                {renderCategoryResults(categorizedResults.person, '인물', 'person')}
            </>
        );
    };

    return (
        <DropdownContainer>
            <SearchInputWrapper>
                <SearchInput
                    type='text'
                    placeholder='제목, 인물 검색'
                    value={searchTerm}
                    onChange={handleSearch}
                    onKeyPress={handleKeyPress}
                />
                {searchTerm && (
                    <ClearButton onClick={handleClearSearch}>
                        <IoClose size={20} />
                    </ClearButton>
                )}
            </SearchInputWrapper>

            {!searchTerm ? (
                <div className='content-wrapper'>
                    {renderPopularContent()}
                    {renderRightSection()}
                </div>
            ) : (
                <SearchResultsContainer>{renderSearchResults()}</SearchResultsContainer>
            )}
        </DropdownContainer>
    );
};

export default Dropdown;

import { useState, useEffect } from 'react';
import ToggleSwitch from '../../ui/toggle/Toggle';
import SeasonDropdown from './dropdown/SeasonDropDown';
import EpItem from './EpItem';
import { CloseButton, CRatingImg, EpItemsWrap, EpListBgi, Flex, FlexUl, H3, P20, P28, LoadMoreButton } from './style';
import { useEpisodeAnimation } from '../../hooks/useGsap';
import { IoClose } from 'react-icons/io5';
import { paginationUtil } from '../../utils/paginationUtil';

const EpList = ({ seasons, episodes, contentRating, seasonsLoading, episodesLoading, onSeasonSelect, posterPath }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const episodeListRef = useEpisodeAnimation(!!selectedSeason);

    // ContDetail 컴포넌트와 동일한 매핑 사용
    const ratingImageMap = {
        19: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/19.svg',
        15: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/15.svg',
        12: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/12.svg',
        ALL: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/전체관람가 관람등급 1.png',
    };

    const getRatingImagePath = (contentRating) => {
        const ratingValue = contentRating?.rating || contentRating;
        return ratingImageMap[ratingValue] || ratingImageMap['ALL'];
    };

    useEffect(() => {
        if (!seasonsLoading && seasons.length > 0) {
            const season1 = seasons.find((season) => season.season_number === 1);
            if (season1) {
                handleSeasonSelect(`시즌 ${season1.season_number}`);
            }
        }
    }, [seasons, seasonsLoading]);

    // 시즌 변경 시 페이지 리셋
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedSeason]);

    const handleToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSeasonSelect = (season) => {
        setSelectedSeason(season);
        setIsDropdownOpen(false);
        const seasonNumber = season.split(' ')[1];
        onSeasonSelect(seasonNumber);
    };

    const handleClose = () => {
        setSelectedSeason('');
        setIsDropdownOpen(false);
        setCurrentPage(1);
    };

    const handleLoadMore = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const seasonOptions = seasons.map((season) => ({
        id: season.id,
        name: `시즌 ${season.season_number}`,
    }));

    const backgroundImage = posterPath
        ? `https://image.tmdb.org/t/p/original${posterPath}`
        : 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/EpListBackgroudImg.png';

    const showSeasonSelectionPrompt = !seasonsLoading && (!seasons || seasons.length === 0);

    // 페이지네이션 적용
    const { items: paginatedEpisodes, hasMore } = paginationUtil(episodes, currentPage);

    return (
        <section id='episode-list'>
            <Flex $flexDirection='column' $gap='30px'>
                <Flex
                    $justifyContent='space-between'
                    $alignItems='center'
                    $padding='60px 0 0'
                    $borderTop='1px solid var(--secondary-300)'
                >
                    <Flex $flexDirection='column' $position='relative'>
                        <H3>에피소드</H3>
                        {showSeasonSelectionPrompt && <P20>시즌을 선택해주세요</P20>}
                        {selectedSeason && !episodesLoading && (
                            <Flex $justifyContent='space-between' $alignItems='center' $gap='20px'>
                                <Flex $gap='10px' $justifyContent='space-between' $alignItems='center'>
                                    <P28>{selectedSeason}:</P28>
                                    {contentRating && (
                                        <CRatingImg
                                            src={getRatingImagePath(contentRating)}
                                            alt={`${contentRating?.rating || '전체관람가'} 관람등급`}
                                            style={{ width: '24px' }}
                                        />
                                    )}
                                    <CRatingImg
                                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/내용정보-대사.png'
                                        alt='내용정보-대사'
                                    />
                                    <CRatingImg
                                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/내용정보-선정성.png'
                                        alt='내용정보-선정성'
                                    />
                                    <CRatingImg
                                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/내용정보-주제.png'
                                        alt='내용정보-주제'
                                    />
                                </Flex>
                                <Flex $justifyContent='space-between' $alignItems='center' $gap='15px'>
                                    <P20>연속 재생</P20>
                                    <ToggleSwitch isRound={true} />
                                </Flex>
                            </Flex>
                        )}
                    </Flex>
                    <SeasonDropdown
                        isOpen={isDropdownOpen}
                        onToggle={handleToggle}
                        selectedSeason={selectedSeason}
                        onSelect={handleSeasonSelect}
                        options={seasonOptions}
                        loading={seasonsLoading}
                    />
                </Flex>

                {selectedSeason && (
                    <EpItemsWrap ref={episodeListRef}>
                        {episodesLoading ? (
                            <div>에피소드 로딩 중...</div>
                        ) : (
                            <>
                                <FlexUl $flexDirection='column'>
                                    {paginatedEpisodes.map((episode) => (
                                        <EpItem key={episode.id} episode={episode} />
                                    ))}
                                </FlexUl>
                                {hasMore && <LoadMoreButton onClick={handleLoadMore}>더보기 ...</LoadMoreButton>}
                            </>
                        )}
                        <EpListBgi
                            src={backgroundImage}
                            alt='에피배경이미지'
                            $position='absolute'
                            $top='0'
                            $right='0'
                            $zIndex='-1'
                            $width='555px'
                            $height='802px'
                        />
                        <CloseButton onClick={handleClose}>
                            <IoClose color='var(--white)' size='40' />
                        </CloseButton>
                    </EpItemsWrap>
                )}
            </Flex>
        </section>
    );
};

export default EpList;

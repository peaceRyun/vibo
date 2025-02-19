import { useState } from 'react';
import ToggleSwitch from '../../ui/toggle/Toggle';
import SeasonDropdown from './dropdown/SeasonDropDown';
import EpItem from './EpItem';
import { CloseButton, CRatingImg, EpItemsWrap, EpListBgi, Flex, FlexUl, H3, P20, P28 } from './style';
import { useEpisodeAnimation } from '../../hooks/useGsap';
import { IoClose } from 'react-icons/io5';

const EpList = ({
    seasons,
    episodes,
    contentRating,
    seasonsLoading,
    episodesLoading,
    onSeasonSelect,
    posterPath, // contentDetail에서 전달받은 poster_path
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState('');
    const episodeListRef = useEpisodeAnimation(!!selectedSeason);

    const handleToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSeasonSelect = (season) => {
        setSelectedSeason(season);
        setIsDropdownOpen(false);
        // 시즌 번호 추출 (예: '시즌 1' -> 1)
        const seasonNumber = season.split(' ')[1];
        // 부모 컴포넌트의 핸들러 호출
        onSeasonSelect(seasonNumber);
    };

    const handleClose = () => {
        setSelectedSeason('');
        setIsDropdownOpen(false);
    };

    // 시즌 목록 형식 변환
    const seasonOptions = seasons.map((season) => ({
        id: season.id,
        name: `시즌 ${season.season_number}`,
    }));

    // 배경 이미지 URL 생성
    const backgroundImage = posterPath
        ? `https://image.tmdb.org/t/p/original${posterPath}`
        : '/contentdetail/sample/EpList배경이미지.png';

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
                        {selectedSeason && !episodesLoading && (
                            <Flex $justifyContent='space-between' $alignItems='center' $gap='20px'>
                                <Flex $gap='10px' $justifyContent='space-between' $alignItems='center'>
                                    <P28>{selectedSeason}:</P28>
                                    {contentRating && (
                                        <CRatingImg
                                            src={`/contentdetail/contentrate/${
                                                contentRating.rating || '전체관람가'
                                            } 관람등급 1.png`}
                                            alt={`${contentRating.rating || '전체관람가'} 관람등급`}
                                        />
                                    )}
                                    <CRatingImg
                                        src='/contentdetail/contentrate/내용정보-대사.png'
                                        alt='내용정보-대사'
                                    />
                                    <CRatingImg
                                        src='/contentdetail/contentrate/내용정보-선정성.png'
                                        alt='내용정보-선정성'
                                    />
                                    <CRatingImg
                                        src='/contentdetail/contentrate/내용정보-주제.png'
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
                            <FlexUl $flexDirection='column'>
                                {episodes.map((episode) => (
                                    <EpItem key={episode.id} episode={episode} />
                                ))}
                            </FlexUl>
                        )}
                        <EpListBgi
                            src={backgroundImage} // 동적 배경 이미지 사용
                            alt='에피배경이미지'
                            $position='absolute'
                            $top='0'
                            $right='0'
                            $zIndex='-1'
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

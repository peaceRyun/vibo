import { useState } from 'react';
import ToggleSwitch from '../../ui/toggle/Toggle';
import SeasonDropdown from './dropdown/SeasonDropDown';
import EpItem from './EpItem';
import { CRatingImg, EpItemsWrap, EpListBgi, Flex, FlexUl, H3, P20, P28 } from './style';
import { useEpisodeAnimation } from '../../hooks/useGsap';

const EpList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState('시즌 1');

    const episodeListRef = useEpisodeAnimation(isOpen);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSeasonSelect = (season) => {
        setSelectedSeason(season);
        setIsOpen(false);
    };

    return (
        <section>
            <Flex $flexDirection='column' $gap='30px'>
                <Flex
                    $justifyContent='space-between'
                    $alignItems='center'
                    $padding='60px 0 0'
                    $borderTop='1px solid var(--secondary-300)'
                >
                    <Flex $flexDirection='column' $position='relative'>
                        <H3>에피소드</H3>

                        <Flex $justifyContent='space-between' $alignItems='center' $gap='20px'>
                            <Flex $gap='10px' $justifyContent='space-between' $alignItems='center'>
                                <P28>시즌 10:</P28>
                                <CRatingImg
                                    src='/contentdetail/contentrate/전체관람가 관람등급 1.png'
                                    alt='전체관람가 관람등급'
                                />
                                <CRatingImg src='/contentdetail/contentrate/내용정보-대사.png' alt='내용정보-대사' />
                                <CRatingImg
                                    src='/contentdetail/contentrate/내용정보-선정성.png'
                                    alt='내용정보-선정성'
                                />
                                <CRatingImg src='/contentdetail/contentrate/내용정보-주제.png' alt='내용정보-주제' />
                            </Flex>
                            <Flex $justifyContent='space-between' $alignItems='center' $gap='15px'>
                                <P20>연속 재생</P20>
                                <ToggleSwitch isRound={true} />
                            </Flex>
                        </Flex>
                    </Flex>
                    <SeasonDropdown
                        isOpen={isOpen}
                        onToggle={handleToggle}
                        selectedSeason={selectedSeason}
                        onSelect={handleSeasonSelect}
                    />
                </Flex>

                <EpItemsWrap ref={episodeListRef}>
                    <FlexUl $flexDirection='column'>
                        <EpItem />
                        <EpItem />
                        <EpItem />
                        <EpItem />
                    </FlexUl>
                    <EpListBgi
                        src='/contentdetail/sample/EpList배경이미지.png'
                        alt='에피배경이미지'
                        $position='absolute'
                        $top='0'
                        $right='0'
                        $zIndex='-1'
                    />
                </EpItemsWrap>
            </Flex>
        </section>
    );
};

export default EpList;

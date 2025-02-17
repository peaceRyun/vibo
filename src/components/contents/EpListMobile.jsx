//모바일 전용 에피소드도 따로

import { EpItemsWrap, Flex, FlexUl, P20, TabHeader } from './style';
// import EpItem from './EpItem';
import SeasonDropdown from './dropdown/SeasonDropDown';
import { useState } from 'react';
import ToggleSwitch from '../../ui/toggle/Toggle';
import EpItemMobile from './EpItemMobile';

const EpListMobile = () => {
  // 기본설정
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState('시즌 1');
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const seasonNumber = selectedSeason.split(' ')[1];

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClose = () => {
    setSelectedSeason('');
    setIsDropdownOpen(false);
  };
  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setIsDropdownOpen(false);
  };
  // const handleSeasonSelect = (season) => {
  //   setSelectedSeason(season);
  // };

  return (
    <>
      <section>
        <Flex $flexDirection="column" $gap="10px" $padding="20px 0">
          <TabHeader>
            {/* <H3>에피소드</H3> */}

            {/* selectedseason 모바일 버전에서는 필요 없어 보임 */}
            {/* {selectedSeason && (
              <Flex $justifyContent="space-between" $alignItems="center" $gap="20px">
                <Flex $gap="10px" $justifyContent="space-between" $alignItems="center">
                  <P28>{selectedSeason}:</P28>
                  <CRatingImg src="/contentdetail/contentrate/전체관람가 관람등급 1.png" alt="전체관람가 관람등급" />
                  <CRatingImg src="/contentdetail/contentrate/내용정보-대사.png" alt="내용정보-대사" />
                  <CRatingImg src="/contentdetail/contentrate/내용정보-선정성.png" alt="내용정보-선정성" />
                  <CRatingImg src="/contentdetail/contentrate/내용정보-주제.png" alt="내용정보-주제" />
                </Flex>
              </Flex>
            )} */}
            <Flex>
              <SeasonDropdown
                isOpen={isDropdownOpen}
                onToggle={handleToggle}
                selectedSeason={selectedSeason}
                onSelect={handleSeasonSelect}
              />
              {/* <Flex $justifyContent="space-between" $alignItems="center" $gap="15px"></Flex> */}
              <Flex $justifyContent="space-vetween" $alignItems="center">
                <P20>연속 재생</P20>
                <ToggleSwitch isRound={true} />
              </Flex>
            </Flex>
            <handleToggle onToggle={handleToggle} />
            {/* isOn={isDropdownOpen} */}
          </TabHeader>

          {/* <EpItemsWrap>
            <FlexUl $flexDirection="column">
              {[...Array(4)].map((_, index) => (
                <EpItem key={index} number={seasonNumber} />
              ))}
            </FlexUl>
          </EpItemsWrap> */}
          {/* 에피소드 모바일 아이템을 가져오도록 */}
          <EpItemsWrap>
            <FlexUl $flexDirection="column">
              {[...Array(4)].map((_, index) => (
                <EpItemMobile key={index} />
              ))}
            </FlexUl>
          </EpItemsWrap>
        </Flex>
      </section>
    </>
  );
};

export default EpListMobile;

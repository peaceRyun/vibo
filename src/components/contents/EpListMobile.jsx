//모바일 전용 에피소드도 따로

import { EpItemsWrap, Flex, FlexUl, H3, TabHeader } from './style';
import EpItem from './EpItem';
import SeasonDropdown from './dropdown/SeasonDropDown';
import { useState } from 'react';

const EpListMobile = () => {
  // 기본설정
  const [selectedSeason, setSelectedSeason] = useState('시즌 1');
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const seasonNumber = selectedSeason.split(' ')[1];

  const handleToggle = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
  };

  return (
    <>
      <section>
        <Flex $flexDirection="column" $gap="10px" $padding="20px 0">
          <TabHeader>
            <H3>에피소드</H3>
            <SeasonDropdown selectedSeason={selectedSeason} onSelect={handleSeasonSelect} />
            <handleToggle isOn={isAutoPlay} onToggle={handleToggle} />
          </TabHeader>

          <EpItemsWrap>
            <FlexUl $flexDirection="column">
              {[...Array(4)].map((_, index) => (
                <EpItem key={index} number={seasonNumber} />
              ))}
            </FlexUl>
          </EpItemsWrap>
        </Flex>
      </section>
    </>
  );
};

export default EpListMobile;

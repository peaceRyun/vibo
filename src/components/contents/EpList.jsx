import { useState } from 'react';
import ToggleSwitch from '../../ui/toggle/Toggle';
import SeasonDropdown from './dropdown/SeasonDropDown';
import EpItem from './EpItem';
import { CloseButton, CRatingImg, EpItemsWrap, EpListBgi, Flex, FlexUl, H3, P20, P28 } from './style';
import { useEpisodeAnimation } from '../../hooks/useGsap';
import { IoClose } from 'react-icons/io5';

const EpList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState('');
  const episodeListRef = useEpisodeAnimation(!!selectedSeason);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setIsDropdownOpen(false);
  };

  const handleClose = () => {
    // 애니메이션이 완료된 후 상태를 리셋하기 위해 약간의 지연을 줍니다
    setSelectedSeason('');
    setIsDropdownOpen(false);
  };

  // 선택된 시즌의 번호만 추출 (예: '시즌 1' -> 1)
  const seasonNumber = selectedSeason ? selectedSeason.split(' ')[1] : '';

  return (
    <section>
      <Flex $flexDirection="column" $gap="30px">
        <Flex
          $justifyContent="space-between"
          $alignItems="center"
          $padding="60px 0 0"
          $borderTop="1px solid var(--secondary-300)"
        >
          <Flex $flexDirection="column" $position="relative">
            <H3>에피소드</H3>
            {selectedSeason && (
              <Flex $justifyContent="space-between" $alignItems="center" $gap="20px">
                <Flex $gap="10px" $justifyContent="space-between" $alignItems="center">
                  <P28>{selectedSeason}:</P28>
                  <CRatingImg src="/contentdetail/contentrate/전체관람가 관람등급 1.png" alt="전체관람가 관람등급" />
                  <CRatingImg src="/contentdetail/contentrate/내용정보-대사.png" alt="내용정보-대사" />
                  <CRatingImg src="/contentdetail/contentrate/내용정보-선정성.png" alt="내용정보-선정성" />
                  <CRatingImg src="/contentdetail/contentrate/내용정보-주제.png" alt="내용정보-주제" />
                </Flex>
                <Flex $justifyContent="space-between" $alignItems="center" $gap="15px">
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
          />
        </Flex>

        {selectedSeason && (
          <EpItemsWrap ref={episodeListRef}>
            <FlexUl $flexDirection="column">
              {[...Array(4)].map((_, index) => (
                <EpItem key={index} number={seasonNumber} />
              ))}
            </FlexUl>
            <EpListBgi
              src="/contentdetail/sample/EpList배경이미지.png"
              alt="에피배경이미지"
              $position="absolute"
              $top="0"
              $right="0"
              $zIndex="-1"
            />
            <CloseButton onClick={handleClose}>
              <IoClose color="var(--white)" size="40" />
            </CloseButton>
          </EpItemsWrap>
        )}
      </Flex>
    </section>
  );
};

export default EpList;

// import { useState } from 'react';
// // import ToggleSwitch from '../../ui/toggle/Toggle';
// import SeasonDropdown from './dropdown/SeasonDropDown';
// import EpItem from './EpItem';
// import { CloseButton, EpItemsWrap, EpListBgi, Flex, FlexUl, H3 } from './style';
// import { useEpisodeAnimation } from '../../hooks/useGsap';
// import { IoClose } from 'react-icons/io5';

// const EpList = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedSeason, setSelectedSeason] = useState('');
//   const episodeListRef = useEpisodeAnimation(!!selectedSeason);

//   const handleToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleSeasonSelect = (season) => {
//     setSelectedSeason(season);
//     setIsDropdownOpen(false);
//   };

//   const handleClose = () => {
//     setSelectedSeason('');
//     setIsDropdownOpen(false);
//   };

//   const seasonNumber = selectedSeason ? selectedSeason.split(' ')[1] : '';

//   return (
//     <section>
//       <Flex $flexDirection="column" $gap="20px" $padding="20px 0">
//         <Flex
//           $justifyContent="space-between"
//           $alignItems="center"
//           $padding="10px 0"
//           $borderTop="1px solid var(--secondary-300)"
//         >
//           <H3>에피소드</H3>
//           <SeasonDropdown
//             isOpen={isDropdownOpen}
//             onToggle={handleToggle}
//             selectedSeason={selectedSeason}
//             onSelect={handleSeasonSelect}
//           />
//         </Flex>

//         {selectedSeason && (
//           <EpItemsWrap ref={episodeListRef}>
//             <FlexUl $flexDirection="column">
//               {[...Array(4)].map((_, index) => (
//                 <EpItem key={index} number={seasonNumber} />
//               ))}
//             </FlexUl>
//             <EpListBgi
//               src="/contentdetail/sample/EpList배경이미지.png"
//               alt="에피배경이미지"
//               $position="absolute"
//               $top="0"
//               $right="0"
//               $zIndex="-1"
//             />

//             <CloseButton onClick={handleClose}>
//               <IoClose color="var(--white)" size="35" />
//             </CloseButton>
//           </EpItemsWrap>
//         )}
//       </Flex>
//     </section>
//   );
// };

// export default EpList;

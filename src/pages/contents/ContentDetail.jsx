// import { useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { getTVReviews, getTVseries } from '../../store/modules/getThunk';

// import PlayBanner from '../../components/contents/PlayBanner';
// // import ContDetail from '../../components/contents/ContDetail';
// import EpList from '../../components/contents/EpList';
// import ReList from '../../components/contents/ReList';
// import ReviewList from '../../components/contents/ReviewList';
// import ContMoreDetail from '../../components/contents/ContMoreDetail';

// import {
//   Flex,
//   ListWrapper,
//   PageWrapper,
//   PlayBannerWrapper,
//   TabButton,
//   TabContainer,
// } from '../../components/contents/style';
// import MobileReItem from '../../components/contents/MobileReItem';
// import EpListMobile from '../../components/contents/EpListMobile';
// import ContMobile from '../../components/contents/ContMobile';

// const ContentDetail = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   const [activeTab, setActiveTab] = useState('episodes');

//   useEffect(() => {
//     dispatch(getTVseries());
//     dispatch(getTVReviews(id));
//   }, [id]);

//   return (
//     <>
//       <PageWrapper>
//         <PlayBannerWrapper className="mobile-only">
//           <PlayBanner />
//         </PlayBannerWrapper>

//         <Flex $flexDirection="column" $position="relative" $gap="30px" $padding="0 50px">
//           <div className="pc-only">
//             <PlayBanner />
//           </div>
//           {/* <div>
//             <ContDetail />
//             <EpList />
//           </div> */}
//           {/* 📌 PC에서는 오른쪽, 모바일에서는 아래쪽으로 이동 */}
//           {/* <ListWrapper $flexDirection={isMobile ? 'column' : 'row'}>
//             <ReList />
//             <ReviewList />
//           </ListWrapper> */}
//           {/* <ListWrapper>
//             <ReList />
//             <ReviewList />
//           </ListWrapper> */}
//           {/* 테스트!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
//           <ListWrapper $flexDirection="row">
//             <EpList />
//             <ReList />
//           </ListWrapper>
//           <ContMobile />
//           <>
//             {/* ✅ 모바일: 탭 UI 추가 */}
//             <TabContainer>
//               <TabButton active={activeTab === 'episodes'} onClick={() => setActiveTab('episodes')}>
//                 에피소드
//               </TabButton>
//               <TabButton active={activeTab === 'similar'} onClick={() => setActiveTab('similar')}>
//                 비슷한 콘텐츠
//               </TabButton>
//             </TabContainer>

//             {/* ✅ 선택된 탭에 따라 다른 콘텐츠 렌더링 */}
//             {activeTab === 'episodes' ? <EpListMobile /> : <MobileReItem />}
//           </>

//           <ReviewList />
//           <ContMoreDetail />
//         </Flex>
//       </PageWrapper>
//       {/* {isMobile ? <MobileReItem /> : null} */}
//       {/* {isMobile ? <MobileReItem /> : <ReList />}
//           <ContMoreDetail />
//         </Flex>
//       </PageWrapper> */}
//     </>
//   );
// };

// export default ContentDetail;

import { useDispatch } from 'react-redux';
import EpList from '../../components/contents/EpList';
import PlayBanner from '../../components/contents/PlayBanner';
import ReList from '../../components/contents/ReList';
import { Flex, Inner, MobileInner, PcContainer, TabButton, TabContainer } from '../../components/contents/style';
import { useEffect, useState } from 'react';
import { getTVReviews, getTVseries } from '../../store/modules/getThunk';
import { useParams } from 'react-router';
import ReviewList from '../../components/contents/ReviewList';
import ContDetail from '../../components/contents/ContDetail';
import ContMoreDetail from '../../components/contents/ContMoreDetail';
import EpListMobile from '../../components/contents/EpListMobile';

import ContMobile from '../../components/contents/ContMobile';
import MobileReItem from '../../components/contents/MobileReitem';

// 콘텐츠 상세
const ContentDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState('episodes');
  // 모바일 테스트 적용
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일 기준을 768px로 설정
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기화

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch(getTVseries());
    dispatch(getTVReviews(id));
  }, [id]);
  return (
    <>
      {/* 피씨 */}
      {!isMobile && (
        <PcContainer>
          <Inner>
            <Flex $flexDirection="column" $position="relative" $gap="30px" $padding="0 50px">
              <PlayBanner />
              <div style={{ padding: '0 50px' }}>
                <ContDetail />
                <EpList />
                <ReList />
                <ReviewList />
                <ContMoreDetail />
              </div>
            </Flex>
          </Inner>
        </PcContainer>
      )}
      {/* 모바일버전 */}
      {isMobile && (
        <MobileInner>
          <div>
            <PlayBanner />
          </div>
          <ContMobile />
          <TabContainer>
            <TabButton active={activeTab === 'episodes'} onClick={() => setActiveTab('episodes')}>
              에피소드
            </TabButton>

            <TabButton active={activeTab === 'similar'} onClick={() => setActiveTab('similar')}>
              비슷한 콘텐츠
            </TabButton>
          </TabContainer>
          {/* 탭 활성화해야함 */}
          {activeTab === 'episodes' && <EpListMobile />}
          {activeTab === 'similar' && <MobileReItem />}
          <ReviewList />
          {/* 리뷰 내역 입력 후 리스트 보이게? */}
        </MobileInner>
      )}
      {/* // {activeTab === 'episodes' ? <EpListMobile /> : <MobileReItem />} */}
    </>
  );
};

export default ContentDetail;

// {activeTab === 'episodes' && <EpListMobile />}
// {activeTab === 'episodes' && <EpItemMobile />}
// {activeTab === 'similar' && <ContMobile />}

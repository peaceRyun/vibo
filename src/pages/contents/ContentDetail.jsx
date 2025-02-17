import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getTVReviews, getTVseries } from '../../store/modules/getThunk';

import PlayBanner from '../../components/contents/PlayBanner';
// import ContDetail from '../../components/contents/ContDetail';
import EpList from '../../components/contents/EpList';
import ReList from '../../components/contents/ReList';
import ReviewList from '../../components/contents/ReviewList';
import ContMoreDetail from '../../components/contents/ContMoreDetail';

import {
    Flex,
    ListWrapper,
    PageWrapper,
    PlayBannerWrapper,
    TabButton,
    TabContainer,
} from '../../components/contents/style';
import MobileReItem from '../../components/contents/MobileReItem';
import EpListMobile from '../../components/contents/EpListMobile';

const ContentDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [activeTab, setActiveTab] = useState('episodes');

    useEffect(() => {
        dispatch(getTVseries());
        dispatch(getTVReviews(id));
    }, [id]);

    return (
        <>
            <PageWrapper>
                <PlayBannerWrapper className='mobile-only'>
                    <PlayBanner />
                </PlayBannerWrapper>

                <Flex $flexDirection='column' $position='relative' $gap='30px' $padding='0 50px'>
                    <div className='pc-only'>
                        <PlayBanner />
                    </div>
                    {/* <div>
            <ContDetail />
            <EpList />
          </div> */}
                    {/* 📌 PC에서는 오른쪽, 모바일에서는 아래쪽으로 이동 */}
                    {/* <ListWrapper $flexDirection={isMobile ? 'column' : 'row'}>
            <ReList />
            <ReviewList />
          </ListWrapper> */}
                    {/* <ListWrapper>
            <ReList />
            <ReviewList />
          </ListWrapper> */}
                    {/* 테스트!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                    <ListWrapper $flexDirection='row'>
                        <EpList />
                        <ReList />
                    </ListWrapper>
                    <>
                        {/* ✅ 모바일: 탭 UI 추가 */}
                        <TabContainer>
                            <TabButton active={activeTab === 'episodes'} onClick={() => setActiveTab('episodes')}>
                                에피소드
                            </TabButton>
                            <TabButton active={activeTab === 'similar'} onClick={() => setActiveTab('similar')}>
                                비슷한 콘텐츠
                            </TabButton>
                        </TabContainer>

                        {/* ✅ 선택된 탭에 따라 다른 콘텐츠 렌더링 */}
                        {activeTab === 'episodes' ? <EpListMobile /> : <MobileReItem />}
                    </>
                    <ReviewList />
                    <ContMoreDetail />
                </Flex>
            </PageWrapper>
            {/* {isMobile ? <MobileReItem /> : null} */}
            {/* {isMobile ? <MobileReItem /> : <ReList />}
          <ContMoreDetail />
        </Flex>
      </PageWrapper> */}
        </>
    );
};

export default ContentDetail;

// import { useDispatch } from 'react-redux';
// import EpList from '../../components/contents/EpList';
// import PlayBanner from '../../components/contents/PlayBanner';
// import ReList from '../../components/contents/ReList';
// import { Flex, Inner } from '../../components/contents/style';
// import { useEffect } from 'react';
// import { getTVReviews, getTVseries } from '../../store/modules/getThunk';
// import { useParams } from 'react-router';
// import ReviewList from '../../components/contents/ReviewList';
// import ContDetail from '../../components/contents/ContDetail';
// import ContMoreDetail from '../../components/contents/ContMoreDetail';
// import { ContentLayout, LeftContent, PageWrapper, PlayBannerWrapper, RightContent } from './style';

// // 콘텐츠 상세
// const ContentDetail = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   useEffect(() => {
//     dispatch(getTVseries());
//     dispatch(getTVReviews(id));
//   }, [id]);
//   return (
//     <>
//       <Inner>
//         <Flex $flexDirection="column" $position="relative" $gap="30px" $padding="0 50px">
//           <PlayBanner />
//           <div style={{ padding: '0 50px' }}>
//             <ContDetail />
//             <EpList />
//             <ReList />
//             <ReviewList />
//             <ContMoreDetail />
//           </div>
//         </Flex>
//       </Inner>
//     </>
//   );
// };

// export default ContentDetail;

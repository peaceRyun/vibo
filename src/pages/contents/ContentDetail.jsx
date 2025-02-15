import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { getTVReviews, getTVseries } from '../../store/modules/getThunk';

import PlayBanner from '../../components/contents/PlayBanner';
import ContDetail from '../../components/contents/ContDetail';
import EpList from '../../components/contents/EpList';
import ReList from '../../components/contents/ReList';
import ReviewList from '../../components/contents/ReviewList';
import ContMoreDetail from '../../components/contents/ContMoreDetail';

import { Flex, ListWrapper, PageWrapper, PlayBannerWrapper } from '../../components/contents/style';

const ContentDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTVseries());
    dispatch(getTVReviews(id));
  }, [id]);

  return (
    <>
      <PageWrapper>
        {/* 📌 모바일에서 PlayBanner를 최상단으로 이동 */}
        <PlayBannerWrapper className="mobile-only">
          <PlayBanner />
        </PlayBannerWrapper>

        <Flex
          $flexDirection="column"
          $position="relative"
          $gap="30px"
          $padding="0 50px"
          $mobilePadding="0 16px"
          $mobileGap="20px"
        >
          {/* 📌 PC에서만 PlayBanner 표시 */}
          <div className="pc-only">
            <PlayBanner />
          </div>

          <div>
            <ContDetail />
            <EpList />
          </div>

          {/* 📌 PC에서는 오른쪽, 모바일에서는 아래쪽으로 이동 */}
          <ListWrapper>
            <ReList />
            <ReviewList />
          </ListWrapper>

          <ContMoreDetail />
        </Flex>
      </PageWrapper>
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

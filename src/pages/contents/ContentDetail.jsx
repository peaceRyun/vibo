import { useDispatch } from 'react-redux';
import EpList from '../../components/contents/EpList';
import PlayBanner from '../../components/contents/PlayBanner';
import ReList from '../../components/contents/ReList';
import { Flex, Inner } from '../../components/contents/style';
import { useEffect } from 'react';
import { getTVReviews, getTVseries } from '../../store/modules/getThunk';
import { useParams } from 'react-router';
import ReviewList from '../../components/contents/ReviewList';
import ContDetail from '../../components/contents/ContDetail';
import ContMoreDetail from '../../components/contents/ContMoreDetail';

// 콘텐츠 상세
const ContentDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getTVseries());
        dispatch(getTVReviews(id));
    }, [id]);
    return (
        <>
            <Inner>
                <Flex $flexDirection='column' $position='relative' $gap='30px' $padding='0 50px'>
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
        </>
    );
};

export default ContentDetail;

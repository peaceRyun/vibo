import { useDispatch } from 'react-redux';
import EpList from '../../components/contents/EpList';
import PlayBanner from '../../components/contents/PlayBanner';
import ReList from '../../components/contents/ReList';
import { Flex, Inner, MobileInner, PcContainer, TabButton, TabContainer } from '../../components/contents/style';
import { useEffect, useState } from 'react';
import { getTVseries } from '../../store/modules/getThunk';
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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // 모바일 기준을 1024px로 설정
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 초기화

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        dispatch(getTVseries());
    }, []);
    return (
        <>
            {/* 피씨 */}
            {!isMobile && (
                <PcContainer>
                    <Inner>
                        <Flex $flexDirection='column' $position='relative' $gap='30px' $padding='0 50px'>
                            <PlayBanner />
                            <div style={{ padding: '0 50px' }}>
                                <ContDetail />
                                <EpList />
                                <ReList />
                                <ReviewList />
                                <div id='cont-more-detail'>
                                    <ContMoreDetail />
                                </div>
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

import { useDispatch, useSelector } from 'react-redux';
import EpList from '../../components/contents/EpList';
import PlayBanner from '../../components/contents/PlayBanner';
import ReList from '../../components/contents/ReList';
import { Flex, Inner, MobileInner, PcContainer, TabButton, TabContainer } from '../../components/contents/style';
import { useEffect, useState } from 'react';
import {
    getMovieContentRating,
    getTVContentRating,
    getTVDetail,
    getTVseries,
    getMovieRecommendations,
    getTVSeasons,
    getTVSeasonEpisodes,
} from '../../store/modules/getThunk';
import ReviewList from '../../components/contents/ReviewList';
import ContDetail from '../../components/contents/ContDetail';
import ContMoreDetail from '../../components/contents/ContMoreDetail';
import EpListMobile from '../../components/contents/EpListMobile';
import ContMobile from '../../components/contents/ContMobile';
import MobileReItem from '../../components/contents/MobileReitem';
import { useParams } from 'react-router';

const ContentDetail = ({ contentType }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('episodes');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const isSeries = contentType === 'series';

    const {
        contentDetail,
        contentRating,
        TVRecommendData,
        recommendLoading,
        tvSeasons,
        episodes,
        seasonsLoading,
        episodesLoading,
    } = useSelector((state) => state.tvSeriesR);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (id) {
            if (contentType === 'series') {
                dispatch(getTVseries());
                dispatch(getTVDetail(id));
                dispatch(getTVContentRating(id));
                dispatch(getTVSeasons(id)); // 시즌 정보 가져오기
            } else if (contentType === 'movie') {
                // dispatch(getMovieDetail(id));
                dispatch(getMovieContentRating(id));
            }

            // 추천 데이터 가져오기 (공통)
            dispatch(getMovieRecommendations(id));
        }
    }, [dispatch, id, contentType]);

    // 시즌 선택 시 에피소드 가져오기
    const handleSeasonSelect = (seasonNumber) => {
        if (id && seasonNumber) {
            dispatch(getTVSeasonEpisodes({ tvId: id, seasonNumber }));
        }
    };

    const renderEpisodeTab = () => {
        if (!isSeries) return null;

        return (
            <TabButton active={activeTab === 'episodes'} onClick={() => setActiveTab('episodes')}>
                에피소드
            </TabButton>
        );
    };

    return (
        <>
            {!isMobile && (
                <PcContainer>
                    <Inner>
                        <Flex $flexDirection='column' $position='relative' $gap='30px' $padding='0 50px'>
                            <PlayBanner contentDetail={contentDetail} />
                            <div style={{ padding: '0 50px' }}>
                                <ContDetail contentDetail={contentDetail} contentType={contentType} />
                                {isSeries && (
                                    <EpList
                                        seasons={tvSeasons || []}
                                        episodes={episodes || []}
                                        contentRating={contentRating}
                                        seasonsLoading={seasonsLoading}
                                        episodesLoading={episodesLoading}
                                        onSeasonSelect={handleSeasonSelect}
                                        posterPath={contentDetail?.poster_path} // poster_path 전달
                                    />
                                )}
                                <ReList
                                    TVRecommendData={TVRecommendData}
                                    loading={recommendLoading}
                                    contentType={contentType}
                                />
                                <ReviewList />
                                <div id='cont-more-detail'>
                                    <ContMoreDetail
                                        contentDetail={contentDetail}
                                        contentType={contentType}
                                        contentRating={contentRating}
                                    />
                                </div>
                            </div>
                        </Flex>
                    </Inner>
                </PcContainer>
            )}

            {isMobile && (
                <MobileInner>
                    <div>
                        <PlayBanner contentDetail={contentDetail} />
                    </div>
                    <ContMobile contentDetail={contentDetail} />
                    <TabContainer>
                        {renderEpisodeTab()}
                        <TabButton active={activeTab === 'similar'} onClick={() => setActiveTab('similar')}>
                            비슷한 콘텐츠
                        </TabButton>
                    </TabContainer>
                    {isSeries && activeTab === 'episodes' && (
                        <EpListMobile
                            seasons={tvSeasons || []}
                            episodes={episodes || []}
                            contentRating={contentRating}
                            seasonsLoading={seasonsLoading}
                            episodesLoading={episodesLoading}
                            onSeasonSelect={handleSeasonSelect}
                        />
                    )}
                    {activeTab === 'similar' && (
                        <MobileReItem TVRecommendData={TVRecommendData} loading={recommendLoading} />
                    )}
                    <ReviewList />
                </MobileInner>
            )}
        </>
    );
};

export default ContentDetail;

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
    getMovieDetail,
    getMovie,
    getTVRecommendations,
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

    // 영화일 때 가져오기
    const { movieDetail, movieRecommendations, recommendLoading: movieLoading } = useSelector((state) => state.movieR);

    // TV 시리즈일 때 가져오기 - TVDetail을 contentDetail로 변경
    const {
        TVDetail,
        contentRating: tvContentRating,
        TVRecommendData,
        recommendLoading: tvLoading,
        tvSeasons,
        episodes,
        seasonsLoading,
        episodesLoading,
    } = useSelector((state) => state.tvSeriesR);

    // 컨텐츠 타입에 따라 적절한 데이터 선택
    const contentDetail = isSeries ? TVDetail : movieDetail;
    const contentRating = isSeries ? tvContentRating : tvContentRating; // 영화 레이팅으로 변경 필요
    const recommendData = isSeries ? TVRecommendData : movieRecommendations;
    const recommendLoading = isSeries ? tvLoading : movieLoading;

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
                dispatch(getTVSeasons(id));
                dispatch(getTVRecommendations(id)); // TV 추천 사용
            } else if (contentType === 'movie') {
                dispatch(getMovie());
                dispatch(getMovieDetail(id));
                dispatch(getMovieContentRating(id));
                dispatch(getMovieRecommendations(id)); // 영화 추천 사용
            }
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
                            <PlayBanner contentDetail={contentDetail} contentType={contentType} />
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
                                    recommendData={recommendData}
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
                        <PlayBanner contentDetail={contentDetail} contentType={contentType} />
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
                        <MobileReItem recommendData={recommendData} loading={recommendLoading} />
                    )}
                    <ReviewList />
                </MobileInner>
            )}
        </>
    );
};

export default ContentDetail;

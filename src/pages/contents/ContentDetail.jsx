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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const isSeries = contentType === 'series';
    const [activeTab, setActiveTab] = useState(isSeries ? 'episodes' : 'similar');

    // Redux 상태 가져오기
    const {
        movieDetail,
        movieRecommendations,
        recommendLoading: movieLoading,
        contentRating: movieContentRating,
    } = useSelector((state) => state.movieR);
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
    const contentRating = isSeries ? tvContentRating : movieContentRating;
    const recommendData = isSeries ? TVRecommendData : movieRecommendations;
    const recommendLoading = isSeries ? tvLoading : movieLoading;

    console.log(contentDetail);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isSeries) {
            setActiveTab('similar');
        }
    }, [isSeries]);

    useEffect(() => {
        if (id) {
            if (contentType === 'series') {
                dispatch(getTVseries());
                dispatch(getTVDetail(id));
                dispatch(getTVContentRating(id));
                dispatch(getTVSeasons(id));
                dispatch(getTVRecommendations(id));
            } else if (contentType === 'movie') {
                dispatch(getMovie());
                dispatch(getMovieDetail(id));
                dispatch(getMovieContentRating(id));
                dispatch(getMovieRecommendations(id));
            }
        }
    }, [dispatch, id, contentType]);

    const handleSeasonSelect = (seasonNumber) => {
        if (id && seasonNumber) {
            dispatch(getTVSeasonEpisodes({ tvId: id, seasonNumber }));
        }
    };

    return (
        <>
            {!isMobile && (
                <PcContainer>
                    <Inner>
                        <Flex $flexDirection='column' $position='relative' $gap='30px' $padding='0 50px'>
                            <PlayBanner contentDetail={contentDetail} contentType={contentType} />
                            <div style={{ padding: '0 50px' }}>
                                <ContDetail
                                    contentDetail={contentDetail}
                                    contentType={contentType}
                                    contentRating={contentRating}
                                />
                                {isSeries && (
                                    <EpList
                                        seasons={tvSeasons || []}
                                        episodes={episodes || []}
                                        contentRating={contentRating}
                                        seasonsLoading={seasonsLoading}
                                        episodesLoading={episodesLoading}
                                        onSeasonSelect={handleSeasonSelect}
                                        posterPath={contentDetail?.poster_path}
                                    />
                                )}
                                <ReList
                                    recommendData={recommendData}
                                    loading={recommendLoading}
                                    contentType={contentType}
                                    contentRating={contentRating}
                                />
                                <ReviewList contentDetail={contentDetail} />
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
                        {isSeries && (
                            <TabButton $active={activeTab === 'episodes'} onClick={() => setActiveTab('episodes')}>
                                에피소드
                            </TabButton>
                        )}
                        <TabButton $active={activeTab === 'similar'} onClick={() => setActiveTab('similar')}>
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
                        <MobileReItem
                            recommendData={recommendData}
                            loading={recommendLoading}
                            contentType={contentType}
                        />
                    )}
                    {/* ✅ 모바일에도 리뷰 추가 */}
                    <ReviewList contentDetail={contentDetail} />
                </MobileInner>
            )}
        </>
    );
};

export default ContentDetail;

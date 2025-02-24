import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../ui/button/Button';
import { Flex, GradientLayer, H2, PBuiWrap, PBWrap, VideoWrapper } from './style';
import LiLikeButton from '../../ui/lordicon/LiLikeButton';
import { getTVDetail, getTVVideos, getMovieDetail, getMovieVideos } from '../../store/modules/getThunk';
import { contPlayerActions } from '../../store/modules/contPlayerSlice';
import { addWatchHistory } from '../../store/modules/watchSlice'; // ✅ 시청내역 추가 기능 가져오기

const PlayBanner = ({ contentDetail, contentType }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const iframeRef = useRef(null);
    const isSeries = contentType === 'series';

    const { videoId } = useSelector((state) => state.playerR);

    useEffect(() => {
        if (id) {
            if (isSeries) {
                dispatch(getTVDetail(id));
                dispatch(getTVVideos(id));
            } else {
                dispatch(getMovieDetail(id));
                dispatch(getMovieVideos(id));
            }
        }
    }, [dispatch, id, isSeries]);

    const handlePlayClick = () => {
        if (contentDetail) {
            const watchData = {
                id: contentDetail.id,
                title: contentDetail.name || contentDetail.title || '제목 없음',
                poster: contentDetail.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${contentDetail.poster_path}`
                    : 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/sample/commonSample.png',
                watchedAt: new Date().toISOString(),
                type: contentType,
            };

            console.log('📌 시청 기록 추가됨:', watchData);
            dispatch(addWatchHistory(watchData));
        }

        dispatch(contPlayerActions.setVideoId(videoId));
        dispatch(contPlayerActions.setPlaying(true));
        navigate('/player');
    };

    const title = contentDetail?.name || contentDetail?.title || '제목 로딩 중...';

    return (
        <section>
            <PBWrap>
                <VideoWrapper>
                    <iframe
                        ref={iframeRef}
                        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&origin=${window.location.origin}&autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                        title="YouTube video player"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none',
                            border: 'none',
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                    <GradientLayer />
                </VideoWrapper>
                <PBuiWrap>
                    <Flex $gap="30px" $flexDirection="column" $position="relative">
                        <H2>{title}</H2>
                        <Flex $gap="26px" $alignItems="center">
                            <Button play onClick={handlePlayClick} color="var(--secondary-400)" fontSize="20px">
                                재생
                            </Button>
                            <button>
                                {contentDetail ? (
                                    <LiLikeButton content={contentDetail} width="50px" height="50px" />
                                ) : (
                                    <p>❌ 콘텐츠 정보 없음</p>
                                )}
                            </button>
                        </Flex>
                    </Flex>
                </PBuiWrap>
            </PBWrap>
        </section>
    );
};

export default PlayBanner;

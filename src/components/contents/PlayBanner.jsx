import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../ui/button/Button';
import { Flex, GradientLayer, H2, PBuiWrap, PBWrap, VideoWrapper } from './style';
import LiLikeButton from '../../ui/lordicon/LiLikeButton';
import { getTVDetail, getTVVideos } from '../../store/modules/getThunk';

const PlayBanner = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const iframeRef = useRef(null);

    // TVDetail 데이터와 player 상태 가져오기
    const tvDetail = useSelector((state) => state.tvDetailR.data);
    const videoId = useSelector((state) => state.playerR.videoId);

    // TV 시리즈 정보와 비디오 정보 가져오기
    useEffect(() => {
        if (id) {
            dispatch(getTVDetail(id));
            dispatch(getTVVideos(id));
        }
    }, [dispatch, id]);

    const handlePlayClick = () => {
        navigate('/player');
    };

    return (
        <section>
            <PBWrap>
                <VideoWrapper>
                    <iframe
                        ref={iframeRef}
                        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&origin=${window.location.origin}&autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                        title='YouTube video player'
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none',
                            border: 'none',
                        }}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    />
                    <GradientLayer />
                </VideoWrapper>
                <PBuiWrap>
                    <Flex $gap='30px' $flexDirection='column' $position='relative'>
                        <H2>{tvDetail?.name || '제목 로딩 중...'}</H2>
                        <Flex $gap='26px' $alignItems='center'>
                            <Button play onClick={handlePlayClick} color='var(--secondary-400)' fontSize='20px'>
                                재생
                            </Button>
                            <button>
                                <LiLikeButton width='50px' height='50px' />
                            </button>
                        </Flex>
                    </Flex>
                </PBuiWrap>
            </PBWrap>
        </section>
    );
};

export default PlayBanner;

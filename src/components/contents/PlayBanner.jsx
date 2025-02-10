import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/button/Button';
import { BarDemo, Flex, GradientLayer, H2, LikeImg, PBuiWrap, PBWrap, VideoWrapper } from './style';
import { setPlaying, setProgress, setDuration, setCurrentTime } from '../../store/modules/playerSlice';

const PlayBanner = () => {
    const dispatch = useDispatch();
    const playerState = useSelector((state) => state.playerR) || {
        isPlaying: true,
        progress: 0,
        videoId: 'MkcqlqCfYcg',
        currentTime: 0,
        duration: 0,
    };
    const { isPlaying, progress, videoId } = playerState;

    const playerRef = useRef(null);
    const progressInterval = useRef(null);

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                videoId: videoId,
                width: '100%',
                height: '100%',
                host: 'https://www.youtube-nocookie.com',
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    disablekb: 1,
                    enablejsapi: 1,
                    fs: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0,
                    showinfo: 0,
                    loop: 1,
                    playlist: videoId,
                    origin: window.location.origin,
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange,
                },
            });
        };

        return () => {
            if (progressInterval.current) {
                clearInterval(progressInterval.current);
            }
        };
    }, [videoId]);

    const onPlayerReady = () => {
        startProgressTracking();
    };

    const onPlayerStateChange = (event) => {
        dispatch(setPlaying(event.data === window.YT.PlayerState.PLAYING));
    };

    const startProgressTracking = () => {
        progressInterval.current = setInterval(() => {
            if (playerRef.current?.getCurrentTime && playerRef.current?.getDuration) {
                const currentTime = playerRef.current.getCurrentTime();
                const duration = playerRef.current.getDuration();
                const progressPercentage = (currentTime / duration) * 100;

                dispatch(setCurrentTime(currentTime));
                dispatch(setDuration(duration));
                dispatch(setProgress(progressPercentage));
            }
        }, 100);
    };

    const togglePlay = () => {
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pauseVideo();
            } else {
                playerRef.current.playVideo();
            }
            dispatch(setPlaying(!isPlaying));
        }
    };

    const CustomProgressBar = () => (
        <div
            className='w-full h-1 relative cursor-pointer'
            style={{ backgroundColor: '#CCEBE8' }}
            onClick={(e) => {
                if (playerRef.current) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickPosition = (e.clientX - rect.left) / rect.width;
                    const newTime = clickPosition * playerRef.current.getDuration();
                    playerRef.current.seekTo(newTime);
                }
            }}
        >
            <BarDemo
                className='absolute top-0 left-0 h-full transition-all duration-300'
                style={{
                    width: `${progress}%`,
                    backgroundColor: '#66C4BA',
                    transition: 'width 0.1s linear',
                }}
            />
        </div>
    );

    return (
        <section>
            <PBWrap>
                <VideoWrapper>
                    <div
                        id='youtube-player'
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none',
                        }}
                    />
                    <GradientLayer />
                </VideoWrapper>
                <PBuiWrap>
                    <Flex $gap='30px' $flexDirection='column' $position='relative'>
                        <H2>옥씨부인전</H2>
                        <CustomProgressBar />
                        <Flex $gap='26px' $alignItems='center'>
                            <Button play onClick={togglePlay} color='var(--secondary-400)' fontSize='20px'>
                                {isPlaying ? '일시정지' : '재생'}
                            </Button>
                            <button>
                                <LikeImg src='public/contentdetail/ui/heart.png' alt='likeActive' />
                            </button>
                        </Flex>
                    </Flex>
                </PBuiWrap>
            </PBWrap>
        </section>
    );
};

export default PlayBanner;

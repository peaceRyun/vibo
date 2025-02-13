import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/button/Button';
import { Flex, GradientLayer, H2, LikeImg, PBuiWrap, PBWrap, VideoWrapper } from './style';

import LiLikeButton from '../../ui/lordicon/LiLikeButton';
import { setPlaying } from '../../store/modules/playerSlice';

const PlayBanner = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const playerState = useSelector((state) => state.playerR) || {
        isPlaying: true,
        videoId: 'MkcqlqCfYcg',
    };
    const { isPlaying, videoId } = playerState;
    const [duration, setDuration] = useState(0);

    const playerRef = useRef(null);
    const timeUpdateInterval = useRef(null);

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
            if (timeUpdateInterval.current) {
                clearInterval(timeUpdateInterval.current);
            }
        };
    }, [videoId]);

    const onPlayerReady = (event) => {
        setDuration(event.target.getDuration());
    };

    const onPlayerStateChange = (event) => {
        dispatch(setPlaying(event.data === window.YT.PlayerState.PLAYING));
    };

    const handlePlayClick = () => {
        navigate('/player');
    };

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

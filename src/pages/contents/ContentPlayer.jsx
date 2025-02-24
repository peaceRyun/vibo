import { useRef, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    PlayerContainer,
    VideoWrapper,
    ErrorMessage,
    IframeContainer,
    VideoIframe,
    ControlsOverlay,
    ProgressBarContainer,
    ProgressBar,
    ProgressHandle,
    ControlsWrapper,
    ControlsGroup,
    ControlButton,
} from './style';
import { contPlayerActions } from '../../store/modules/contPlayerSlice';
import { FaPause, FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6';
import { IoClose, IoPlayOutline } from 'react-icons/io5';
import { FiMaximize, FiMinimize } from 'react-icons/fi';
import { useNavigate } from 'react-router';

const ContentPlayer = () => {
    const dispatch = useDispatch();
    const isPlaying = useSelector((state) => state.contPlayerR.isPlaying);
    const isMuted = useSelector((state) => state.contPlayerR.isMuted);
    const isFullscreen = useSelector((state) => state.contPlayerR.isFullscreen);
    const progress = useSelector((state) => state.contPlayerR.progress);
    const isError = useSelector((state) => state.contPlayerR.isError);
    const videoId = useSelector((state) => state.contPlayerR.videoId);
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const iframeRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    // 컴포넌트 마운트 시 isPlaying 상태를 true로 설정
    useEffect(() => {
        dispatch(contPlayerActions.setPlaying(true));
    }, [dispatch]);

    // 자동 재생 설정
    useEffect(() => {
        const autoPlayVideo = () => {
            if (iframeRef.current) {
                iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            }
        };

        // iframe이 로드된 후 실행
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.addEventListener('load', autoPlayVideo);
            return () => iframe.removeEventListener('load', autoPlayVideo);
        }
    }, []);

    useEffect(() => {
        // 상태 변경 시 재생 상태 적용
        if (iframeRef.current) {
            if (isPlaying) {
                iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            } else {
                iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        let progressInterval;
        if (isPlaying) {
            progressInterval = setInterval(() => {
                iframeRef.current?.contentWindow.postMessage(
                    '{"event":"command","func":"getCurrentTime","args":""}',
                    '*'
                );
                iframeRef.current?.contentWindow.postMessage('{"event":"command","func":"getDuration","args":""}', '*');
            }, 1000);
        }

        const handleMessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.info && data.info.currentTime && data.info.duration) {
                    const progressPercent = (data.info.currentTime / data.info.duration) * 100;
                    dispatch(contPlayerActions.setProgress(progressPercent));
                }
            } catch (error) {
                // JSON 파싱 에러 무시
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            if (progressInterval) {
                clearInterval(progressInterval);
            }
            window.removeEventListener('message', handleMessage);
        };
    }, [isPlaying, dispatch]);

    const handlePlayToggle = () => {
        if (iframeRef.current) {
            try {
                if (isPlaying) {
                    iframeRef.current.contentWindow.postMessage(
                        '{"event":"command","func":"pauseVideo","args":""}',
                        '*'
                    );
                } else {
                    iframeRef.current.contentWindow.postMessage(
                        '{"event":"command","func":"playVideo","args":""}',
                        '*'
                    );
                }
                dispatch(contPlayerActions.togglePlay());
            } catch (error) {
                console.error('Error toggling play state:', error);
            }
        }
    };

    const handleMuteToggle = () => {
        if (iframeRef.current) {
            try {
                if (isMuted) {
                    iframeRef.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
                } else {
                    iframeRef.current.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
                }
                dispatch(contPlayerActions.toggleMute());
            } catch (error) {
                console.error('Error toggling mute state:', error);
            }
        }
    };

    const handleFullscreenToggle = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            dispatch(contPlayerActions.setFullscreen(true));
        } else {
            document.exitFullscreen();
            dispatch(contPlayerActions.setFullscreen(false));
        }
    };

    const handleProgressBarClick = (e) => {
        if (isDragging) return;

        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = (e.clientX - rect.left) / rect.width;

        // 진행률을 0-100 사이의 값으로 변환
        const newProgress = Math.max(0, Math.min(100, clickPosition * 100));

        dispatch(contPlayerActions.setProgress(newProgress));

        if (iframeRef.current) {
            iframeRef.current.contentWindow.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: 'seekTo',
                    args: [newProgress, true],
                }),
                '*'
            );
        }
    };

    // 드래그 시작
    const handleDragStart = (e) => {
        e.preventDefault();
        setIsDragging(true);

        // 마우스 이동 및 마우스 업 이벤트 리스너 추가
        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
    };

    // 드래그 중
    const handleDragMove = useCallback(
        (e) => {
            if (!isDragging || !iframeRef.current) return;

            const progressBar = document.querySelector('.progress-bar-container');
            const rect = progressBar.getBoundingClientRect();
            let position = (e.clientX - rect.left) / rect.width;

            // 0-1 사이의 값으로 제한
            position = Math.max(0, Math.min(1, position));
            const newProgress = position * 100;

            dispatch(contPlayerActions.setProgress(newProgress));

            iframeRef.current.contentWindow.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: 'seekTo',
                    args: [newProgress, true],
                }),
                '*'
            );
        },
        [isDragging, dispatch]
    );

    // 드래그 종료
    const handleDragEnd = useCallback(() => {
        setIsDragging(false);

        // 이벤트 리스너 제거
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
    }, [handleDragMove]);

    const onBack = () => {
        navigate(-1);
    };

    return (
        <>
            <button
                onClick={onBack}
                style={{ position: 'absolute', top: 0, right: 0, padding: '70px 100px', zIndex: '1' }}
            >
                <IoClose size={50} color='white' />
            </button>
            <PlayerContainer ref={containerRef}>
                <VideoWrapper>
                    {isError ? (
                        <ErrorMessage>동영상을 불러올 수 없습니다.</ErrorMessage>
                    ) : (
                        <IframeContainer>
                            <VideoIframe
                                ref={iframeRef}
                                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&origin=${window.location.origin}&playerapiid=ytplayer&autoplay=1&mute=0&loop=0&playlist=${videoId}`}
                                title='YouTube video player'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                                style={{
                                    pointerEvents: 'none', // 유튜브 UI와의 상호작용 차단
                                }}
                            />
                        </IframeContainer>
                    )}

                    <ControlsOverlay>
                        <ProgressBarContainer className='progress-bar-container' onClick={handleProgressBarClick}>
                            <ProgressBar $progress={progress}>
                                <ProgressHandle onMouseDown={handleDragStart} />
                            </ProgressBar>
                        </ProgressBarContainer>

                        <ControlsWrapper>
                            <ControlsGroup>
                                <ControlButton onClick={handlePlayToggle}>
                                    {isPlaying ? <FaPause /> : <IoPlayOutline />}
                                </ControlButton>

                                <ControlButton onClick={handleMuteToggle}>
                                    {isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}
                                </ControlButton>
                            </ControlsGroup>

                            <ControlButton onClick={handleFullscreenToggle}>
                                {isFullscreen ? <FiMinimize /> : <FiMaximize />}
                            </ControlButton>
                        </ControlsWrapper>
                    </ControlsOverlay>
                </VideoWrapper>
            </PlayerContainer>
        </>
    );
};

export default ContentPlayer;

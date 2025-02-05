import Button from '../../ui/button/Button';
import { BarDemo, Flex, H2, LikeImg, PBuiWrap, PBWrap, StyledIframe, VideoWrapper } from './style';

const PlayBanner = () => {
    const videoId = 'MkcqlqCfYcg';
    // 기본 URL에 모든 파라미터를 직접 하드코딩
    const embedUrl = `https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&modestbranding=1&autoplay=1&mute=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&enablejsapi=0&cc_load_policy=0&color=white`;

    return (
        <>
            <section>
                <PBWrap>
                    <VideoWrapper>
                        <StyledIframe
                            src={embedUrl}
                            title='옥씨부인전'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowFullScreen
                            referrerPolicy='strict-origin-when-cross-origin'
                        />
                    </VideoWrapper>
                    <PBuiWrap>
                        <Flex $gap='30px' $flexDirection='column' $position='relative'>
                            <H2>옥씨부인전</H2>
                            <BarDemo />
                            <Flex $gap='26px' $alignItems='center'>
                                <Button play>재생</Button>
                                <button>
                                    <LikeImg src='public/contentdetail/ui/heart.png' alt='likeActive' />
                                </button>
                            </Flex>
                        </Flex>
                    </PBuiWrap>
                </PBWrap>
            </section>
        </>
    );
};

export default PlayBanner;

import Button from '../../ui/button/Button';
import { BarDemo, Flex, GradientLayer, H2, LikeImg, PBuiWrap, PBWrap, StyledIframe, VideoWrapper } from './style';

const PlayBanner = () => {
    const videoId = 'MkcqlqCfYcg';
    const opts = [
        'autoplay=1',
        'mute=1',
        'modestbranding=1',
        'controls=0',
        'loop=1',
        'rel=0',
        'playlist=' + videoId,
    ].join('&');

    return (
        <>
            <section>
                <PBWrap>
                    <VideoWrapper>
                        <StyledIframe
                            width='100%'
                            height='950px'
                            src={`https://www.youtube.com/embed/${videoId}?${opts}`}
                            title="애니메이션 '괴수 8호' 제1기 총집편"
                            frameBorder='0'
                            allow='autoplay; encrypted-media;'
                            allowFullScreen
                            style={{ pointerEvents: 'none' }}
                        />
                        <GradientLayer />
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

import Button from '../../ui/button/Button';
import { BarDemo, Flex, FlexCol, H2, LikeImg, PBuiWrap, PBWrap } from './style';

const PlayBanner = () => {
    return (
        <>
            <section>
                <PBWrap>
                    <PBuiWrap>
                        <FlexCol $gap='30px'>
                            <H2>옥씨부인전</H2>
                            <BarDemo />
                            <Flex $gap='26px' $alignItems='center'>
                                <Button play>재생</Button>
                                <button>
                                    <LikeImg src='public/contentdetail/ui/heart.png' alt='likeActive' />
                                </button>
                            </Flex>
                        </FlexCol>
                    </PBuiWrap>
                </PBWrap>
            </section>
        </>
    );
};

export default PlayBanner;

import Button from '../../ui/button/Button';
import { BarDemo, FlexCol, FlexNone, H2, LikeImg, PBuiWrap, PBWrap } from './style';

const PlayBanner = () => {
    return (
        <>
            <section>
                <PBWrap>
                    <PBuiWrap>
                        <FlexCol gap='30px'>
                            <H2>옥씨부인전</H2>
                            <BarDemo />
                            <FlexNone gap='26px'>
                                <Button play>재생</Button>
                                <button>
                                    <LikeImg src='public/contentdetail/ui/heart.png' alt='likeActive' />
                                </button>
                            </FlexNone>
                        </FlexCol>
                    </PBuiWrap>
                </PBWrap>
            </section>
        </>
    );
};

export default PlayBanner;

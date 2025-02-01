import { BarDemo, FlexCol, FlexNone, H2, PBuiWrap, PBWrap } from './style';

const PlayBanner = () => {
    return (
        <>
            <PBWrap>
                <PBuiWrap>
                    <FlexCol>
                        <H2>옥씨부인전</H2>
                        <BarDemo />
                        <FlexNone></FlexNone>
                    </FlexCol>
                </PBuiWrap>
            </PBWrap>
        </>
    );
};

export default PlayBanner;

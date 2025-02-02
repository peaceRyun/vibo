import ToggleSwitch from '../../ui/toggle/Toggle';
import EpItem from './EpItem';
import { CRatingImg, FlexCol, FlexSB, H3, P20, P28, SDrop } from './style';

const EpList = () => {
    return (
        <>
            <FlexSB>
                <FlexCol>
                    <H3>에피소드</H3>
                    <FlexSB gap='20px'>
                        <FlexSB gap='10px'>
                            <P28>시즌 10:</P28>
                            <CRatingImg
                                src='/contentdetail/contentrate/전체관람가 관람등급 1.png'
                                alt='전체관람가 관람등급'
                            />
                            <CRatingImg src='/contentdetail/contentrate/내용정보-대사.png' alt='내용정보-대사' />
                            <CRatingImg src='/contentdetail/contentrate/내용정보-선정성.png' alt='내용정보-선정성' />
                            <CRatingImg src='/contentdetail/contentrate/내용정보-주제.png' alt='내용정보-주제' />
                        </FlexSB>
                        <FlexSB gap='15px'>
                            <P20>연속 재생</P20> <ToggleSwitch isRound={true} />
                        </FlexSB>
                    </FlexSB>
                </FlexCol>
                <SDrop>
                    시즌 1
                    <button>
                        <img src='/contentdetail/ui/live area.png' alt='dropdownIcon' />
                    </button>
                </SDrop>
            </FlexSB>
            <EpItem />
        </>
    );
};

export default EpList;

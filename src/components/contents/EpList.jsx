import ToggleSwitch from '../../ui/toggle/Toggle';
import EpItem from './EpItem';
import { FlexCol, FlexSB, H3, P20, P28, SDrop } from './style';

const EpList = () => {
    return (
        <>
            <FlexSB>
                <FlexCol>
                    <H3>에피소드</H3>
                    <FlexSB gap='20px'>
                        <FlexSB gap='5px'>
                            <P28>시즌 10:</P28>
                            <img src='/contentdetail/contentrate/전체관람가 관람등급 1.png' alt='ContentRate' />
                            <img src='/contentdetail/contentrate/전체관람가 관람등급 1.png' alt='ContentRate' />
                            <img src='/contentdetail/contentrate/전체관람가 관람등급 1.png' alt='ContentRate' />
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

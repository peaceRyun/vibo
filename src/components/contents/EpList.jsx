import EpItem from './EpItem';
import { FlexCol, FlexSB, H3, SDrop } from './style';

const EpList = () => {
    return (
        <>
            <FlexSB>
                <FlexCol>
                    <H3>에피소드</H3>
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

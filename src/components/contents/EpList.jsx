import ToggleSwitch from '../../ui/toggle/Toggle';
import EpItem from './EpItem';
import { CRatingImg, Flex, FlexCol, H3, P20, P28, SDrop } from './style';

const EpList = () => {
    return (
        <>
            <section>
                <Flex $justifyContent='space-between' $alignItems='center'>
                    <FlexCol>
                        <H3>에피소드</H3>
                        <Flex $justifyContent='space-between' $alignItems='center' $gap='20px'>
                            <Flex $gap='10px' $justifyContent='space-between' $alignItems='center'>
                                <P28>시즌 10:</P28>
                                <CRatingImg
                                    src='/contentdetail/contentrate/전체관람가 관람등급 1.png'
                                    alt='전체관람가 관람등급'
                                />
                                <CRatingImg src='/contentdetail/contentrate/내용정보-대사.png' alt='내용정보-대사' />
                                <CRatingImg
                                    src='/contentdetail/contentrate/내용정보-선정성.png'
                                    alt='내용정보-선정성'
                                />
                                <CRatingImg src='/contentdetail/contentrate/내용정보-주제.png' alt='내용정보-주제' />
                            </Flex>
                            <Flex $justifyContent='space-between' $alignItems='center' $gap='15px'>
                                <P20>연속 재생</P20> <ToggleSwitch isRound={true} />
                            </Flex>
                        </Flex>
                    </FlexCol>
                    <SDrop>
                        시즌 1
                        <button>
                            <img src='/contentdetail/ui/live area.png' alt='dropdownIcon' />
                        </button>
                    </SDrop>
                </Flex>
                <EpItem />
            </section>
        </>
    );
};

export default EpList;

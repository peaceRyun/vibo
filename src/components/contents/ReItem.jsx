// 비슷한 콘텐츠
// 영화, 시리즈 콘텐츠 공통
import { Badge, Flex, FlexBadgeWrap, FlexCenter, ItemImg, ItemWrap, P, PlayImg, Span } from './style';

const ReItem = () => {
    return (
        <>
            <ItemWrap>
                <FlexCenter>
                    <ItemImg src='/contentdetail/sample/20191108.99001114353127601.jpg' alt='sample1' />
                    <button>
                        <PlayImg src='/contentdetail/ui/carousel_action_atomic.png' alt='sample1' />
                    </button>
                </FlexCenter>
                <FlexBadgeWrap>
                    <Flex $justifyContent='space-between' $alignItems='center' $gap='5px'>
                        <img src='/contentdetail/contentrate/전체관람가 관람등급 1.png' alt='rateAll' />
                        <Badge $br='4px' $padding='3.5px 5px' fontSize='12px'>
                            HD
                        </Badge>
                        <Span>2024</Span>
                    </Flex>
                    <button>
                        <img src='/contentdetail/ui/heart.png' alt='likeActive' />
                    </button>
                </FlexBadgeWrap>
                <P>
                    프로 바둑기사의 꿈을 접은 장그래는 인턴사원이 되어 입사 동기 영이에게 의존하며 험난한 직장 생활을
                    시작한다.
                </P>
            </ItemWrap>
        </>
    );
};

export default ReItem;

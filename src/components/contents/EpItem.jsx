// 에피소드 정보
import { EpItemContImg, Flex, H4, P, Span } from './style';

const EpItem = ({ episode }) => {
    // 영상 길이 포맷팅 (API에서 분 단위로 주지 않는 경우를 위해)
    const formatRuntime = (runtime) => {
        if (!runtime) return '정보 없음';
        return typeof runtime === 'string' ? runtime : `${runtime}분`;
    };

    return (
        <li>
            <Flex $alignItems='center' $gap='60px' $padding='30px' $width='75%'>
                <Span $fontWeight='800' $fontSize='28px' $padding='0 20px'>
                    {episode.episode_number}
                </Span>
                <EpItemContImg $width='225px' $height='137px' src={episode.stillUrl} alt={`${episode.name} 썸네일`} />
                <Flex $flexDirection='column' $gap='20px'>
                    <H4 $fontSize='15px' $fontWeight='700'>
                        {episode.name}
                    </H4>
                    <P $fontSize='15px' $fontWeight='400' $padding='0' $lineClamp='3'>
                        {episode.overview || '에피소드 설명이 없습니다.'}
                    </P>
                </Flex>
                <Span $fontSize='15px' $whiteSpace='nowrap'>
                    {formatRuntime(episode.runtime)}
                </Span>
            </Flex>
        </li>
    );
};

export default EpItem;

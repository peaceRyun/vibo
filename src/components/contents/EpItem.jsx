import { useState } from 'react';
import { EpItemContImg, Flex, H4, P, PlayButtonB, PlayImgB, Span, ThumbnailContainer } from './style';

const EpItem = ({ episode }) => {
    const [isHovered, setIsHovered] = useState(false);

    const formatRuntime = (runtime) => {
        if (!runtime) return '정보 없음';
        return typeof runtime === 'string' ? runtime : `${runtime}분`;
    };

    return (
        <li>
            <Flex $alignItems='center' $gap='30px' $padding='30px' $width='90%'>
                <Span $fontWeight='800' $fontSize='28px' $padding='0 20px'>
                    {episode.episode_number}
                </Span>
                <ThumbnailContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <EpItemContImg
                        $width='225px'
                        $height='137px'
                        src={episode.stillUrl}
                        alt={`${episode.name} 썸네일`}
                    />
                    <PlayButtonB style={{ opacity: isHovered ? 1 : 0 }}>
                        <PlayImgB
                            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/carousel_action_atomic.png'
                            alt='play'
                        />
                    </PlayButtonB>
                </ThumbnailContainer>
                <Flex $flexDirection='column' $gap='20px' style={{ flex: 1 }}>
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

// 비슷한 콘텐츠
// 영화, 시리즈 콘텐츠 공통
import LikeButton from '../../ui/like/Like';
import LiLikeButton from '../../ui/lordicon/LiLikeButton';
import { Badge, Contour, Flex, H4, ItemImg, ItemWrap, P, PlayImg, Span } from './style';

const ReItem = ({ content }) => {
    const { name, backdrop_path, overview } = content;
    return (
        <>
            <ItemWrap>
                <Flex $justifyCenter='center' $alignItems='center' $position='relative'>
                    <ItemImg src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={name} />
                    <button>
                        <PlayImg src='/contentdetail/ui/carousel_action_atomic.png' alt='sample1' />
                    </button>
                </Flex>
                <Flex $flexDirection='column' $padding='15px 20px 6px' $gap='8px'>
                    <Flex $justifyContent='space-between' $alignItems='center'>
                        <Flex $justifyContent='space-between' $alignItems='center' $gap='10px'>
                            <img src='/contentdetail/contentrate/전체관람가 관람등급 1.png' alt='rateAll' />
                            <Badge $br='4px' $padding='3.5px 5px' fontSize='12px'>
                                HD
                            </Badge>
                            <Span $fontSize='12px' $padding='0 0 0 0'>
                                2024
                            </Span>
                        </Flex>
                        <LikeButton size='27' />
                        <LiLikeButton />
                    </Flex>
                    <H4 $textAlign='left' $fontSize='20px'>
                        {name}
                    </H4>
                    <Contour />
                </Flex>
                <P $lineClamp='3'>{overview}</P>
            </ItemWrap>
        </>
    );
};

export default ReItem;

import { useNavigate } from 'react-router';
import LiLikeButton from '../../ui/lordicon/LiLikeButton';
import { Badge, Contour, Flex, H4, ItemImg, ItemWrap, P, PlayImg, Span } from './style';

const ReItem = ({ content, contentType }) => {
    const { id, name, title, backdrop_path, overview } = content;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${contentType}/${id}`);
    };

    return (
        <ItemWrap
            onClick={handleClick}
            style={{
                cursor: 'pointer', // 항상 pointer 커서 표시
            }}
        >
            <Flex $justifyCenter='center' $alignItems='center' $position='relative'>
                <ItemImg src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title || name} />
                <button>
                    <PlayImg
                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/carousel_action_atomic.png'
                        alt='sample1'
                    />
                </button>
            </Flex>
            <Flex $flexDirection='column' $padding='15px 20px 6px' $gap='8px'>
                <Flex $justifyContent='space-between' $alignItems='center'>
                    <Flex $justifyContent='space-between' $alignItems='center' $gap='10px'>
                        <img
                            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/전체관람가 관람등급 1.png'
                            alt='rateAll'
                        />
                        <Badge $br='4px' $padding='3.5px 5px' fontSize='12px'>
                            HD
                        </Badge>
                        <Span $fontSize='12px' $padding='0 0 0 0'>
                            2024
                        </Span>
                    </Flex>
                    <LiLikeButton width='30px' height='30px' />
                </Flex>
                <H4 $textAlign='left' $fontSize='20px'>
                    {title || name}
                </H4>
                <Contour />
            </Flex>
            <P $lineClamp='3'>{overview}</P>
        </ItemWrap>
    );
};

export default ReItem;

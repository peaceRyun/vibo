import { OuterContainer, RankNumber, SlideImageContainer, SlideImage } from './style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RateItem = ({ image, rank, isMainSlide, id, mediaType = 'series' }) => {
    // mediaType이 없는 경우 기본값으로 'series' 사용
    const contentType = mediaType || 'series';

    return (
        <StyledLink to={`/detail/${contentType}/${id}`}>
            <OuterContainer $isMainSlide={isMainSlide}>
                <RankNumber $isMainSlide={isMainSlide}>{rank}</RankNumber>
                <SlideImageContainer $isMainSlide={isMainSlide}>
                    <SlideImage src={image} alt={`순위 ${rank}`} />
                </SlideImageContainer>
            </OuterContainer>
        </StyledLink>
    );
};

export default RateItem;

// Link 스타일링 - 레이아웃 유지를 위한 설정
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
    }
`;

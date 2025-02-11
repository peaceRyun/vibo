import { OuterContainer, RankNumber, SlideImageContainer, SlideImage } from './style';

const RateItem = ({ image, rank, isMainSlide }) => {
    return (
        <OuterContainer isMainSlide={isMainSlide}>
            <RankNumber isMainSlide={isMainSlide}>{rank}</RankNumber>
            <SlideImageContainer isMainSlide={isMainSlide}>
                <SlideImage src={image} alt={`순위 ${rank}`} />
            </SlideImageContainer>
        </OuterContainer>
    );
};

export default RateItem;

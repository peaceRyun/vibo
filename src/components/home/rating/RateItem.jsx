import { OuterContainer, RankNumber, RateItemContainer, RateItemImg } from './style';

const RateItem = ({ image, rank, isFirst }) => {
    return (
        <OuterContainer>
            <RankNumber isFirst={isFirst}>{rank}</RankNumber>
            <RateItemContainer>
                <RateItemImg src={image} alt={`순위 ${rank}`} />
            </RateItemContainer>
        </OuterContainer>
    );
};

export default RateItem;

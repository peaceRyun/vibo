import { RankNumber, RateItemContainer, RateItemImg } from './style';

const RateItem = ({ image, rank, isFirst }) => {
  return (
    <RateItemContainer isFirst={isFirst}>
      <RankNumber isFirst={isFirst}>{rank}</RankNumber>
      <RateItemImg src={image} alt={`순위 ${rank}`} />
    </RateItemContainer>
  );
};
export default RateItem;

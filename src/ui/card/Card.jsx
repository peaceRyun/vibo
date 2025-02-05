import { CardWrapper, CardImage } from './style';

const Card = ({ title, image }) => {
    return (
        <CardWrapper>
            <CardImage src={image} alt={title} />
        </CardWrapper>
    );
};

export default Card;

import { CardWrapper, CardImage, CardOverlay, CardTitle } from './style';

const Card = ({ title, image }) => {
    return (
        <CardWrapper>
            <CardImage src={image} alt={title} />
            <CardOverlay>
                <CardTitle>{title}</CardTitle>
            </CardOverlay>
        </CardWrapper>
    );
};

export default Card;

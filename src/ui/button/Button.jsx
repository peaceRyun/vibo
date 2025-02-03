import { FaAngleRight } from 'react-icons/fa6';
import { ButtonA, ButtonB } from './style';

const Button = ({
    children,
    type = 'default',
    fontSize = '1.5rem',
    fontWeight = '700',
    width = '8.375rem',
    height = '3.1875rem',
    play,
    onClick,
}) => {
    return (
        <ButtonB
            $type={type}
            $fontSize={fontSize}
            $fontWeight={fontWeight}
            $width={width}
            $height={height}
            $play={String(play)}
            onClick={onClick}
        >
            {children}
        </ButtonB>
    );
};

export const ButtonBlank = ({
    children,
    type = 'default',
    fontSize = '1.5rem',
    width = '8.375rem',
    height = '3.1875rem',
    onClick,
    review,
}) => {
    return (
        <ButtonA $type={type} $fontSize={fontSize} $width={width} $height={height} onClick={onClick}>
            {review && <img src='/contentdetail/ui/reviewIcon.png' alt='리뷰 아이콘' />}
            {children}
            <FaAngleRight />
        </ButtonA>
    );
};

export default Button;

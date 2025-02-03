import { ButtonB } from './style';

const Button = ({
    children,
    type = 'default',
    fontSize = '1.5rem',
    width = '8.375rem',
    height = '3.1875rem',
    play,
    onClick,
}) => {
    return (
        <ButtonB type={type} fontSize={fontSize} width={width} height={height} play={play} onClick={onClick}>
            {children}
        </ButtonB>
    );
};

export default Button;

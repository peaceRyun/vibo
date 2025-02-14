import { ProfileImg } from './style';

const imgUrl = 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public';

const IconItem = ({ src }) => {
    return (
        <>
            <ProfileImg $width='200px' $height='200px' src={src ? src : `${imgUrl}/프아V.png`} alt='샘플프아' />
        </>
    );
};

export default IconItem;

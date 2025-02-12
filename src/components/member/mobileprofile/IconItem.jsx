import { ProfileImg } from './style';

const IconItem = ({ src }) => {
    return (
        <>
            <ProfileImg
                $width='200px'
                $height='200px'
                src={src ? src : `${import.meta.env.VITE_IMAGE_BASE_URL}/프아V.png`}
                alt='샘플프아'
            />
        </>
    );
};

export default IconItem;

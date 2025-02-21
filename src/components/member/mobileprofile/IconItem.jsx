import { ProfileImg } from './style';

const imgUrl = 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public';

const IconItem = ({ item = { src: '', name: '' }, handleIcon, handleModalOpen }) => {
    const { src, name } = item;
    return (
        <>
            <button
                onClick={(e) => {
                    handleIcon(item);
                    handleModalOpen(e);
                }}
            >
                <ProfileImg $width='200px' $height='200px' src={src ? src : `${imgUrl}/프아V.png`} alt={name} />
            </button>
        </>
    );
};

export default IconItem;

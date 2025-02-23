import { ProfileImg } from './style';

const imgUrl = 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public';

const IconItem = ({ item = { src: '', name: '' }, handleIcon, handleModalOpen }) => {
    const { src, name } = item;
    return (
        <>
            <button
                style={{
                    width: '100%',
                    height: '100%',
                    padding: 0, // 버튼의 기본 패딩 제거
                }}
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

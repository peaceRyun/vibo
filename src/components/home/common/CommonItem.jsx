import { useState } from 'react';
import { CommonItemContainer, CardInner, CardFront, CardBack, CommonImg } from './style';
import HoverItem from './HoverItem';
import { useNavigate } from 'react-router';

const CommonItem = ({ content }) => {
    const { id, poster_path, title, name, videoKey } = content;
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (videoKey) {
            navigate(`/detail/${id}`);
        }
    };

    const imageUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : '/mainhome/sample/commonSample.png';

    return (
        <CommonItemContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            style={{
                cursor: videoKey ? 'pointer' : 'not-allowed',
                opacity: videoKey ? 1 : 0.7,
            }}
        >
            <CardInner $isHovered={isHovered}>
                <CardFront>
                    <CommonImg src={imageUrl} alt={title || name || '이미지 없음'} />
                    {!videoKey && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                padding: '5px 10px',
                                borderRadius: '4px',
                                color: 'white',
                                fontSize: '12px',
                            }}
                        >
                            트레일러 없음
                        </div>
                    )}
                </CardFront>
                <CardBack>
                    <HoverItem content={content} />
                </CardBack>
            </CardInner>
        </CommonItemContainer>
    );
};

export default CommonItem;

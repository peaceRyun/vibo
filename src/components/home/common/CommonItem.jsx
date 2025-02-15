import { useState } from 'react';
import { CommonItemContainer, CardInner, CardFront, CardBack, CommonImg } from './style';
import HoverItem from './HoverItem'; // 새로운 뒷면 컴포넌트
import { useNavigate } from 'react-router';

const CommonItem = ({ content }) => {
    const { id, poster_path, title, name } = content;
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
    };

    const imageUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : '/mainhome/sample/commonSample.png'; // 기본 이미지

    return (
        <CommonItemContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            <CardInner $isHovered={isHovered}>
                {/* 앞면 */}
                <CardFront>
                    <CommonImg src={imageUrl} alt={title || name || '이미지 없음'} />
                </CardFront>
                {/* 뒷면 */}
                <CardBack>
                    <HoverItem content={content} />
                </CardBack>
            </CardInner>
        </CommonItemContainer>
    );
};

export default CommonItem;

import { useState } from 'react';
import { CommonItemContainer, CardInner, CardFront, CardBack, CommonImg } from './style';
import HoverItem from './HoverItem';
import { useNavigate } from 'react-router';

const CommonItem = ({ content }) => {
    const { id, poster_path, title, name, media_type } = content;
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        const contentType = determineContentType();
        navigate(`/detail/${contentType}/${id}`);
    };

    // 컨텐츠 타입 결정 함수
    const determineContentType = () => {
        // media_type이 명시적으로 제공된 경우 사용
        if (media_type === 'movie' || media_type === 'series') {
            return media_type;
        }

        // media_type이 없는 경우, name과 title을 기준으로 판단
        // TV 시리즈는 보통 'name' 속성을 가지고, 영화는 'title' 속성을 가짐
        if (name && !title) {
            return 'series';
        } else {
            return 'movie';
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
                cursor: 'pointer',
                opacity: 1,
            }}
        >
            <CardInner $isHovered={isHovered}>
                <CardFront>
                    <CommonImg src={imageUrl} alt={title || name || '이미지 없음'} />
                </CardFront>
                <CardBack>
                    <HoverItem content={content} />
                </CardBack>
            </CardInner>
        </CommonItemContainer>
    );
};

export default CommonItem;

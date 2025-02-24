import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../store/modules/likeSlice';
import LiLike from './LILike';

const LiLikeButton = ({ content, width, height }) => {
    const dispatch = useDispatch();
    const likedContent = useSelector((state) => state.likeR.likedContent);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (content?.id) {
            setIsLiked(likedContent.some((item) => item.id === content.id));
        }
    }, [likedContent, content?.id]);

    const handleLike = (event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (!content?.id) {
            console.log('⚠️ 좋아요 버튼 클릭 오류: 콘텐츠 정보 없음');
            return;
        }

        dispatch(toggleLike(content));
    };

    return (
        <div onClick={handleLike} style={{ cursor: 'pointer', display: 'inline-block' }}>
            <LiLike width={width} height={height} colors="primary:#e8308c" isLiked={isLiked} onClick={handleLike} />
        </div>
    );
};

export default LiLikeButton;

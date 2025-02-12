import { useState } from 'react';
import LiLike from './LILike';

const LiLikeButton = ({ memberId }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        // 여기에 API 호출이나 다른 상태 업데이트 로직을 추가할 수 있습니다
        console.log(`Member ${memberId} like status: ${!isLiked}`);
    };

    return <LiLike width='30px' height='30px' colors='primary:#e8308c' isLiked={isLiked} onClick={handleLike} />;
};

export default LiLikeButton;

import { useState } from 'react';
import LiLike from './LILike';

const LiLikeButton = ({ memberId, width, height }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = (event) => {
        // event.preventDefault();
        // event.stopPropagation();
        setIsLiked(!isLiked);
        console.log(`Member ${memberId} like status: ${!isLiked}`);
    };

    return (
        <div onClick={handleLike} style={{ cursor: 'pointer', display: 'inline-block' }}>
            <LiLike width={width} height={height} colors='primary:#e8308c' isLiked={isLiked} />
        </div>
    );
};

export default LiLikeButton;

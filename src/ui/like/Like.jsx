import React, { useState } from 'react';
import { LikeButtonWrapper, HeartImage, RippleEffect } from './style';

const LikeButton = ({ size = 32, onClick }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showRipple, setShowRipple] = useState(false);

    const handleClick = () => {
        if (!isLiked) {
            setShowRipple(true);
            setTimeout(() => {
                setShowRipple(false);
                setIsLiked(true);
            }, 600);
        } else {
            setIsLiked(false);
        }

        if (onClick) onClick();
    };

    const getHeartImage = () => {
        if (isLiked) return '/contentdetail/ui/하트active.png';
        if (isHovered) return '/contentdetail/ui/하트hover.png';
        return '/contentdetail/ui/하트default.png';
    };

    return (
        <LikeButtonWrapper
            $size={size}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {showRipple && <RippleEffect src='/contentdetail/ui/하트pressed.png' alt='ripple' />}
            <HeartImage src={getHeartImage()} alt='heart' />
        </LikeButtonWrapper>
    );
};

export default LikeButton;

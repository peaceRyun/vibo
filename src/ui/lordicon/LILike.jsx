import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width || '250px'};
    height: ${(props) => props.height || '250px'};
`;

const StyledLordIcon = styled('lord-icon')`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const LiLike = ({
    src = 'https://cdn.lordicon.com/ulnswmkk.json',
    colors = 'primary:#e8308c',
    isLiked,
    onClick,
    width,
    height,
    ...props
}) => {
    const [trigger, setTrigger] = useState('hover');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.lordicon.com/lordicon.js';
        script.async = true;

        if (!document.querySelector('script[src="https://cdn.lordicon.com/lordicon.js"]')) {
            document.body.appendChild(script);
        }
    }, []);

    const handleMouseEnter = useCallback(() => {
        if (!isLiked) {
            setTrigger('morph');
        }
    }, [isLiked]);

    const handleMouseLeave = useCallback(() => {
        if (!isLiked) {
            setTrigger('morph');
        }
    }, [isLiked]);

    const handleClick = useCallback(() => {
        if (isLiked) {
            setTrigger('morph');
            setTimeout(() => {
                onClick();
            }, 500);
        } else {
            onClick();
        }
    }, [isLiked, onClick]);

    return (
        <IconWrapper width={width} height={height} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <StyledLordIcon
                src={src}
                colors={colors}
                trigger={isLiked ? 'in' : trigger}
                state={isLiked ? 'in-heart' : 'morph-heart'}
                onClick={handleClick}
                {...props}
            />
        </IconWrapper>
    );
};

export default LiLike;

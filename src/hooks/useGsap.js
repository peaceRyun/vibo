import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useEpisodeAnimation = (isVisible) => {
    const episodeListRef = useRef(null);

    useEffect(() => {
        if (!episodeListRef.current) return;

        if (isVisible) {
            gsap.fromTo(
                episodeListRef.current,
                {
                    height: 0,
                    opacity: 0,
                },
                {
                    height: 'auto',
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                }
            );
        } else {
            gsap.to(episodeListRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in',
            });
        }
    }, [isVisible]);

    return episodeListRef;
};

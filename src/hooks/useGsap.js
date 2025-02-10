import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useEpisodeAnimation = (isOpen) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        // 초기 실행 시에는 애니메이션 없이 설정
        if (!element.style.height) {
            gsap.set(element, {
                height: 'auto',
            });
            return;
        }

        if (isOpen) {
            gsap.to(element, {
                height: 'auto',
                duration: 0.3,
                ease: 'power2.out',
            });
        } else {
            gsap.to(element, {
                height: 0,
                duration: 0.3,
                ease: 'power2.out',
            });
        }
    }, [isOpen]);

    return elementRef;
};

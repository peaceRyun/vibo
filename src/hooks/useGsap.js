import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useEpisodeAnimation = (isOpen) => {
    const elementRef = useRef(null);
    const animation = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // 이전 애니메이션이 있다면 중단
        if (animation.current) {
            animation.current.kill();
        }

        // 요소의 현재 높이를 저장
        const height = element.offsetHeight;

        if (isOpen) {
            // 시작 상태 설정
            gsap.set(element, {
                height: 0,
                opacity: 0,
                overflow: 'hidden',
            });

            // 애니메이션 실행
            animation.current = gsap.to(element, {
                height: 'auto',
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: () => {
                    // 애니메이션 완료 후 자연스러운 높이 조절을 위해
                    gsap.set(element, { clearProps: 'height,overflow' });
                },
            });
        } else {
            // 닫힐 때는 현재 높이에서 시작
            gsap.set(element, {
                height: height,
                overflow: 'hidden',
            });

            // 애니메이션 실행
            animation.current = gsap.to(element, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: () => {
                    gsap.set(element, { clearProps: 'all' });
                },
            });
        }

        // 클린업 함수
        return () => {
            if (animation.current) {
                animation.current.kill();
            }
        };
    }, [isOpen]);

    return elementRef;
};

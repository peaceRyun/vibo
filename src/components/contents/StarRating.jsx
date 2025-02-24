import React from 'react';

const StarRating = ({ rating }) => {
    // 10점 만점을 5점 만점으로 변환
    const fiveStarRating = rating / 2;

    // 완전한 별의 개수
    const fullStars = Math.floor(fiveStarRating);

    // 부분 별의 비율 (0~1 사이 값)
    const partialStar = fiveStarRating % 1;

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
            {/* 완전한 별 */}
            {[...Array(fullStars)].map((_, index) => (
                <img
                    key={index}
                    src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/StarActive.png'
                    alt='별'
                    style={{ width: '15px', height: '15px', display: 'block' }}
                />
            ))}

            {/* 부분 별 */}
            {partialStar > 0 && (
                <div style={{ position: 'relative', width: '15px', height: '15px', display: 'block' }}>
                    <img
                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/StarActive.png'
                        alt='별'
                        style={{
                            position: 'absolute',
                            left: 0,
                            width: '100%',
                            height: '100%',
                            clipPath: `inset(0 ${(1 - partialStar) * 100}% 0 0)`,
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default StarRating;

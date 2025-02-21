// 찜, 구매내역 콘텐츠
import React from 'react';
import { CategoryButton, CategoryFilter, ContentCard, ContentGrid } from './style';

const BuyingZzimContent = () => {
    const categories = ['드라마', '영화'];
    const [activeCategory, setActiveCategory] = React.useState('드라마');

    const contentData = [
        {
            id: 1,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_01.webp',
            category: '드라마',
        },
        {
            id: 2,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_02.webp',
            category: '드라마',
        },
        {
            id: 3,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_03.webp',
            category: '드라마',
        },
        {
            id: 4,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_04.webp',
            category: '드라마',
        },
        {
            id: 5,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_05.webp',
            category: '드라마',
        },
        {
            id: 6,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_06.webp',
            category: '드라마',
        },
        {
            id: 7,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_07.webp',
            category: '드라마',
        },
        {
            id: 8,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_08.webp',
            category: '드라마',
        },
        {
            id: 9,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_09.webp',
            category: '드라마',
        },
        {
            id: 10,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_10.webp',
            category: '드라마',
        },
        {
            id: 11,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_11.webp',
            category: '드라마',
        },
        {
            id: 12,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_12.webp',
            category: '드라마',
        },
        {
            id: 13,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_01.webp',
            category: '영화',
        },
        {
            id: 14,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_02.webp',
            category: '영화',
        },
        {
            id: 15,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_03.webp',
            category: '영화',
        },
        {
            id: 16,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_04.webp',
            category: '영화',
        },
        {
            id: 17,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_05.webp',
            category: '영화',
        },
        {
            id: 18,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_06.webp',
            category: '영화',
        },
        {
            id: 19,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_07.webp',
            category: '영화',
        },
        {
            id: 20,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_08.webp',
            category: '영화',
        },
        {
            id: 21,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_09.webp',
            category: '영화',
        },
        {
            id: 22,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_10.webp',
            category: '영화',
        },
        {
            id: 23,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_11.webp',
            category: '영화',
        },
        {
            id: 24,
            src: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_12.webp',
            category: '영화',
        },
    ];

    const filteredContent = contentData.filter((item) => item.category === activeCategory);

    return (
        <div>
            <CategoryFilter>
                {categories.map((category) => (
                    <CategoryButton
                        key={category}
                        active={activeCategory === category}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </CategoryButton>
                ))}
            </CategoryFilter>

            <ContentGrid>
                {filteredContent.map((item) => (
                    <ContentCard key={item.id} style={{ backgroundImage: `url(${item.src})` }} />
                ))}
            </ContentGrid>
        </div>
    );
};

export default BuyingZzimContent;

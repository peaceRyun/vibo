import React from 'react';
import { useSelector } from 'react-redux';
import { CategoryButton, CategoryFilter, ContentCard, ContentGrid } from './style';

const BuyingZzimContent = () => {
    const categories = ['드라마', '영화'];
    const [activeCategory, setActiveCategory] = React.useState('드라마');

    const likedContent = useSelector((state) => state.likeR.likedContent);

    const likedContentFormatted = likedContent
        .slice()
        .reverse()
        .map((item) => ({
            id: item.id,
            src: item.poster_path
                ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                : 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/sample/commonSample.png',
            category: item.media_type === 'movie' || item.original_title ? '영화' : '드라마',
        }));

    const filteredContent = likedContentFormatted.filter(
        (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
    );

    return (
        <div>
            <CategoryFilter>
                {categories.map((category) => (
                    <CategoryButton
                        key={category}
                        active={activeCategory === category ? 'true' : undefined}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </CategoryButton>
                ))}
            </CategoryFilter>

            <ContentGrid>
                {filteredContent.length > 0 ? (
                    filteredContent.map((item) => (
                        <ContentCard
                            key={item.id}
                            style={{
                                backgroundImage: `url(${item.src})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    ))
                ) : (
                    <p style={{ color: 'white', textAlign: 'center', padding: '20px' }}>좋아요한 콘텐츠가 없습니다.</p>
                )}
            </ContentGrid>
        </div>
    );
};

export default BuyingZzimContent;

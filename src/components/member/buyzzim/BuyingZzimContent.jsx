// 찜, 구매내역 콘텐츠
import React from 'react';
import { CategoryButton, CategoryFilter, ContentCard, ContentGrid } from './style';

const BuyingZzimContent = () => {
  const categories = ['드라마', '영화'];
  const [activeCategory, setActiveCategory] = React.useState('드라마');

  const contentData = [
    { id: 1, src: '/member/b_drama_01.webp', category: '드라마' },
    { id: 2, src: '/member/b_drama_02.webp', category: '드라마' },
    { id: 3, src: '/member/b_drama_03.webp', category: '드라마' },
    { id: 4, src: '/member/b_drama_04.webpg', category: '드라마' },
    { id: 5, src: '/member/b_drama_05.webp', category: '드라마' },
    { id: 6, src: '/member/b_drama_06.webp', category: '드라마' },
    { id: 7, src: '/member/b_movie_01.webp', category: '영화' },
    { id: 8, src: '/member/b_movie_02.webp', category: '영화' },
    { id: 9, src: '/member/b_movie_03.webpg', category: '영화' },
    { id: 10, src: '/member/b_movie_04.webp', category: '영화' },
    { id: 11, src: '/member/b_movie_05.webp', category: '영화' },
    { id: 12, src: '/member/b_movie_06.webp', category: '영화' },
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

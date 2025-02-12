import { GenreContainer, GenreItem } from './style';

const genres = [
    { en: 'ACTION', ko: '액션' },
    { en: 'COMEDY', ko: '코미디' },
    { en: 'FANTASY', ko: '판타지' },
    { en: 'ROMANCE', ko: '로맨스' },
    { en: 'THRILLER', ko: '스릴러' },
    { en: 'MUSICAL', ko: '뮤지컬' },
    { en: 'ANIMATION', ko: '애니메이션' },
    { en: 'SF', ko: '사이언스픽션' },
];

const highlightedGenres = ['ACTION', 'MUSICAL', 'FANTASY', 'SF'];

const GenreNav = () => (
    <GenreContainer>
        {genres.map(({ en, ko }) => (
            <GenreItem key={en} genre={en} isHighlighted={highlightedGenres.includes(en)}>
                <span className="en">{en}</span>
                <span className="ko">{ko}</span>
            </GenreItem>
        ))}
    </GenreContainer>
);

export default GenreNav;

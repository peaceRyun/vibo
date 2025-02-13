import { GenreContainer, GenreItem } from './style';

const genres = [
    { en: 'ACTION', ko: '액션' },
    { en: 'COMEDY', ko: '코미디' },
    { en: 'FANTASY', ko: '판타지' },
    { en: 'ROMANCE', ko: '로맨스' },
    { en: 'THRILLER', ko: '스릴러' },
    { en: 'MUSICAL', ko: '뮤지컬' },
    { en: 'ANIMATION', ko: '애니메이션' },
    { en: 'NOIR', ko: '느와르' },
];

const highlightedGenres = ['ACTION', 'MUSICAL', 'FANTASY', 'SF'];

const GenreNav = () => {
    const [selectedGenres, setSelectedGenres] = useState(defaultSelectedGenres);
    const [borderGenres] = useState(defaultBorderGenres);

    const toggleGenre = (genre) => {
        setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]));
    };

    return (
        <GenreContainer>
            {genres.map((genre) => (
                <GenreItem
                    key={genre.en}
                    className={`
                        ${selectedGenres.includes(genre.en) ? 'active' : ''}
                        ${borderGenres.includes(genre.en) ? 'border' : ''}
                    `}
                    onClick={() => toggleGenre(genre.en)}
                >
                    <span className="en">{genre.en}</span>
                    <span className="ko">{genre.ko}</span>
                </GenreItem>
            ))}
            {/* </div> */}
        </GenreContainer>
    );
};

export default GenreNav;

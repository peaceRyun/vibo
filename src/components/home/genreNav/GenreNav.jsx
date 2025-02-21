import { useEffect, useMemo } from 'react';
import { GenreContainer, GenreItem } from './style';
import { useDispatch, useSelector } from 'react-redux';

import { genreActions } from '../../../store/modules/genreSlice';
import { fetchMainGenresThunk, getContentByGenreThunk } from '../../../store/modules/getThunk';

// 장르 ID에 따른 영어 이름 매핑
const genreIdToEnglish = {
    28: 'ACTION',
    12: 'ADVENTURE',
    16: 'ANIMATION',
    35: 'COMEDY',
    80: 'CRIME',
    99: 'DOCUMENTARY',
    18: 'DRAMA',
    10751: 'FAMILY',
    14: 'FANTASY',
    36: 'HISTORY',
    27: 'HORROR',
    10402: 'MUSICAL',
    9648: 'MYSTERY',
    10749: 'ROMANCE',
    878: 'SCI-FI',
    10770: 'TV MOVIE',
    53: 'THRILLER',
    10752: 'WAR',
    37: 'WESTERN',
};

const GenreNav = () => {
    const dispatch = useDispatch();
    const { mainGenres, mainGenresStatus } = useSelector((state) => state.genreR);

    useEffect(() => {
        if (mainGenres.length === 0 && mainGenresStatus === 'idle') {
            dispatch(fetchMainGenresThunk());
        }
    }, [dispatch, mainGenres.length, mainGenresStatus]);

    // 장르 데이터 변환 처리
    const formattedGenres = useMemo(() => {
        return mainGenres.map((genre) => ({
            id: genre.id,
            ko: genre.name,
            en: genreIdToEnglish[genre.id] || genre.name.toUpperCase(),
        }));
    }, [mainGenres]);

    const highlightedGenreIds = [28, 10402, 14, 878]; // ACTION, MUSICAL, FANTASY, SF

    const handleGenreClick = (genreId) => {
        dispatch(genreActions.setSelectedGenre(genreId));
        dispatch(getContentByGenreThunk({ genreId }));
    };

    if (mainGenresStatus === 'loading') {
        return <div>장르 로딩 중...</div>;
    }

    return (
        <GenreContainer>
            {formattedGenres.map(({ id, en, ko }) => (
                <GenreItem
                    to={`/contents/all/${id}`}
                    key={id}
                    genre={en}
                    ishighlighted={highlightedGenreIds.includes(id)}
                    onClick={() => handleGenreClick(id)}
                >
                    <div className='GenreText'>
                        <span className='en'>{en}</span>
                        <span className='ko'>{ko}</span>
                    </div>
                </GenreItem>
            ))}
        </GenreContainer>
    );
};

export default GenreNav;

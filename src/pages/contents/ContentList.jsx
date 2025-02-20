import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Inner } from '../../components/contents/style';
import Card from '../../ui/card/Card';
import { GridContainer, Grid, Title } from './style';
import { getContentByGenreThunk } from '../../store/modules/getThunk';

// 장르 ID에 따른 영어/한글 이름 매핑
const genreIdToName = {
    28: { en: 'ACTION', ko: '액션' },
    12: { en: 'ADVENTURE', ko: '모험' },
    16: { en: 'ANIMATION', ko: '애니메이션' },
    35: { en: 'COMEDY', ko: '코미디' },
    80: { en: 'CRIME', ko: '범죄' },
    99: { en: 'DOCUMENTARY', ko: '다큐멘터리' },
    18: { en: 'DRAMA', ko: '드라마' },
    10751: { en: 'FAMILY', ko: '가족' },
    14: { en: 'FANTASY', ko: '판타지' },
    36: { en: 'HISTORY', ko: '역사' },
    27: { en: 'HORROR', ko: '공포' },
    10402: { en: 'MUSICAL', ko: '뮤지컬' },
    9648: { en: 'MYSTERY', ko: '미스터리' },
    10749: { en: 'ROMANCE', ko: '로맨스' },
    878: { en: 'SCI-FI', ko: '공상과학' },
    10770: { en: 'TV MOVIE', ko: 'TV 영화' },
    53: { en: 'THRILLER', ko: '스릴러' },
    10752: { en: 'WAR', ko: '전쟁' },
    37: { en: 'WESTERN', ko: '서부' },
};

const ContentList = ({ contentType = 'all' }) => {
    const dispatch = useDispatch();
    const { genreId } = useParams();

    // redux 상태에서 정보 가져오기
    const { genres, contentsByGenre, contentStatus } = useSelector((state) => state.genreR);

    // 장르 ID가 있는 경우 해당 장르 정보 찾기
    let currentGenre = null;

    if (genreId) {
        // 1. 우선 Redux 상태의 genres 배열에서 찾기
        currentGenre = genres.find((g) => g.id.toString() === genreId);

        // 2. 없으면 미리 정의된 매핑에서 찾기
        if (!currentGenre && genreIdToName[genreId]) {
            currentGenre = {
                id: parseInt(genreId),
                ...genreIdToName[genreId],
            };
        }
    }

    // 장르명 설정 (한글/영어)
    const genreNameKo = currentGenre?.ko || '모든';
    const genreNameEn = currentGenre?.en || 'ALL';

    // 콘텐츠 타입 표시 텍스트 설정
    const getContentTypeText = () => {
        switch (contentType) {
            case 'movie':
                return '영화';
            case 'series':
                return '시리즈';
            default:
                return '콘텐츠';
        }
    };

    // 컴포넌트가 마운트되거나 genreId가 변경될 때 해당 장르의 콘텐츠를 가져옵니다
    useEffect(() => {
        if (genreId) {
            dispatch(getContentByGenreThunk({ genreId, contentType }));
        } else {
            // 장르가 없는 경우 인기 콘텐츠를 가져오는 로직을 추가할 수 있습니다
            // dispatch(getPopularContentsThunk({ contentType }));
        }
    }, [dispatch, genreId, contentType]);

    // 현재 장르의 콘텐츠 목록을 가져옵니다
    const contentList = genreId ? contentsByGenre[genreId] || [] : [];

    // 콘텐츠 타입 결정 함수 (링크에 사용)
    const determineContentType = (item) => {
        // 1. item에 media_type이 있으면 그것을 사용
        if (item.media_type) {
            // media_type이 'tv'인 경우 'series'로 변환
            return item.media_type === 'tv' ? 'series' : item.media_type;
        }

        // 2. 상위 컴포넌트에서 받은 contentType이 'all'이 아니면 그것을 사용
        if (contentType !== 'all') {
            return contentType;
        }

        // 3. 컨텐츠 타입 추측 (title이 있으면 movie, name이 있으면 series)
        if (item.title && !item.name) {
            return 'movie';
        } else if (!item.title && item.name) {
            return 'series';
        }

        // 4. 기본값
        return 'movie';
    };

    // 로딩 상태일 때 표시할 내용
    if (contentStatus === 'loading') {
        return (
            <Inner>
                <GridContainer>
                    <Grid>
                        <Title>
                            <div className='firstS'>콘텐츠를</div>
                            <div className='secondS'>불러오는 중...</div>
                        </Title>
                    </Grid>
                </GridContainer>
            </Inner>
        );
    }

    // 카드 컴포넌트용 간단한 래퍼 스타일 (필요시)
    const cardLinkStyle = {
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
    };

    return (
        <Inner>
            <GridContainer>
                <Grid>
                    <Title>
                        <div className='firstS'>{genreNameEn}</div>
                        <div className='secondS'>
                            {genreNameKo} {getContentTypeText()}
                        </div>
                    </Title>
                    {contentList.length > 0 ? (
                        contentList.map((content) => {
                            const itemContentType = determineContentType(content);
                            const detailPath = `/detail/${itemContentType}/${content.id}`;

                            return (
                                <Link key={content.id} to={detailPath} style={cardLinkStyle}>
                                    <Card
                                        title={content.title || content.name}
                                        image={
                                            content.poster_path
                                                ? `https://image.tmdb.org/t/p/w500${content.poster_path}`
                                                : '/contentdetail/sample/sample-contentlsit.png'
                                        }
                                    />
                                </Link>
                            );
                        })
                    ) : (
                        <div className='no-content'>
                            <p>
                                선택하신 {genreNameKo} 장르의 {getContentTypeText()}가 없습니다.
                            </p>
                        </div>
                    )}
                </Grid>
            </GridContainer>
        </Inner>
    );
};

export default ContentList;

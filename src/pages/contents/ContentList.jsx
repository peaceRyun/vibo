import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Inner } from '../../components/contents/style';
import Card from '../../ui/card/Card';
import { GridContainer, Grid, Title } from './style';
import { getContentByGenreThunk } from '../../store/modules/getThunk';

const ContentList = ({ contentType = 'all' }) => {
    const dispatch = useDispatch();
    const { genreId } = useParams();

    const { genres, contentsByGenre, contentStatus } = useSelector((state) => state.genreR);

    // 현재 선택된 장르를 찾습니다
    const currentGenre = genres.find((g) => g.id.toString() === genreId);
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
                        contentList.map((content) => (
                            <Card
                                key={content.id}
                                title={content.title || content.name}
                                image={
                                    content.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${content.poster_path}`
                                        : '/contentdetail/sample/sample-contentlsit.png'
                                }
                                id={content.id}
                                contentType={content.media_type}
                            />
                        ))
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

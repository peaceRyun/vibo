import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//영화 - 기본 정보 끌어오기 thunk
const options = {
    api_key: 'ddf6521c43c2e03f59d2767f109aaaa4',
    lenguage: 'ko-KR',
    genres: 28,
};

export const getMovie = createAsyncThunk('movie/getMovie', async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?`;
    try {
        const res = await axios.get(url, { params: options });
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
});

//영화 - 유튜브링크 가져오기 thunk
const videoOptions = {
    params: {},
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
    },
};

export const getMovieVideos = createAsyncThunk(
    'contentPlayer/getMovieVideos',
    async (movieId = null, { rejectWithValue }) => {
        try {
            // movieId가 없는 경우 기본값 반환
            if (!movieId) {
                return 'MkcqlqCfYcg';
            }

            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, videoOptions);

            const videos = response.data.results;
            const youtubeVideo = videos.find((video) => video.site === 'YouTube' && video.key);

            return youtubeVideo ? youtubeVideo.key : 'MkcqlqCfYcg';
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// 영화 - 리뷰 데이터 끌어오기 thunk
const reviewOptions = {
    params: {
        language: 'ko-KR',
        page: '1',
    },
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
    },
};

export const getMovieReviews = createAsyncThunk('reviews/getMovieReviews', async (movieId, { rejectWithValue }) => {
    try {
        let allReviews = [];
        let page = 1;
        let hasMorePages = true;

        while (hasMorePages) {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
                ...reviewOptions,
                params: { ...reviewOptions.params, page: page.toString() },
            });

            const { results, total_pages } = response.data;

            // 유효한 리뷰만 필터링 (내용이 있는 리뷰)
            const validReviews = results.filter((review) => review.content && review.content.trim().length > 0);

            allReviews = [...allReviews, ...validReviews];

            // 다음 페이지 확인
            hasMorePages = page < total_pages && page < 5; // 최대 5페이지까지만 가져옴
            page++;
        }

        return allReviews;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

//TV시리즈 - 기본정보 thunk
const TVoptions = {
    params: {
        include_adult: 'false',
        include_null_first_air_dates: 'false',
        language: 'ko-KR',
        page: '1',
        sort_by: 'popularity.desc',
    },
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
    },
};

export const getTVseries = createAsyncThunk('TVseries/getTVseries', async (_, thunkAPI) => {
    try {
        let allResults = [];
        let page = 1;
        const seenIds = new Set(); // 이미 처리된 ID를 추적하기 위한 Set

        while (allResults.length < 24) {
            // TV 시리즈 기본 정보 가져오기
            const response = await axios.get('https://api.themoviedb.org/3/discover/tv', {
                ...TVoptions,
                params: {
                    ...TVoptions.params,
                    page: page.toString(),
                },
            });

            // 기본 필터링: overview, poster_path, backdrop_path가 있고 ID가 중복되지 않는 콘텐츠만
            const filteredResults = response.data.results.filter(
                (show) => show.overview && show.poster_path && show.backdrop_path && !seenIds.has(show.id) // 중복 ID 체크
            );

            // 각 TV 시리즈의 비디오 정보 확인
            for (const show of filteredResults) {
                try {
                    // 이미 충분한 결과를 얻었다면 중단
                    if (allResults.length >= 24) {
                        break;
                    }

                    // ID가 중복되지 않은 경우에만 처리
                    if (!seenIds.has(show.id)) {
                        seenIds.add(show.id); // ID를 Set에 추가

                        const videoResponse = await axios.get(`https://api.themoviedb.org/3/tv/${show.id}/videos`, {
                            headers: TVoptions.headers,
                        });

                        // 예고편이나 티저 찾기
                        const trailer = videoResponse.data.results.find(
                            (video) =>
                                video.site === 'YouTube' &&
                                video.key &&
                                (video.type === 'Trailer' || video.type === 'Teaser')
                        );

                        // 모든 show를 저장하되, videoKey의 유무로 구분
                        allResults.push({
                            ...show,
                            videoKey: trailer ? trailer.key : null,
                        });
                    }
                } catch (error) {
                    console.error(`Error fetching videos for show ${show.id}:`, error.message);
                }
            }

            page++;

            // 더 이상 결과가 없거나 10페이지까지 검색했다면 종료
            if (!response.data.results.length || page > 10) {
                break;
            }
        }

        return allResults.slice(0, 24);
    } catch (error) {
        console.error('Main error:', error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

//TV 시리즈 - 상세정보 가져오기 thunk
export const getTVDetail = createAsyncThunk('TVDetail/getTVDetail', async (tvId, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}`, {
            params: {
                language: 'ko-KR',
            },
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
            },
        });

        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

//Tv시리즈 - 유튜브 링크 끌어오기 thunk
export const getTVVideos = createAsyncThunk('player/getTVVideos', async (tvId = null, { rejectWithValue }) => {
    try {
        if (!tvId) {
            console.log('No tvId provided, returning default video');
            return 'MkcqlqCfYcg';
        }

        const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/videos`, {
            params: {
                language: 'ko-KR',
            },
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
            },
        });

        const videos = response.data.results;

        // 한국어 예고편 찾기
        let youtubeVideo = videos.find(
            (video) =>
                video.site === 'YouTube' &&
                video.key &&
                (video.type === 'Trailer' || video.type === 'Teaser') &&
                video.iso_639_1 === 'ko'
        );

        // 한국어 예고편이 없으면 영어 예고편 찾기
        if (!youtubeVideo) {
            console.log('No Korean trailer found, searching for any trailer');
            youtubeVideo = videos.find(
                (video) =>
                    video.site === 'YouTube' && video.key && (video.type === 'Trailer' || video.type === 'Teaser')
            );
        }

        // 예고편이 없으면 아무 YouTube 비디오나 찾기
        if (!youtubeVideo) {
            console.log('No trailer found, searching for any YouTube video');
            youtubeVideo = videos.find((video) => video.site === 'YouTube' && video.key);
        }

        const videoKey = youtubeVideo ? youtubeVideo.key : 'MkcqlqCfYcg';
        console.log('Selected video key:', videoKey);

        return videoKey;
    } catch (error) {
        console.error('Error in getTVVideos:', error);
        return rejectWithValue('Failed to fetch video: ' + error.message);
    }
});

//메인홈 요일별 thunk
export const getAiringToday = createAsyncThunk('content/getAiringToday', async (_, { rejectWithValue }) => {
    try {
        // 이번 주의 시작일과 종료일 계산
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);

        let allShows = [];
        let page = 1;

        while (page <= 5) {
            // 페이지 수 줄임
            try {
                const response = await axios.get('https://api.themoviedb.org/3/tv/on_the_air', {
                    params: {
                        language: 'ko-KR',
                        page: page.toString(),
                    },
                    headers: {
                        accept: 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
                    },
                });

                const showsWithDetails = await Promise.all(
                    response.data.results
                        .filter((show) => show.poster_path)
                        .map(async (show) => {
                            try {
                                const detailResponse = await axios.get(`https://api.themoviedb.org/3/tv/${show.id}`, {
                                    params: {
                                        language: 'ko-KR',
                                    },
                                    headers: {
                                        accept: 'application/json',
                                        Authorization:
                                            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
                                    },
                                });

                                if (detailResponse.data.next_episode_to_air) {
                                    const nextAirDate = new Date(detailResponse.data.next_episode_to_air.air_date);
                                    if (nextAirDate >= startOfWeek && nextAirDate <= endOfWeek) {
                                        return {
                                            ...show,
                                            next_air_date: detailResponse.data.next_episode_to_air.air_date,
                                        };
                                    }
                                }
                                return null;
                            } catch (err) {
                                console.error(`Error fetching show details: ${err.message}`);
                                return null;
                            }
                        })
                );

                const validShows = showsWithDetails.filter((show) => show !== null);
                allShows = [...allShows, ...validShows];

                if (!response.data.results.length) {
                    break;
                }

                page++;
            } catch (err) {
                console.error(`Error fetching page ${page}: ${err.message}`);
                break;
            }
        }

        // 요일별로 데이터 그룹화
        const groupedByDay = allShows.reduce((acc, show) => {
            const airDate = new Date(show.next_air_date);
            const day = airDate.getDay();
            const koreanDays = ['일', '월', '화', '수', '목', '금', '토'];
            const koreanDay = koreanDays[day];

            if (!acc[koreanDay]) {
                acc[koreanDay] = [];
            }

            acc[koreanDay].push({
                ...show,
                airDate: show.next_air_date,
                dayOfWeek: koreanDay,
            });

            return acc;
        }, {});

        // 각 요일별 데이터 정렬 및 제한
        const finalGroupedByDay = {};
        ['일', '월', '화', '수', '목', '금', '토'].forEach((day) => {
            finalGroupedByDay[day] = (groupedByDay[day] || [])
                .sort((a, b) => new Date(a.next_air_date) - new Date(b.next_air_date))
                .slice(0, 10);
        });

        return finalGroupedByDay;
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

//바이보 TOP 5 thunk
export const getTopRated = createAsyncThunk('topRated/getTopRated', async (_, { rejectWithValue }) => {
    try {
        const headers = {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
        };

        const params = {
            language: 'ko-KR',
            page: '1',
        };

        // Fetch top rated movies and TV shows in parallel
        const [movieResponse, tvResponse] = await Promise.all([
            axios.get('https://api.themoviedb.org/3/movie/top_rated', { headers, params }),
            axios.get('https://api.themoviedb.org/3/tv/top_rated', { headers, params }),
        ]);

        // Process and combine the results
        const movies = movieResponse.data.results
            .filter((movie) => movie.poster_path && movie.backdrop_path)
            .slice(0, 5)
            .map((movie) => ({
                ...movie,
                mediaType: 'movie',
            }));

        const tvShows = tvResponse.data.results
            .filter((show) => show.poster_path && show.backdrop_path)
            .slice(0, 5)
            .map((show) => ({
                ...show,
                mediaType: 'tv',
            }));

        return {
            movies,
            tvShows,
        };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

//검색 thunk
const headers = {
    accept: 'application/json',
    Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
};

export const searchMulti = createAsyncThunk('search/multi', async ({ query, page = 1 }, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/multi', {
            params: {
                query,
                language: 'ko-KR',
                page,
                include_adult: false,
            },
            headers,
        });

        // 각 결과에 mediaType 필드 추가
        const results = response.data.results.map((item) => ({
            ...item,
            mediaType: item.media_type,
        }));

        return {
            results,
            page: response.data.page,
            totalPages: response.data.total_pages,
            totalResults: response.data.total_results,
        };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// 인기 영화 top10(실시간 인기 검색어 관련) thunk
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
    },
});

export const fetchPopularContentThunk = createAsyncThunk('content/fetchPopular', async () => {
    const [moviesResponse, tvResponse] = await Promise.all([
        api.get('/trending/movie/day', {
            params: {
                language: 'ko-KR',
                region: 'KR',
            },
        }),
        api.get('/trending/tv/day', {
            params: {
                language: 'ko-KR',
                region: 'KR',
            },
        }),
    ]);

    const movies = moviesResponse.data.results.map((movie) => ({
        ...movie,
        media_type: 'movie',
        title: movie.title,
        release_date: movie.release_date,
    }));

    const tvShows = tvResponse.data.results.map((show) => ({
        ...show,
        media_type: 'tv',
        title: show.name,
        release_date: show.first_air_date,
    }));

    return [...movies, ...tvShows].sort((a, b) => b.popularity - a.popularity).slice(0, 10);
});

//장르 4개 랜덤 thunk (검색창 장르 바로가기 관련)
export const fetchGenresThunk = createAsyncThunk('genres/fetch', async () => {
    const [movieGenres, tvGenres] = await Promise.all([
        api.get('/genre/movie/list', {
            params: {
                language: 'ko-KR',
            },
        }),
        api.get('/genre/tv/list', {
            params: {
                language: 'ko-KR',
            },
        }),
    ]);

    // 모든 장르를 하나의 배열로 합치고 중복 제거
    const allGenres = [
        ...new Map([...movieGenres.data.genres, ...tvGenres.data.genres].map((item) => [item.id, item])).values(),
    ];

    // 배열을 무작위로 섞기
    const shuffledGenres = allGenres.sort(() => Math.random() - 0.5);

    // 처음 4개만 반환
    return shuffledGenres.slice(0, 4);
});

//영화 추천 thunk
const movieOptions = {
    params: {
        language: 'ko-KR',
        page: '1',
    },
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
    },
};

export const getMovieRecommendations = createAsyncThunk('movies/getMovieRecommendations', async (movieId, thunkAPI) => {
    try {
        let allResults = [];
        let page = 1;
        const seenIds = new Set(); // 이미 처리된 ID를 추적하기 위한 Set

        while (allResults.length < 24) {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations`, {
                ...movieOptions,
                params: {
                    ...movieOptions.params,
                    page: page.toString(),
                },
            });

            // 기본 필터링 + ID 중복 체크
            const filteredResults = response.data.results.filter(
                (movie) => movie.overview && movie.poster_path && movie.backdrop_path && !seenIds.has(movie.id) // 중복 ID 체크
            );

            // 각 영화의 비디오 정보 확인
            for (const movie of filteredResults) {
                try {
                    // 이미 충분한 결과를 얻었다면 중단
                    if (allResults.length >= 24) {
                        break;
                    }

                    // ID가 중복되지 않은 경우에만 처리
                    if (!seenIds.has(movie.id)) {
                        seenIds.add(movie.id); // ID를 Set에 추가

                        const videoResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, {
                            headers: movieOptions.headers,
                        });

                        const trailer = videoResponse.data.results.find(
                            (video) =>
                                video.site === 'YouTube' &&
                                video.key &&
                                (video.type === 'Trailer' || video.type === 'Teaser')
                        );

                        allResults.push({
                            ...movie,
                            videoKey: trailer ? trailer.key : null,
                        });
                    }
                } catch (error) {
                    console.error(`Error fetching videos for movie ${movie.id}:`, error.message);
                }
            }

            page++;

            // 더 이상 결과가 없거나 10페이지까지 검색했다면 종료
            if (!response.data.results.length || page > 10) {
                break;
            }
        }

        return allResults.slice(0, 24);
    } catch (error) {
        console.error('Main error:', error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

// TV 시리즈 관람등급 가져오기
export const getTVContentRating = createAsyncThunk('TVDetail/getTVContentRating', async (tvId, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/content_ratings`, {
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
            },
        });

        // 한국 관람등급 찾기
        const krRating = response.data.results.find((rating) => rating.iso_3166_1 === 'KR');

        // 한국 관람등급이 없으면 미국 관람등급 사용
        const usRating = response.data.results.find((rating) => rating.iso_3166_1 === 'US');

        return {
            rating: krRating?.rating || usRating?.rating || '정보 없음',
            iso_3166_1: krRating ? 'KR' : usRating ? 'US' : null,
        };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// 영화 관람등급 가져오기
export const getMovieContentRating = createAsyncThunk(
    'movies/getMovieContentRating',
    async (movieId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/release_dates`, {
                headers: {
                    accept: 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
                },
            });

            // 한국 관람등급 찾기
            const krRelease = response.data.results.find((release) => release.iso_3166_1 === 'KR');

            // 한국 관람등급이 없으면 미국 관람등급 사용
            const usRelease = response.data.results.find((release) => release.iso_3166_1 === 'US');

            // certification 찾기
            const krCertification = krRelease?.release_dates[0]?.certification;
            const usCertification = usRelease?.release_dates[0]?.certification;

            return {
                rating: krCertification || usCertification || '정보 없음',
                iso_3166_1: krRelease ? 'KR' : usRelease ? 'US' : null,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//tv시리즈 에피소드 데이터 가져오기

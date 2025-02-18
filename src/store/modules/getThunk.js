import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//영화 - 기본 정보 끌어오기
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

//영화 - 유튜브링크 가져오기
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

// 영화 - 리뷰 데이터 끌어오기
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

//TV시리즈 - 기본정보
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

        while (allResults.length < 24) {
            console.log(`Fetching page ${page}`);

            // TV 시리즈 기본 정보 가져오기
            const response = await axios.get('https://api.themoviedb.org/3/discover/tv', {
                ...TVoptions,
                params: {
                    ...TVoptions.params,
                    page: page.toString(),
                },
            });

            // 기본 필터링: overview, poster_path, backdrop_path가 있는 콘텐츠만
            const filteredResults = response.data.results.filter(
                (show) => show.overview && show.poster_path && show.backdrop_path
            );

            // 각 TV 시리즈의 비디오 정보 확인
            for (const show of filteredResults) {
                try {
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

                    // 24개를 채웠다면 종료
                    if (allResults.length >= 24) {
                        break;
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

        console.log(`Final results: ${allResults.length} shows`);
        return allResults.slice(0, 24);
    } catch (error) {
        console.error('Main error:', error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

//TV 시리즈 - 상세정보 가져오기
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

//Tv시리즈 - 유튜브 링크 끌어오기
export const getTVVideos = createAsyncThunk('player/getTVVideos', async (tvId = null, { rejectWithValue }) => {
    try {
        if (!tvId) {
            console.log('No tvId provided, returning default video');
            return 'MkcqlqCfYcg';
        }

        console.log('Fetching videos for TV ID:', tvId);

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

        console.log('API Response:', response.data);

        const videos = response.data.results;
        console.log('Available videos:', videos);

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

//TV시리즈 리뷰 끌어오기
const reviewTVOptions = {
    params: {
        language: 'en-US',
        page: '1',
    },
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE',
    },
};

export const getTVReviews = createAsyncThunk('reviews/getTvReviews', async (tvId, { rejectWithValue }) => {
    try {
        let allReviews = [];
        let page = 1;
        let hasMorePages = true;

        while (hasMorePages && allReviews.length < 20) {
            // 20개 채우면 중단
            const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/reviews`, {
                ...reviewTVOptions,
                params: { ...reviewTVOptions.params, page: page.toString() },
            });

            const { results, total_pages } = response.data;

            // 내용이 있고 avatar_path가 있는 리뷰만 필터링
            const validReviews = results.filter(
                (review) => review.content && review.content.trim().length > 0 && review.author_details?.avatar_path
            );

            allReviews = [...allReviews, ...validReviews];

            // 다음 페이지 확인
            hasMorePages = page < total_pages && page < 5; // 최대 n페이지까지만 확인
            page++;
        }

        // 최종적으로 20개로 제한
        return allReviews.slice(0, 20);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

//메인홈 요일별 컴포넌트
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

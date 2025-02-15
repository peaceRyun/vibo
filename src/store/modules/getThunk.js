import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//영화
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

//TVseries
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

        for (let page = 1; page <= 6; page++) {
            const koResponse = await axios.get('https://api.themoviedb.org/3/discover/tv', {
                ...TVoptions,
                params: { ...TVoptions.params, page: page.toString() },
            });

            const pageResults = koResponse.data.results.filter(
                (show) =>
                    show.backdrop_path !== null && // backdrop_path가 있는 항목만 필터링
                    show.overview && // overview가 존재하는지 확인
                    show.overview.length >= 10 // overview가 충분히 긴지 확인
            );

            allResults = [...allResults, ...pageResults];
        }

        // 결과가 24개를 초과하면 상위 24개만 반환
        return allResults.length > 24 ? allResults.slice(0, 24) : allResults;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

//Movie유튜브링크 가져오기
const videoOptions = {
    params: {
        language: 'ko-KR',
    },
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

// 영화 리뷰 데이터 끌어오기
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

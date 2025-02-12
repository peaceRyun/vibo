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

        for (let page = 1; page <= 5; page++) {
            // 먼저 한국어로 시도
            const koResponse = await axios.get('https://api.themoviedb.org/3/discover/tv', {
                ...TVoptions,
                params: { ...TVoptions.params, page: page.toString() },
            });

            // 각 항목별로 overview 확인 및 영어 데이터 가져오기
            const pageResults = await Promise.all(
                koResponse.data.results.map(async (show) => {
                    // overview가 비어있거나 너무 짧은 경우 영어 데이터 가져오기
                    if (!show.overview || show.overview.length < 10) {
                        try {
                            const enResponse = await axios.get(`https://api.themoviedb.org/3/tv/${show.id}`, {
                                ...TVoptions,
                                params: { ...TVoptions.params, language: 'en-US' },
                            });
                            return {
                                ...show,
                                overview: enResponse.data.overview,
                                name: show.name || enResponse.data.name, // 제목도 없는 경우 영어 제목 사용
                            };
                        } catch {
                            return show; // 영어 데이터 가져오기 실패시 원본 반환
                        }
                    }
                    return show;
                })
            );

            allResults = [...allResults, ...pageResults];
        }

        return allResults;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

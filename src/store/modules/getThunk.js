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
        language: 'en-US',
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
        const pages = [1, 2, 3, 4, 5]; // 100개의 데이터
        const requests = pages.map((page) =>
            axios.get('https://api.themoviedb.org/3/discover/tv', {
                ...TVoptions,
                params: { ...TVoptions.params, page: page.toString() },
            })
        );

        const responses = await Promise.all(requests);
        const allResults = responses.flatMap((response) => response.data.results);
        return allResults;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

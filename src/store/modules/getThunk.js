import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const options = {
    api_key: 'ddf6521c43c2e03f59d2767f109aaaa4',
    lenguage: 'ko-KR',
    genres: 28,
};

export const getMovie = createAsyncThunk('movie/getMovie', async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?`;
    try {
        // const res = await axios.get(url);
        const res = await axios.get(url, { params: options });
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
});

// import {  createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getxx = createAsyncThunk('xx/getxx', async () => {
//     const res = await axios.get(``);
//     return res.data;
// });

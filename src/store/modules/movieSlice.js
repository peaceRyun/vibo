import { createSlice } from '@reduxjs/toolkit';
import { getMovie, getMovieDetail } from './getThunk';

const initialState = {
    movieData: [],
    loading: true,
    error: null,
    currentData: null,
    // 영화 상세 정보 관련 상태 추가
    movieDetail: null,
    detailLoading: false,
    detailError: null,
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovie.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movieData = action.payload;
                state.loading = false;
            })
            .addCase(getMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // 영화 상세 정보 관련 리듀서 추가
            .addCase(getMovieDetail.pending, (state) => {
                state.detailLoading = true;
                state.detailError = null;
            })
            .addCase(getMovieDetail.fulfilled, (state, action) => {
                state.movieDetail = action.payload;
                state.detailLoading = false;
            })
            .addCase(getMovieDetail.rejected, (state, action) => {
                state.detailLoading = false;
                state.detailError = action.payload;
            });
    },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;

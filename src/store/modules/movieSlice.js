import { createSlice } from '@reduxjs/toolkit';
import { getMovie, getMovieDetail, getMovieRecommendations, getMovieContentRating } from './getThunk';

const initialState = {
    movieData: [],
    loading: true,
    error: null,
    currentData: null,
    // 영화 상세 정보 관련 상태 추가
    movieDetail: null,
    detailLoading: false,
    detailError: null,
    // 영화 추천 관련 상태 추가
    movieRecommendations: [],
    recommendLoading: false,
    recommendError: null,
    // 영화 관람등급 관련 상태 추가
    contentRating: null,
    ratingLoading: false,
    ratingError: null,
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // 기존 리듀서들...
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
            // 영화 상세 정보 관련 리듀서
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
            })
            // 영화 추천 관련 리듀서
            .addCase(getMovieRecommendations.pending, (state) => {
                state.recommendLoading = true;
                state.recommendError = null;
            })
            .addCase(getMovieRecommendations.fulfilled, (state, action) => {
                state.movieRecommendations = action.payload;
                state.recommendLoading = false;
            })
            .addCase(getMovieRecommendations.rejected, (state, action) => {
                state.recommendLoading = false;
                state.recommendError = action.payload;
            })
            // 영화 관람등급 관련 리듀서 추가
            .addCase(getMovieContentRating.pending, (state) => {
                state.ratingLoading = true;
                state.ratingError = null;
            })
            .addCase(getMovieContentRating.fulfilled, (state, action) => {
                state.contentRating = action.payload;
                state.ratingLoading = false;
            })
            .addCase(getMovieContentRating.rejected, (state, action) => {
                state.ratingLoading = false;
                state.ratingError = action.payload;
            });
    },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;

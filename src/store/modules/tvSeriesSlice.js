import { createSlice } from '@reduxjs/toolkit';
import {
    getTVseries,
    getTVDetail,
    getTVContentRating,
    getMovieContentRating,
    getMovieRecommendations,
} from './getThunk';

const initialState = {
    TVseriesData: [],
    TVRecommendData: [],
    contentDetail: null,
    contentRating: null,
    loading: true,
    error: null,
    currentData: null,
};

export const tvSeriesSlice = createSlice({
    name: 'tvSeries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getTVseries
            .addCase(getTVseries.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTVseries.fulfilled, (state, action) => {
                state.TVseriesData = action.payload;
                state.loading = false;
            })
            .addCase(getTVseries.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            // getTVDetail
            .addCase(getTVDetail.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTVDetail.fulfilled, (state, action) => {
                state.contentDetail = action.payload;
                state.currentData = action.payload;
                state.loading = false;
            })
            .addCase(getTVDetail.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            // getMovieRecommendations 추가
            .addCase(getMovieRecommendations.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovieRecommendations.fulfilled, (state, action) => {
                state.TVRecommendData = action.payload;
                state.loading = false;
            })
            .addCase(getMovieRecommendations.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            // getTVContentRating
            .addCase(getTVContentRating.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTVContentRating.fulfilled, (state, action) => {
                state.contentRating = action.payload;
                state.loading = false;
            })
            .addCase(getTVContentRating.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            // getMovieContentRating
            .addCase(getMovieContentRating.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovieContentRating.fulfilled, (state, action) => {
                state.contentRating = action.payload;
                state.loading = false;
            })
            .addCase(getMovieContentRating.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export default tvSeriesSlice.reducer;

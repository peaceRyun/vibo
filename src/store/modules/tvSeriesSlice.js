import { createSlice } from '@reduxjs/toolkit';
import { getTVseries, getMovieRecommendations } from './getThunk';

const initialState = {
    TVseriesData: [],
    TVRecommendData: [], // 추천 데이터를 위한 새로운 state 추가
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
            .addCase(getTVseries.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTVseries.fulfilled, (state, action) => {
                state.TVseriesData = action.payload;
                state.loading = false;
            })
            .addCase(getTVseries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // 추천 데이터를 위한 reducer 추가
            .addCase(getMovieRecommendations.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovieRecommendations.fulfilled, (state, action) => {
                state.TVRecommendData = action.payload;
                state.loading = false;
            })
            .addCase(getMovieRecommendations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const tvSeriesActions = tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;

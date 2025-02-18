// modules/topRatedSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getTopRated } from './getThunk';

const initialState = {
    movies: [],
    tvShows: [],
    loading: false,
    error: null,
};

const topRatedSlice = createSlice({
    name: 'topRated',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTopRated.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTopRated.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload.movies;
                state.tvShows = action.payload.tvShows;
            })
            .addCase(getTopRated.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
export const tvRatedActions = topRatedSlice.actions;
export default topRatedSlice.reducer;

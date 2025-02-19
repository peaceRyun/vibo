import { createSlice } from '@reduxjs/toolkit';
import { getMovie } from './getThunk';
const initialState = {
    movieData: [],
    loading: true,
    error: null,
    currentData: null,
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
            });
    },
});
export const movieActions = movieSlice.actions;
export default movieSlice.reducer;

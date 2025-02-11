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
            .addCase(getMovie.pending, (state, action) => {})
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movieData = action.payload;
            })
            .addCase(getMovie.rejected, (state, action) => {});
    },
});
export const movieActions = movieSlice.actions;
export default movieSlice.reducer;

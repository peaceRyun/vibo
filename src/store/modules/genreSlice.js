import { createSlice } from '@reduxjs/toolkit';
import { fetchGenresThunk } from './getThunk';

const genreSlice = createSlice({
    name: 'genres',
    initialState: {
        genres: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenresThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGenresThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.genres = action.payload;
            })
            .addCase(fetchGenresThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const genreActions = genreSlice.actions;
export default genreSlice.reducer;

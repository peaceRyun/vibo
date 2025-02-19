import { createSlice } from '@reduxjs/toolkit';
import { searchMulti } from './getThunk';

const initialState = {
    searchResults: [],
    currentPage: 1,
    totalPages: 0,
    totalResults: 0,
    status: 'idle',
    error: null,
    query: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        clearSearch: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchMulti.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(searchMulti.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchResults = action.payload.results;
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.totalPages;
                state.totalResults = action.payload.totalResults;
            })
            .addCase(searchMulti.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;

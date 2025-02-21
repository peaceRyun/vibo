import { createSlice } from '@reduxjs/toolkit';
import { fetchGenresThunk, fetchMainGenresThunk, getContentByGenreThunk } from './getThunk';

const genreSlice = createSlice({
    name: 'genres',
    initialState: {
        genres: [],
        mainGenres: [], // 메인 장르 내비게이션용 8개 장르
        status: 'idle',
        mainGenresStatus: 'idle',
        error: null,
        selectedGenre: null,
        contentsByGenre: {},
        contentStatus: 'idle',
        contentError: null,
    },
    reducers: {
        setSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // 기존 4개 장르 가져오기 (검색창용)
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
            })

            // 새로운 8개 장르 가져오기 (메인 내비게이션용)
            .addCase(fetchMainGenresThunk.pending, (state) => {
                state.mainGenresStatus = 'loading';
            })
            .addCase(fetchMainGenresThunk.fulfilled, (state, action) => {
                state.mainGenresStatus = 'succeeded';
                state.mainGenres = action.payload;
            })
            .addCase(fetchMainGenresThunk.rejected, (state, action) => {
                state.mainGenresStatus = 'failed';
                state.error = action.error.message;
            })

            // 장르별 콘텐츠 가져오기
            .addCase(getContentByGenreThunk.pending, (state) => {
                state.contentStatus = 'loading';
            })
            .addCase(getContentByGenreThunk.fulfilled, (state, action) => {
                state.contentStatus = 'succeeded';
                state.contentsByGenre[action.payload.genreId] = action.payload.results;
            })
            .addCase(getContentByGenreThunk.rejected, (state, action) => {
                state.contentStatus = 'failed';
                state.contentError = action.error.message;
            });
    },
});

export const genreActions = genreSlice.actions;
export default genreSlice.reducer;

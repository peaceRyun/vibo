import { createSlice } from '@reduxjs/toolkit';
import { getMovieReviews } from './reviewThunk';

const initialState = {
    reviewData: [],
    loading: false,
    error: null,
    currentMovieId: null,
};

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        clearReviews: (state) => {
            state.reviewData = [];
            state.currentMovieId = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovieReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovieReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.reviewData = action.payload;
                state.currentMovieId = action.meta.arg; // movieId 저장
            })
            .addCase(getMovieReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearReviews } = reviewSlice.actions;
export default reviewSlice.reducer;

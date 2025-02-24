import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reviews: JSON.parse(localStorage.getItem('reviews')) || [],
};

const reviewSlice = createSlice({
    name: 'reviewR',
    initialState,
    reducers: {
        addReview: (state, action) => {
            state.reviews.unshift(action.payload);
            localStorage.setItem('reviews', JSON.stringify(state.reviews));
        },
        updateReview: (state, action) => {
            const index = state.reviews.findIndex((review) => review.id === action.payload.id);
            if (index !== -1) {
                state.reviews[index] = action.payload;
                localStorage.setItem('reviews', JSON.stringify(state.reviews));
            }
        },
        deleteReview: (state, action) => {
            state.reviews = state.reviews.filter((review) => review.id !== action.payload);
            localStorage.setItem('reviews', JSON.stringify(state.reviews));
        },
    },
});

export const { addReview, updateReview, deleteReview } = reviewSlice.actions;
export default reviewSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const loadLikedContent = () => {
    const saved = localStorage.getItem('likedContent');
    return saved ? JSON.parse(saved) : [];
};

const saveLikedContent = (likedContent) => {
    localStorage.setItem('likedContent', JSON.stringify(likedContent));
};

const likeSlice = createSlice({
    name: 'likeR',
    initialState: {
        likedContent: loadLikedContent(),
    },
    reducers: {
        toggleLike: (state, action) => {
            const existingIndex = state.likedContent.findIndex((item) => item.id === action.payload.id);
            if (existingIndex !== -1) {
                state.likedContent.splice(existingIndex, 1);
            } else {
                state.likedContent.push(action.payload);
            }
            saveLikedContent(state.likedContent);
        },
    },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;

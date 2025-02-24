// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import thunkUsers from './getThunkUser'; // 기존 thunk import

const initialState = {
    currentUser: null,
    profileImage: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconV.png',
    status: 'idle',
    error: null,
    profiles: [
        {
            id: 1,
            name: '사용자1',
            image: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconV.png',
        },
        {
            id: 2,
            name: '사용자2',
            image: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconI.png',
        },
        {
            id: 3,
            name: '사용자3',
            image: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconO.png',
        },
    ],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setProfileImage: (state, action) => {
            state.profileImage = action.payload;
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        updateProfile: (state, action) => {
            const { id, ...updates } = action.payload;
            const profileIndex = state.profiles.findIndex((profile) => profile.id === id);
            if (profileIndex !== -1) {
                state.profiles[profileIndex] = { ...state.profiles[profileIndex], ...updates };
            }
        },
        resetUser: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            // 로그인
            .addCase(thunkUsers.login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(thunkUsers.login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentUser = action.payload;
            })
            .addCase(thunkUsers.login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // 로그아웃
            .addCase(thunkUsers.logout.fulfilled, (state) => {
                return initialState;
            });
    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

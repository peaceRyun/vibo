import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import thunkUsers from './getThunkUser';

export const updateUser = createAsyncThunk('memberR/updateUser', async (updatedUser, { getState }) => {
    const state = getState();
    const users = state.memberR.users.map((user) => (user.id === updatedUser.id ? { ...user, ...updatedUser } : user));

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    return updatedUser;
});

export const deleteUser = createAsyncThunk('memberR/deleteUser', async (userId, { getState }) => {
    const state = getState();
    const filteredUsers = state.memberR.users.filter((user) => user.id !== userId);

    localStorage.setItem('users', JSON.stringify(filteredUsers));
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLoggedIn', JSON.stringify(false));

    return userId;
});

const memberSlice = createSlice({
    name: 'memberR',
    initialState: {
        users: JSON.parse(localStorage.getItem('users')) || [],
        currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
        isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(thunkUsers.register.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.users.push(action.payload.user);
                }
            })
            .addCase(thunkUsers.login.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.isLoggedIn = true;
                    state.currentUser = action.payload.user;
                }
            })
            .addCase(thunkUsers.logout.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.currentUser = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                // ✅ 회원정보 수정 반영
                state.users = state.users.map((user) => (user.id === action.payload.id ? action.payload : user));
                state.currentUser = action.payload;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                // ✅ 회원탈퇴 처리
                state.users = state.users.filter((user) => user.id !== action.payload);
                state.currentUser = null;
                state.isLoggedIn = false;
            });
    },
});

export default memberSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import thunkUsers from './getThunkUser';

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
            });
    },
});

export default memberSlice.reducer;

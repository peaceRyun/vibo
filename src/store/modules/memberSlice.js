import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem('user'));
const storedLoginState = JSON.parse(localStorage.getItem('isLoggedIn'));

const initialState = {
    user: storedUser || null,
    isLoggedIn: storedLoginState || false,
};

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        register: (state, action) => {
            const { id, email, password } = action.payload;
            const newUser = { id, email, password };

            state.user = newUser;
            state.isLoggedIn = true;

            localStorage.setItem('user', JSON.stringify(newUser));
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
        },

        login: (state, action) => {
            const { email, password } = action.payload;

            if (state.user && state.user.email === email && state.user.password === password) {
                state.isLoggedIn = true;
                localStorage.setItem('isLoggedIn', JSON.stringify(true));
            } else {
                alert('로그인 실패');
            }
        },

        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;

            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedIn');
        },
    },
});

export const { register, login, logout } = memberSlice.actions;

export default memberSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';

// 회원가입 Thunk
const register = createAsyncThunk('memberR/register', async ({ id, email, password, phone }, thunkAPI) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.id === id);

    if (existingUser) {
        alert('이미 존재하는 아이디입니다.');
        return thunkAPI.rejectWithValue({ success: false, message: '아이디 중복' });
    }

    // 기본 닉네임 추가
    const newUser = { id, email, password, phone, nickname: 'User01' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('회원가입이 완료되었습니다!');
    return { success: true, user: newUser };
});

// 로그인 Thunk
const login = createAsyncThunk('memberR/login', async ({ userId, password, autoLogin }, thunkAPI) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.id === userId);

    if (!user) {
        alert('존재하지 않는 아이디입니다.');
        return thunkAPI.rejectWithValue({ success: false, message: '존재하지 않는 아이디' });
    }

    if (user.password !== password) {
        alert('비밀번호가 일치하지 않습니다.');
        return thunkAPI.rejectWithValue({ success: false, message: '비밀번호 불일치' });
    }

    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    localStorage.setItem('currentUser', JSON.stringify(user));

    if (autoLogin) {
        localStorage.setItem('autoLogin', JSON.stringify(true));
    }

    alert('로그인 성공!');
    return { success: true, user };
});

// 로그아웃 Thunk
const logout = createAsyncThunk('memberR/logout', async (_, thunkAPI) => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('autoLogin');

    alert('로그아웃 되었습니다.');
    return { success: true };
});

export default {
    register,
    login,
    logout,
};

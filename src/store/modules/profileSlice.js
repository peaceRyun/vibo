import { createSlice } from '@reduxjs/toolkit';

const imgUrl = 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public';
export const basicIcons = [
    { id: '1', name: 'profileIconV', src: `${imgUrl}/profileIconV.png` },
    { id: '2', name: 'profileIconI', src: `${imgUrl}/profileIconI.png` },
    { id: '3', name: 'profileIconB', src: `${imgUrl}/profileIconB.png` },
    { id: '4', name: 'profileIconO', src: `${imgUrl}/profileIconO.png` },
    { id: '5', name: 'sample1', src: `${imgUrl}/sample1.png` },
    { id: '6', name: 'sample2', src: `${imgUrl}/sample2.png` },
    { id: '7', name: 'sample3', src: `${imgUrl}/sample3.png` },
    { id: '8', name: 'sample4', src: `${imgUrl}/sample4.png` },
    { id: '9', name: 'sample5', src: `${imgUrl}/sample5.png` },
    { id: '10', name: 'sample6', src: `${imgUrl}/sample6.png` },
    { id: '11', name: 'sample7', src: `${imgUrl}/sample7.png` },
    { id: '12', name: 'sample8', src: `${imgUrl}/sample8.png` },
    { id: '13', name: 'sample9', src: `${imgUrl}/sample9.png` },
    { id: '14', name: 'sample10', src: `${imgUrl}/sample10.png` },
    { id: '15', name: 'sample11', src: `${imgUrl}/sample11.png` },
    { id: '16', name: 'sample12', src: `${imgUrl}/sample12.png` },
    { id: '17', name: 'sample13', src: `${imgUrl}/sample13.png` },
];

const initialState = {
    srcNow: `${imgUrl}/profileIconV.png`,
    idNow: '',
    nameNow: '',
    nickname: '바이보',
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setIconNow: (state, action) => {
            const profileNow = action.payload;
            state.srcNow = profileNow.src;
            state.idNow = profileNow.id;
            state.nameNow = profileNow.name;
        },
        add: (state, action) => {
            const recievednickname = action.payload;
            state.nickname = recievednickname;
        },
    },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;

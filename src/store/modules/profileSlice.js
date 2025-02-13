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
];

const initialState = {
    srcNow: '',
    idNow: '',
    nameNow: '',
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
    },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;

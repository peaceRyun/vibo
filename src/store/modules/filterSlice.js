// 필터링한 데이터 가져오기 redux 상태를 저장 역할

import { createSlice } from '@reduxjs/toolkit';
import { getAnimations } from './getThunkThree'; // ✅ 비동기 액션 가져오기

// ✅ 초기 상태 정의
// const initialState = {
//   data: [], // 필터링된 데이터를 저장할 배열
//   loading: false, // 로딩 상태
//   error: null, // 에러 상태
// };

const initialState = {
  animations: [],
  loading: false,
  error: null,
};

// ✅ Redux Slice 생성
export const filterSlice = createSlice({
  name: 'filterContents',
  initialState,
  reducers: {}, // 동기적인 reducer 필요 없음
  extraReducers: (builder) => {
    builder
      .addCase(getAnimations.pending, (state, action) => {
        state.loading = true; // ✅ API 요청 시작 -> 로딩 상태 변경
      })
      .addCase(getAnimations.fulfilled, (state, action) => {
        state.loading = false;
        state.animations = action.payload; // ✅ 성공하면 데이터 저장
      })
      .addCase(getAnimations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // ✅ 실패하면 에러 메시지 저장
      });
  },
});

// ✅ 리듀서 내보내기
export const filterContentsActions = filterSlice.actions;
export default filterSlice.reducer;

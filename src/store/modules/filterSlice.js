import { createSlice } from '@reduxjs/toolkit';
import { getAnimations, getDarkTheaterReleases, getDramaTvs } from './getThunkThree'; // ✅ 비동기 액션 가져오기

// ✅ 초기 상태 정의
const initialState = {
  // animations: [],
  // darkTheaterReleases: [],
  animations: { title: '', option: '', contentlist: [] },
  darkTheaterReleases: { title: '', option: '', contentlist: [] },
  dramaTvs: { title: '', option: '', contentlist: [] },
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
      // 1. 애니메이션 데이터 관리
      .addCase(getAnimations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAnimations.fulfilled, (state, action) => {
        state.loading = false;
        state.animations = action.payload;
      })
      .addCase(getAnimations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // 2. 어두운 분위기의 극장 동시 상영 콘텐츠 관리
      .addCase(getDarkTheaterReleases.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDarkTheaterReleases.fulfilled, (state, action) => {
        state.loading = false;
        state.darkTheaterReleases = action.payload;
      })
      .addCase(getDarkTheaterReleases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // 3. 지금 방영중인 드라마 콘텐츠 관리
      .addCase(getDramaTvs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDramaTvs.fulfilled, (state, action) => {
        state.loading = false;

        state.dramaTvs = action.payload;
      })
      .addCase(getDramaTvs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// ✅ 리듀서 내보내기
export default filterSlice.reducer;

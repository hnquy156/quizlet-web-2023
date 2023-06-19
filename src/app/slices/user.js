import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export const selectUserInfo = (state) => state.user.info;

export default userSlice.reducer;

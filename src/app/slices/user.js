import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: 0,
  info: {
    username: 'Quy_Hoang156',
    name: 'Quy Hoang',
    email: 'hnquy@gmail.com',
  },
  isAuth: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;

export const selectUser = (state) => state.user.info;
export const selectToken = (state) => state.user.token;
export const selectIsAuthenticated = (state) => state.user.isAuth;

export default userSlice.reducer;

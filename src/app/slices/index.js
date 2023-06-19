import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import { quizletApi } from '../api';

export const store = configureStore({
  reducer: {
    [quizletApi.reducerPath]: quizletApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizletApi.middleware),
});

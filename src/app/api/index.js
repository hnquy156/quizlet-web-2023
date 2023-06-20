import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { STATUS_CODES } from '../../utils/constant';

export { fetchStudySets } from './study-set';
export { fetchFolders } from './folder';

export const quizletApi = createApi({
  reducerPath: 'quizletApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', token);
      }

      return headers;
    },
    responseHandler: (response) => {
      if (response.status === STATUS_CODES.UNAUTHORIZED) {
        localStorage.removeItem('token');
        window.location.pathname = '/login';
      }
      return response.json();
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { username, password },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
    getUserInfo: builder.query({
      query: () => ({
        url: 'users/info',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useLazyGetUserInfoQuery, useLogoutMutation } =
  quizletApi;

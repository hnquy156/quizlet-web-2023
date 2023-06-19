import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { username, password },
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

export const { useLoginMutation, useLazyGetUserInfoQuery } = quizletApi;

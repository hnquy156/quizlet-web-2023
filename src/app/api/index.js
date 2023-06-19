import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export { fetchStudySets } from './study-set';
export { fetchFolders } from './folder';

export const quizletApi = createApi({
  reducerPath: 'quizletApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { username, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = quizletApi;

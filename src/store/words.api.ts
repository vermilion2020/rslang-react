import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../config-data';
import { IWordData } from '../models';

export const wordsApi = createApi({
  reducerPath: 'units/api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL
  }),
  endpoints: build => ({
     getWords: build.query<IWordData[], { group: number, page: number }>({
      query: (params) => ({
        url: '/words',
        params: {
          group: params.group,
          page: params.page
        }
      })
    })
  })
});

export const { useGetWordsQuery } = wordsApi;
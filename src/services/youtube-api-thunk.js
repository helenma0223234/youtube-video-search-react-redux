import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyC9MXYSrhMWA_3TZ9PRxgsJhaM23NHR1T4';

export const youtubeApi = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    searchVideos: builder.query({
      query: (term) => ({
        url: '',
        params: {
          part: 'snippet',
          key: API_KEY,
          q: term,
          type: 'video',
        },
      }),
    }),
  }),
});

// eslint-disable-next-line import/prefer-default-export
export const { useSearchVideosQuery } = youtubeApi;

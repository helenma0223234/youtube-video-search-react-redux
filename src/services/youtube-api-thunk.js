import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyC9MXYSrhMWA_3TZ9PRxgsJhaM23NHR1T4';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: builder => ({
      getPokemonByName: builder.query({
        query: (name: string) => `pokemon/${name}`
      })
    })
  })
  
  export const { useGetPokemonByNameQuery } = pokemonApi
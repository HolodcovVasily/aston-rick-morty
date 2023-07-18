import {
  createApi,
  defaultSerializeQueryArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { ICharacter, IServerResponse, IInfo } from "../../models/models";
const BASE_URL = "https://rickandmortyapi.com/api";

interface ResponseGetCharWithInfo {
  info: {
    count: number;
    pages: number;
    next: string;
    prev?: string | null;
  };
  results: ICharacter[];
}

export const rickMortyApi = createApi({
  reducerPath: "rickMorty/api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getCharacters: build.query<ResponseGetCharWithInfo, number>({
      query: (page: number) => ({
        url: "/character",
        params: {
          page: page,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      transformResponse: (response: IServerResponse<IInfo, ICharacter>) => {
        return response;
      },
    }),
    searchCharacters: build.query<ICharacter[], string>({
      query: (search: string) => ({
        url: `/character`,
        params: {
          name: search,
        },
      }),
      transformResponse: (response: IServerResponse<IInfo, ICharacter>) => {
        return response.results;
      },
    }),
    getCharachterInfo: build.query<ICharacter, number>({
      query: (id: number) => ({
        url: `/character/${id}`,
      }),
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useSearchCharactersQuery,
  useLazyGetCharachterInfoQuery,
} = rickMortyApi;

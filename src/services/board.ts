import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  AddBoardRequest,
  AddColumnRequest,
  BoardResponse,
} from "../models/board";

export const boardApi = createApi({
  reducerPath: "boardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Boards", "Board"],
  endpoints: (builder) => ({
    getBoards: builder.query<Array<BoardResponse>, void>({
      query: () => "/boards",
      providesTags: ["Boards"]
    }),
    getBoardById: builder.query<BoardResponse, number>({
      query: (id) => `/boards/${id}`,
      providesTags: ["Board"]
    }),
    createBoard: builder.mutation<BoardResponse, AddBoardRequest>({
      query: (request) => ({
        url: `/boards`,
        method: "POST",
        body: request,
      }),
      invalidatesTags: ["Boards"]
    }),
    addColumnsToBoard: builder.mutation<
      string,
      { id: number; request: AddColumnRequest }
    >({
      query: ({ id, request }) => ({
        url: `/boards/${id}`,
        method: "POST",
        body: request,
      }),
      invalidatesTags: ["Board", "Boards"]
    }),
  }),
});

export const {
  useGetBoardByIdQuery,
  useAddColumnsToBoardMutation,
  useCreateBoardMutation,
  useGetBoardsQuery,
} = boardApi;

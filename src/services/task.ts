import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  AddTaskRequest,
  TaskResponse,
  UpdateTaskRequest,
} from "../models/task";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<Array<TaskResponse>, void>({
      query: () => "/tasks",
    }),
    getTaskById: builder.query<TaskResponse, number>({
      query: (id) => `/tasks/${id}`,
    }),
    deleteTask: builder.mutation<string, number>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
    }),
    createTask: builder.mutation<string, AddTaskRequest>({
      query: (request) => ({
        url: `/tasks`,
        method: "POST",
        body: request,
      }),
    }),
    updateTask: builder.mutation<string, UpdateTaskRequest>({
      query: (request) => ({
        url: `/tasks`,
        method: "PUT",
        body: request,
      }),
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useGetTaskByIdQuery,
  useGetTasksQuery,
  useUpdateTaskMutation,
} = taskApi;

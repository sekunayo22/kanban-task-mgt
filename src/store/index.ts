import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "../services/task";
import { boardApi } from "../services/board";

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
    [boardApi.reducerPath]: boardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware, boardApi.middleware),
});

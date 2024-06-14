import { configureStore } from "@reduxjs/toolkit";
import nextPage from "./slices/nextPageSlice";
import mainPage from "./slices/mainPageSlice";

export const store = configureStore({
  reducer: {
    nextPage,
    mainPage,
  },
});

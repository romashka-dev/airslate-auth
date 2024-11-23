import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
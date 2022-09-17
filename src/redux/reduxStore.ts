import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./reducers/gallerySlice";
import { authApi } from "../services/authAPI";
import authSlice from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    gallery: gallerySlice.reducer,
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import { authApiSlice } from "./api/user/authApiSlice";
import { productApiSlice } from "./api/user/productApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      productApiSlice.middleware
    ),
});

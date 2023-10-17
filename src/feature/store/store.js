import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/loginSlice";

const store = configureStore({
  reducer: {
    login: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

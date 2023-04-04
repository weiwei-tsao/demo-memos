import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/user";

const store = configureStore({
  reducer: {
    user: userSlice
  },
});

export default store;

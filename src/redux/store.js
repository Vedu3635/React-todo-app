import { configureStore } from "@reduxjs/toolkit";
import toggleModeReducer from "../redux/toggleMode/toggleMode";

export const store = configureStore({
  reducer: {
    toggleMode: toggleModeReducer,
  },
});

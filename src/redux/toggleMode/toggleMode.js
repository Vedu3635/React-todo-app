import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "dark",
};

export const toggleModeSlice = createSlice({
  name: "toggleMode",
  initialState,
  reducers: {
    toggle: (state) => {
      if (state.value === "light") {
        state.value = "dark";
      } else {
        state.value = "light";
      }
    },
  },
});
export const { toggle } = toggleModeSlice.actions;

export default toggleModeSlice.reducer;

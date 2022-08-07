// sliceを通じて、reducerを作る
import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "texts",
  initialState: { value: "" },
  reducers: {
    addText: (state, action) => {
      state.value(action.payload);
    },
  },
});

export const { addText } = postSlice.actions;
export default postSlice.reducer;

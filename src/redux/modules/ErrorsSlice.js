import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값(state)
const initialState = [
  {
    id: 0,
    title: "",
    name: "",
    error: "",
    solution: "",
  },
];

const errorsSlice = createSlice({
  name: "errorList",
  initialState,
  reducers: {
    addMistake: (state, action) => {
      state = [...state, action.payload];
    },
  },
});

export default errorsSlice.reducer;

export const { addMistake } = errorsSlice.actions;

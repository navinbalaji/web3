import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  result: [],
};

const transactionSlice = createSlice({
  name: "transactionSlice",
  initialState,
  reducers: {
    setTransaction(state, action: PayloadAction<any>) {
      state.result = action.payload;
    },
  },
});

export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;

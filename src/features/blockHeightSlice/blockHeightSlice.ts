import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BlockHeight {
  height: number|undefined;
}

const initialState: BlockHeight = {
  height: 0,
};

const blockHeightSlice = createSlice({
  name: "blockHeightSlice",
  initialState,
  reducers: {
    setBlockHeight(state, action: PayloadAction<number | undefined>) {
      state.height = action.payload;
    },
  },
});

export const { setBlockHeight } = blockHeightSlice.actions;

export default blockHeightSlice.reducer;

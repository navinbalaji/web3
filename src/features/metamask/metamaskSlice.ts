import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type metamaskInitialState={
  address: string;
  show:boolean;
  balance:number;
}

const initialState: metamaskInitialState = {
  address: "",
  show: false,
  balance:0,
};

const metaMaskSlice = createSlice({
  name: "metaMaskSlice",
  initialState,
  reducers: {
    setWalletAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    setShownState(state, action: PayloadAction<boolean>) {
      state.show = action.payload;
    },
    setBalance(state, action: PayloadAction<number>) {
      state.balance = action.payload;
    },
  },
});

export const { setWalletAddress, setShownState, setBalance } = metaMaskSlice.actions;

export default metaMaskSlice.reducer;

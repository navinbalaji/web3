import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import blockHeightSlice from "../features/blockHeightSlice/blockHeightSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blockHeightApi } from "../lib/services/blockHeightApi";
import { signInApi } from "../lib/services/signinUrlApi";
import { transactionApi } from "../lib/services/transactionApi";
import transactionSlice from "../features/transaction/transactionSlice";
import metamaskSlice from "../features/metamask/metamaskSlice";
import googleCalenderSlice from "../features/googleCalenderSlice/googleCalenderSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blockHeightSlice: blockHeightSlice,
    transactionSlice: transactionSlice,
    metamaskSlice: metamaskSlice,
    googleCalenderSlice: googleCalenderSlice,
    [blockHeightApi.reducerPath]: blockHeightApi.reducer,
    [signInApi.reducerPath]: signInApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([transactionApi.middleware, blockHeightApi.middleware]),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

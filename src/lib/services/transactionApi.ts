import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TransactionResponse } from "../../pages/Stats/type";
import { ETH_SIGN_BASE_URL } from "../utils/constant";

const apikey = "VZHZNVCBW2ES9N7VYZT5BG1IGI2YE3W791";

export const transactionApi = createApi({
  reducerPath: "transaction",
  baseQuery: fetchBaseQuery({ baseUrl: ETH_SIGN_BASE_URL }),
  endpoints: (builder) => ({
    getTransactionByApi: builder.query<TransactionResponse, string>({
      query: (address) =>
        `api?module=logs&action=getLogs&fromBlock=12878196&toBlock=12878196&apiKey=${apikey}&address=${address}&page=1&offset=10`,
    }),
  }),
});
export const { useGetTransactionByApiQuery } = transactionApi;
// ;
// 0xabd6e9dd3b56f0150ad2201c4029c69d5d175c74;

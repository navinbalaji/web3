import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlockHeightResponse } from "../../pages/Stats/type";
import { ETH_BLOCK_HEIGHT_BASE_URL } from "../utils/constant";

export const blockHeightApi = createApi({
  reducerPath: "blockHeight",
  baseQuery: fetchBaseQuery({ baseUrl: ETH_BLOCK_HEIGHT_BASE_URL }),
  endpoints: (builder) => ({
    getBlockHeightByApi: builder.query<BlockHeightResponse, string>({
      query: (key) => `11297108109/block_v2/latest/?key=${key}`,
    }),
  }),
});
export const { useGetBlockHeightByApiQuery } = blockHeightApi;
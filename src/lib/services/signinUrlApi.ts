import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Signin } from "../../pages/Stats/type";
import { SIGNIN_BASE_URL } from "../utils/constant";

export const signInApi = createApi({
  reducerPath: "signup",
  baseQuery: fetchBaseQuery({ baseUrl: SIGNIN_BASE_URL }),
  endpoints: (builder) => ({
    addSignUp: builder.mutation({
      query: (data: Signin) => ({
        url: "api/member/signup",
        method: "POST",
        // Include the entire post object as the body of the request
        body: data,
      }),
    }),
  }),
});
export const { useAddSignUpMutation } = signInApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../types/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://185.46.11.164:5000/api/auth/",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "e1e0407773cc4975a4f0cd365d3d469f31cdd8a245570dc5c2c8ea3984fcdac720cd5fbe753816e10a1b4ef81487d839"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { user: IUser; token: string },
      {
        email: string;
        password: string;
      }
    >({
      query: ({ email, password }) => ({
        url: `login`,
        method: "POST",
        body: { email, password },
      }),
    }),
    register: builder.mutation<
      IUser,
      {
        email: string;
        password: string;
        fullName: string;
      }
    >({
      query: ({ email, password, fullName }) => ({
        url: `register`,
        method: "POST",
        body: { email, password, fullName },
      }),
    }),
    auth: builder.query<IUser, unknown>({
      query: () => ({
        url: `me`,
      }),
    }),
  }),
});

export const { useAuthQuery, useLoginMutation, useRegisterMutation } = authApi;

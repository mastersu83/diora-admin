import { ImagesTypes, ImageTypes } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getImages = createAsyncThunk(
  "gallery/getImages",
  async (key: string | undefined) => {
    const resp = await axios.get<ImagesTypes[]>(
      `https://62b307d420cad3685c99a01c.mockapi.io/diorakids/${key}`
    );
    return resp.data;
  }
);
export const getSliderImages = createAsyncThunk(
  "gallery/getSliderImages",
  async () => {
    const resp = await axios.get<ImagesTypes[]>(
      `https://62b307d420cad3685c99a01c.mockapi.io/diorakids/slider`
    );
    return resp.data;
  }
);

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        localStorage.getItem("token")
          ? String(localStorage.getItem("token"))
          : ""
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    upload: builder.mutation<ImageTypes, FormData>({
      query: (formData) => ({
        url: `upload`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUploadMutation } = galleryApi;

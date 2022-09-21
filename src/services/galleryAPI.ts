import { ImageTypes, ResponseImageTypes } from "../types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

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
    getAllImage: builder.query<ResponseImageTypes[], {}>({
      query: () => ({
        url: `images`,
      }),
    }),
    upload: builder.mutation<{ imageUrl: string }, FormData>({
      query: (formData) => ({
        url: `upload`,
        method: "POST",
        body: formData,
      }),
    }),
    removeFile: builder.mutation<{}, string>({
      query: (imageUrl) => ({
        url: `upload`,
        method: "DELETE",
        body: { imageUrl },
      }),
    }),
    createImage: builder.mutation<ImageTypes[], ImageTypes>({
      query: (image) => ({
        url: `images`,
        method: "POST",
        body: image,
      }),
    }),
  }),
});

export const {
  useUploadMutation,
  useCreateImageMutation,
  useRemoveFileMutation,
  useGetAllImageQuery,
} = galleryApi;

import { ImageTypes, ResponseImageTypes } from "../types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  tagTypes: ["Images"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apidiorakids.ru/api/",
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
      providesTags: ["Images"],
    }),
    upload: builder.mutation<{ imageUrl: string }, FormData>({
      query: (formData) => ({
        url: `upload`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "Images" }],
    }),
    removeFile: builder.mutation<{}, string>({
      query: (imageUrl) => ({
        url: `upload`,
        method: "DELETE",
        body: { imageUrl },
      }),
      invalidatesTags: [{ type: "Images" }],
    }),
    createImage: builder.mutation<ImageTypes[], ImageTypes>({
      query: (image) => ({
        url: `images`,
        method: "POST",
        body: image,
      }),
      invalidatesTags: [{ type: "Images" }],
    }),
  }),
});

export const {
  useUploadMutation,
  useCreateImageMutation,
  useRemoveFileMutation,
  useGetAllImageQuery,
} = galleryApi;

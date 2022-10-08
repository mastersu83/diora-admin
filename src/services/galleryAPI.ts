import { ImageTypes, ResponseImageTypes } from "../types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  tagTypes: ["Images"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://185.46.11.164:5000/api/",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "e1e0407773cc4975a4f0cd365d3d469f31cdd8a245570dc5c2c8ea3984fcdac720cd5fbe753816e10a1b4ef81487d839"
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

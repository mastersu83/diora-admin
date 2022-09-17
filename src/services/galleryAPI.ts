import { ImagesTypes } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

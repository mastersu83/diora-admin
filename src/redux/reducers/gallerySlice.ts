import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseImageTypes } from "../../types/types";

type InitialStateType = {
  allImages: ResponseImageTypes[];
  vertical: ResponseImageTypes[];
  horizontal: ResponseImageTypes[];
  title: string;
  sliderImages: ResponseImageTypes[];
  typeOfClothing: string;
};

const initialState: InitialStateType = {
  allImages: [],
  vertical: [],
  horizontal: [],
  title: "",
  sliderImages: [],
  typeOfClothing: "",
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setTitle(state: InitialStateType, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setTypeOfClothing(state: InitialStateType, action: PayloadAction<string>) {
      state.typeOfClothing = action.payload;
    },
    setAllImages(
      state: InitialStateType,
      action: PayloadAction<ResponseImageTypes[]>
    ) {
      state.allImages = action.payload;
    },
    setImages(
      state: InitialStateType,
      action: PayloadAction<ResponseImageTypes[]>
    ) {
      state.horizontal = [];
      state.vertical = [];
      state.sliderImages = [];
      state.vertical = action.payload.filter(
        (i) => i.type === 0 && i.typeOfClothing === state.typeOfClothing
      );
      state.horizontal = action.payload.filter(
        (i) => i.type === 1 && i.typeOfClothing === state.typeOfClothing
      );
      state.sliderImages = action.payload.filter(
        (i) => i.type === 1 && i.typeOfClothing === state.typeOfClothing
      );
    },
  },
});

export const { setTitle, setImages, setTypeOfClothing, setAllImages } =
  gallerySlice.actions;

export default gallerySlice;

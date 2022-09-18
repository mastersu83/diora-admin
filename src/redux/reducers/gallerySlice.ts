import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageTypes } from "../../types/types";
import { getImages, getSliderImages } from "../../services/galleryAPI";

type InitialStateType = {
  vertical: ImageTypes[];
  horizontal: ImageTypes[];
  imagesIsSuccess: boolean;
  title: string;
  sliderImages: ImageTypes[];
  sliderImagesIsSuccess: boolean;
  previewImage: string;
};

const initialState: InitialStateType = {
  vertical: [],
  horizontal: [],
  imagesIsSuccess: false,
  title: "",
  sliderImages: [],
  sliderImagesIsSuccess: false,
  previewImage: "",
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setTitle(state: InitialStateType, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setPreviewImage(
      state: InitialStateType,
      action: PayloadAction<ImageTypes>
    ) {
      state.previewImage = action.payload.url;
    },
  },
  extraReducers: {
    [getImages.pending.type]: (state: InitialStateType) => {
      state.imagesIsSuccess = false;
    },
    [getImages.fulfilled.type]: (
      state: InitialStateType,
      action: PayloadAction<ImageTypes[]>
    ) => {
      state.vertical = [];
      state.horizontal = [];
      action.payload.map((i) =>
        i.type === 0 ? state.vertical.push(i) : state.horizontal.push(i)
      );
      state.imagesIsSuccess = true;
    },
    [getSliderImages.pending.type]: (state: InitialStateType) => {
      state.sliderImagesIsSuccess = false;
    },
    [getSliderImages.fulfilled.type]: (
      state: InitialStateType,
      action: PayloadAction<ImageTypes[]>
    ) => {
      state.sliderImages = action.payload;
      state.sliderImagesIsSuccess = true;
    },
  },
});

export const { setTitle, setPreviewImage } = gallerySlice.actions;

export default gallerySlice;

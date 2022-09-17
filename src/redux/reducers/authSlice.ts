import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";

type InitialStateType = {
  user: IUser;
  isAuth: boolean;
};

const initialState: InitialStateType = {
  user: {} as IUser,
  isAuth: false,
};

const authSlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setUser(state: InitialStateType, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice;

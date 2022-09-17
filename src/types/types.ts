export type ImageTypes = {
  id: number;
  type: number;
  url: string;
};
export type ImagesTypes = {
  vertical: ImageTypes[];
  horizontal: ImageTypes[];
  title: string;
};

export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  __v: number;
  token?: string;
}

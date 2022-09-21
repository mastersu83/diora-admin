export type ImageTypes = {
  type: string;
  typeOfClothing: string;
  imageUrl: string;
};
export type ResponseImageTypes = {
  _id: string;
  type: string;
  typeOfClothing: string;
  imageUrl: string;
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

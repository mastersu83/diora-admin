import React, { FC } from "react";
import classes from "./Form.module.scss";

interface ButtonPropsTypes {
  text: string;
}

export const Button: FC<ButtonPropsTypes> = ({ text }) => {
  return <button className={classes.form__button}>{text}</button>;
};

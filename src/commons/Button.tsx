import React, { FC } from "react";
import classes from "./Form.module.scss";

interface ButtonPropsTypes {
  text: string;
  onClick?: () => void;
  logOut?: boolean;
}

export const Button: FC<ButtonPropsTypes> = ({ text, onClick, logOut }) => {
  return (
    <>
      {!logOut ? (
        <button className={classes.form__button}>{text}</button>
      ) : (
        <button onClick={onClick} className={classes.form__button}>
          {text}
        </button>
      )}
    </>
  );
};

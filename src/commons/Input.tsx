import React, { ChangeEvent, FC } from "react";
import classes from "./Form.module.scss";

interface InputPropsTypes {
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  textarea?: boolean;
  file?: boolean;
}

export const Input: FC<InputPropsTypes> = ({
  type,
  value,
  name,
  placeholder,
  onChange,
  textarea,
  file,
}) => {
  return (
    <>
      {!textarea ? (
        <input
          className={`${!file ? classes.form__input : classes.form__inputFile}`}
          onChange={(e) => onChange(e)}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          required
        />
      ) : (
        <textarea
          className={classes.form__textarea}
          onChange={(e) => onChange(e)}
          name={name}
          placeholder={placeholder}
          value={value}
          required
        />
      )}
    </>
  );
};

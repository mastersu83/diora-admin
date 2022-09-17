import React, { ChangeEvent, FormEvent, useState } from "react";
import classes from "./Form.module.scss";
import { Input } from "./Input";
import { Button } from "./Button";
import { useAppDispatch } from "../hooks/appHooks";
import { useNavigate } from "react-router-dom";

export const AdminPanelForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    type: "",
    imageUrl: "",
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInputs({ type: "", imageUrl: "" });
  };

  return (
    <form
      onSubmit={sendEmail}
      className={`${classes.form__adminLogin} ${classes.addImageForm}`}
    >
      <select name="" id=""></select>
      <Input
        onChange={onChange}
        name="type"
        type="textarea"
        placeholder="Тип файла"
        value={inputs.type}
      />
      <Input
        onChange={onChange}
        file
        name="file"
        type="file"
        placeholder="Ваш Пароль"
        value={inputs.imageUrl}
      />
      <Button text="Отправить" />
    </form>
  );
};

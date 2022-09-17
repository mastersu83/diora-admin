import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import classes from "./Form.module.scss";
import { Input } from "./Input";
import { Button } from "./Button";
import { useLoginMutation } from "../services/authAPI";
import { useAppDispatch } from "../hooks/appHooks";
import { setUser } from "../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";

export const AdminForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [login, { data, isSuccess }] = useLoginMutation();

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      email: inputs.email,
      password: inputs.password,
    });
    setInputs({ email: "", password: "" });
  };

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.user));
      localStorage.setItem("token", data.token);
    }
    isSuccess ? navigate("/admin-panel") : navigate("");
  }, [data]);

  return (
    <form onSubmit={sendEmail} className={classes.form__adminLogin}>
      <Input
        onChange={onChange}
        name="email"
        type="email"
        placeholder="Ваш Email"
        value={inputs.email}
      />
      <Input
        onChange={onChange}
        name="password"
        type="password"
        placeholder="Ваш Пароль"
        value={inputs.password}
      />
      <Button text="Войти" />
    </form>
  );
};

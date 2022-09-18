import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import classes from "./Form.module.scss";
import { Input } from "./Input";
import { Button } from "./Button";
import { useUploadMutation } from "../services/galleryAPI";

export const AdminPanelForm = () => {
  const [inputType, setInputType] = useState("0");
  const [inputFile, setInputFile] = useState("");

  const [upload, { data }] = useUploadMutation();

  console.log(data);

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputType(e.target.value);
  };
  const onChangeFile = async (e: any) => {
    setInputFile(e.target.value);
    try {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      upload(formData);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при загрузке файла");
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setInputs({ type: "0", imageUrl: "" });
    localStorage.removeItem("previewImage");
  };

  useEffect(() => {
    !localStorage.getItem("previewImage") &&
      localStorage.setItem("previewImage", data ? data?.url : "");
  }, [data]);

  return (
    <form
      onSubmit={sendEmail}
      className={`${classes.form__adminLogin} ${classes.addImageForm}`}
    >
      <select
        className={classes.form__input}
        name="type"
        onChange={onChangeType}
      >
        <option value="0">0</option>
        <option value="1">1</option>
      </select>
      <Input
        onChange={onChangeFile}
        file
        name="file"
        type="file"
        placeholder="Ваш Пароль"
      />
      <div className={classes.previewImage}>
        <img
          src={`http://localhost:5000/uploads${inputFile.split("")}`}
          alt=""
        />
      </div>

      <Button text="Отправить" />
    </form>
  );
};

import React, { ChangeEvent, FormEvent, useState } from "react";
import classes from "./Form.module.scss";
import { Input } from "./Input";
import { Button } from "./Button";
import {
  useCreateImageMutation,
  useRemoveFileMutation,
  useUploadMutation,
} from "../services/galleryAPI";

export const AdminPanelForm = () => {
  const [inputs, setInputs] = useState({
    type: "0",
    typeOfClothing: "Boy",
  });

  const [upload, { data, reset }] = useUploadMutation();
  const [createImage] = useCreateImageMutation();
  const [removeFile] = useRemoveFileMutation();

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const onChangeFile = async (e: any) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    await upload(formData);
  };

  const addImage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      createImage({
        type: inputs.type,
        typeOfClothing: inputs.typeOfClothing,
        imageUrl: data ? data.imageUrl : "",
      });
    } catch (err) {
      console.warn(err);
      alert("Ошибка при загрузке файла");
    }
    // setInputs({ type: "0", typeOfClothing: "Boy" });
    reset();
  };

  const removeImg = () => {
    removeFile(data ? data?.imageUrl : "");
    reset();
  };

  return (
    <form
      onSubmit={addImage}
      className={`${classes.form__adminLogin} ${classes.addImageForm}`}
    >
      <select
        className={classes.form__input}
        name="type"
        onChange={onChangeType}
      >
        <option value="0">Вертикальный</option>
        <option value="1">Горизонтаьлный</option>
      </select>
      <select
        className={classes.form__input}
        name="typeOfClothing"
        onChange={onChangeType}
      >
        <option value="Boy">Мальчик</option>
        <option value="Girl">Девочка</option>
        <option value="Others">Конверты, Пледы, Корзины</option>
        <option value="Slider">Слайдер</option>
      </select>
      <div className={classes.inputFileBox}>
        <Input
          onChange={onChangeFile}
          file
          name="file"
          type="file"
          placeholder="Ваш Пароль"
        />
        {data && (
          <button onClick={removeImg} className={classes.form__button}>
            Удалить
          </button>
        )}
      </div>

      <div className={classes.previewImage}>
        <img src={`http://localhost:5000/${data?.imageUrl}`} alt="" />
      </div>

      <Button text="Отправить" />
    </form>
  );
};

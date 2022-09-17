import React, { ChangeEvent, FormEvent, useState } from "react";
import classes from "./Form.module.scss";
import { send } from "emailjs-com";
import { Input } from "./Input";
import { Button } from "./Button";

export const ContactsForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    send("service_9lgjhxd", "template_8ungnpb", inputs, "eQGLG0AZVrB7OFMsY")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setInputs({ name: "", email: "", message: "", subject: "" });
  }
  return (
    <form onSubmit={sendEmail} className={classes.form__contacts}>
      <Input
        onChange={onChange}
        name="name"
        type="text"
        placeholder="Ваше имя"
        value={inputs.name}
      />
      <Input
        onChange={onChange}
        name="email"
        type="email"
        placeholder="Ваш Email"
        value={inputs.email}
      />
      <Input
        onChange={onChange}
        name="subject"
        type="text"
        placeholder="Тема сообщения"
        value={inputs.subject}
      />
      <Input
        onChange={onChange}
        name="message"
        type="text"
        placeholder="Сообщение"
        value={inputs.message}
        textarea
      />
      <Button text="Отправить" />
    </form>
  );
};

import React from "react";
import classes from "./AdminLogin.module.scss";
import { AdminForm } from "../../commons/AdminForm";

export const AdminLogin = () => {
  return (
    <div className={classes.admin}>
      <p className={classes.admin__title}>Войти в панель администратора</p>
      <AdminForm />
    </div>
  );
};

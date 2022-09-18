import React from "react";
import classes from "./AdminPanel.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { AdminPanelForm } from "../../commons/AdminPanelForm";
import { Navigate } from "react-router-dom";
import { Button } from "../../commons/Button";
import { logOut } from "../../redux/reducers/authSlice";

export const AdminPanel = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  const onLogOut = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
  };

  return (
    <div className={classes.root}>
      <div className={classes.logOut__btn}>
        <Button text="Выйти" logOut onClick={onLogOut} />
      </div>
      {localStorage.getItem("token") || isAuth ? (
        <AdminPanelForm />
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

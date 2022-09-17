import React from "react";
import classes from "./AdminPanel.module.scss";
import { useAppSelector } from "../../hooks/appHooks";
import { AdminPanelForm } from "../../commons/AdminPanelForm";
import { Navigate, useNavigate } from "react-router-dom";

export const AdminPanel = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  return (
    <div className={classes.root}>
      {localStorage.getItem("token") || isAuth ? (
        <AdminPanelForm />
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

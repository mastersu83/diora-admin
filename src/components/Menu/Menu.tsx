import React from "react";
import classes from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/appHooks";

const Menu = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  return (
    <ul className={classes.menu}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.menu__activeLink : "")}
      >
        <li className={`${classes.menu__link} `}>ГЛАВНАЯ</li>
      </NavLink>
      <NavLink
        to="clothes"
        className={({ isActive }) => (isActive ? classes.menu__activeLink : "")}
      >
        <li className={classes.menu__link}>НАРЯДНАЯ ОДЕЖДА</li>
      </NavLink>
      <NavLink
        to="others-cloth"
        className={({ isActive }) => (isActive ? classes.menu__activeLink : "")}
      >
        <li className={classes.menu__link}>КОНВЕРТЫ, ПЛЕДЫ, КОРЗИНЫ</li>
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) => (isActive ? classes.menu__activeLink : "")}
      >
        <li className={classes.menu__link}>КОНТАКТЫ</li>
      </NavLink>
      {!isAuth ? (
        <NavLink
          to="login"
          className={({ isActive }) =>
            isActive ? classes.menu__activeLink : ""
          }
        >
          <li className={classes.menu__link}>ВОЙТИ</li>
        </NavLink>
      ) : (
        <NavLink
          to="admin-panel"
          className={({ isActive }) =>
            isActive ? classes.menu__activeLink : ""
          }
        >
          <li className={classes.menu__link}>АДМИН ПАНЕЛЬ</li>
        </NavLink>
      )}
    </ul>
  );
};

export default Menu;

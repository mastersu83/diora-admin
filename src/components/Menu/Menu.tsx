import React from "react";
import classes from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appHooks";
import { getImages } from "../../services/galleryAPI";
import { getPathName } from "../../utils/utils";
import { setTitle } from "../../redux/reducers/gallerySlice";

const Menu = () => {
  const dispatch = useAppDispatch();

  const getOthersImages = (key: string | undefined) => {
    let { path, title } = getPathName(key);
    dispatch(getImages(path));
    dispatch(setTitle(title));
  };
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
        onClick={() => getOthersImages("/others-cloth")}
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
      <NavLink
        to="login"
        className={({ isActive }) => (isActive ? classes.menu__activeLink : "")}
      >
        <li className={classes.menu__link}>ВОЙТИ</li>
      </NavLink>
    </ul>
  );
};

export default Menu;

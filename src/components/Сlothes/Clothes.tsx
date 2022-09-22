import React from "react";
import classes from "./Clothes.module.scss";
import { Link } from "react-router-dom";
import boyImage from "../../assets/IMG_6391.jpg";
import girlImage from "../../assets/IMG_6607.JPG.jpg";

const Clothes = () => {
  return (
    <div className={classes.clothes}>
      <p className={classes.clothes__title}>
        Нарядная одежда для новорожденных
      </p>
      <div className={classes.clothes__items}>
        <div className={classes.clothes__item}>
          <img className={classes.clothes__img} src={girlImage} alt="" />
          <Link to="/girl-cloth">
            <button
              className={`${classes.clothes__girlImgBtn} ${classes.clothes__btn}`}
            >
              Для девочек
            </button>
          </Link>
        </div>
        <div className={classes.clothes__item}>
          <img className={classes.clothes__img} src={boyImage} alt="" />
          <Link to="/boy-cloth">
            <button
              className={`${classes.clothes__boyImgBtn} ${classes.clothes__btn}`}
            >
              Для мальчиков
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Clothes;

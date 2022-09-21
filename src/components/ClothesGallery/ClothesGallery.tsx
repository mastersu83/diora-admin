import React from "react";
import classes from "./ClothesGallery.module.scss";
import { ResponseImageTypes } from "../../types/types";
import { useAppSelector } from "../../hooks/appHooks";
import HorizontalLoader from "../Loader/HorizontalLoader";
import VerticalLoader from "../Loader/VerticalLoader";

const ClothesGallery = () => {
  const { vertical, horizontal, title } = useAppSelector(
    (state) => state.gallery
  );

  return (
    <div className={classes.clothesGirl}>
      <p className={classes.clothesGirl__title}>{title}</p>
      <div className={classes.clothesGirl__items}>
        <div className={classes.clothesGirl__verticalItems}>
          {vertical.length
            ? vertical.map((i: ResponseImageTypes) => (
                <img
                  className={classes.clothesGirl__item}
                  key={i._id}
                  src={`http://localhost:5000/${i.imageUrl}`}
                  alt=""
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <VerticalLoader key={index} />)}
        </div>
        <div className={classes.clothesGirl__horizontalItems}>
          {horizontal.length
            ? horizontal.map((i: ResponseImageTypes) => (
                <img
                  className={classes.clothesGirl__item}
                  key={i._id}
                  src={`http://localhost:5000/${i.imageUrl}`}
                  alt=""
                />
              ))
            : Array(3)
                .fill(0)
                .map((_, index) => <HorizontalLoader key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default ClothesGallery;

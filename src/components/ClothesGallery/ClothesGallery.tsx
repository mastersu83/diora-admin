import React, { useEffect } from "react";
import classes from "./ClothesGallery.module.scss";
import { ImageTypes } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import HorizontalLoader from "../Loader/HorizontalLoader";
import VerticalLoader from "../Loader/VerticalLoader";
import { getImages } from "../../services/galleryAPI";
import { setTitle } from "../../redux/reducers/gallerySlice";
import { useLocation } from "react-router-dom";
import { getPathName } from "../../utils/utils";

const ClothesGallery = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const { vertical, horizontal, imagesIsSuccess, title } = useAppSelector(
    (state) => state.gallery
  );

  useEffect(() => {
    const { path, title } = getPathName(pathname);
    dispatch(getImages(path));
    dispatch(setTitle(title));
  }, []);

  return (
    <div className={classes.clothesGirl}>
      <p className={classes.clothesGirl__title}>{title}</p>
      <div className={classes.clothesGirl__items}>
        <div className={classes.clothesGirl__verticalItems}>
          {imagesIsSuccess
            ? vertical.map((i: ImageTypes) => (
                <img
                  className={classes.clothesGirl__item}
                  key={i.id}
                  src={i.url}
                  alt=""
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <VerticalLoader key={index} />)}
        </div>
        <div className={classes.clothesGirl__horizontalItems}>
          {imagesIsSuccess
            ? horizontal.map((i: ImageTypes) => (
                <img
                  className={classes.clothesGirl__item}
                  key={i.id}
                  src={i.url}
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

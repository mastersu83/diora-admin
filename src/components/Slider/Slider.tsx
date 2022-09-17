import React from "react";
import classes from "./Slider.module.scss";
import SimpleImageSlider from "react-simple-image-slider";
import image from "../../assets/IndigoDesigns_BabyBoy_cl+(5)1.png";
import { getSliderImages } from "../../services/galleryAPI";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";

const Slider = () => {
  const dispatch = useAppDispatch();
  const { sliderImages, sliderImagesIsSuccess } = useAppSelector(
    (state) => state.gallery
  );

  React.useEffect(() => {
    dispatch(getSliderImages());
  }, []);

  return (
    <div className={classes.slider}>
      {sliderImages.length && sliderImagesIsSuccess ? (
        <SimpleImageSlider
          width={1200}
          height={750}
          images={sliderImages}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={1}
          slideDuration={2}
        />
      ) : (
        "Идет загрузка..."
      )}

      <img className={classes.slider__image} src={image} alt="BabyBoy" />
    </div>
  );
};

export default Slider;

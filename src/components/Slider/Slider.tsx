import React from "react";
import classes from "./Slider.module.scss";
import SimpleImageSlider from "react-simple-image-slider";
import image from "../../assets/IndigoDesigns_BabyBoy_cl+(5)1.png";
import { useAppSelector } from "../../hooks/appHooks";
import SliderLoader from "../Loader/SliderLoader";

const Slider = () => {
  const { sliderImages } = useAppSelector((state) => state.gallery);

  const sliderUrl = sliderImages.map(
    (i) => "http://localhost:5000/" + i.imageUrl
  );

  return (
    <div className={classes.slider}>
      {sliderImages.length ? (
        <SimpleImageSlider
          width={1200}
          height={750}
          images={sliderUrl}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={1}
          slideDuration={2}
        />
      ) : (
        <SliderLoader />
      )}

      <img className={classes.slider__image} src={image} alt="BabyBoy" />
    </div>
  );
};

export default Slider;

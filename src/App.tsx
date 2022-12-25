import React, { useEffect } from "react";
import classes from "./App.module.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Slider from "./components/Slider/Slider";
import ClothesGallery from "./components/ClothesGallery/ClothesGallery";
import Clothes from "./components/Сlothes/Clothes";
import BG from "./assets/IndigoDesigns_BabyGirl_pp+(7)1.jpg";
import Contacts from "./components/Contacts/Contacts";
import { useAppDispatch } from "./hooks/appHooks";
import {
  setImages,
  setTitle,
  setTypeOfClothing,
} from "./redux/reducers/gallerySlice";
import { getPathName } from "./utils/utils";
import { images } from "./constants/images";
import { useGetAllImageQuery } from "./services/galleryAPI";

const App = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  // const { isAuth } = useAppSelector((state) => state.auth);

  // const { data } = useAuthQuery({});
  const { data } = useGetAllImageQuery({});

  useEffect(() => {
    let { title, typeOfClothing } = getPathName(
      pathname === "/" ? "slider" : pathname
    );
    dispatch(setTitle(title));
    dispatch(setTypeOfClothing(typeOfClothing));
    dispatch(setImages(images));
  }, [pathname]);

  useEffect(() => {
    dispatch(setImages(images));
  }, []);

  return (
    <>
      <img className={classes.bg} src={BG} alt="" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Slider />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="girl-cloth" element={<ClothesGallery />} />
          <Route path="boy-cloth" element={<ClothesGallery />} />
          <Route path="others-cloth" element={<ClothesGallery />} />
          <Route path="contact" element={<Contacts />} />
          {/*<Route path="login" element={<AdminLogin />} />*/}
          {/*<Route path="admin-panel" element={<AdminPanel />} />*/}
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

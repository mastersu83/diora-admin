import React from "react";
import classes from "./Clothes.module.scss";
import { Link } from "react-router-dom";

const Clothes = () => {
  return (
    <div className={classes.clothes}>
      <p className={classes.clothes__title}>
        Нарядная одежда для новорожденных
      </p>
      <div className={classes.clothes__items}>
        <div className={classes.clothes__item}>
          <img
            className={classes.clothes__img}
            src="https://1.downloader.disk.yandex.ru/preview/660d6b9c7110b4efed7ee97e7ca34e6dbd9398d73ade9796bb281d29e996f92b/inf/AFSh7R_BRMpYOiyhex9F7v8fz-DRYr7U76cdl1W7ygclkjd_fM8lTk79AloIEygzoFQxX1lKtbq1kX38DxKoNA%3D%3D?uid=103259103&filename=IMG_6346.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=103259103&tknv=v2&size=2560x1440"
            alt=""
          />
          <Link to="/girl-cloth">
            <button
              className={`${classes.clothes__girlImgBtn} ${classes.clothes__btn}`}
            >
              Для девочек
            </button>
          </Link>
        </div>
        <div className={classes.clothes__item}>
          <img
            className={classes.clothes__img}
            src="https://2.downloader.disk.yandex.ru/preview/ca2b2791822060ca32ca0b72a52b1d29d1d47838e8d4d8c9bbbeee3d8341fa60/inf/9uO8xGmQEsDe_dn03MvPB_8fz-DRYr7U76cdl1W7ygfQ1N-ZKd_D-2T0an3jhG_yMlsxowMoQddXCFsNzOrXFg%3D%3D?uid=103259103&filename=IMG_6391.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=103259103&tknv=v2&size=2560x1440"
            alt=""
          />
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

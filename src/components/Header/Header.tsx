import React from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/logo.png";
import headerImg from "../../assets/IndigoDesigns_BabyGirl_cl+(5)1.png";
import groupImg from "../../assets/Group1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <Link to="/">
          <img className={classes.header__logo} src={logo} alt="logo" />
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span style={{ fontSize: "19px", color: "#7d4526" }}>
          Это сайт <b>diorakids.com</b>. <br />
          <br /> Мы переехали на <b>diorakids.ru</b>
        </span>
      </div>
      <div>
        <img className={classes.header__img} src={headerImg} alt="headerImg" />
        <p>8(928)22-00-633</p>
        <p>E:mail diorakids@mail.ru</p>
      </div>
      <img className={classes.header__groupImg} src={groupImg} alt="groupImg" />
    </div>
  );
};

export default Header;
